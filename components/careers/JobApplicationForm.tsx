"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { JobOpening } from "@/data/careers";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  Send,
  Upload,
  X,
} from "lucide-react";

interface JobApplicationFormProps {
  openJobs: JobOpening[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

const GENERAL_ROLE = "General Application / Future Opportunities";
const MAX_FILE_SIZE_MB = 4;

export function JobApplicationForm({
  openJobs,
  selectedRole,
  onRoleChange,
}: JobApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("1–3 Years");
  const [availability, setAvailability] = useState("Immediate / 15 Days");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeRole = selectedRole || openJobs[0]?.title || GENERAL_ROLE;

  useEffect(() => {
    if (!selectedRole && openJobs[0]?.title) {
      onRoleChange(openJobs[0].title);
    }
  }, [selectedRole, openJobs, onRoleChange]);

  const selectedJobObj = openJobs.find((j) => j.title === activeRole);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setResumeFile(null);
      return;
    }

    const lower = file.name.toLowerCase();
    const validExt =
      lower.endsWith(".pdf") || lower.endsWith(".doc") || lower.endsWith(".docx");

    if (!validExt) {
      setErrors((prev) => ({
        ...prev,
        resumeFile: "Please select a PDF, DOC, or DOCX file.",
      }));
      setResumeFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resumeFile: `File size exceeds ${MAX_FILE_SIZE_MB} MB. Please attach a smaller PDF or share a Drive link below.`,
      }));
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.resumeFile;
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!phone.trim() || phone.replace(/[\s\-()+]/g, "").length < 8) {
      nextErrors.phone = "Please provide a valid phone or WhatsApp number.";
    }
    if (!activeRole) {
      nextErrors.roleTitle = "Please choose a position.";
    }
    if (!resumeFile && !resumeUrl.trim()) {
      nextErrors.resumeFile =
        "Please upload your Resume/CV or enter a Resume / Google Drive link.";
    }
    if (!coverNote.trim() || coverNote.trim().length < 15) {
      nextErrors.coverNote =
        "Please share a brief note about your skills and experience (at least 15 characters).";
    }
    if (!consent) {
      nextErrors.consent =
        "Please agree to allow IraSoft Technologies to review your application.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerMessage("");

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("fullName", fullName.trim());
      payload.append("email", email.trim());
      payload.append("phone", phone.trim());
      payload.append("location", location.trim());
      payload.append("roleTitle", activeRole);
      payload.append("department", selectedJobObj?.department || "General");
      payload.append("experience", experience);
      payload.append("availability", availability);
      payload.append("portfolioUrl", portfolioUrl.trim());
      payload.append("resumeUrl", resumeUrl.trim());
      payload.append("coverNote", coverNote.trim());
      payload.append("consent", String(consent));
      payload.append("honeypot", honeypot);
      if (resumeFile) {
        payload.append("resumeFile", resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        if (data.validationErrors) {
          setErrors(data.validationErrors);
        }
        setSubmitStatus("error");
        setServerMessage(
          data.error || "Unable to submit application. Please check all fields."
        );
      } else {
        setSubmitStatus("success");
        setServerMessage(
          data.message ||
            "Your Job Application has been submitted to enquiry@irasofttech.in."
        );
        setFullName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setPortfolioUrl("");
        setResumeUrl("");
        setCoverNote("");
        setConsent(false);
        setResumeFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch {
      setSubmitStatus("error");
      setServerMessage(
        "Network error while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
      <div className="mb-6 pb-4 border-b border-slate-100">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
          Direct Online Application
        </span>
        <h2 className="text-2xl font-bold text-brand-navy mt-1">
          Apply on Our Website
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Submit your details and resume directly below. Applications are routed immediately to our hiring desk at{" "}
          <span className="font-semibold text-brand-navy">enquiry@irasofttech.in</span>.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-5 rounded-xl bg-teal-50 border border-brand-teal/40 text-brand-navy flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-base text-brand-navy">
              Job Application Submitted Successfully
            </h3>
            <p className="mt-1 text-sm text-slate-700 leading-relaxed">
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-rose-900">
              Application Submission Issue
            </h3>
            <p className="mt-0.5 text-xs sm:text-sm text-rose-700">
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="career_hp">Leave blank</label>
          <input
            id="career_hp"
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Role Selector */}
        <div>
          <label
            htmlFor="roleTitle"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
          >
            Position Applying For <span className="text-rose-500">*</span>
          </label>
          <select
            id="roleTitle"
            value={activeRole}
            onChange={(e) => onRoleChange(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm text-brand-navy font-semibold bg-white"
          >
            {openJobs.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title} ({job.department})
              </option>
            ))}
            <option value={GENERAL_ROLE}>{GENERAL_ROLE}</option>
          </select>
          {errors.roleTitle && (
            <p className="mt-1 text-xs text-rose-600">{errors.roleTitle}</p>
          )}
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="applicantName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="applicantName"
              type="text"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors((p) => ({ ...p, fullName: "" }));
              }}
              placeholder="e.g. Karthik Reddy"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100"
              } bg-white text-slate-900`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="applicantEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="applicantEmail"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: "" }));
              }}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100"
              } bg-white text-slate-900`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="applicantPhone"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Phone / WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="applicantPhone"
              type="tel"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
              }}
              placeholder="+91 98XXX XXXXX"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100"
              } bg-white text-slate-900`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="applicantLocation"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Current City / Location{" "}
              <span className="text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <input
              id="applicantLocation"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Hyderabad, Visakhapatnam, Bengaluru"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Experience & Availability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="experience"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Relevant Experience <span className="text-rose-500">*</span>
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm bg-white text-slate-900"
            >
              <option value="Fresher / 0–1 Years">Fresher / 0–1 Years</option>
              <option value="1–3 Years">1–3 Years</option>
              <option value="3–5 Years">3–5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Notice Period / Availability
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm bg-white text-slate-900"
            >
              <option value="Immediate / 15 Days">Immediate / Within 15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Resume File Upload & Links */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="resumeUpload"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
            >
              Upload Resume / CV (PDF, DOC, DOCX — Max {MAX_FILE_SIZE_MB} MB){" "}
              <span className="text-rose-500">*</span>
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 bg-brand-surface/70">
              <input
                ref={fileInputRef}
                id="resumeUpload"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-brand-teal text-xs font-semibold text-brand-navy shadow-subtle transition-colors"
              >
                <Upload className="w-4 h-4 text-brand-teal" />
                <span>{resumeFile ? "Change File" : "Choose Resume File"}</span>
              </button>

              {resumeFile ? (
                <div className="flex items-center justify-between flex-1 bg-white px-3 py-2 rounded-lg border border-teal-200 text-xs text-slate-700">
                  <span className="inline-flex items-center gap-2 font-medium truncate">
                    <FileText className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    <span className="truncate">{resumeFile.name}</span>
                    <span className="text-slate-400 flex-shrink-0">
                      ({(resumeFile.size / 1024).toFixed(0)} KB)
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setResumeFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="ml-2 p-1 text-slate-400 hover:text-rose-600"
                    aria-label="Remove resume file"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <span className="text-xs text-slate-500">
                  Attached directly to your Job Application email to{" "}
                  <span className="font-semibold">enquiry@irasofttech.in</span>.
                </span>
              )}
            </div>
            {errors.resumeFile && (
              <p className="mt-1.5 text-xs text-rose-600">{errors.resumeFile}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="resumeUrl"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
              >
                Or Resume Drive Link{" "}
                <span className="text-slate-400 lowercase font-normal">(optional)</span>
              </label>
              <input
                id="resumeUrl"
                type="url"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                placeholder="https://drive.google.com/..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm bg-white text-slate-900"
              />
            </div>

            <div>
              <label
                htmlFor="portfolioUrl"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
              >
                LinkedIn / GitHub / Portfolio{" "}
                <span className="text-slate-400 lowercase font-normal">(optional)</span>
              </label>
              <input
                id="portfolioUrl"
                type="url"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://github.com/... or linkedin.com/in/..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 focus:outline-none text-sm bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Cover Note */}
        <div>
          <label
            htmlFor="coverNote"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
          >
            Why You&apos;re a Great Fit & Key Projects{" "}
            <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="coverNote"
            rows={4}
            required
            value={coverNote}
            onChange={(e) => {
              setCoverNote(e.target.value);
              if (errors.coverNote) setErrors((p) => ({ ...p, coverNote: "" }));
            }}
            placeholder="Briefly summarize your primary tech stack, projects you have built or managed, and why you want to join IraSoft Technologies..."
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              errors.coverNote
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-brand-teal focus:ring-teal-100"
            } bg-white text-slate-900`}
          />
          {errors.coverNote && (
            <p className="mt-1 text-xs text-rose-600">{errors.coverNote}</p>
          )}
        </div>

        {/* Consent */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-slate-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((p) => ({ ...p, consent: "" }));
              }}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-teal focus:ring-brand-teal"
            />
            <span>
              I confirm that the details provided are accurate and authorize IraSoft Technologies to review my job application and contact me regarding opportunities.{" "}
              <span className="text-rose-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-rose-600">{errors.consent}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="teal"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[240px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Job Application</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

