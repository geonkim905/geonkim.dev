'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blogPosts'
import { experiences } from '@/data/experiences'

interface SearchResult {
  type: 'project' | 'blog' | 'experience'
  id: string
  title: string
  description: string
  url: string
  score?: number
}

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  // Prepare searchable data
  const searchableData = useMemo(() => {
    const data: SearchResult[] = []
    
    projects.forEach((project) => {
      data.push({
        type: 'project',
        id: project.id,
        title: project.title,
        description: project.description,
        url: `/projects/${project.id}`,
      })
    })

    blogPosts.forEach((post) => {
      data.push({
        type: 'blog',
        id: post.id,
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.id}`,
      })
    })

    experiences.forEach((exp) => {
      data.push({
        type: 'experience',
        id: exp.id,
        title: `${exp.title} at ${exp.company}`,
        description: exp.description.join(' '),
        url: `/experiences#${exp.id}`,
      })
    })

    return data
  }, [])

  // Configure Fuse.js - lazy load to avoid SSR issues
  const fuse = useMemo(() => {
    if (typeof window === 'undefined') return null
    return new Fuse(searchableData, {
      keys: ['title', 'description'],
      threshold: 0.3,
      includeScore: true,
    })
  }, [searchableData])

  // Perform search
  const results = useMemo(() => {
    if (!query.trim() || !fuse) return []
    const searchResults = fuse.search(query)
    return searchResults.map((result) => ({
      ...result.item,
      score: result.score,
    }))
  }, [query, fuse])

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'project':
        return 'Project'
      case 'blog':
        return 'Blog Post'
      case 'experience':
        return 'Experience'
      default:
        return type
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'blog':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      case 'experience':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Search
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Search across projects, blog posts, and experiences on this website.
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setIsSearching(true)
              }}
              onFocus={() => setIsSearching(true)}
              placeholder="Search projects, blog posts, experiences..."
              className="w-full pl-12 pr-12 py-4 text-lg border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('')
                  setIsSearching(false)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {isSearching && query && (
            <div className="mt-4 space-y-2">
              {results.length > 0 ? (
                <>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Found {results.length} result{results.length !== 1 ? 's' : ''}
                  </p>
                  {results.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.url}
                      onClick={() => setIsSearching(false)}
                      className="block p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 dark:hover:border-blue-400"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {result.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                            result.type
                          )}`}
                        >
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {result.description}
                      </p>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="p-8 text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400">
                    No results found for "{query}". Try different keywords.
                  </p>
                </div>
              )}
            </div>
          )}

          {!query && (
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {projects.length} Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Search through my portfolio
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {blogPosts.length} Blog Posts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Find C++ articles and insights
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {experiences.length} Experiences
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explore my work history
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

