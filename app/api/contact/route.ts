import { NextRequest, NextResponse } from "next/server";
import { dispatchEnquiryEmails, ContactFormData } from "@/lib/email/dispatcher";

// Basic in-memory rate limiting map for basic spam suppression
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
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
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 1. Honeypot check (Bot detection)
    if (body.website_url_hp || body.honeypot) {
      console.warn("[Spam Protection] Honeypot triggered from IP:", ip);
      // Return simulated success so bots don't adapt
      return NextResponse.json({
        success: true,
        message: "Thank you for contacting IraSoft Technologies! Your project enquiry has been received.",
      });
    }

    // 2. Validate required fields
    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const projectType = (body.projectType || "").trim();
    const description = (body.description || "").trim();
    const consent = Boolean(body.consent);

    const errors: Record<string, string> = {};

    if (!fullName || fullName.length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    const cleanPhone = phone.replace(/[\s\-()+]/g, "");
    if (!phone || cleanPhone.length < 8) {
      errors.phone = "Please provide a valid contact number.";
    }

    if (!service) {
      errors.service = "Please select the service you are interested in.";
    }

    if (!projectType) {
      errors.projectType = "Please select your project type.";
    }

    if (!description || description.length < 10) {
      errors.description = "Please describe your project requirements (at least 10 characters).";
    }

    if (!consent) {
      errors.consent = "You must agree to allow IraSoft Technologies to contact you regarding this enquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the highlighted errors.",
          validationErrors: errors,
        },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      fullName,
      companyName: (body.companyName || "").trim(),
      email,
      phone,
      country: (body.country || "").trim(),
      service,
      projectType,
      budget: (body.budget || "").trim(),
      timeline: (body.timeline || "").trim(),
      description,
      preferredContact: (body.preferredContact || "Email").trim(),
      consent,
    };

    const dispatchResult = await dispatchEnquiryEmails(formData);

    if (!dispatchResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: dispatchResult.error || "Failed to process enquiry. Please try again or contact us via WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting IraSoft Technologies! Your project enquiry has been received. Our team will review your requirements and get in touch.",
      mode: dispatchResult.mode,
    });
  } catch (error: any) {
    console.error("[Contact API Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while submitting your enquiry. Please reach us via WhatsApp or direct email.",
      },
      { status: 500 }
    );
  }
}

