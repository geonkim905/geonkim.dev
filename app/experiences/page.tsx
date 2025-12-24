import { experiences } from '@/data/experiences'
import { Calendar, MapPin } from 'lucide-react'

export default function ExperiencesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and the roles I've held over the years.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-[-6px] top-8 w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full" />
              )}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h2>
                    <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-col md:text-right text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}{' '}
                        -{' '}
                        {exp.endDate
                          ? new Date(exp.endDate).toLocaleDateString('en-US', {
                              month: 'long',
                              year: 'numeric',
                            })
                          : 'Present'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

