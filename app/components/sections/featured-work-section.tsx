import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

import image1 from "@/public/rescuemed.png";
import image2 from "@/public/resumed-web.png";
import image3 from "@/public/focusfitness.png";
import image4 from "@/public/grocify.png";
import image6 from "@/public/ceylon-events.png";

const projects = [
  { 
    src: image1, 
    alt: "Rescue Med",
    title: "RescueMed",
    description: "RescueMed is a real-time emergency response platform that connects ambulance teams with hospitals to streamline communication during patient transport. It enables secure sharing of vital patient data and estimated arrival times, allowing hospitals to prepare in advance and deliver faster, more effective care.",
    technologies: ["React", "Node.js", "Flutter", "Firebase"],
    category: "Healthcare"
  },
  { 
    src: image2, 
    alt: "Resumed Dashboards",
    title: "Resumed Dashboards",
    description: "The RescueMed hospital web dashboard provides medical staff with real-time updates from incoming ambulances, including patient details, vitals, and estimated arrival times. This allows hospitals to prepare ahead, allocate resources efficiently, and ensure timely and effective emergency care.",
    technologies: ["React", "Node.js", "Flutter", "Firebase"],
    category: "Healthcare"
  },
  { 
    src: image3, 
    alt: "Focus Fitness",
    title: "FocusFitness",
    description: "smart fitness management application that offers user and schedule management, AI-powered personal training, and comprehensive tools for fitness center administration—including class scheduling, member tracking, and secure payment handling.",
    technologies: ["Flutter", "Firebase", "React", "Node.js", "Google Cloud", "Stripe"],
    category: "Health & Fitness"
  },
  { 
    src: image4, 
    alt: "Grocify",
    title: "Grocify",
    description: "Comprehensive e-commerce grocery shopping platform that enables users to browse and purchase products seamlessly while allowing vendors to efficiently manage their inventories, product listings, and orders through a user-friendly dashboard.",
    technologies: ["Flutter", "Python flask", "Firebase", "Google Cloud"],
    category: "E-commerce"
  },
  { 
    src: image6, 
    alt: "CeylonEvents",
    title: "Ceylon Events",
    description: "Versatile event management application that streamlines event creation, user management, and ticket booking. The platform allows organizers to manage events efficiently, while users can easily browse, book, and manage their tickets through a seamless interface.",
    technologies: ["Flutter", "React", "Firebase", "Node.js", "Google Cloud"],
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
              <div className="relative transform transition-transform duration-500 ease-in-out lg:group-hover:-translate-x-full">
                <Image
                  className="rounded-lg object-contain w-full"
                  src={project.src}
                  alt={project.alt}
                  placeholder="blur"
                />
              </div>
              
              {/* Project Details Overlay */}
              <div className="absolute inset-0 text-white p-4 lg:p-6 flex flex-col justify-center transform translate-x-full transition-transform duration-500 ease-in-out lg:group-hover:translate-x-0 rounded-lg overflow-hidden">
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
