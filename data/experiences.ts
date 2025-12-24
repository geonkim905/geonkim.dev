export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    description: [
      'Developed high-performance backend systems using C++ and modern C++ features',
      'Optimized critical code paths resulting in 40% performance improvement',
      'Collaborated with cross-functional teams to deliver scalable solutions',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['C++', 'Python', 'Docker', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Junior Software Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Built responsive web applications using React and Next.js',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in agile development processes and sprint planning',
      'Contributed to open-source projects and maintained codebase',
    ],
    technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: '3',
    title: 'Software Engineering Intern',
    company: 'BigTech Corp',
    location: 'Seattle, WA',
    startDate: '2019-06',
    endDate: '2019-08',
    description: [
      'Assisted in developing internal tools and automation scripts',
      'Learned best practices for code quality and testing',
      'Participated in team meetings and project planning sessions',
    ],
    technologies: ['Python', 'Java', 'Git', 'Linux'],
  },
]

