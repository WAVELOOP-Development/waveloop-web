/* eslint-disable */
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { projects } from "@/app/data/projectsData";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => {
          const slug = project.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <Link
                href={`/featured-work/${slug}`}
                className="
                  mb-6 block relative cursor-pointer
                  rounded-lg overflow-hidden bg-white
                  shadow-lg
                  group
                  transition-transform duration-300 ease-in-out
                  hover:scale-[1.03] hover:shadow-2xl
                "
              >
                <div className="w-full aspect-[4/3] relative rounded-t-lg overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    placeholder="blur"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="
                      object-cover rounded-t-lg
                      transition-transform duration-500 ease-in-out
                      group-hover:scale-105 group-hover:brightness-110
                    "
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 mt-3">
                    {project.category && (
                      <span
                        className="
                        inline-block
                        bg-white border-2 border-gray-300 text-black
                        px-3 py-1 rounded-full text-sm
                      "
                      >
                        {project.category}
                      </span>
                    )}
                    {project.industries && project.industries.length > 0 && (
                      <span
                        className="
                        inline-block
                        bg-white border-2 border-gray-300 text-black
                        px-3 py-1 rounded-full text-sm
                      "
                      >
                        {project.industries.join(", ")}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 transition-colors duration-300 group-hover:text-gray-800">
                    {project.description}
                  </p>
                </div>
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
        <div className="mb-8 md:mb-20">
          <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-8 md:mb-20 text-center">
            Work that <span className="text-blue-600">Solves Problems</span>,
            Builds Brands and{" "}
            <span className="text-blue-600">Drives Growth</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            <div className="sm:w-1/2 w-full mb-4 sm:mb-0">
              <div>
                <p className="text-black font-semibold text-2xl mb-4">
                  What's Waveloop's Product-Driven Strategy?
                </p>
                <p className="text-gray-700 text-base">
                  Success in tech isn't chance — it's built on innovation,
                  precision, and user-first design. At Waveloop, we craft
                  digital solutions backed by cutting-edge technology, strategic
                  thinking, and designs that scale with your business.
                </p>
              </div>
              <div className="mt-8 md:mt-20 bg-[#021443] p-6 rounded-xl  shadow-sm max-w-lg">
                <p className="text-white font-semibold text-xl md:text-2xl mb-3">
                  Don't Miss the Digital Leap!
                </p>
                <p className="text-gray-300 text-base mb-4">
                  Looking to transform your business idea into a powerful
                  platform? Let's talk. Schedule a free consultation with
                  Waveloop and get actionable insights on how we can build your
                  next big success.
                </p>
                <Link href="/contact-us">
                  <InteractiveHoverButton className="pointer">
                    Contact Us
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
            <div className="sm:w-1/2 w-full flex justify-center">
              <Image
                src="/"
                alt="Work that drives growth"
                width={600}
                height={525}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <div className="text-start mb-8 w-full sm:w-auto">
            <h2 className="text-4xl font-bold text-black mb-2 lg:mb-8 text-start">
              Our Featured Work
            </h2>
            {/* Mobile: show under the heading */}
            <div className="mt-2 flex sm:hidden">
              <p className="text-sm text-gray-600">
                In today's crowded digital world, it's not about
                <br /> being louder—it's about being{" "}
                <span className="text-blue-600 font-semibold">sharper</span>.
              </p>
            </div>
          </div>
          {/* Desktop: show on the right */}
          <div className="ml-auto  items-center mt-2 hidden sm:flex">
            <p className="text-sm lg:text-lg text-gray-600">
              In today's crowded digital world, it's not about
              <br /> being louder—it's about being{" "}
              <span className="text-blue-600 font-semibold">sharper</span>.
            </p>
          </div>
        </div>
        <BlurFadeDemo />
      </div>
    </div>
  );
}
