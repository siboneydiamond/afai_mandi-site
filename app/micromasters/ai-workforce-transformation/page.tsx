export default function AIWorkforceTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>›</span>
            <a href="/micromasters" className="hover:text-white">
              MicroMasters
            </a>
            <span>›</span>
            <span className="text-white">AI & Workforce Transformation</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">AFAI</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300">American Foundation for AI</p>
                  <p className="text-xs text-slate-400">In Partnership with Industry Leaders</p>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                AI & Workforce Transformation MicroMasters® Program
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div>
                  <a href="#courses" className="text-xl font-semibold underline hover:text-yellow-400">
                    3 courses
                  </a>
                  <span className="text-slate-300">, 6 months</span>
                </div>
              </div>

              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Earn a certificate
              </button>

              <div className="mt-6">
                <label className="flex items-start gap-2 cursor-pointer text-sm text-slate-300">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I would like to receive email from AFAI and learn about other offerings related to AI & Workforce
                    Transformation.
                  </span>
                </label>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="bg-slate-100 rounded-lg p-6 text-slate-900 h-fit">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Earn a certificate</h3>
              </div>

              <div className="aspect-video bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>

              <p className="text-sm text-slate-600 mb-4">4,892 learners enrolled</p>

              <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold mb-2">There are 3 courses in this program:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <a href="/micromasters/ai-workforce-transformation/fundamentals" className="hover:underline">
                      AI Fundamentals for Workforce Leaders
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <a href="/micromasters/ai-workforce-transformation/implementation" className="hover:underline">
                      Implementing AI in Organizations
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">•</span>
                    <a href="/micromasters/ai-workforce-transformation/strategy" className="hover:underline">
                      AI Strategy & Change Management
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold">$749</p>
                  <p className="text-sm text-slate-500 line-through">$999 USD</p>
                </div>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Earn a certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Introductory</h3>
                <p className="text-sm text-slate-600">No prior experience required</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Self-paced</h3>
                <p className="text-sm text-slate-600">Progress at your own speed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">6 months</h3>
                <p className="text-sm text-slate-600">2-4 hours per week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg">
                  Understand AI fundamentals and how they apply to workforce transformation, including machine learning,
                  natural language processing, and automation technologies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg">
                  Develop strategies for implementing AI tools across different business functions while ensuring
                  employee adoption and organizational readiness.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg">
                  Navigate the ethical implications of AI in the workplace, including bias mitigation, privacy
                  protection, and responsible AI governance frameworks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg">
                  Lead change management initiatives to upskill teams, redesign workflows, and create sustainable
                  AI-enabled organizations that increase productivity and employee satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Courses in this program</h2>
          <div className="space-y-6">
            {/* Course 1 */}
            <a
              href="/micromasters/ai-workforce-transformation/fundamentals"
              className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">1</div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      Course
                    </span>
                    <span className="text-sm text-slate-500">6-8 weeks</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI Fundamentals for Workforce Leaders</h3>
                  <p className="text-slate-600 mb-4">
                    Learn the core concepts of artificial intelligence, machine learning, and automation technologies.
                    Understand how AI is transforming industries and creating new opportunities for workforce
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">AI Basics</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Automation</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Leadership</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Course 2 */}
            <a
              href="/micromasters/ai-workforce-transformation/implementation"
              className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">2</div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                      Course
                    </span>
                    <span className="text-sm text-slate-500">8-10 weeks</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Implementing AI in Organizations</h3>
                  <p className="text-slate-600 mb-4">
                    Develop practical skills for deploying AI solutions in real-world business environments. Learn to
                    assess organizational readiness, select appropriate tools, and manage implementation projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Implementation</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      Project Management
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      Technology Selection
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">ROI Analysis</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Course 3 */}
            <a
              href="/micromasters/ai-workforce-transformation/strategy"
              className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">3</div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      Course
                    </span>
                    <span className="text-sm text-slate-500">8-10 weeks</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI Strategy & Change Management</h3>
                  <p className="text-slate-600 mb-4">
                    Master the strategic and human elements of AI transformation. Learn to upskill teams, redesign
                    workflows, address resistance, and create sustainable change in AI-enabled organizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      Change Management
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      Strategic Planning
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      Workforce Development
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Ethics</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Instructors */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Meet your instructors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Dr. Sarah Martinez</h3>
                <p className="text-sm text-slate-600 mb-3">AI & Workforce Strategy Lead</p>
                <p className="text-sm text-slate-700">
                  20+ years leading digital transformation initiatives at Fortune 500 companies and consulting
                  organizations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Prof. James Chen</h3>
                <p className="text-sm text-slate-600 mb-3">Machine Learning Researcher</p>
                <p className="text-sm text-slate-700">
                  PhD in Computer Science with expertise in ML applications for organizational efficiency and workforce
                  analytics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-700"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Maria Rodriguez</h3>
                <p className="text-sm text-slate-600 mb-3">Change Management Expert</p>
                <p className="text-sm text-slate-700">
                  Former Chief People Officer specializing in organizational change, upskilling programs, and
                  human-centered AI adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            <details className="group bg-white border border-slate-200 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                <span>What is a MicroMasters® program?</span>
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
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  A MicroMasters® program is a series of graduate-level courses from top universities designed to
                  advance your career. The program provides deep learning in a specific career field and is recognized
                  by employers for real job relevance. Learners who successfully complete the program can earn a
                  credential to share with employers and may apply for advanced standing in related Master's degree
                  programs.
                </p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                <span>Do I need prior experience in AI?</span>
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
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  No prior AI experience is required. This program is designed for business leaders, HR professionals,
                  and workforce development practitioners who want to understand and leverage AI in their organizations.
                  Basic computer literacy and professional work experience are recommended.
                </p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                <span>How long does it take to complete?</span>
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
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  The program is designed to be completed in approximately 6 months at a pace of 2-4 hours per week.
                  However, since all courses are self-paced, you can progress faster or slower based on your schedule
                  and learning needs.
                </p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                <span>What certificate will I receive?</span>
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
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  Upon successful completion of all courses and assessments, you will receive a MicroMasters® credential
                  in AI & Workforce Transformation from AFAI. This digital certificate can be shared on your LinkedIn
                  profile, resume, and with employers. You'll also receive individual verified certificates for each
                  course completed.
                </p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                <span>Can I get financial assistance?</span>
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
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  Yes, financial assistance is available for learners who qualify. We also offer scholarships and
                  partnership discounts for organizations enrolling multiple team members. Contact our enrollment team
                  to learn more about available options.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to transform your organization with AI?
          </h2>
          <p className="text-xl text-slate-800 mb-8">Join thousands of leaders building AI-ready workforces</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Enroll Now
            </button>
            <a
              href="/help"
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg border-2 border-slate-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
