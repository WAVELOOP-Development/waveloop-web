import { BlurFade } from "@/components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-3 sm:mb-4 size-full rounded-lg object-cover"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

export function FeaturedWorkSection() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our Featured Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-800">
            Showcasing our commitment to innovation and excellence.
          </p>
        </div>
        <BlurFadeDemo />
      </div>
    </div>
  );
}
