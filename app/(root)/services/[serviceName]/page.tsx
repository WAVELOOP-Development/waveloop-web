import { notFound } from "next/navigation";
import { services } from "@/app/data/servicesData";
import Link from "next/link";
import { Target } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 py-4 lg:pt-30 pt-20">
        <div className="flex items-start space-x-2 text-gray-400">
          Services
          <span className="text-black ml-2">›</span>
          <span className="text-black">{service.name}</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-4">
        <div className="pb-8 border-b border-gray-300 mt-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-8 max-w-4xl">
            {service.name}
          </h1>
          <p className="text-md lg:text-lg text-gray-600 max-w-6xl text-left">
            {service.detailedDescription}
          </p>
        </div>
      </div>

      {/* Content Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Media Square */}
            <div className="aspect-square relative overflow-hidden shadow-xl rounded-lg">
              <div className="absolute inset-0">{service.background}</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Why Choose Us Square */}
            <div className="aspect-square bg-white rounded-2xl px-8 flex flex-col">
              <div className="mb-8">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Why Choose WAVELOOP?
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Our Commitment
                </h2>
                <p className="text-gray-600 mb-2">
                  We bring together expertise, innovation, and dedication to
                  deliver outstanding results for your business
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whyChooseUs.map((reason, index) => (
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
            </div>

            {/* Benefits Square */}
            <div className="aspect-square bg-white rounded-lg flex flex-col mt-4 px-8">
              <div className="mb-6">
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Business Impact
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
                  Measurable Results
                </h2>
                <p className="text-gray-600 mb-2">
                  Our {service.name.toLowerCase()} solutions deliver measurable
                  results that drive growth and efficiency.
                </p>
              </div>

              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-black font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Square */}
            <div className="aspect-square bg-blue-600 rounded-lg p-8 flex flex-col justify-center items-center text-center text-white mt-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-8">
                Let&apos;s discuss how our {service.name.toLowerCase()}{" "}
                solutions can help your business achieve its goals.
              </p>
              <Link href="/contact-us">
                <button className="bg-white text-[#021443] font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
