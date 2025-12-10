import Link from "next/link"

export default function TransformativeChange() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/strategic-plan-2030" className="hover:text-blue-600">
              Strategic Plan 2030
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Transformative Change</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-400/20 rounded-full text-emerald-200 text-sm font-medium mb-6">
              Part 2 of 4
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Transformative Change</h1>
            <p className="text-xl text-slate-300 text-pretty">
              AFAI's approach to systemic change: how we shift power dynamics, center marginalized voices, build bridges
              across sectors, and create pathways from education to economic mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Theory of Change</h2>
              <p className="text-slate-700 leading-relaxed">
                Addressing the AI skills crisis requires more than incremental programs or one-off training sessions. It
                demands transformative change — systemic interventions that shift who has power, who shapes technology,
                and who benefits from innovation.
              </p>
              <p className="text-slate-700 leading-relaxed">
                AFAI's approach is rooted in equity, sustainability, and community leadership. We don't simply deliver
                services to underserved communities — we build capacity within them, amplify their voices, and ensure
                they have agency over their economic futures.
              </p>
            </div>

            {/* Core Principles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Five Principles Guiding Our Work</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-emerald-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Center Marginalized Communities</h3>
                      <p className="text-slate-700">
                        We prioritize the voices, needs, and leadership of communities most impacted by AI disruption:
                        workers without college degrees, women and caregivers, Latino and Black professionals, small
                        business owners, and Puerto Rican communities. They are not beneficiaries — they are
                        co-designers and decision-makers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Build Bridges Across Sectors</h3>
                      <p className="text-slate-700">
                        No single organization can solve the AI skills crisis alone. AFAI convenes education
                        institutions, workforce boards, employers, government agencies, philanthropies, and community
                        organizations to create aligned, coordinated interventions that work at scale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Focus on Economic Mobility, Not Just Training
                      </h3>
                      <p className="text-slate-700">
                        Skills training alone doesn't create opportunity. AFAI connects education to employment,
                        provides wrap-around support (childcare, transportation, technology access), and ensures
                        pathways lead to living-wage jobs, not dead ends.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-yellow-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Embed Responsible AI and Ethics</h3>
                      <p className="text-slate-700">
                        Technology is not neutral. AFAI teaches critical thinking about AI's impact on society, trains
                        practitioners in ethical frameworks, and advocates for accountability in AI development and
                        deployment. We believe AI must serve people, not replace them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-red-600">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Lead With Puerto Rico and Latino Communities
                      </h3>
                      <p className="text-slate-700">
                        Puerto Rico is not an afterthought — it is a laboratory for innovation and a model for the
                        broader Latino diaspora. AFAI's work demonstrates that underserved communities can lead in AI
                        when given resources, recognition, and partnership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Four Strategic Pillars</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Education & Digital Literacy</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Free, bilingual AI education for students, educators, and lifelong learners. From K-12 curriculum
                    integration to adult upskilling, we make AI literacy accessible to all.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Workforce Transformation</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Employer-connected training programs, micro-credentials, and career pathways that transition workers
                    from at-risk jobs to AI-enabled roles with living wages and benefits.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Small Business Innovation</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    AI tools, workshops, and advisory services that help small businesses modernize operations, compete
                    effectively, and create sustainable local economies.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Responsible AI & Policy</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Research, advocacy, and public engagement to ensure AI systems are transparent, accountable, and
                    designed with equity and human rights at the center.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Work */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">How We Work: A Multi-Level Approach</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Direct Service Delivery
                  </h3>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    AFAI delivers training programs, workshops, mentorship, and resources directly to learners, workers,
                    and businesses — ensuring immediate, tangible impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Institutional Partnerships
                  </h3>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    We partner with schools, universities, workforce agencies, and employers to embed AI education into
                    existing systems — amplifying reach and sustainability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    Policy Advocacy
                  </h3>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    AFAI works with federal, state, and local governments to shape workforce policy, education
                    standards, and AI regulation that prioritize equity and accountability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    Knowledge Sharing & Research
                  </h3>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    We produce reports, case studies, toolkits, and frameworks that other organizations can use —
                    creating a movement for AI equity that extends far beyond AFAI's direct reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Collaboration */}
            <div className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Transformative Change Requires Collaboration</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                AFAI cannot — and does not aim to — do this work alone. Our role is to catalyze action, coordinate
                partners, and ensure that the communities most impacted by AI have agency in shaping the solutions.
              </p>
              <p className="text-slate-200 leading-relaxed font-semibold">
                If you share this vision, we invite you to join us. Together, we can build a future where AI serves
                everyone, not just the few.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link
              href="/strategic-plan-2030/ai-skills-crisis"
              className="text-slate-600 hover:text-blue-600 font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: The AI Skills Crisis
            </Link>
            <Link
              href="/strategic-plan-2030/ai-2030-vision"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Next: AI 2030 Vision
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
