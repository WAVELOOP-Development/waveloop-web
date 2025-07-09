"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blogUtils";
import { formatDate } from "@/lib/clientUtils";

interface SampleBlogCardGridProps {
  blog: BlogPost;
  index: number;
}

export default function SampleBlogCardGrid({
  blog,
  index,
}: SampleBlogCardGridProps) {
  return (
    <Link href={`/sampleBlog/${blog.slug}`}>
      <motion.article
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="bg-white border border-gray-200 overflow-hidden hover:border-gray-800 transition-all duration-300 hover:shadow-lg cursor-pointer"
      >
        {/* Header Section */}
        <div className="px-8 flex flex-col justify-between py-6 h-100">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 mb-6">
              <span>{formatDate(blog.dateCreated)}</span>
              <span>{blog.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-medium text-gray-900 mb-6 line-clamp-2">
              {blog.title}
            </h1>
          </div>

          {/* Author Section */}
          <div className="flex h-full items-start mb-6">
            <div>
              <div className="text-base font-medium text-gray-900 line-clamp-5">
                {blog.metaDescription}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-md font-medium text-gray-900 dark:text-white">
                {blog.author}
              </div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
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
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index < 3}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
