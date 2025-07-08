"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type Blog } from "@/app/data/blogdata";

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
            <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
              <Image
                src={blog.authorImage || "/default-img.png"}
                alt={blog.author}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-base font-medium text-gray-900">
                {blog.author}
              </div>
              <div className="text-sm text-gray-400">
                {blog.authorDesignation}
              </div>
            </div>
          </div>
        </div>

        {/* Tech-themed Image */}
        <div className="overflow-hidden">
          <div className="w-full h-48 relative">
            <div className="absolute inset-0">
              <Image
                src={blog.image}
                alt={blog.id.toString()}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
