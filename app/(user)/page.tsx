import CalculatorSection from "@/components/CalculatorSection";
import ContactSection from "@/components/ContactSection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import RentalSection from "@/components/RentalSection";
import ViewingSection from "@/components/ViewingSection";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HelpSection />
      <ProjectsSection />
      <RentalSection />
      <ViewingSection />
      <CalculatorSection />
      <ContactSection />
    </main>
  );
}
