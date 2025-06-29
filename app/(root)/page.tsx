import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
    </>
  );
}
