import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My thoughts and learnings about C++ and software development, derived from books,
            videos, articles, and hands-on experience.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-500 dark:hover:border-blue-400"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

