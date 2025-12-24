import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import MarkdownContent from '@/components/MarkdownContent'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Blog</span>
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
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
        </header>

        {post.content ? (
          <MarkdownContent content={post.content} />
        ) : (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 italic">
              Content coming soon. This blog post will be updated with detailed content shortly.
            </p>
          </div>
        )}
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}
