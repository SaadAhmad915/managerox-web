import { SiteHeader } from "@/app/components/SiteHeader";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { WhySection } from "@/app/components/WhySection";
import { Industries } from "@/app/components/Industries";
import { Testimonials } from "@/app/components/Testimonials";
import { CtaBand } from "@/app/components/CtaBand";
import { Faq } from "@/app/components/Faq";
import { SiteFooter } from "@/app/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <WhySection />
        <Industries />
        <Testimonials />
        <CtaBand />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
