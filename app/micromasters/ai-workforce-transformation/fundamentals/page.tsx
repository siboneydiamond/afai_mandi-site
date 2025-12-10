export default function FundamentalsCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-blue-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>›</span>
            <a href="/micromasters" className="hover:text-white">
              MicroMasters
            </a>
            <span>›</span>
            <a href="/micromasters/ai-workforce-transformation" className="hover:text-white">
              AI & Workforce Transformation
            </a>
            <span>›</span>
            <span className="text-white">AI Fundamentals</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr,350px] gap-8">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-500 rounded-full text-sm font-semibold mb-4">
                Course 1 of 3
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">AI Fundamentals for Workforce Leaders</h1>
              <p className="text-xl text-blue-100 mb-8">
                Master the core concepts of AI and understand how artificial intelligence, machine learning, and
                automation are transforming work and creating new opportunities.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  <span>Introductory</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span>2,341 enrolled</span>
                </div>
              </div>

              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Enroll Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">In this course</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>6 modules with video lectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Hands-on exercises and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Quizzes and assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Peer discussion forums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Verified certificate upon completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Core AI concepts including machine learning, deep learning, and neural networks</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>How AI is being applied across different industries and job functions</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Natural language processing and generative AI tools</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Automation technologies and their impact on workforce productivity</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Ethical considerations and responsible AI principles</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>How to evaluate AI tools and vendors for organizational needs</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Syllabus</h2>
              <div className="space-y-4">
                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 1: Introduction to Artificial Intelligence</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• What is AI? History and evolution</li>
                      <li>• Types of AI: Narrow AI vs. General AI</li>
                      <li>• AI terminology and key concepts</li>
                      <li>• Real-world AI applications</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 2: Machine Learning Fundamentals</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• Supervised vs. unsupervised learning</li>
                      <li>• How machine learning models are trained</li>
                      <li>• Common ML algorithms and their uses</li>
                      <li>• Data requirements for ML projects</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 3: Natural Language Processing & Generative AI</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• Understanding NLP and language models</li>
                      <li>• ChatGPT, LLMs, and conversational AI</li>
                      <li>• Practical applications in business</li>
                      <li>• Prompt engineering basics</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 4: AI in the Workplace</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• Automation and productivity tools</li>
                      <li>• AI for customer service and support</li>
                      <li>• AI in HR, recruiting, and talent management</li>
                      <li>• Augmenting human capabilities with AI</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 5: Ethics, Bias, and Responsible AI</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• Understanding bias in AI systems</li>
                      <li>• Privacy and data protection</li>
                      <li>• Transparency and explainability</li>
                      <li>• Building ethical AI frameworks</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-slate-50 rounded-lg border border-slate-200">
                  <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                    <span>Module 6: Future of AI and Workforce Strategy</span>
                    <svg
                      className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="space-y-2 text-slate-600">
                      <li>• Emerging AI trends and technologies</li>
                      <li>• Job displacement vs. job creation</li>
                      <li>• Skills needed for the AI economy</li>
                      <li>• Building an AI strategy for your organization</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-4">Course Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-slate-600 mb-1">Duration</dt>
                  <dd className="font-semibold">6-8 weeks</dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Effort</dt>
                  <dd className="font-semibold">2-4 hours per week</dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Level</dt>
                  <dd className="font-semibold">Introductory</dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Prerequisites</dt>
                  <dd className="font-semibold">None</dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Language</dt>
                  <dd className="font-semibold">English</dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Video Transcripts</dt>
                  <dd className="font-semibold">English, Spanish</dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Part of</p>
                <a
                  href="/micromasters/ai-workforce-transformation"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  AI & Workforce Transformation MicroMasters® Program
                </a>
              </div>

              <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Enroll Now - $249
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
