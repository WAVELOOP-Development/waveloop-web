import { AboutSection } from "../components/sections/about-section";
import { FeaturedWorkSection } from "../components/sections/featured-work-section";
import HeroSectionNew from '../components/sections/hero-section-new';

export default function Home() {
  return (
    <>
      <HeroSectionNew />
      <AboutSection/>
      <FeaturedWorkSection/>
    </>
  );
}
