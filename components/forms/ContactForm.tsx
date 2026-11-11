"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  preferredContact: string;
  consent: boolean;
  honeypot: string; // Anti-bot honeypot field
}

const INITIAL_STATE: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  projectType: "New Project",
  budget: "Prefer to discuss",
  timeline: "Within 2–4 weeks",
  description: "",
  preferredContact: "Email",
  consent: false,
  honeypot: "",
};

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    ...INITIAL_STATE,
    service: initialService || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-()+]/g, "");
    if (!formData.phone.trim() || cleanPhone.length < 8) {
      newErrors.phone = "Please enter a valid phone number (at least 8 digits).";
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you are interested in.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      newErrors.description = "Please describe your project requirements (at least 10 characters).";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to the contact terms to submit your enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerMessage("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setSubmitStatus("error");
        setServerMessage(data.error || "Failed to submit enquiry. Please try again.");
        if (data.validationErrors) {
          setErrors(data.validationErrors);
        }
      } else {
        setSubmitStatus("success");
        setServerMessage(
          data.message ||
            "Thank you for contacting IraSoft Technologies! Your project enquiry has been received. Our team will review your requirements and get in touch."
        );
        setFormData({ ...INITIAL_STATE, service: initialService || "" });
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setServerMessage(
        "A network error occurred while submitting your enquiry. Please check your connection or contact us via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
      {/* Success Notification */}
      {submitStatus === "success" && (
        <div className="mb-8 p-6 bg-teal-50 border border-teal-200 rounded-xl flex items-start gap-3.5 text-brand-teal-dark animate-in fade-in duration-200">
          <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-brand-teal mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-brand-navy">Enquiry Submitted Successfully</h4>
            <p className="mt-1 text-sm text-slate-700 leading-relaxed">{serverMessage}</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitStatus === "error" && (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3.5 text-rose-800 animate-in fade-in duration-200">
          <AlertCircle className="w-6 h-6 flex-shrink-0 text-rose-600 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-rose-900">Submission Could Not Complete</h4>
            <p className="mt-1 text-sm text-rose-700 leading-relaxed">{serverMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-bot honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_url_hp">Leave this field blank</label>
          <input
            type="text"
            id="website_url_hp"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                errors.fullName
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100 bg-white"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Business / Company Name <span className="text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Hospitality / Self"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-teal-100 transition-colors bg-white"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="rajesh@company.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100 bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                errors.phone
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100 bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 3: Country & Service Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Country / Region <span className="text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-teal-100 transition-colors bg-white"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Service Interested In <span className="text-rose-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors bg-white ${
                errors.service
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                  : "border-slate-300 focus:border-brand-teal focus:ring-teal-100"
              }`}
            >
              <option value="">Select a Service...</option>
              <option value="Odoo ERP Development">Odoo ERP Development & Customization</option>
              <option value="Hotel & Resort Management Software">Hotel & Resort Management Software</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="AI & Automation">AI & Intelligent Automation</option>
              <option value="Website Development">Professional Website Development</option>
              <option value="Digital Marketing">Digital Marketing & Growth</option>
              <option value="IT Support & Consulting">IT Support & Technology Consulting</option>
              <option value="Other">Other Requirement</option>
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.service}</p>
            )}
          </div>
        </div>

        {/* Row 4: Project Type & Estimated Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Project Type <span className="text-rose-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-teal-100 transition-colors bg-white"
            >
              <option value="New Project">New Project</option>
              <option value="Existing Software Customization">Existing Software Customization</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="ERP Implementation">ERP Implementation</option>
              <option value="Automation Requirement">Automation Requirement</option>
              <option value="Consultation">Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Estimated Budget <span className="text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-teal-100 transition-colors bg-white"
            >
              <option value="Prefer to discuss">Prefer to discuss</option>
              <option value="Not decided">Not decided</option>
              <option value="Under ₹25,000">Under ₹25,000</option>
              <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
              <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
              <option value="₹1,00,000–₹5,00,000">₹1,00,000–₹5,00,000</option>
              <option value="Above ₹5,00,000">Above ₹5,00,000</option>
            </select>
          </div>
        </div>

        {/* Row 5: Expected Timeline & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Expected Timeline <span className="text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-teal-100 transition-colors bg-white"
            >
              <option value="Immediately">Immediately</option>
              <option value="Within 2–4 weeks">Within 2–4 weeks</option>
              <option value="Within 1–3 months">Within 1–3 months</option>
              <option value="More than 3 months">More than 3 months</option>
              <option value="Not decided">Not decided</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredContact" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {["Email", "Phone", "WhatsApp"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center justify-center py-2.5 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    formData.preferredContact === method
                      ? "border-brand-teal bg-brand-teal-light text-brand-teal-dark font-semibold"
                      : "border-slate-300 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={formData.preferredContact === method}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Multiline Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Project Description & Requirements <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about what you want to achieve, your existing systems, workflow bottlenecks, and specific features you need..."
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
              errors.description
                ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                : "border-slate-300 focus:border-brand-teal focus:ring-teal-100 bg-white"
            }`}
          />
          {errors.description && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.description}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-teal focus:ring-brand-teal cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I agree that IraSoft Technologies may contact me regarding this enquiry.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="teal"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[220px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Project Enquiry</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

