import { notFound } from "next/navigation";
import React from "react";
import { ChevronUp } from "lucide-react";
import { type Blog } from "@/app/components/blogdata";
import Link from "next/link";

async function getBlogPost(blogId: string): Promise<Blog | null> {
  try {
    const { blogData } = await import("@/app/components/blogdata");

    const blog = blogData.find((blog) => blog.id.toString() === blogId);

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const { blogData } = await import("@/app/components/blogdata");

    return blogData.map((blog) => ({
      blogId: blog.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

interface BlogDetailPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const blog = await getBlogPost(resolvedParams.blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 mt-30">
        <div className="flex items-center space-x-2 text-gray-600">
          <Link href="/blogs" className="hover:text-black">
            Blog
          </Link>
          <span className="text-gray-400">›</span>
          <span>{blog.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Title Section */}
        <div className="mb-12 pb-8 border-b border-gray-300 mt-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-8 max-w-4xl">
            {blog.title}
          </h1>

          {/* Author Info */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  {blog.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-black">{blog.author}</div>
                <div className="text-gray-600">Associate Tech Lead</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 md:ml-auto">
              <div className="text-gray-600 mb-4 md:mb-0">
                Published on:{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {/* <div className="flex items-center space-x-2">
                <span className="text-gray-600">Share on:</span>
                <div className="flex space-x-2">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 opacity-90"></div>
            </div>
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <defs>
                  <pattern
                    id="tech-pattern"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="40" cy="40" r="2" fill="white" opacity="0.3" />
                    <line
                      x1="40"
                      y1="40"
                      x2="80"
                      y2="20"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                    <line
                      x1="40"
                      y1="40"
                      x2="20"
                      y2="80"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-pattern)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const blog = await getBlogPost(resolvedParams.blogId);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}
