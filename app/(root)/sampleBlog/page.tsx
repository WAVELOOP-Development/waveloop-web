import "highlight.js/styles/github-dark.css";
import { getBlogPosts } from "@/lib/blogUtils";
import SampleBlogCardGrid from "@/app/components/SampleBlogCardGrid";
import { TextAnimate } from "@/components/magicui/text-animate";

export default async function SampleBlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto pb-12">
        <div className="max-w-4xl lg:pt-30 pt-20 lg:mb-16 mb-8 mx-auto">
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

        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No blog posts found. Add markdown files to the content folder.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <SampleBlogCardGrid key={post.id} blog={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
