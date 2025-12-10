export default function AIFundamentalsCertificatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-300">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>›</span>
            <a href="/learn" className="hover:text-white transition-colors">
              Learn
            </a>
            <span>›</span>
            <a href="/certificates" className="hover:text-white transition-colors">
              Professional Certificate
            </a>
            <span>›</span>
            <span className="text-white">AI Fundamentals for the Modern Workforce</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 bg-white text-slate-900 rounded-2xl p-8 shadow-xl">
              {/* Partner Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">AFAI</span>
                </div>
                <div className="text-sm text-slate-600">In partnership with leading institutions</div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Fundamentals for the Modern Workforce
              </h1>

              <div className="flex items-center gap-6 mb-8 text-lg">
                <div>
                  <span className="font-semibold text-slate-900 underline decoration-2 decoration-yellow-400">
                    3 courses
                  </span>
                  <span className="text-slate-600">, 12 weeks</span>
                </div>
              </div>

              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Earn a certificate
              </button>

              <div className="mt-6 flex items-start gap-2">
                <input type="checkbox" id="email-opt" className="mt-1" />
                <label htmlFor="email-opt" className="text-sm text-slate-600">
                  I would like to receive email from AFAI and learn about other offerings related to AI Fundamentals for
                  the Modern Workforce.
                </label>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="bg-slate-100 rounded-2xl p-6 shadow-xl h-fit">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Earn a certificate</span>
              </div>

              <h2 className="text-2xl font-bold mb-2">AI Fundamentals for the Modern Workforce</h2>

              <p className="text-sm text-slate-600 mb-4">1,247 learners enrolled</p>

              <div className="bg-slate-800 text-white p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">There are 3 courses in this program</p>
                <ul className="space-y-2 text-sm">
                  <li>• Introduction to Artificial Intelligence</li>
                  <li>• AI in Business and Operations</li>
                  <li>• Responsible AI: Ethics and Practice</li>
                </ul>
                <button className="text-yellow-400 text-sm mt-2 hover:underline">Show More</button>
              </div>

              <div className="text-center mb-4">
                <div className="text-2xl font-bold">$299.00</div>
                <div className="text-sm text-slate-600 line-through">$450 USD</div>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Earn a certificate
              </button>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl">
            <div className="bg-white text-slate-900 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="font-semibold">Introductory</h3>
              </div>
              <p className="text-sm text-slate-600">No prior experience required</p>
            </div>

            <div className="bg-white text-slate-900 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="font-semibold">Self-paced</h3>
              </div>
              <p className="text-sm text-slate-600">Progress at your own speed</p>
            </div>

            <div className="bg-white text-slate-900 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold">12 weeks</h3>
              </div>
              <p className="text-sm text-slate-600">3 - 5 hours per week</p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What you'll learn</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Understand fundamental AI concepts and how they apply to modern business operations and daily work tasks
              </p>
            </div>

            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Learn to use AI tools for productivity enhancement, content creation, data analysis, and problem-solving
              </p>
            </div>

            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Master prompt engineering techniques to communicate effectively with AI systems and get optimal results
              </p>
            </div>

            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Develop skills to evaluate AI solutions, understand ethical implications, and implement responsible AI
                practices
              </p>
            </div>

            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Apply AI skills to real-world scenarios in your industry, from automating routine tasks to enhancing
                decision-making
              </p>
            </div>

            <div className="flex gap-4">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-slate-700">
                Build confidence in adapting to AI-driven workplace changes and positioning yourself for career
                advancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses in Program */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses in this program</h2>
          <p className="text-slate-600 mb-12 text-lg">Complete all 3 courses to earn your Professional Certificate</p>

          <div className="space-y-6">
            {/* Course 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Introduction to Artificial Intelligence</h3>
                  <p className="text-slate-600 mb-4">
                    Discover the foundations of AI, machine learning basics, and how AI is transforming industries.
                    Learn about AI applications, limitations, and future trends.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span>4 weeks</span>
                    <span>3-4 hours/week</span>
                    <span>Beginner level</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">AI in Business and Operations</h3>
                  <p className="text-slate-600 mb-4">
                    Apply AI tools to enhance productivity, automate workflows, and improve decision-making. Hands-on
                    practice with popular AI platforms and workplace applications.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span>4 weeks</span>
                    <span>4-5 hours/week</span>
                    <span>Intermediate level</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Responsible AI: Ethics and Practice</h3>
                  <p className="text-slate-600 mb-4">
                    Understand ethical AI principles, bias detection, privacy concerns, and governance frameworks. Learn
                    to implement AI responsibly in your organization.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span>4 weeks</span>
                    <span>3-4 hours/week</span>
                    <span>Intermediate level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills You'll Gain */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills you'll gain</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Artificial Intelligence",
              "Machine Learning Basics",
              "Prompt Engineering",
              "AI Tools & Platforms",
              "Data Analysis",
              "Workflow Automation",
              "Ethical AI",
              "Bias Detection",
              "AI Strategy",
              "Change Management",
              "Critical Thinking",
              "Problem Solving",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet your instructors</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Instructor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Dr. Sarah Chen</h3>
              <p className="text-slate-600 text-center text-sm mb-4">Lead AI Researcher</p>
              <p className="text-slate-600 text-sm">
                Dr. Chen specializes in machine learning applications and has taught AI to over 10,000 professionals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Instructor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Marcus Johnson</h3>
              <p className="text-slate-600 text-center text-sm mb-4">Business AI Strategist</p>
              <p className="text-slate-600 text-sm">
                Marcus brings 15 years of experience implementing AI solutions in Fortune 500 companies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Instructor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center mb-2">Dr. Amara Patel</h3>
              <p className="text-slate-600 text-center text-sm mb-4">AI Ethics Expert</p>
              <p className="text-slate-600 text-sm">
                Dr. Patel leads research in responsible AI and has advised governments on AI policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently asked questions</h2>

          <div className="space-y-6">
            <details className="group border-b border-slate-200 pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Who should take this program?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600">
                This program is ideal for working professionals, business owners, managers, and anyone looking to
                understand and leverage AI in their work. No technical background required.
              </p>
            </details>

            <details className="group border-b border-slate-200 pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Do I need prior experience with AI?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600">
                No prior AI experience is required. This program starts with fundamentals and builds up to practical
                applications.
              </p>
            </details>

            <details className="group border-b border-slate-200 pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                What certificate will I receive?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600">
                Upon completion, you'll receive a Professional Certificate from AFAI that you can share on LinkedIn and
                with employers.
              </p>
            </details>

            <details className="group border-b border-slate-200 pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                How long does it take to complete?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600">
                Most learners complete the program in 12 weeks, studying 3-5 hours per week. Since it's self-paced, you
                can move faster or take more time as needed.
              </p>
            </details>

            <details className="group border-b border-slate-200 pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                Is financial aid available?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600">
                Yes! AFAI offers scholarships and payment plans. Contact us to learn about eligibility and application
                process.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to advance your AI skills?</h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Join 1,247 learners already enrolled in this program
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Enroll Now - $299
          </button>
        </div>
      </section>
    </div>
  )
}
