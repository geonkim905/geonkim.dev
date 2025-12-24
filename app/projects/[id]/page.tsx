import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import MarkdownContent from '@/components/MarkdownContent'

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const categoryLabels: Record<string, string> = {
    'passion-projects': 'Passion Projects',
    'distributed-systems': 'Distributed Systems',
    'operating-systems': 'Operating Systems',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              {categoryLabels[project.category]}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </header>

        {project.detailedDescription ? (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownContent content={project.detailedDescription} />
          </div>
        ) : (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 italic">
              Detailed description coming soon. This project description will be updated with more information shortly.
            </p>
          </div>
        )}
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
