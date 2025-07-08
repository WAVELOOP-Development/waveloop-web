import { notFound } from "next/navigation";
import { services } from "@/app/data/servicesData";
import Link from "next/link";
import { ArrowRight, Star, Target, Shield, Lightbulb } from "lucide-react";

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

  const ServiceIcon = service.Icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-12 bg-gradient-to-br from-blue-600 via-blue-700 to-[#021443] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3 mt-8">
              <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <ServiceIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/90 text-sm font-medium">
                Professional Services
              </span>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              {service.name}
            </h1>

            <p className="text-base lg:text-lg text-white/90 max-w-3xl mb-4 leading-relaxed">
              {service.detailedDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 text-base shadow-lg">
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Media & Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Service Media */}
              <div>
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                  {service.background}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Right Side - Why Choose Us */}
              <div>
                <div className="mb-12">
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    Why Choose WAVELOOP
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Our Commitment
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We bring together expertise, innovation, and dedication to
                    deliver outstanding results for your business
                  </p>
                </div>

                <div className="space-y-6">
                  {service.whyChooseUs.slice(0, 4).map((reason, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index % 3 === 0 && (
                          <Shield className="h-5 w-5 text-blue-600" />
                        )}
                        {index % 3 === 1 && (
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                        )}
                        {index % 3 === 2 && (
                          <Target className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {reason}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Business Impact
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Measurable Results
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our {service.name.toLowerCase()} solutions deliver measurable
                  results that drive growth and efficiency across your
                  organization.
                </p>

                <div className="space-y-6">
                  {service.benefits.slice(0, 6).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Star className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-lg text-gray-700 font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Let&apos;s discuss how our {service.name.toLowerCase()}{" "}
                    solutions can help your business achieve its goals.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link href="/contact-us">
                    <button className="w-full bg-[#021443] hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                      Get Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
