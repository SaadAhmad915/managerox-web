import { Container, Pill, PlayBadge } from "@/app/components/ui";
import { cta } from "@/app/data/content";

export function CtaBand() {
  return (
    <section className="bg-linear-[135deg,var(--color-blue-800)_0%,var(--color-blue-600)_55%,var(--color-blue-700)_100%]">
      <Container className="py-18 text-center text-white">
        <Pill className="bg-white/15">{cta.eyebrow}</Pill>
        <h2 className="mt-[18px] mb-3 text-[28px] font-extrabold tracking-[-0.8px] sm:text-[34px]">
          {cta.heading}
        </h2>
        <p className="mb-7.5 text-[15.5px] text-blue-100">{cta.body}</p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[9px] bg-white px-[26px] py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            {cta.primaryCta} <span>→</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[9px] border-[1.5px] border-white/50 px-[26px] py-3.5 text-sm font-bold text-white transition-colors hover:border-white"
          >
            <PlayBadge className="bg-white text-blue-700" />
            {cta.secondaryCta}
          </a>
        </div>

        <div className="mt-[26px] flex flex-wrap justify-center gap-[22px] text-[12.5px] font-semibold text-blue-100">
          {cta.assurances.map((item) => (
            <span key={item}>✓ {item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
