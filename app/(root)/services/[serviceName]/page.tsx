import { notFound } from "next/navigation";
import { services } from "@/app/data/servicesData";

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.href.replace("/services/", ""),
  }));
}

interface ServicePageProps {
  params: Promise<{
    serviceName: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => {
    const slugFromHref = s.href.replace("/services/", "");
    return slugFromHref === resolvedParams.serviceName;
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Background/Media */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              {service.background}
            </div>

            {/* Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                About This Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Service Overview
                </h3>
                <p className="text-gray-600">
                  Our {service.name.toLowerCase()} service provides
                  comprehensive solutions tailored to your specific needs. We
                  use modern technologies and industry best practices to deliver
                  exceptional results that drive your business forward.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {service.cta}
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
