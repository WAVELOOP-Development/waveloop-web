'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, Shield, Heart, Zap, Star, CheckCircle, ArrowRight, ChevronLeft, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const teamMembers = [
  { name: "Navindu Ashen", role: "CEO & Founder", image: "/navindu.jpg" },
  { name: "Limasha Sathsara", role: "Co-Founder", image: "/lim.jpg" },
  { name: "Tharusha Perera", role: "Co-Founder", image: "/tmp.png" },
  { name: "Kasun Karunanayaka", role: "Co-Founder", image: "/kgk1.jpg" },
  { name: "Kavya Samaraweera", role: "Co-Founder", image: "/kavya.jpg" },
  { name: "Kevin Anjelo", role: "Co-Founder", image: "/kevin.jpg" },
  { name: "Sithumini Jagoda", role: "Co-Founder", image: "/sithumini.jpg" }
];

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that drive real business value."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality",
    description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring excellence in every project."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication, working closely with our clients as true partners."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agility",
    description: "We adapt quickly to changing requirements and market conditions, delivering solutions that evolve with your business needs."
  }
];

const achievements = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "4+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" }
];

const services = [
  "Custom Software Development",
  "Mobile Application Development", 
  "Cloud Infrastructure & DevOps",
  "Web Application Development",
  "AI & Machine Learning Solutions",
  "Digital Transformation Consulting"
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
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative  pt-40 px-4 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#00081C] mb-6"
          >
            About WaveLoop
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;re a passionate team of developers and innovators dedicated to transforming businesses through cutting-edge technology solutions.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#00081C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#our-story"
              className="inline-flex items-center gap-2 border border-gray-300 text-[#00081C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        id="our-story"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                WaveLoop emerged from a shared passion for creating software that makes a real difference.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began when a group of experienced developers recognized the need for a more collaborative, 
                client-focused approach to software development. We saw businesses struggling with outdated systems 
                and complex digital transformations, and we knew we could help.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to be a trusted partner for businesses of all sizes, from innovative startups 
                to established enterprises, helping them navigate the digital landscape and achieve their goals 
                through technology.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#00081C] rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-blue-600 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#00081C] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#00081C] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section with Carousel */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind WaveLoop who bring your ideas to life.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-8 px-4 ${
                    itemsPerPage === 1 
                      ? 'grid-cols-1 justify-items-center' 
                      : itemsPerPage === 2 
                      ? 'grid-cols-2' 
                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {teamMembers
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((member, idx) => (
                        <motion.div
                          key={`${pageIndex}-${idx}`}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 ${
                            itemsPerPage === 1 ? 'max-w-sm w-full' : ''
                          }`}
                        >
                          <div className="relative w-full h-64">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-[#00081C] mb-2">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>

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
                      ? 'bg-[#00081C] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in creating custom software solutions that drive business growth and digital transformation. 
                Our comprehensive services cover the entire development lifecycle.
              </p>
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Our services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00081C]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#00081C] mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how we can help you achieve your goals with innovative technology solutions.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#00081C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 border border-gray-300 text-[#00081C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
