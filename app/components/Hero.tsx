import { Fragment } from "react";
import Image from "next/image";
import dashboardMockup from "@/assets/dashboard.png";
import phoneMockup from "@/assets/mobile-app.png";
import { Container, Pill, PlayBadge } from "@/app/components/ui";
import { hero } from "@/app/data/content";

function Check({ children }: { children: string }) {
  return (
    <span>
      <span className="text-green-600">✓</span> {children}
    </span>
  );
}

export function Hero({ showAnnotation = true }: { showAnnotation?: boolean }) {
  return (
    <section className="overflow-hidden bg-linear-to-b from-hero-top to-hero-bottom">
      <Container className="grid items-center gap-12 pt-18 pb-22 lg:grid-cols-[minmax(300px,1fr)_minmax(320px,1.15fr)] lg:gap-12">
        <div>
          <Pill className="bg-blue-100 text-blue-700">{hero.eyebrow}</Pill>

          <h1 className="mt-[22px] mb-[18px] text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-pretty sm:text-[44px]">
            {hero.headingLines.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
            <span className="text-blue-600">{hero.headingAccent}</span>
          </h1>

          <p className="mb-7 max-w-[420px] text-base leading-[1.65] text-slate-600">
            {hero.body}
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[9px] bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
            >
              {hero.primaryCta} <span className="text-base">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[9px] border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              <PlayBadge className="bg-blue-600 text-white" />
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-[18px] text-[12.5px] font-semibold text-slate-500">
            {hero.assurancesInline.map((item) => (
              <Check key={item}>{item}</Check>
            ))}
          </div>
          {hero.assurancesBlock.map((item) => (
            <div
              key={item}
              className="mt-2 text-[12.5px] font-semibold text-slate-500"
            >
              <Check>{item}</Check>
            </div>
          ))}
        </div>

        {/* Device mockups — the phone deliberately overlaps the dashboard. */}
        <div className="relative mx-auto min-h-[380px] w-full max-w-[560px] sm:min-h-[440px]">
          <div className="absolute top-4 right-0 w-[88%] rounded-2xl bg-slate-900 p-[7px] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] sm:w-[90%]">
            <Image
              src={dashboardMockup}
              alt="ManagerOX dashboard showing leads, sales pipeline and monthly revenue"
              className="block h-auto w-full rounded-[10px]"
              sizes="(max-width: 1024px) 80vw, 500px"
              placeholder="blur"
              priority
            />
          </div>
          <Image
            src={phoneMockup}
            alt="ManagerOX mobile app on a phone"
            className="absolute top-14 left-0 h-auto w-[140px] drop-shadow-[0_24px_40px_rgba(15,23,42,0.35)] sm:w-[178px]"
            sizes="178px"
            placeholder="blur"
            priority
          />
          {showAnnotation && (
            <div className="absolute right-2 -bottom-6 rotate-[-4deg] font-script text-2xl font-semibold text-slate-800">
              {hero.annotation.first}
              <br />
              <span className="ml-[18px]">{hero.annotation.second}</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
