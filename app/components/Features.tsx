import { Icon } from "@/app/components/Icon";
import { Container, Pill } from "@/app/components/ui";
import { features, featuresSection } from "@/app/data/content";

export function Features() {
  return (
    <section id="features" className="bg-white">
      <Container className="py-20">
        <div className="mb-11 text-center">
          <Pill className="bg-blue-50 text-blue-700">
            {featuresSection.eyebrow}
          </Pill>
          <h2 className="mt-4 mb-2.5 text-[28px] font-extrabold tracking-[-0.8px] sm:text-[34px]">
            {featuresSection.heading}
          </h2>
          <p className="text-[15px] text-slate-500">{featuresSection.body}</p>
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-[14px] border border-hairline bg-white p-[22px] transition-[border-color,box-shadow] hover:border-blue-200 hover:shadow-[0_12px_28px_-14px_rgba(37,99,235,0.25)]"
            >
              <div
                className={`flex size-[46px] shrink-0 items-center justify-center rounded-xl ${feature.tint} ${feature.ink}`}
              >
                <Icon name={feature.icon} size={24} />
              </div>
              <div>
                <div className="mb-[5px] text-[15px] font-extrabold">
                  {feature.title}
                </div>
                <div className="text-[13px] leading-[1.55] text-slate-500">
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
