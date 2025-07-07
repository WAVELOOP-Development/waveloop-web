import {
  LucideIcon,
  Code,
  Smartphone,
  Cloud,
  Brain,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import uiUxBanner from "@/public/uiux.jpg";
import cyberBanner from "@/public/security.jpg";
import cloudServicesBanner from "@/public/cloud-com-2.jpg";

export interface Service {
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
  Icon: LucideIcon;
}

export const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    href: "/services/web-development",
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
        <source src="./web-dev-2.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Code,
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
        src={uiUxBanner}
        alt="UI/UX Design"
        fill
        className="object-cover"
      />
    ),
    Icon: LayoutDashboard,
  },
  {
    name: "Cyber Security",
    description: "Speed up your applications and improve user satisfaction.",
    href: "/services/cyber-security",
    cta: "Optimize now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={cyberBanner}
        alt="Cyber Security"
        fill
        className="object-cover"
      />
    ),
    Icon: ShieldCheck,
  },
  {
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    href: "/services/mobile-development",
    cta: "Explore",
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
        <source src="./mobile-dev.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Smartphone,
  },

  {
    name: "AI Powered Solutions",
    description: "Robust and scalable backend solutions and RESTful APIs.",
    href: "/services/ai-powered-solutions",
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
        <source src="./ai-2.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    Icon: Brain,
  },
  {
    name: "Cloud Based Services",
    description:
      "Strategic technology consulting to guide your digital transformation.",
    href: "/services/cloud-based-services",
    cta: "Get advice",
    className: "col-span-3 lg:col-span-1 ",
    background: (
      <Image
        src={cloudServicesBanner}
        alt="Cloud Services"
        fill
        className="object-cover"
      />
    ),
    Icon: Cloud,
  },
];
