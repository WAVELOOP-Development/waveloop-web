import { notFound } from "next/navigation";
import React from "react";
import { type Blog } from "@/app/data/blogdata";
import Link from "next/link";
import Image from "next/image";

async function getBlogPost(blogId: string): Promise<Blog | null> {
  try {
    const { blogData } = await import("@/app/data/blogdata");

    const blog = blogData.find((blog) => blog.id.toString() === blogId);

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const { blogData } = await import("@/app/data/blogdata");

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
      <div className="max-w-6xl mx-auto px-4 py-4 lg:pt-30 pt-20">
        <div className="flex items-start space-x-2 text-gray-400">
          <Link href="/blogs" className="hover:text-black">
            Blog
          </Link>
          <span className="text-black">›</span>
          <span className="text-black">{blog.title}</span>
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
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blog.authorImage || "/default-img.png"}
                  alt={blog.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-black">{blog.author}</div>
                <div className="text-gray-400">{blog.authorDesignation}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 md:ml-auto">
              <div className="text-gray-500 mb-4 md:mb-0">
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
          <Image
            src={blog.image || "/default-img.png"}
            alt={blog.title}
            width={800}
            height={300}
            className="w-full  shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  // Headers (h1-h6)
                  .replace(
                    /### (.*)/g,
                    '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>'
                  )
                  .replace(
                    /## (.*)/g,
                    '<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2">$1</h2>'
                  )
                  .replace(
                    /# (.*)/g,
                    '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-6">$1</h1>'
                  )
                  // Images
                  .replace(
                    /!\[(.*?)\]\((.*?)\)/g,
                    '<div class="my-4"><img src="$2" alt="$1" class="w-3/4 mx-auto h-auto shadow-lg" /></div>'
                  )
                  // Links
                  .replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
                  )
                  // Bold text
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="font-semibold text-gray-900">$1</strong>'
                  )
                  // Italic text
                  .replace(
                    /\*(.*?)\*/g,
                    '<em class="italic text-gray-700">$1</em>'
                  )
                  // Inline code
                  .replace(
                    /`([^`]+)`/g,
                    '<code class="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
                  )
                  // Code blocks
                  .replace(
                    /```([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono text-gray-800">$1</code></pre>'
                  )
                  // Blockquotes
                  .replace(
                    /^> (.*$)/gim,
                    '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">$1</blockquote>'
                  )
                  // Horizontal rules
                  .replace(/^---$/gm, '<hr class="border-gray-300 my-8">')
                  // Unordered lists
                  .replace(/^\* (.*)$/gm, '<li class="ml-4 mb-2">$1</li>')
                  .replace(
                    /(<li class="ml-4 mb-2">.*<\/li>)/g,
                    '<ul class="list-disc ml-6 my-4">$1</ul>'
                  )
                  // Ordered lists
                  .replace(/^\d+\. (.*)$/gm, '<li class="ml-4 mb-2">$1</li>')
                  .replace(
                    /(<li class="ml-4 mb-2">.*<\/li>)/g,
                    '<ol class="list-decimal ml-6 my-4">$1</ol>'
                  )
                  // Strikethrough
                  .replace(
                    /~~(.*?)~~/g,
                    '<del class="line-through text-gray-500">$1</del>'
                  )
                  // Line breaks and paragraphs
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^\s*/, '<p class="mb-4">')
                  .replace(/\s*$/, "</p>"),
              }}
            />
          </div>
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
