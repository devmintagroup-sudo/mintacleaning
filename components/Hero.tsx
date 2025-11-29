"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/overview/1.webp" },
  { src: "/overview/2.webp" },
  { src: "/overview/3.webp" },
  { src: "/overview/4.webp" },
  { src: "/overview/5.webp" },
  { src: "/overview/6.webp" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-slate-950 pt-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center lg:px-6 lg:py-28">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Quality First
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Expert Cleaning for Homes &amp; Businesses Across Australia
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Minta Cleaning, part of Mintahomes, delivers tailored cleaning
            services for offices, hospitality, warehouses, builders&apos; cleans,
            medical centres, childcare, and more. No shortcuts – just reliable,
            detail-focused cleaning with clear communication via dedicated
            WhatsApp groups.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              View Services
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 sm:text-sm">
            <div>
              <div className="text-lg font-semibold text-white">15+ years</div>
              Industry experience
            </div>
            <div>
              <div className="text-lg font-semibold text-white">24/7</div>
              On-call cleaners &amp; support
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Nationwide</div>
              VIC · NSW · WA · TAS · QLD
            </div>
          </div>
        </div>

        {/* RIGHT – BIGGER IMAGE CAROUSEL WITH ARROWS */}
        <div className="flex-1">
          <div className="relative mx-auto h-[420px] w-full max-w-xl overflow-hidden rounded-3xl bg-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

            {/* IMAGES */}
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt="Cleaning slides"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-slate-950/10 to-slate-900/5" />
              </div>
            ))}

            {/* LEFT & RIGHT ARROWS */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-3 text-white shadow-lg backdrop-blur transition hover:bg-slate-800/90"
            >
              <span className="text-lg">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-3 text-white shadow-lg backdrop-blur transition hover:bg-slate-800/90"
            >
              <span className="text-lg">›</span>
            </button>

            {/* SLIDE DOTS */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-4 bg-emerald-400" : "w-2 bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
