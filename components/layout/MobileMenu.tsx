"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { ChevronDown, X, Phone, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (name: string) => {
    setExpandedSection(expandedSection === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="relative h-10 w-36">
            <Image
              src="/images/brand/irasoft-logo.jpg"
              alt={COMPANY.name}
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = expandedSection === item.name;

            if (hasChildren) {
              return (
                <div key={item.name} className="border-b border-slate-100 pb-1">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.name)}
                    className="flex items-center justify-between w-full py-3 text-base font-semibold text-slate-800 hover:text-brand-teal"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200 text-slate-500",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50 rounded-lg mb-2">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 text-xs font-bold text-brand-teal uppercase tracking-wider"
                      >
                        All {item.name} →
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 px-2 rounded text-sm text-slate-700 hover:text-brand-navy hover:bg-slate-100 font-medium"
                        >
                          <div className="flex items-center justify-between">
                            <span>{child.name}</span>
                            {child.badge && (
                              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-brand-teal text-white">
                                {child.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block py-3 text-base font-semibold text-slate-800 hover:text-brand-teal border-b border-slate-100"
              >
                {item.name}
              </Link>
            );
          })}

          {/* Quick Contact Info */}
          <div className="pt-6 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Contact
            </p>
            <a
              href={`tel:${COMPANY.phone.raw}`}
              className="flex items-center gap-2.5 text-sm font-semibold text-brand-navy"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>{COMPANY.phone.display}</span>
            </a>
            <a
              href={`mailto:${COMPANY.emails.enquiry}`}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-600 hover:text-brand-navy"
            >
              <Mail className="w-4 h-4 text-brand-teal" />
              <span>{COMPANY.emails.enquiry}</span>
            </a>
            <a
              href={COMPANY.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-slate-100 bg-slate-50">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}

