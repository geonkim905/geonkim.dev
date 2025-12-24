import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I&apos;m Geon Kim
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Software Developer | C++ Enthusiast | Problem Solver
          </p>
        </section>

        {/* Brief Introduction */}
        <section className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I&apos;m a student at the <strong>University of Michigan Ann Arbor</strong>, majoring in 
              <strong> Computer Science</strong> and minoring in <strong>Statistics</strong>. I&apos;m 
              passionate about software development, systems programming, and building efficient, 
              scalable applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to my personal website! Here you can explore my projects, read about my 
              experiences, and learn more about my journey in tech. Feel free to browse around 
              and don&apos;t hesitate to reach out if you&apos;d like to connect.
            </p>
          </div>
          
          <div className="text-center pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
            >
              Learn More About Me
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-6">
          <Link
            href="/projects"
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore my portfolio of software projects
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/experiences"
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn about my professional journey
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
              View Experiences
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/blog"
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Blog
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Read about my C++ learnings and insights
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
              Read Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        </section>
      </div>
    </div>
  )
}
