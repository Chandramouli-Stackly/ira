import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { FOOTER_LINKS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Mail, Phone, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info & Approved Logo */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block" aria-label={COMPANY.name}>
              <div className="relative h-14 w-52 bg-white rounded-lg p-2 shadow-sm">
                <Image
                  src="/images/brand/irasoft-logo.jpg"
                  alt={`${COMPANY.name} - ${COMPANY.tagline}`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-teal-400 font-semibold text-sm">
              {COMPANY.tagline}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              IraSoft Technologies delivers business-oriented software engineering,
              custom Odoo ERP implementations, hotel and resort management systems,
              AI-powered automation, and high-performance digital platforms designed
              to simplify operations and drive sustainable growth.
            </p>

            {/* Official Contact Details */}
            <div className="space-y-2 pt-2 text-sm">
              <a
                href={`tel:${COMPANY.phone.raw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>{COMPANY.phone.display}</span>
              </a>

              <a
                href={`mailto:${COMPANY.emails.enquiry}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>{COMPANY.emails.enquiry}</span>
              </a>

              <a
                href={`mailto:${COMPANY.emails.ceo}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>{COMPANY.emails.ceo}</span>
              </a>

              <a
                href={COMPANY.websiteUrl}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>{COMPANY.domain}</span>
              </a>
            </div>

            {/* Social Media Accounts */}
            <div className="pt-3">
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IraSoft Technologies on LinkedIn"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/90 hover:bg-[#0A66C2] text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/80 hover:border-[#0A66C2] shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.62 1.62 0 0 0-1.62 1.62c0 .9.72 1.63 1.62 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IraSoft Technologies on Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/80 hover:border-transparent shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Key Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mt-6 mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/industries"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Careers &amp; Openings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Inquiries & WhatsApp */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Quick Connect
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Have an urgent requirement or need an exploratory discussion for your
              software, ERP, or hospitality project?
            </p>

            <a
              href={COMPANY.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Verified Business Inquiries Only</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Alt: {COMPANY.emails.gmail}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {currentYear} {COMPANY.legalName}. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400 sm:border-r sm:border-slate-800 sm:pr-6">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {FOOTER_LINKS.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

