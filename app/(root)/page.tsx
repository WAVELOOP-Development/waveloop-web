import { AboutSection } from "../components/sections/about-section";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import { HeroSection } from "../components/sections/hero-section";
import { ServicesSection } from "../components/sections/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <ServicesSection />
    </>
  );
}
