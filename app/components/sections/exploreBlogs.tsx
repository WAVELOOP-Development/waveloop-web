import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardSwap, { Card } from "@/components/react-bits/CardSwap/CardSwap";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { CalendarDays, Globe, LayoutDashboard } from "lucide-react";
import blogBanner from "@/public/blog.jpg";
import blog1 from "@/public/mathsmaster_cover.jpg";
import blog2 from "@/public/mobile_blog_1.jpeg";
import blog3 from "@/public/uiux.jpg";

const ExploreBlogs = () => {
  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-white lg:pb-52 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-start mb-8">
          <h2 className="text-4xl font-bold text-black mb-2 text-start">
            Explor Our Blogs
          </h2>
          <p className="text-sm lg:text-lg text-gray-600">
            Stay informed with helpful blog posts on modern technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1 space-y-6 md:space-y-8 flex flex-col justify-center h-full">
            <div className="text-center lg:text-left">
              {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#021443] leading-tight">
                Explore Our
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Blogs
              </h2> */}
            </div>
            <div className="bg-[#021443] flex flex-col gap-8 justify-between text-white h-fit rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md lg:max-w-lg mx-auto lg:mx-0 shadow-xl lg:shadow-2xl">
              <div>
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
              </div>
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
            <div className="absolute right-0 top-100">
              <div className="hidden lg:flex lg:items-start lg:justify-start w-full h-full">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <CalendarDays className="w-6 h-6 text-white" />
                      </div>
                      <span className="ml-6">Events</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog1}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          WAVELOOP’s Role as Knowledge Partner at the NSBM Math Master 2025
                        </h4>
                        <p className="text-gray-200 text-start">
                          July 09, 2025 • 5 min read
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <span className="ml-6">Technology</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog2}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          Cross‑Platform Showdown Flutter vs React Native vs Kotlin Multiplatform
                        </h4>
                        <p className="text-gray-200 text-start">
                          July 09, 2025 • 5 min read
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <h3 className="relative text-lg font-semibold text-white px-5 py-3 rounded-t-lg">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <LayoutDashboard className="w-6 h-6 text-white" />
                      </div>
                      <span className="ml-6">Design</span>
                    </h3>
                    <div className="relative w-full h-120 rounded-b-lg overflow-hidden">
                      <Image
                        src={blog3}
                        alt="Modern workspace with laptop and coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start bg-gradient-to-b from-black/80 to-transparent p-5">
                        <h4 className="text-3xl font-semibold text-white mb-1">
                          How to Start Your Journey in UI/UX Design: A Beginner’s Guide
                        </h4>
                        <p className="text-gray-200 text-start">
                          July 10, 2025 • 5 min read
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
