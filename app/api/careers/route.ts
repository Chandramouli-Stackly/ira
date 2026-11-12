import { NextRequest, NextResponse } from "next/server";
import {
  dispatchJobApplicationEmails,
  JobApplicationData,
} from "@/lib/email/dispatcher";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4 MB (fits within serverless & Resend limits)

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now - record.lastReset > windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many application attempts. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    let fields: Record<string, string> = {};
    let consent = false;
    let resumeFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const getStr = (key: string) => {
        const val = formData.get(key);
        return typeof val === "string" ? val.trim() : "";
      };

      fields = {
        fullName: getStr("fullName"),
        email: getStr("email"),
        phone: getStr("phone"),
        location: getStr("location"),
        roleTitle: getStr("roleTitle"),
        department: getStr("department"),
        experience: getStr("experience"),
        availability: getStr("availability"),
        portfolioUrl: getStr("portfolioUrl"),
        resumeUrl: getStr("resumeUrl"),
        coverNote: getStr("coverNote"),
        honeypot: getStr("honeypot") || getStr("website_url_hp"),
      };
      consent = getStr("consent") === "true";

      const uploaded = formData.get("resumeFile");
      if (uploaded instanceof File && uploaded.size > 0) {
        resumeFile = uploaded;
      }
    } else {
      const body = await request.json();
      fields = {
        fullName: String(body.fullName || "").trim(),
        email: String(body.email || "").trim(),
        phone: String(body.phone || "").trim(),
        location: String(body.location || "").trim(),
        roleTitle: String(body.roleTitle || "").trim(),
        department: String(body.department || "").trim(),
        experience: String(body.experience || "").trim(),
        availability: String(body.availability || "").trim(),
        portfolioUrl: String(body.portfolioUrl || "").trim(),
        resumeUrl: String(body.resumeUrl || "").trim(),
        coverNote: String(body.coverNote || "").trim(),
        honeypot: String(body.honeypot || body.website_url_hp || "").trim(),
      };
      consent = Boolean(body.consent);
    }

    // Honeypot bot guard
    if (fields.honeypot) {
      console.warn("[Careers Spam Protection] Honeypot triggered from IP:", ip);
      return NextResponse.json({
        success: true,
        message:
          "Thank you for applying at IraSoft Technologies! Your job application has been received.",
      });
    }

    // Validate fields
    const errors: Record<string, string> = {};

    if (!fields.fullName || fields.fullName.length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email || !emailRegex.test(fields.email)) {
      errors.email = "Please provide a valid email address.";
    }

    const cleanPhone = fields.phone.replace(/[\s\-()+]/g, "");
    if (!fields.phone || cleanPhone.length < 8) {
      errors.phone = "Please provide a valid phone or WhatsApp number.";
    }

    if (!fields.roleTitle) {
      errors.roleTitle = "Please select the position you are applying for.";
    }

    if (!fields.experience) {
      errors.experience = "Please select your experience level.";
    }

    if (!fields.coverNote || fields.coverNote.length < 15) {
      errors.coverNote =
        "Please include a short note about your background and skills (at least 15 characters).";
    }

    if (!resumeFile && !fields.resumeUrl) {
      errors.resumeFile =
        "Please upload your Resume/CV (PDF or DOC/DOCX) or provide a Google Drive / portfolio link.";
    }

    let resumeAttachment: JobApplicationData["resumeAttachment"];
    if (resumeFile) {
      const lowerName = resumeFile.name.toLowerCase();
      const hasValidExt = ALLOWED_EXTENSIONS.some((ext) =>
        lowerName.endsWith(ext)
      );
      if (!hasValidExt) {
        errors.resumeFile =
          "Only PDF, DOC, or DOCX files are accepted for resume upload.";
      } else if (resumeFile.size > MAX_RESUME_BYTES) {
        errors.resumeFile =
          "Resume file must be under 4 MB. You can share a Drive link instead.";
      } else {
        const buffer = Buffer.from(await resumeFile.arrayBuffer());
        resumeAttachment = {
          filename: resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
          content: buffer.toString("base64"),
        };
      }
    }

    if (!consent) {
      errors.consent =
        "Please confirm consent for IraSoft Technologies to review your application and contact you.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the highlighted fields below.",
          validationErrors: errors,
        },
        { status: 400 }
      );
    }

    const applicationData: JobApplicationData = {
      fullName: fields.fullName,
      email: fields.email,
      phone: fields.phone,
      location: fields.location,
      roleTitle: fields.roleTitle,
      department: fields.department,
      experience: fields.experience,
      availability: fields.availability,
      portfolioUrl: fields.portfolioUrl,
      resumeUrl: fields.resumeUrl,
      coverNote: fields.coverNote,
      consent,
      resumeAttachment,
    };

    const result = await dispatchJobApplicationEmails(applicationData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            "Unable to submit your application right now. Please try again or email enquiry@irasofttech.in.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your Job Application has been submitted directly to our hiring desk at enquiry@irasofttech.in.",
      mode: result.mode,
    });
  } catch (error: any) {
    console.error("[Careers API Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while submitting your application. Please try again.",
      },
      { status: 500 }
    );
  }
}

