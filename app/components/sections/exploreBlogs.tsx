import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardSwap, { Card } from "@/components/react-bits/CardSwap/CardSwap";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import blogBanner from "@/public/blog.jpg";
import blog1 from "@/public/kota.jpg";
import blog2 from "@/public/kota2.jpg";
import blog3 from "@/public/navindu.jpg";

const ExploreBlogs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          <div className="order-1 lg:order-1 space-y-6 md:space-y-8 flex flex-col justify-center h-full">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#021443] leading-tight">
                Explore Our
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Blogs
              </h2>
            </div>
            <div className="bg-[#021443] text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md lg:max-w-lg mx-auto lg:mx-0 shadow-xl lg:shadow-2xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Explore Ideas
                <br />
                That Inspire Innovation
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Get insights, trends, and expert takes on tech, AI, security &
                everything shaping the digital future.
                <br />
                <span className="font-medium">
                  Straight from the minds at WAVELOOP.
                </span>
              </p>
              <Link href="/blogs" className="cursor-pointer text-black">
                <InteractiveHoverButton className="pointer">
                  Explore
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
          <div className="order-2 lg:order-2 relative flex items-center justify-center h-full">
            <div className="lg:hidden relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
              <div className="relative h-full w-full">
                <Image
                  src={blogBanner}
                  alt="Modern workspace with laptop and creative setup"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/20 rounded-2xl" />
              </div>
            </div>
            <div className="absolute right-0 bottom-15">
              <div className="hidden lg:flex lg:items-start lg:justify-start w-full h-full">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 transition-colors"></div>
                      </div>
                      <span className="ml-12">Blog 1</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog1}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          10 Tips for Giving Zero Fucks!
                        </h4>
                        <p className="text-gray-200 text-start">
                          March 15, 2024 • 5 min read
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 transition-colors"></div>
                      </div>
                      <span className="ml-12">Blog 2</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog2}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          5 Tips Measure Your Penis
                        </h4>
                        <p className="text-gray-200 text-start">
                          March 15, 2024 • 5 min read
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 transition-colors"></div>
                      </div>
                      <span className="ml-12">Blog 3</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog3}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          20 Tips for Better Life Without a Girlfriend
                        </h4>
                        <p className="text-gray-200 text-start">
                          March 15, 2024 • 5 min read
                        </p>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreBlogs;
