import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { getBlogPost, getBlogPosts } from "@/lib/blogUtils";
import { formatDate } from "@/lib/clientUtils";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.dateCreated.toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  // Log all generated slugs for debugging
  console.log("Generated slugs for static params:", posts.map(post => post.slug));
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}



export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Remove frontmatter from content before rendering
  const cleanContent = post.content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 lg:pt-30 pt-8">
      {/* Blog Post Header */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta info */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>{formatDate(post.dateCreated)}</span>
              <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  {post.author}
                </div>
                <div className="text-gray-500 lg:text-lg text-xs dark:text-gray-400">
                  {post.authorDesignation}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-2">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 dark:text-gray-300">
                      {children}
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => {
                    const isInline = !String(children).includes("\n");
                    if (isInline) {
                      return (
                        <code className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-gray-300 dark:border-gray-600">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="bg-white dark:bg-gray-800">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      {children}
                    </td>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800 dark:text-gray-200">
                      {children}
                    </em>
                  ),
                }}
              >
                {cleanContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-12 px-4 justify-center items-center border-t border-gray-500">
        <div className="flex flex-col lg:w-4xl w-full items-center">
          <div className="flex lg:flex-row flex-col justify-between items-center w-full mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  {post.author}
                </div>
                <div className="text-gray-500 lg:text-lg text-xs dark:text-gray-400">
                  {post.authorDesignation}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 lg:w-fit w-full justify-center mt-4">
                <Link
                href={post.linkedin}
                className="text-gray-400 hover:text-black transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Linkedin size={20} />
                </Link>
              <Link
                href={post.github}
                className="text-gray-400 hover:text-black transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
          <div className="text-gray-500 w-full lg:text-lg text-sm dark:text-gray-400">
            {post.authorDetails}
          </div>
        </div>
      </div>
    </div>
  );
}
