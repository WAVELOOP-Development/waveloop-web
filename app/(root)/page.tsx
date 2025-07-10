import { AboutSection } from "../components/sections/about-section";
import ExploreBlogs from "../components/sections/exploreBlogs";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import HeroSectionNew from "../components/sections/hero-section-new";
import { TrustedVisionariesSection } from "../components/sections/trusted-visionaries";
import ImpactNumbersPage from "../components/sections/impactNumbers";
import TextButton from "../components/sections/text-button";
import ServicesSection from "./services/page";

export default async function Home() {
  return (
    <>
      <HeroSectionNew />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <TrustedVisionariesSection id="testimonials" />
      <ImpactNumbersPage />
      <ExploreBlogs />
      <TextButton />
    </>
  );
}
