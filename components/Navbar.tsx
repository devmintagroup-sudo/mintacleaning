"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    // { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/minta_logo.png"
            alt="Minta Cleaning Logo"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
          <span className="text-base font-semibold text-slate-900">
            Minta Group
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-700 hover:text-emerald-700 transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-500 transition"
          >
            Get a Quote
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-100 p-4 space-y-3">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-base font-medium text-slate-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-full bg-emerald-600 px-5 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
