"use client";

import { useState } from "react";
import { Icon } from "@/app/components/Icon";
import { Container } from "@/app/components/ui";
import { nav } from "@/app/data/content";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="text-[22px] font-extrabold tracking-[-0.5px]">
        {nav.brand.lead}
        <span className="text-blue-600">{nav.brand.accent}</span>
      </div>
      <div className="text-[9px] font-semibold tracking-[1.5px] text-slate-400 uppercase">
        {nav.tagline}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/[0.92] backdrop-blur-[12px]">
      <Container className="flex items-center justify-between gap-6 py-[14px]">
        <Wordmark />

        <nav className="hidden flex-wrap items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "border-b-2 border-blue-600 pb-[3px] text-blue-600"
                  : "transition-colors hover:text-blue-600"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden rounded-lg bg-blue-600 px-5 py-[11px] text-[13px] font-bold whitespace-nowrap text-white transition-colors hover:bg-blue-700 lg:inline-block"
        >
          {nav.cta}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-hairline bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2.5 text-sm font-semibold transition-colors ${
                  link.active
                    ? "text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-blue-600 px-5 py-[11px] text-center text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
            >
              {nav.cta}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
