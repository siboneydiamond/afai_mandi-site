export default function StrategicPlan2030() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-300 text-sm font-medium mb-6">
              Strategic Vision 2025–2030
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">AFAI Strategic Plan 2030</h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Accelerating equitable access to artificial intelligence education, workforce mobility, and economic
              opportunity across Puerto Rico and underserved communities nationwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/strategic-plan-2030/ai-skills-crisis"
                className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Read the Full Plan
              </a>
              <a
                href="#overview"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Overview
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Roadmap for AI Equity and Economic Mobility</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                The AFAI Strategic Plan 2030 charts our path to ensure that artificial intelligence serves as a catalyst
                for opportunity, not inequality. As AI reshapes every sector of the economy, millions of workers,
                students, small businesses, and communities risk being left behind.
              </p>
              <p>
                This plan outlines how AFAI will close the AI skills gap, expand workforce mobility, empower women and
                Latino professionals, and position Puerto Rico as a leader in responsible AI innovation — all while
                ensuring that technology serves people, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Main Sections Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Four Pillars of Our Strategy</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Section 1 */}
              <a
                href="/strategic-plan-2030/ai-skills-crisis"
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-slate-200 hover:border-blue-400"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">
                  The AI Skills Crisis
                </h3>
                <p className="text-slate-600 mb-4">
                  Understanding the challenge: how rapid AI adoption is creating unprecedented workforce displacement,
                  economic inequality, and digital divides — and why underserved communities face the greatest risk.
                </p>
                <span className="text-blue-600 font-semibold group-hover:underline">Explore the Challenge →</span>
              </a>

              {/* Section 2 */}
              <a
                href="/strategic-plan-2030/transformative-change"
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-slate-200 hover:border-emerald-400"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition">
                  Transformative Change
                </h3>
                <p className="text-slate-600 mb-4">
                  AFAI's approach to systemic change: how we shift power dynamics, center marginalized voices, build
                  bridges across sectors, and create pathways from education to economic mobility.
                </p>
                <span className="text-emerald-600 font-semibold group-hover:underline">Our Approach →</span>
              </a>

              {/* Section 3 */}
              <a
                href="/strategic-plan-2030/ai-2030-vision"
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-slate-200 hover:border-purple-400"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition">
                  AI 2030 Vision
                </h3>
                <p className="text-slate-600 mb-4">
                  Our goals and targets: a future where 1 million people gain AI skills, 50,000 workers transition to AI
                  careers, Puerto Rico leads Latino AI innovation, and responsible AI becomes the norm.
                </p>
                <span className="text-purple-600 font-semibold group-hover:underline">Explore the Vision →</span>
              </a>

              {/* Section 4 */}
              <a
                href="/strategic-plan-2030/roadmap"
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-slate-200 hover:border-yellow-400"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition">
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition">
                  Implementation Roadmap
                </h3>
                <p className="text-slate-600 mb-4">
                  How we'll get there: phased implementation from 2025–2030, strategic partnerships, funding mechanisms,
                  success metrics, and accountability frameworks to ensure measurable impact.
                </p>
                <span className="text-yellow-600 font-semibold group-hover:underline">View the Roadmap →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Strategic Priorities 2025–2030</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Education Access</h3>
                <p className="text-slate-600">
                  Train 1 million learners in AI literacy and skills through free, bilingual programs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Workforce Mobility</h3>
                <p className="text-slate-600">Transition 50,000 workers into AI-enabled careers with living wages</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Responsible AI</h3>
                <p className="text-slate-600">
                  Advance ethical frameworks and accountability in AI development and deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Download the Full Strategic Plan</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the complete AFAI Strategic Plan 2030 with detailed implementation frameworks, partnership
              opportunities, and impact metrics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Download PDF (English)
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition">
                Descargar PDF (Español)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
