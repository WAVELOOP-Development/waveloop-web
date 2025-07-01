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
      <Image
        src="/boat.png"
        alt="Web Development"
        fill
        className="object-cover opacity-50"
      />
    ),
    Icon: Globe,
  },
  {
    name: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    href: "/services/mobile-apps",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
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
    name: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    href: "/services/ui-ux-design",
    cta: "View designs",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/boat.png"
        alt="UI/UX Design"
        fill
        className="object-cover opacity-50"
      />
    ),
    Icon: Palette,
  },
  {
    name: "AI Powerd Solutions",
    description: "Robust and scalable backend solutions and RESTful APIs.",
    href: "/services/api-development",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/boat.png"
        alt="AI Solutions"
        fill
        className="object-cover opacity-50"
      />
    ),
    Icon: Bot,
  },
  {
    name: "CYBER Security and Data Protection",
    description: "Speed up your applications and improve user satisfaction.",
    href: "/services/performance",
    cta: "Optimize now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/boat.png"
        alt="Cyber Security"
        fill
        className="object-cover opacity-50"
      />
    ),
    Icon: Shield,
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
          src="/boat.png"
          alt="Cloud Services"
          fill
          className="object-cover opacity-50"
        />
    ),
    Icon: Cloud,
  },
];

export function ServicesSection() {
  return (
    <section className="px-20 py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
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
