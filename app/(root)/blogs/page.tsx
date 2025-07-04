"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogData, categories, type Blog } from "@/app/components/blogdata";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogData);
  // const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogData);
    } else {
      setFilteredBlogs(
        blogData.filter((blog) => blog.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#00081C] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="z-10 max-w-4xl mx-auto py-2">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-[#00081C] mb-6 mt-20"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Ideas that spark innovation, Powered by WAVELOOP.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="px-4 max-w-6xl mx-auto mt-8"
        >
          {/* Desktop buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#00081C] text-white shadow-lg shadow-[#00081C]/25"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#00081C] border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="md:hidden flex justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00081C]/50 focus:border-[#00081C] min-w-[200px]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="px-4 max-w-7xl mx-auto pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 overflow-hidden hover:border-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                {/* Header Section */}
                <div className="px-8 py-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>{blog.category}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-4xl font-medium text-gray-900 mb-6 line-clamp-2">
                    {blog.title}
                  </h1>

                  {/* Author Section */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                      <span className="text-white font-medium text-base">
                        {blog.author
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="text-base font-medium text-gray-900">
                        {blog.author}
                      </div>
                      <div className="text-sm text-gray-400">Author</div>
                    </div>
                  </div>
                </div>

                {/* Tech-themed Image */}
                <div className="overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-r from-slate-900 via-blue-900 to-teal-800 relative">
                    {/* Abstract tech pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 192"
                        fill="none"
                      >
                        <defs>
                          <pattern
                            id={`grid-${blog.id}`}
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle
                              cx="20"
                              cy="20"
                              r="1.5"
                              fill="rgba(255,255,255,0.4)"
                            />
                            <line
                              x1="20"
                              y1="20"
                              x2="40"
                              y2="20"
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="1"
                            />
                            <line
                              x1="20"
                              y1="20"
                              x2="20"
                              y2="40"
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="1"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#grid-${blog.id})`}
                        />
                        <polygon
                          points="50,96 150,60 250,96 350,60"
                          fill="none"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="2"
                        />
                        <polygon
                          points="100,144 200,108 300,144 400,108"
                          fill="none"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    {/* Geometric elements */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-orange-500 rotate-12 opacity-80"></div>
                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-teal-400 rounded-full opacity-60"></div>

                    {/* Network connections */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                      <div className="absolute w-20 h-0.5 bg-white/40 transform rotate-45 origin-left"></div>
                      <div className="absolute w-24 h-0.5 bg-white/40 transform -rotate-12 origin-left"></div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="py-20 px-4 bg-white border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#00081C] mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#00081C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00081C]/50 focus:border-[#00081C]/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00081C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#00081C]/90 hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section> */}
    </div>
  );
}
