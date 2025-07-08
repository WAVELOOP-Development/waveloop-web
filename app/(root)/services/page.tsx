"use client";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { services } from "@/app/data/servicesData";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();

  const handleServiceClick = (href: string) => {
    router.push(href);
  };

  return (
    <section id="services" className="px-8 lg:px-20 py-8 lg:py-16 bg-white">
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
            <BentoCard
              key={service.name}
              name={service.name}
              className={service.className}
              background={service.background}
              Icon={service.Icon}
              description={service.description}
              href={service.href}
              cta={service.cta}
              onClick={() => handleServiceClick(service.href)}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
