import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { projects } from "@/app/data/projectsData";
import Link from "next/link";

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-2 lg:gap-4 sm:columns-2">
        {projects.map((project, idx) => {
          const slug = project.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <Link
                href={`/featured-work/${slug}`}
                className="mb-4 block relative shadow-xl group overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Image
                  className="rounded-lg object-contain w-full"
                  src={project.src}
                  alt={project.alt}
                  placeholder="blur"
                />
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}



export default function FeaturedWorkSection() {
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
