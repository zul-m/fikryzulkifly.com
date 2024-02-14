import CalculatorSection from "@/src/components/CalculatorSection";
import ContactSection from "@/src/components/ContactSection";
import HeroSection from "@/src/components/HeroSection";
import PostsSection from "@/src/components/PostsSection";
import ServicesSection from "@/src/components/ServicesSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import ViewingSection from "@/src/components/ViewingSection";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <ViewingSection />
      <CalculatorSection />
      <PostsSection />
      <ContactSection />
    </main>
  );
}
