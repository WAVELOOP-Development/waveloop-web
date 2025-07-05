"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Blog } from "@/app/components/blogdata";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <motion.article
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="bg-white border border-gray-200 overflow-hidden hover:border-gray-800 transition-all duration-300 hover:shadow-lg cursor-pointer"
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
              <svg className="w-full h-full" viewBox="0 0 400 192" fill="none">
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
    </Link>
  );
}
