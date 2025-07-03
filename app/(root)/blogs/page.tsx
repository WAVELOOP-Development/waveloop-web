'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock, Eye, Heart, User } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/app/components/sections/footer';
import { blogData, categories, type Blog } from '@/app/components/blogdata';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogData);
  const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogData);
    } else {
      setFilteredBlogs(blogData.filter(blog => blog.category === selectedCategory));
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
        className="relative py-30 px-4 text-center"
      >
        <div className="z-10 max-w-4xl mx-auto py-2">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-[#00081C] mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover insights, tutorials, and the latest trends in technology and development
          </motion.p>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-4 max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#00081C] text-white shadow-lg shadow-[#00081C]/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#00081C] border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="px-4 max-w-7xl mx-auto pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00081C]/30 hover:shadow-xl hover:shadow-[#00081C]/10 transition-all duration-500 cursor-pointer ${
                  blog.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {blog.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-[#00081C] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#00081C]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#00081C] mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-[#00081C] px-2 py-1 rounded-md text-xs border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {blog.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {blog.likes}
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredBlog === blog.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#00081C]/95 via-[#00081C]/85 to-[#00081C]/60 flex flex-col justify-center p-6"
                    >
                      <div className="text-white">
                        <h4 className="text-2xl font-bold mb-4">{blog.title}</h4>
                        <p className="text-sm text-gray-200 leading-relaxed">{blog.excerpt}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="py-20 px-4 bg-white border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#00081C] mb-6">Stay Updated</h2>
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
      </motion.section>

      <Footer />
    </div>
  );
}
