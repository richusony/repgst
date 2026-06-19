import { BenefitsSection } from "@/src/components/sections/BenefitsSection";
import { CTASection } from "@/src/components/sections/CTASection";
import { FAQSection } from "@/src/components/sections/FAQSection";
import { FeaturesSection } from "@/src/components/sections/FeaturesSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { MetricsSection } from "@/src/components/sections/MetricsSection";
import { PricingPreviewSection } from "@/src/components/sections/PricingPreviewSection";
import { TestimonialsSection } from "@/src/components/sections/TestimonialsSection";
import { WorkflowSection } from "@/src/components/sections/WorkflowSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <WorkflowSection />
      <BenefitsSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
