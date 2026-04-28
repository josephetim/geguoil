"use client";

import Link from "next/link";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/home/brand-logo";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  hasLogo: boolean;
  navItems: NavItem[];
};

export default function Navbar({ hasLogo, navItems }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-sky-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 xl:px-20">
        <Link href="#home" aria-label="Go to homepage" onClick={closeMenu}>
          <BrandLogo hasLogo={hasLogo} size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-orange-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="hidden flex-col items-end xl:flex">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <PhoneCall className="h-4 w-4 text-orange-500" />
              +234 905 410 8284
            </div>
            <div className="mt-0.5 flex items-center gap-2 text-xs text-white/70">
              <Mail className="h-3.5 w-3.5 text-orange-500" />
              info@geguoil.com
            </div>
          </div>
          <Link
            href="#contact"
            className="rounded-lg bg-orange-600 px-6 py-2.5 font-heading text-sm font-semibold text-white shadow-[0px_0px_15px_0px_rgba(255,98,0,0.30)] transition-colors hover:bg-orange-500"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-sky-950/95 lg:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 xl:px-20">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-orange-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm text-white">
                <PhoneCall className="h-4 w-4 text-orange-500" />
                +234 905 410 8284
              </p>
              <p className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 text-orange-500" />
                info@geguoil.com
              </p>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-3 inline-flex rounded-lg bg-orange-600 px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
