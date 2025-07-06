import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

import image1 from "@/public/rescuemed.png";
import image2 from "@/public/resumed-web.png";
import image3 from "@/public/focusfitness.png";
import image4 from "@/public/grocify.png";
import image5 from "@/public/petplus.png";
import image6 from "@/public/ceylon-events.png";
import image7 from "@/public/cey-web.png";

const projects = [
  { 
    src: image1, 
    alt: "Rescue Med",
    title: "RescueMed",
    description: "Emergency medical assistance platform connecting patients with healthcare providers",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Healthcare"
  },
  { 
    src: image2, 
    alt: "Resumed Web",
    title: "ResumedWeb",
    description: "Professional resume builder with modern templates and AI-powered suggestions",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Productivity"
  },
  { 
    src: image3, 
    alt: "Focus Fitness",
    title: "FocusFitness",
    description: "Comprehensive fitness tracking app with personalized workout plans",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Health & Fitness"
  },
  { 
    src: image4, 
    alt: "Grocify",
    title: "Grocify",
    description: "Smart grocery shopping app with AI-powered meal planning and budget tracking",
    technologies: ["Flutter", "Python", "PostgreSQL"],
    category: "E-commerce"
  },
  { 
    src: image5, 
    alt: "PetPlus",
    title: "PetPlus",
    description: "Complete pet care management system with vet appointments and health tracking",
    technologies: ["Vue.js", "Express.js", "MySQL"],
    category: "Pet Care"
  },
  { 
    src: image6, 
    alt: "CeylonEvents",
    title: "Ceylon Events",
    description: "Event management platform for organizing and discovering local events",
    technologies: ["React", "GraphQL", "AWS"],
    category: "Events"
  },
  { 
    src: image7, 
    alt: "CeylonEvents Web",
    title: "Ceylon Events Web",
    description: "Web portal for Ceylon Events with advanced event discovery features",
    technologies: ["Next.js", "Prisma", "Vercel"],
    category: "Events"
  },
];

function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-2 lg:gap-4 sm:columns-2">
        {projects.map((project, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <div className="mb-4 relative shadow-xl group overflow-hidden rounded-lg cursor-pointer">
              {/* Project Image */}
              <div className="relative transform transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
                <Image
                  className="rounded-lg object-contain w-full"
                  src={project.src}
                  alt={project.alt}
                  placeholder="blur"
                />
              </div>
              
              {/* Project Details Overlay */}
              <div className="absolute inset-0 text-white p-4 lg:p-6 flex flex-col justify-center transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-lg overflow-hidden">
                {/* Background Image with Reduced Opacity */}
                <div className="absolute inset-0 z-0">
                  <Image
                    className="w-full h-full object-cover opacity-40"
                    src={project.src}
                    alt={project.alt}
                    placeholder="blur"
                  />
                  {/* Gradient Overlay for Better Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-white/80 "></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-2 lg:space-y-3">
                  <div className="inline-block px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 lg:gap-2 mt-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2 py-1 bg-white/20 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
