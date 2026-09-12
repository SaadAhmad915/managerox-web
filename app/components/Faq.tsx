"use client";

import { useState } from "react";
import { Container, Pill } from "@/app/components/ui";
import { faqSection, faqs } from "@/app/data/content";

export function Faq() {
  // One panel open at a time; clicking the open question closes it.
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="bg-white">
      <Container className="py-19">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Pill className="bg-slate-100 text-slate-700">
              {faqSection.eyebrow}
            </Pill>
            <h2 className="mt-3.5 text-[26px] font-extrabold tracking-[-0.8px] sm:text-[30px]">
              {faqSection.heading}
            </h2>
          </div>
          <a
            href="#"
            className="rounded-[9px] border border-slate-300 px-5 py-[11px] text-[13px] font-bold text-blue-600 transition-colors hover:border-blue-600"
          >
            {faqSection.cta}
          </a>
        </div>

        <div className="grid items-start gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[10px] border border-line bg-tint"
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 px-[18px] py-4 text-left text-sm font-bold text-slate-900"
                  >
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg font-semibold text-blue-600"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-[18px] pb-4 text-[13.5px] leading-[1.6] text-slate-500"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
