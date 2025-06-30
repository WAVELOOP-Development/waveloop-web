import { AboutSection } from "../components/sections/about-section";
import ExploreBlogs from "../components/sections/exploreBlogs";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import { HeroSection } from "../components/sections/hero-section";
import ImpactNumbersPage from "../components/sections/impactNumbers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <FeaturedWorkSection/>
      <ImpactNumbersPage />
      <ExploreBlogs />
    </>
  );
}
