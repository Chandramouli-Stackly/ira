import React from "react";
import { COMPANY } from "@/data/company";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={COMPANY.phone.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="Contact IraSoft Technologies via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}

