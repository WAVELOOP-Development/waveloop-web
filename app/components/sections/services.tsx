import { Palette, Smartphone, Globe, Bot, Shield, Cloud } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";

const services = [
  {
    name: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    href: "/web-development",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-96 object-cover"
      >
        <source src="./web-dev.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Globe,
  },

  {
    name: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    href: "/services/ui-ux-design",
    cta: "View designs",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image src="/ui.jpg" alt="UI/UX Design" fill className="object-cover" />
    ),
    Icon: Palette,
  },
  {
    name: "Cyber Security",
    description: "Speed up your applications and improve user satisfaction.",
    href: "/services/performance",
    cta: "Optimize now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/cyber.jpg"
        alt="Cyber Security"
        fill
        className="object-cover"
      />
    ),
    Icon: Shield,
  },
  {
    name: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    href: "/services/mobile-apps",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/boat.png"
        alt="Mobile Apps"
        fill
        className="object-cover opacity-50"
      />
    ),
    Icon: Smartphone,
  },
  {
    name: "AI Powered Solutions",
    description: "Robust and scalable backend solutions and RESTful APIs.",
    href: "/services/api-development",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        preload="none"
        loop
        autoPlay
        controlsList="false"
        muted
        className="w-full h-96 object-cover bg-gradient-to-b from-black to-transparent"
      >
        <source src="./ai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Bot,
  },
  {
    name: "Cloud Based Services",
    description:
      "Strategic technology consulting to guide your digital transformation.",
    href: "/services/consulting",
    cta: "Get advice",
    className: "col-span-3 lg:col-span-1 ",
    background: (
      <Image
        src="/cloud.jpg"
        alt="Cloud Services"
        fill
        className="object-cover"
      />
    ),
    Icon: Cloud,
  },
];

export function ServicesSection() {
  return (
    <section className="px-8 lg:px-20 py-8 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="mt-2 text-sm lg:text-lg w-full text-gray-600 dark:text-gray-300">
            We offer comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        <BentoGrid>
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
