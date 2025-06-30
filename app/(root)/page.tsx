import { AboutSection } from "../components/sections/about-section";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import HeroSectionNew from '../components/sections/hero-section-new';
import Footer from "../components/sections/footer";
import { ServicesSection } from "../components/sections/services";
import { TrustedVisionariesSection } from "../components/sections/trusted-visionaries";

export default function Home() {
  return (
    <>
      <HeroSectionNew />
      <AboutSection />
      <FeaturedWorkSection />
      <ServicesSection />
      <TrustedVisionariesSection />
      <Footer />
    </>
  );
}
