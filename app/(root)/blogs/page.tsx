"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogData, categories, type Blog } from "@/app/data/blogdata";
import BlogCard from "@/app/components/BlogCard";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ComboboxDemo } from "@/app/components/Combobox";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogData);
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
      <div className="max-w-4xl lg:pt-30 pt-16 mb-8 mx-auto">
        <TextAnimate
          animation="slideLeft"
          by="word"
          className="lg:text-6xl text-4xl font-bold py-4 text-center"
          once
        >
          Blog Section
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="word"
          className="lg:text-xl text-sm text-gray-600 max-w-2xl mx-auto text-center"
          once
        >
          Ideas that spark innovation, Powered by WAVELOOP.
        </TextAnimate>
      </div>

      {/* Category selection using Combobox */}
      <div className="flex max-w-7xl px-4 m-auto justify-center lg:mb-16 mb-8">
        <ComboboxDemo
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="px-4 max-w-7xl mx-auto pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
