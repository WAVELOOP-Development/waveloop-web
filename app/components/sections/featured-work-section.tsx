import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

import image1 from "@/public/rescuemed.png";
import image2 from "@/public/resumed-web.png";
import image3 from "@/public/focusfitness.png";
import image4 from "@/public/grocify.png";
import image5 from "@/public/petplus.png";
import image6 from "@/public/ceylon-events.png";
import image7 from "@/public/cey-web.png";

const images = [
  { src: image1, alt: "Rescue Med" },
  { src: image2, alt: "Resumed Web" },
  { src: image3, alt: "Focus Fitness" },
  { src: image4, alt: "Grocify" },
  { src: image5, alt: "PetPlus" },
  { src: image6, alt: "CeylonEvents" },
  { src: image7, alt: "CeylonEvents Web" },
];

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-2 lg:gap-4 sm:columns-2">
        {images.map((image, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <div className="mb-4">
              <Image
                className="rounded-lg object-contain"
                src={image.src}
                alt={image.alt}
                placeholder="blur"
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

export function FeaturedWorkSection() {
  return (
    <div className="bg-white py-8 lg:py-16 h-fit">
      <div className="max-w-6xl px-8 lg:px-0 mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-4xl font-bold text-black mb-2 text-start">
            Our Featured Work
          </h2>
          <p className="text-sm lg:text-lg text-gray-600">
            Showcasing our commitment to innovation and excellence.
          </p>
        </div>
        <BlurFadeDemo />
      </div>
    </div>
  );
}
