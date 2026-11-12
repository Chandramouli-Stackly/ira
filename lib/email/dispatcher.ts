import { COMPANY } from "@/data/company";

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  country?: string;
  service: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description: string;
  preferredContact: string;
  consent: boolean;
  honeypot?: string;
}

export interface DispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
  mode: "live" | "development_logged";
}

export interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  roleTitle: string;
  department?: string;
  experience: string;
  availability?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  coverNote: string;
  consent: boolean;
  resumeAttachment?: {
    filename: string;
    content: string; // base64
  };
}

interface ResendSendPayload {
  apiKey: string;
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: string }[];
}

async function sendViaResend(payload: ResendSendPayload): Promise<DispatchResult> {
  try {
    const body: Record<string, unknown> = {
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    };

    if (payload.replyTo) {
      body.reply_to = payload.replyTo;
    }

    if (payload.attachments && payload.attachments.length > 0) {
      body.attachments = payload.attachments;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${payload.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorJson = await res.json().catch(() => ({}));
      console.error("[Resend API Error]:", errorJson);
      return {
        success: false,
        error: errorJson.message || `Resend API returned HTTP ${res.status}`,
        mode: "live",
      };
    }

    const json = await res.json();
    return {
      success: true,
      messageId: json.id,
      mode: "live",
    };
  } catch (err: any) {
    console.error("[Email Dispatch Exception]:", err);
    return {
      success: false,
      error: err.message || "Failed to connect to email dispatch service",
      mode: "live",
    };
  }
}

export async function dispatchEnquiryEmails(data: ContactFormData): Promise<DispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL || COMPANY.emails.enquiry;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "IraSoft Enquiries <onboarding@resend.dev>";

  // Format HTML body for notification to IraSoft team
  const htmlNotification = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Project Enquiry - IraSoft Technologies</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f8fa; margin: 0; padding: 24px; color: #263445; }
          .card { background-color: #ffffff; max-width: 620px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(20,43,74,0.06); }
          .header { background-color: #142B4A; color: #ffffff; padding: 24px; text-align: left; }
          .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
          .header p { margin: 0; font-size: 13px; color: #159B9A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
          .body { padding: 28px; }
          .row { display: flex; padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
          .label { width: 180px; font-weight: 600; color: #64748b; font-size: 13px; }
          .value { flex: 1; color: #142b4a; font-size: 14px; font-weight: 500; }
          .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-top: 14px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background-color: #f8fafc; padding: 16px 28px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>New Client Project Enquiry</h1>
            <p>IraSoft Technologies Enquiry Desk</p>
          </div>
          <div class="body">
            <div class="row"><div class="label">Client Name:</div><div class="value">${escapeHtml(data.fullName)}</div></div>
            <div class="row"><div class="label">Business / Company:</div><div class="value">${escapeHtml(data.companyName || "Not specified")}</div></div>
            <div class="row"><div class="label">Email Address:</div><div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #159B9A;">${escapeHtml(data.email)}</a></div></div>
            <div class="row"><div class="label">Phone Number:</div><div class="value"><a href="tel:${escapeHtml(data.phone)}" style="color: #159B9A;">${escapeHtml(data.phone)}</a></div></div>
            <div class="row"><div class="label">Country:</div><div class="value">${escapeHtml(data.country || "Not specified")}</div></div>
            <div class="row"><div class="label">Service Required:</div><div class="value" style="color: #142B4A; font-weight: 700;">${escapeHtml(data.service)}</div></div>
            <div class="row"><div class="label">Project Type:</div><div class="value">${escapeHtml(data.projectType)}</div></div>
            <div class="row"><div class="label">Estimated Budget:</div><div class="value">${escapeHtml(data.budget || "Prefer to discuss")}</div></div>
            <div class="row"><div class="label">Expected Timeline:</div><div class="value">${escapeHtml(data.timeline || "Not decided")}</div></div>
            <div class="row"><div class="label">Preferred Contact:</div><div class="value">${escapeHtml(data.preferredContact)}</div></div>
            
            <div style="margin-top: 20px;">
              <div class="label">Project Scope & Details:</div>
              <div class="message-box">${escapeHtml(data.description)}</div>
            </div>
          </div>
          <div class="footer">
            Submitted via IraSoft Technologies Corporate Portal • ${new Date().toISOString()}
          </div>
        </div>
      </body>
    </html>
  `;

  // Format HTML client confirmation email
  const htmlClientConfirmation = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>We Received Your Project Enquiry - IraSoft Technologies</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f8fa; margin: 0; padding: 24px; color: #263445; }
          .card { background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }
          .header { background-color: #142B4A; color: #ffffff; padding: 28px; text-align: center; }
          .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 0; font-size: 13px; color: #159B9A; font-weight: 600; }
          .body { padding: 32px 28px; line-height: 1.6; }
          .greeting { font-size: 16px; font-weight: 600; margin-bottom: 16px; color: #142B4A; }
          .highlight { background-color: #EAF7F6; border-left: 4px solid #159B9A; padding: 14px 18px; margin: 20px 0; border-radius: 4px; font-size: 14px; color: #0d7b7a; font-weight: 500; }
          .footer { background-color: #f8fafc; padding: 20px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>IraSoft Technologies</h1>
            <p>Engineering Technology for Business Growth</p>
          </div>
          <div class="body">
            <div class="greeting">Dear ${escapeHtml(data.fullName)},</div>
            <p>Thank you for contacting IraSoft Technologies! Your project enquiry has been received.</p>
            <div class="highlight">
              <strong>Service Requested:</strong> ${escapeHtml(data.service)}<br/>
              <strong>Project Type:</strong> ${escapeHtml(data.projectType)}
            </div>
            <p>Our technical consulting team is reviewing your requirements. We will analyze your scope and get in touch via your preferred contact channel (<strong>${escapeHtml(data.preferredContact)}</strong>) shortly.</p>
            <p>If you have urgent questions, you can also reach us directly:</p>
            <p>
              • Official Phone / WhatsApp: <a href="tel:${COMPANY.phone.raw}" style="color: #159B9A; text-decoration: none; font-weight: 600;">${COMPANY.phone.display}</a><br/>
              • Official Email: <a href="mailto:${COMPANY.emails.enquiry}" style="color: #159B9A; text-decoration: none; font-weight: 600;">${COMPANY.emails.enquiry}</a>
            </p>
            <p style="margin-top: 28px;">Warm regards,<br/><strong>Team IraSoft Technologies</strong><br/><a href="${COMPANY.websiteUrl}" style="color: #64748b; text-decoration: none;">${COMPANY.domain}</a></p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} ${COMPANY.legalName}. All Rights Reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  // If RESEND_API_KEY is not configured, record in development mode and inform honestly
  if (!apiKey) {
    console.info("[IraSoft Enquiry Notification - DEV MODE (No RESEND_API_KEY)]:", {
      to: notificationEmail,
      clientEmail: data.email,
      service: data.service,
      projectType: data.projectType,
      budget: data.budget,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      mode: "development_logged",
      messageId: `dev-mock-${Date.now()}`,
    };
  }

  // Live dispatch via Resend REST API
  const primaryResult = await sendViaResend({
    apiKey,
    from: fromEmail,
    to: [notificationEmail],
    replyTo: data.email,
    subject: `[New Enquiry] ${data.service} - ${data.fullName} (${data.companyName || "Individual"})`,
    html: htmlNotification,
  });

  if (!primaryResult.success) {
    return primaryResult;
  }

  // Send confirmation email to client if enabled
  if (data.email) {
    sendViaResend({
      apiKey,
      from: fromEmail,
      to: [data.email],
      subject: "Thank You for Contacting IraSoft Technologies",
      html: htmlClientConfirmation,
    }).catch((clientErr) => {
      console.warn("[Client Confirmation Email Failed Non-Critically]:", clientErr);
    });
  }

  return primaryResult;
}

export async function dispatchJobApplicationEmails(
  data: JobApplicationData
): Promise<DispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail =
    process.env.CAREERS_NOTIFICATION_EMAIL || COMPANY.emails.enquiry;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "IraSoft Careers <onboarding@resend.dev>";

  const htmlNotification = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Job Application - ${escapeHtml(data.roleTitle)}</title>
        <style>
          body { font-family: "Times New Roman", Times, Georgia, serif; background-color: #f5f8fa; margin: 0; padding: 24px; color: #263445; }
          .card { background-color: #ffffff; max-width: 640px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(20,43,74,0.06); }
          .header { background-color: #142B4A; color: #ffffff; padding: 24px; text-align: left; }
          .eyebrow { margin: 0 0 6px 0; font-size: 12px; color: #2dd4bf; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
          .header h1 { margin: 0; font-size: 21px; font-weight: 700; color: #ffffff; }
          .body { padding: 28px; }
          .row { display: flex; padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
          .label { width: 190px; font-weight: 700; color: #64748b; font-size: 13px; }
          .value { flex: 1; color: #142b4a; font-size: 14px; font-weight: 500; }
          .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background-color: #f8fafc; padding: 16px 28px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="eyebrow">Job Application &bull; IraSoft Technologies Careers</div>
            <h1>Job Application: ${escapeHtml(data.roleTitle)}</h1>
          </div>
          <div class="body">
            <div class="row"><div class="label">Applicant Name:</div><div class="value">${escapeHtml(data.fullName)}</div></div>
            <div class="row"><div class="label">Position Applied For:</div><div class="value" style="color: #142B4A; font-weight: 700;">${escapeHtml(data.roleTitle)}${data.department ? ` (${escapeHtml(data.department)})` : ""}</div></div>
            <div class="row"><div class="label">Email Address:</div><div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #159B9A;">${escapeHtml(data.email)}</a></div></div>
            <div class="row"><div class="label">Phone Number:</div><div class="value"><a href="tel:${escapeHtml(data.phone)}" style="color: #159B9A;">${escapeHtml(data.phone)}</a></div></div>
            <div class="row"><div class="label">Current Location:</div><div class="value">${escapeHtml(data.location || "Not specified")}</div></div>
            <div class="row"><div class="label">Experience:</div><div class="value">${escapeHtml(data.experience)}</div></div>
            <div class="row"><div class="label">Availability / Notice:</div><div class="value">${escapeHtml(data.availability || "Not specified")}</div></div>
            <div class="row"><div class="label">Portfolio / LinkedIn:</div><div class="value">${data.portfolioUrl ? `<a href="${escapeHtml(data.portfolioUrl)}" style="color: #159B9A;">${escapeHtml(data.portfolioUrl)}</a>` : "Not provided"}</div></div>
            <div class="row"><div class="label">Resume / CV Link:</div><div class="value">${data.resumeUrl ? `<a href="${escapeHtml(data.resumeUrl)}" style="color: #159B9A;">${escapeHtml(data.resumeUrl)}</a>` : data.resumeAttachment ? `Attached (${escapeHtml(data.resumeAttachment.filename)})` : "Not provided"}</div></div>

            <div style="margin-top: 20px;">
              <div class="label">Cover Note / Summary:</div>
              <div class="message-box">${escapeHtml(data.coverNote)}</div>
            </div>
          </div>
          <div class="footer">
            Submitted via IraSoft Technologies Careers Portal &bull; ${new Date().toISOString()}
          </div>
        </div>
      </body>
    </html>
  `;

  const htmlApplicantConfirmation = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Job Application Received - IraSoft Technologies</title>
        <style>
          body { font-family: "Times New Roman", Times, Georgia, serif; background-color: #f5f8fa; margin: 0; padding: 24px; color: #263445; }
          .card { background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }
          .header { background-color: #142B4A; color: #ffffff; padding: 28px; text-align: center; }
          .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 0; font-size: 13px; color: #2dd4bf; font-weight: 600; }
          .body { padding: 32px 28px; line-height: 1.6; }
          .highlight { background-color: #EAF7F6; border-left: 4px solid #159B9A; padding: 14px 18px; margin: 20px 0; border-radius: 4px; font-size: 14px; color: #0d7b7a; }
          .footer { background-color: #f8fafc; padding: 20px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>IraSoft Technologies</h1>
            <p>Job Application Confirmation</p>
          </div>
          <div class="body">
            <p>Dear ${escapeHtml(data.fullName)},</p>
            <p>Thank you for applying at IraSoft Technologies. We have received your job application and shared it with our hiring team.</p>
            <div class="highlight">
              <strong>Position Applied For:</strong> ${escapeHtml(data.roleTitle)}<br/>
              <strong>Experience:</strong> ${escapeHtml(data.experience)}
            </div>
            <p>If your profile aligns with our current requirements, a member of our team will reach out to you via email or phone to schedule an interview.</p>
            <p style="margin-top: 28px;">Warm regards,<br/><strong>Team IraSoft Technologies</strong><br/><a href="${COMPANY.websiteUrl}" style="color: #64748b; text-decoration: none;">${COMPANY.domain}</a></p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} ${COMPANY.legalName}. All Rights Reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  if (!apiKey) {
    console.info("[IraSoft Job Application - DEV MODE (No RESEND_API_KEY)]:", {
      caption: "Job Application",
      to: notificationEmail,
      applicantName: data.fullName,
      applicantEmail: data.email,
      roleTitle: data.roleTitle,
      experience: data.experience,
      hasAttachment: Boolean(data.resumeAttachment),
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      mode: "development_logged",
      messageId: `dev-job-${Date.now()}`,
    };
  }

  const primaryResult = await sendViaResend({
    apiKey,
    from: fromEmail,
    to: [notificationEmail],
    replyTo: data.email,
    subject: `Job Application: ${data.roleTitle} — ${data.fullName}`,
    html: htmlNotification,
    attachments: data.resumeAttachment ? [data.resumeAttachment] : undefined,
  });

  if (!primaryResult.success) {
    return primaryResult;
  }

  if (data.email) {
    sendViaResend({
      apiKey,
      from: fromEmail,
      to: [data.email],
      subject: `Job Application Received: ${data.roleTitle} | IraSoft Technologies`,
      html: htmlApplicantConfirmation,
    }).catch((err) => {
      console.warn("[Applicant Confirmation Email Failed Non-Critically]:", err);
    });
  }

  return primaryResult;
}

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

