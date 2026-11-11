import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedSolution } from "@/components/home/FeaturedSolution";
import { IndustriesOverview } from "@/components/home/IndustriesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <FeaturedSolution />
      <IndustriesOverview />
      <WhyChooseUs />
      <DevelopmentProcess />
      <PortfolioPreview />
      <TestimonialsSection />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
