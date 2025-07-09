import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { BlogPost } from '@/lib/blogUtils';
import { formatDate } from '@/lib/clientUtils';

interface SampleBlogCardProps {
  post: BlogPost;
  isLast?: boolean;
}

export default function SampleBlogCard({ post, isLast = false }: SampleBlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Published on {formatDate(post.dateCreated)}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {post.fileName}
          </span>
        </div>
        
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
                const isInline = !String(children).includes('\n');
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
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
      
      {!isLast && (
        <div className="border-t border-gray-200 dark:border-gray-700 mx-8"></div>
      )}
    </article>
  );
}
