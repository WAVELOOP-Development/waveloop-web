import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

// Import local images
import image1 from "@/public/featured-work/mobile1.jpg";
import image2 from "@/public/featured-work/mobile2.jpg";
import image3 from "@/public/featured-work/mobile3.jpg";
import image4 from "@/public/featured-work/web1.jpg";
import image5 from "@/public/featured-work/web2.jpg";
import image6 from "@/public/featured-work/web3.jpg";

// Array of local image objects
const images = [
  { src: image1, alt: "Featured work image 1" },
  { src: image2, alt: "Featured work image 2" },
  { src: image3, alt: "Featured work image 3" },
  { src: image4, alt: "Featured work image 4" },
  { src: image5, alt: "Featured work image 5" },
  { src: image6, alt: "Featured work image 6" },
];

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
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
    <div className=" bg-white py-16 h-fit">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-4xl font-bold text-black mb-2 text-start">
            Our Featured Work
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our commitment to innovation and excellence.
          </p>
        </div>
        <BlurFadeDemo />
      </div>
    </div>
  );
}