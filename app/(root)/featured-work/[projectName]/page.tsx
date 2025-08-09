/* eslint-disable */
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projectsData";
import Image from "next/image";
import {
  AlertCircle,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}

interface ProjectPageProps {
  params: Promise<{
    projectName: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => {
    const slug = p.title.replace(/\s+/g, "-").toLowerCase();
    return slug === resolvedParams.projectName;
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 lg:pt-30 pt-20">
        <div className="flex items-start space-x-2 text-gray-400 text-xs sm:text-base flex-wrap">
          Featured Work
          <span className="text-black ml-2">›</span>
          <span className="text-black">{project.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-4">
        <div className="pb-8 border-b border-gray-300 mt-6 sm:mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-black mb-4 sm:mb-8 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-600 max-w-6xl text-left mb-4 sm:mb-6">
            {project.description}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-6 mb-2">
              {project.category && (
                <span
                  className="inline-block bg-white border-2 border-gray-300 text-black
                        px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {project.category}
                </span>
              )}
              {project.industries && project.industries.length > 0 && (
                <span
                  className="inline-block bg-white border-2 border-gray-300 text-black
                        px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {project.industries.join(", ")}
                </span>
              )}
            </div>
            <div className="flex flex-row items-start xs:items-center justify-between gap-4 xs:gap-6 md:gap-24 w-full md:w-auto">
              <div className="flex flex-col items-center gap-1 sm:gap-2 ">
                <div className="text-black font-semibold text-xs md:text-base">
                  Duration
                </div>
                <div className="text-blue-600 font-semibold text-xs md:text-base">
                  5 months
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2 ">
                <div className="text-black font-semibold text-xs md:text-base">
                  Year
                </div>
                <div className="text-blue-600 font-semibold text-xs md:text-base">
                  2024
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <div className="text-black font-semibold text-xs md:text-base">
                  Region
                </div>
                <div className="text-blue-600 font-semibold text-xs md:text-base">
                  Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image Full Width */}
      <div className="max-w-6xl mx-auto mt-4 sm:mt-8 px-4 sm:px-4">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/7] overflow-hidden shadow-xl rounded-lg">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Content Grid Section */}
      <section className="py-6 sm:py-10 md:py-15 bg-white px-4">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="mb-4 sm:mb-6 flex flex-col md:flex-row items-start md:justify-between gap-4">
            <p className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold mb-2 md:mb-4">
              [Project Overview]
            </p>
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {project.detailedDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
                <div className="bg-gray-100 rounded-lg h-auto flex items-start p-3 sm:p-4 md:p-6 flex-col">
                  <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black mb-2" />
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
                    Problem
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-auto flex items-start p-3 sm:p-4 md:p-6 flex-col">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black mb-2" />
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
                    Goal
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-auto flex items-start p-3 sm:p-4 md:p-6 flex-col">
                  <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black mb-2" />
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
                    Solution
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-auto flex items-start p-3 sm:p-4 md:p-6 flex-col">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black mb-2" />
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
                    Outcome
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 sm:mt-16 mb-10 sm:mb-16">
            <p className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold mb-2 sm:mb-4 md:mb-6">
              [In Practice: What We Do & Deliver]
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2 sm:mb-4 md:mb-6 text-center">
              Our Creative Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
              We help businesses streamline their operations and enhance
              productivity through innovative solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 w-full">
              <div className="bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-start w-full">
                <span className="text-lg sm:text-xl font-semibold text-gray-500 mb-2 sm:mb-4">
                  01
                </span>
                <span className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-4">
                  Discovery and Vision Alignment
                </span>
                <p className="text-gray-600 text-start text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-start w-full">
                <span className="text-lg sm:text-xl font-semibold text-gray-500 mb-2 sm:mb-4">
                  02
                </span>
                <span className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-4">
                  Discovery and Vision Alignment
                </span>
                <p className="text-gray-600 text-start text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-start w-full">
                <span className="text-lg sm:text-xl font-semibold text-gray-500 mb-2 sm:mb-4">
                  03
                </span>
                <span className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-4">
                  Discovery and Vision Alignment
                </span>
                <p className="text-gray-600 text-start text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2 sm:mb-4 md:mb-6 text-start">
              Strategic Design & Digital Thinking <br /> for Brands That Scale
            </h2>
            <div className="max-w-6xl mx-auto mt-4 sm:mt-8">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/7] overflow-hidden shadow-xl rounded-lg mb-6">
                <Image
                  src={project.src1}
                  alt={project.alt}
                  fill
                  className="object-cover rounded-lg"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={project.src2}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-lg"
                    placeholder="blur"
                  />
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={project.src3}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-lg"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="max-w-6xl mx-auto text-center">
              <Link href="/contact-us">
                <div className="group flex items-center justify-center gap-6 text-left transition-all duration-300 hover:underline focus:outline-none focus:underline mx-auto">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed flex flex-col">
                    <span className=" text-black">Let's Take Your</span>
                    <span className=" text-black">
                      Digital Strategy, to the Next Level
                    </span>
                  </div>
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
