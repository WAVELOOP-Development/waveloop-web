import { AboutSection } from "../components/sections/about-section";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import Footer from "../components/sections/footer";
import { HeroSection } from "../components/sections/hero-section";
import { ServicesSection } from "../components/sections/services";
import { TrustedVisionariesSection } from "../components/sections/trusted-visionaries";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <ServicesSection />
      <TrustedVisionariesSection />
      <Footer />
    </>
  );
}
