"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 border-b border-slate-800/60 hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-teal-400 font-medium">
              {COMPANY.tagline}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${COMPANY.emails.enquiry}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-teal" />
              <span>{COMPANY.emails.enquiry}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY.phone.raw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>{COMPANY.phone.display}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md",
          isScrolled
            ? "border-b border-slate-200 shadow-sm py-2.5"
            : "border-b border-slate-100 py-3.5"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label={`${COMPANY.name} Home`}
          >
            <div className="relative h-12 w-44 sm:h-14 sm:w-52">
              <Image
                src="/images/brand/irasoft-logo.jpg"
                alt={`${COMPANY.name} - ${COMPANY.tagline}`}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (hasChildren) {
                const isOpen = activeDropdown === item.name;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(isOpen ? null : item.name)
                      }
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive || isOpen
                          ? "text-brand-teal font-semibold"
                          : "text-slate-700 hover:text-brand-navy hover:bg-slate-50"
                      )}
                      aria-expanded={isOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Mega / Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 w-[340px] sm:w-[380px] grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.children?.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "p-2.5 rounded-lg transition-colors group/item block",
                                  isSubActive
                                    ? "bg-brand-teal-light text-brand-teal-dark"
                                    : "hover:bg-slate-50 text-slate-800"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-sm group-hover/item:text-brand-teal transition-colors">
                                    {subItem.name}
                                  </span>
                                  {subItem.badge && (
                                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-teal text-white">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">
                                  {subItem.description}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-brand-teal font-semibold"
                      : "text-slate-700 hover:text-brand-navy hover:bg-slate-50"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Discuss Your Project
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-teal"
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
