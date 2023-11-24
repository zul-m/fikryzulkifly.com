import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ViewingSection from "@/components/ViewingSection";
import ContactSection from "@/components/ContactSection";
import RentalSection from "@/components/RentalSection";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <RentalSection />
      <ViewingSection />
      <ContactSection />
    </main>
  );
}
