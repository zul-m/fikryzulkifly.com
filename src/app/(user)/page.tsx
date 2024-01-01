import CalculatorSection from "@/src/components/CalculatorSection";
import ContactSection from "@/src/components/ContactSection";
import HeroSection from "@/src/components/HeroSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import RentalSection from "@/src/components/RentalSection";
import ServicesSection from "@/src/components/ServicesSection";
import ViewingSection from "@/src/components/ViewingSection";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <RentalSection />
      <ViewingSection />
      <CalculatorSection />
      <ContactSection />
    </main>
  );
}
