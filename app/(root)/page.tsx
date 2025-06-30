import { AboutSection } from "../components/sections/about-section";
import ExploreBlogs from "../components/sections/exploreBlogs";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import HeroSectionNew from '../components/sections/hero-section-new';
import Footer from "../components/sections/footer";
import { ServicesSection } from "../components/sections/services";
import { TrustedVisionariesSection } from "../components/sections/trusted-visionaries";
import ImpactNumbersPage from "../components/sections/impactNumbers";

export default function Home() {
  return (
    <>
      <HeroSectionNew />
      <AboutSection />
      <FeaturedWorkSection />
      <ServicesSection />
      <TrustedVisionariesSection />
      <ImpactNumbersPage />
      <ExploreBlogs />
      <Footer />
    </>
  );
}
