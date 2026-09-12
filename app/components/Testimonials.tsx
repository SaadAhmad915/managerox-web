import { Container, Pill } from "@/app/components/ui";
import { testimonials, testimonialsSection } from "@/app/data/content";

export function Testimonials() {
  return (
    <section className="border-t border-hairline bg-slate-50">
      <Container className="py-19">
        <div className="mb-10 text-center">
          <Pill className="bg-slate-200 text-slate-700">
            {testimonialsSection.eyebrow}
          </Pill>
          <h2 className="mt-4 text-[26px] font-extrabold tracking-[-0.8px] sm:text-[32px]">
            {testimonialsSection.heading}
          </h2>
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-[18px] rounded-[14px] border border-hairline bg-white p-6"
            >
              <blockquote className="text-sm leading-[1.65] text-slate-700">
                {`“${testimonial.quote}”`}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-sm font-extrabold text-blue-700">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <div className="text-[13.5px] font-extrabold">
                    {testimonial.name}
                  </div>
                  <div className="text-[11.5px] text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
                <div
                  className="text-xs tracking-[1px] text-amber-500"
                  aria-label="Rated 5 out of 5"
                >
                  ★★★★★
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
