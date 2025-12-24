import PhotoCarousel from '@/components/PhotoCarousel'

export default function AboutPage() {
  // Photo paths - images should be in the public folder
  const photos: string[] = [
    '/photo2.JPG',
    '/photo3.JPG',
    '/photo4.PNG',
    '/photo1.jpg',
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="w-full">
          <PhotoCarousel images={photos} interval={5000} />
        </div>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m currently a student at the <strong>University of Michigan Ann Arbor</strong>, 
              where I&apos;m pursuing a Bachelor&apos;s degree in <strong>Computer Science</strong> with 
              a minor in <strong>Statistics</strong>. My coursework has given me a strong foundation 
              in software engineering, algorithms, data structures, and statistical analysis.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Through my studies, I&apos;ve developed a deep passion for systems programming, distributed 
              systems, and building efficient, scalable applications. I&apos;m particularly interested in 
              how low-level system design principles can be applied to solve complex problems at scale.
            </p>
          </div>
        </section>

        {/* Background & Interests */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Background & Interests</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in computer science started with a curiosity about how software works 
              under the hood. This led me to explore everything from web development to operating 
              systems, and I&apos;ve found that I&apos;m most excited by projects that combine theory with 
              practical implementation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, I enjoy [your hobbies here - e.g., reading technical books, 
              contributing to open source projects, playing chess, hiking, etc.]. I also love 
              diving deep into C++ literature and experimenting with new programming paradigms 
              and design patterns.
            </p>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'C', 'Python', 'Go', 'Java', 'JavaScript', 'TypeScript'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Express', 'MySQL','PostgreSQL', 'Docker', 'Git', 'Salesforce', 'Linux'].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {['Distributed Systems', 'Operating Systems', 'Network Architecture', 'System Programming', 'Algorithms', 'Machine Learning'].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hobbies & Interests</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond programming, I have several hobbies that keep me engaged and help me maintain 
              a healthy work-life balance:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
              <li><strong>Reading Technical Books:</strong> I&apos;m always reading about new technologies, 
              programming paradigms, and system design principles. Some of my favorite topics include 
              distributed systems, operating systems, and software architecture.</li>
              <li><strong>Open Source Contributions:</strong> I enjoy contributing to open source 
              projects and learning from the community. It&apos;s a great way to improve my skills while 
              giving back.</li>
              <li><strong>Problem Solving:</strong> I love tackling challenging problems, whether 
              they're algorithmic puzzles, system design challenges, or real-world software issues.</li>
              <li><strong>[Add more hobbies here]:</strong> [Describe your other hobbies and interests]</li>
            </ul>
          </div>
        </section>

        {/* Goals Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Goals & Aspirations</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to become a skilled systems engineer who can design and build robust, 
              scalable distributed systems. I&apos;m particularly interested in working on infrastructure 
              that powers large-scale applications, where performance, reliability, and efficiency 
              are critical.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m always looking for opportunities to learn and grow, whether through personal 
              projects, internships, or collaborations. If you&apos;re working on something interesting 
              or just want to connect, feel free to reach out!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
