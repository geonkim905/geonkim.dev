import { projects, ProjectCategory } from '@/data/projects'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categoryConfig: Record<ProjectCategory, { label: string; description: string; color: string }> = {
  'passion-projects': {
    label: 'Passion Projects',
    description: 'Personal projects and applications built with passion and creativity',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  },
  'distributed-systems': {
    label: 'Distributed Systems',
    description: 'Scalable and fault-tolerant distributed system implementations',
    color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800',
  },
  'operating-systems': {
    label: 'Operating Systems',
    description: 'Kernel development, system programming, and OS-level projects',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  },
}

export default function ProjectsPage() {
  const categorizedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {} as Record<ProjectCategory, typeof projects>)

  const categoryOrder: ProjectCategory[] = ['passion-projects', 'distributed-systems', 'operating-systems']

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of projects I&apos;ve worked on, organized by category. Click on any project to view detailed information.
          </p>
        </div>

        {categoryOrder.map((category) => {
          const categoryProjects = categorizedProjects[category]
          if (!categoryProjects || categoryProjects.length === 0) return null

          const config = categoryConfig[category]

          return (
            <section key={category} className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {config.label}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {config.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
                        {config.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

