import { Icon } from "@/app/components/Icon";
import { Container, Pill } from "@/app/components/ui";
import { industries, industriesSection } from "@/app/data/content";

export function Industries() {
  return (
    <section id="industries" className="bg-white">
      <Container className="py-18 text-center">
        <Pill className="bg-blue-50 text-blue-700">
          {industriesSection.eyebrow}
        </Pill>
        <h2 className="mt-4 mb-2 text-[26px] font-extrabold tracking-[-0.8px] sm:text-[32px]">
          {industriesSection.heading}
        </h2>
        <p className="mb-10 text-[15px] text-slate-500">
          {industriesSection.body}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex w-32 flex-col items-center gap-2.5"
            >
              <div className="flex size-13 items-center justify-center rounded-full border-[1.5px] border-blue-200 text-blue-600">
                <Icon name={industry.icon} size={24} />
              </div>
              <div className="text-[12.5px] font-bold text-slate-700">
                {industry.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
