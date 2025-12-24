'use client'

import { useState, useMemo, useEffect } from 'react'
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

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')

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

  // Configure Fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(searchableData, {
        keys: ['title', 'description'],
        threshold: 0.3,
        includeScore: true,
      }),
    [searchableData]
  )

  // Perform search
  const results = useMemo(() => {
    if (!query.trim()) return []
    const searchResults = fuse.search(query)
    return searchResults.map((result) => ({
      ...result.item,
      score: result.score,
    }))
  }, [query, fuse])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const input = document.getElementById('search-input')
      input?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

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

  const handleResultClick = () => {
    setQuery('')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, blog posts, experiences..."
              className="w-full pl-12 pr-12 py-3 text-lg border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4">
          {query ? (
            results.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.url}
                    onClick={handleResultClick}
                    className="block p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {result.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${getTypeColor(
                          result.type
                        )}`}
                      >
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
                      {result.description}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No results found for "{query}". Try different keywords.
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Search across {projects.length} projects, {blogPosts.length} blog posts, and {experiences.length} experiences
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Start typing to search...
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <span>Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Esc</kbd> to close</span>
            <span>Navigate with arrow keys, press Enter to select</span>
          </div>
        </div>
      </div>
    </div>
  )
}
