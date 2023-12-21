import CalculatorSection from "@/components/CalculatorSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import RentalSection from "@/components/RentalSection";
import ViewingSection from "@/components/ViewingSection";
import WhyUsSection from "@/components/WhyUsSection";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <ProjectsSection />
      <RentalSection />
      <ViewingSection />
      <CalculatorSection />
      <ContactSection />
    </main>
  );
}
