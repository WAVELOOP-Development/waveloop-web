/* eslint-disable */
"use client";
import {
  Lightbulb,
  Shield,
  Heart,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  { name: "Navindu Ashen", role: "CEO & Founder", image: "/navindu.jpg" },
  { name: "Limasha Sathsara", role: "Co-Founder", image: "/lim.jpg" },
  { name: "Tharusha Perera", role: "Co-Founder", image: "/tmp.png" },
  { name: "Kasun Karunanayaka", role: "Co-Founder", image: "/kgk1.jpg" },
  { name: "Kavya Samaraweera", role: "Co-Founder", image: "/kavya.jpg" },
  { name: "Kevin Anjelo", role: "Co-Founder", image: "/kevin.jpg" },
  { name: "Sithumini Jagoda", role: "Co-Founder", image: "/sithumini.jpg" },
];

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that drive real business value.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality",
    description:
      "We maintain the highest standards in everything we do, from code quality to customer service, ensuring excellence in every project.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and open communication, working closely with our clients as true partners.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agility",
    description:
      "We adapt quickly to changing requirements and market conditions, delivering solutions that evolve with your business needs.",
  },
];

const achievements = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const services = [
  "Custom Software Development",
  "Mobile Application Development",
  "Cloud Infrastructure & DevOps",
  "Web Application Development",
  "AI & Machine Learning Solutions",
  "Digital Transformation Consulting",
];

export default function AboutUsPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Calculate items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const nextTeamSlide = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTeamSlide = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-70 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/aboutbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto text-start">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 text-left">
            About Us
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-16 max-w-6xl mx-0 leading-relaxed text-left">
            At Waveloop, we blend creativity, technology, and strategy to craft
            impactful digital solutions that drive real results. From innovative
            software development to cutting-edge design and marketing, we equip
            brands with the tools they need to lead, adapt, and thrive in the
            ever evolving digital world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
                Next-gen digital innovators, driving growth worldwide.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed mt-12">
                What began as a team of seven in a study room back at university
                has grown into Waveloop — a dynamic, forward-thinking force
                driving global projects across diverse industries. Our expertise
                spans design, marketing, and technology, allowing us to craft
                bespoke, data driven solutions that align with each client's
                unique vision. We believe in the power of innovative problem
                solving, blending creativity with precision to develop
                strategies that don't just look good on paper but deliver
                measurable impact. From shaping compelling brand identities to
                building robust digital platforms, we partner with businesses to
                unlock growth, embrace change, and stay ahead in an ever
                evolving digital landscape.
              </p>
              <div className="mt-12 flex flex-col md:flex-row gap-8 justify-between items-center">
                <Image
                  src="/"
                  alt="Our team collaborating"
                  width={550}
                  height={550}
                  className="shadow-lg bg-blue-600"
                />
                <Image
                  src="/"
                  alt="Our team collaborating"
                  width={550}
                  height={550}
                  className="shadow-lg bg-blue-600"
                />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mt-12">
                Partnering with leading brands across diverse industries,
                Waveloop excels in building fractional, scalable teams of top
                tier digital professionals. Our collaborations are rooted in
                trust, transparency, and a shared vision for success. We pride
                ourselves on staying ahead of industry trends, continuously
                refining our skills to deliver innovative solutions. By blending
                adaptability with expertise, we empower our clients to navigate
                challenges, seize opportunities, and achieve sustainable growth
                in an ever changing business landscape.
              </p>
            </div>
            {/* <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/aboutus.jpg"
                  alt="Our team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00081C] rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-[#00081C]">4.9/5</p>
                    <p className="text-sm text-gray-600">Client Rating</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-2 border-gray-200 p-6 md:p-12 lg:p-20">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-7xl font-semibold text-black mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how we work with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#00081C] rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-blue-600 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#00081C] mb-4">
                  {value.title}
                </h3>
                gray-50
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind WaveLoop who bring your ideas to
              life.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-8 px-4 ${
                      itemsPerPage === 1
                        ? "grid-cols-1 justify-items-center"
                        : itemsPerPage === 2
                          ? "grid-cols-2"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {teamMembers
                      .slice(
                        pageIndex * itemsPerPage,
                        (pageIndex + 1) * itemsPerPage
                      )
                      .map((member, idx) => (
                        <div
                          key={`${pageIndex}-${idx}`}
                          className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                            itemsPerPage === 1 ? "max-w-sm w-full" : ""
                          }`}
                        >
                          {/* Background Image */}
                          <div className="relative w-full h-80 md:h-96">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2 text-white">
                                {member.name}
                              </h3>
                              <p className="text-lg font-medium text-gray-200 mb-3">
                                {member.role}
                              </p>

                              {/* Optional: Add a subtle border or accent */}
                              <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTeamSlide}
              aria-label="Previous team members"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={currentTeamIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-[#00081C] group-hover:text-blue-600" />
            </button>

            <button
              onClick={nextTeamSlide}
              aria-label="Next team members"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={currentTeamIndex === totalPages - 1}
            >
              <ChevronRight className="w-6 h-6 text-[#00081C] group-hover:text-blue-600" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTeamIndex(idx)}
                  aria-label={`Go to team page ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTeamIndex
                      ? "bg-[#00081C] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
