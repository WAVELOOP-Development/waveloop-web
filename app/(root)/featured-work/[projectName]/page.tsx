
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projectsData";
import Image from "next/image";

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
        <div className="flex items-start space-x-2 text-gray-400">
          Featured Work
          <span className="text-black ml-2">›</span>
          <span className="text-black">{project.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-4">
        <div className="pb-8 border-b border-gray-300 mt-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-8 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-md lg:text-lg text-gray-600 max-w-6xl text-left mb-6">
            {project.detailedDescription}
          </p>
          {/* Additional Project Info */}
          <div className="flex flex-wrap gap-6 mb-2">
            {/* Category */}
            {project.category && (
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            )}
            {/* Industries */}
            {project.industries && project.industries.length > 0 && (
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {project.industries.join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Image Square */}
            <div className="aspect-square relative overflow-hidden shadow-xl rounded-lg">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Why Choose Us Square */}
            {/* <div className="aspect-square bg-white rounded-2xl px-8 flex flex-col">
              <div className="mb-8">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Why Choose This Project?
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Our Commitment
                </h2>
                <p className="text-gray-600 mb-2">
                  We bring together expertise, innovation, and dedication to
                  deliver outstanding results for your business.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className={`border border-gray-400 rounded-lg p-4 bg-white ${
                      reason.length > 30 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <p className="text-base font-semibold text-black text-center">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="aspect-square bg-white rounded-lg flex flex-col mt-4 px-8">
              <div className="mb-6">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Key Features
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Project Highlights
                </h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
              </div>
              <div className="space-y-3">
                {project.keyFeatures.map((keyFeatures, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-black font-medium">
                      {keyFeatures}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Square */}
            <div className="aspect-square bg-white rounded-lg flex flex-col mt-4 px-8">
              <div className="mb-2">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Project Impact
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Measurable Results
                </h2>
                <p className="text-gray-600 mb-2">
                  Our {project.title} delivers measurable results that drive
                  growth and efficiency.
                </p>
              </div>
              <div className="space-y-3">
                {project.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-black font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Square */}
            <div className="aspect-square bg-white rounded-lg flex flex-col mt-4 px-8">
              <div className="mb-2">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Development Process
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Our Approach
                </h2>
                <p className="text-gray-600 mb-2">
                  We follow a structured process to ensure successful project
                  delivery.
                </p>
              </div>
              <ol className="list-decimal list-inside space-y-3">
                {project.process.map((step, index) => (
                  <li key={index} className="text-lg text-black font-medium">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
