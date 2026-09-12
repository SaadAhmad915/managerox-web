import { Fragment } from "react";
import { Icon } from "@/app/components/Icon";
import { Container, Pill } from "@/app/components/ui";
import { whyPoints, whySection } from "@/app/data/content";

export function WhySection() {
  return (
    <section
      id="why"
      className="border-y border-hairline bg-slate-50"
    >
      <Container className="grid items-center gap-14 py-20 lg:grid-cols-2">
        <div>
          <Pill className="bg-slate-200 text-slate-700">
            {whySection.eyebrow}
          </Pill>
          <h2 className="mt-[18px] mb-4 text-[28px] leading-[1.15] font-extrabold tracking-[-0.8px] sm:text-[34px]">
            {whySection.headingLines.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </h2>
          <p className="mb-[26px] max-w-[420px] text-[15px] leading-[1.65] text-slate-500">
            {whySection.body}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[9px] bg-blue-600 px-6 py-[13px] text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            {whySection.cta} <span>→</span>
          </a>
        </div>

        <div className="flex flex-col gap-[22px]">
          {whyPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-4">
              <div
                className={`flex size-11 shrink-0 items-center justify-center rounded-full ${point.tint} ${point.ink}`}
              >
                <Icon name={point.icon} size={22} />
              </div>
              <div>
                <div className="mb-[3px] text-[15px] font-extrabold">
                  {point.title}
                </div>
                <div className="text-[13.5px] text-slate-500">{point.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
