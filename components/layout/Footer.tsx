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

