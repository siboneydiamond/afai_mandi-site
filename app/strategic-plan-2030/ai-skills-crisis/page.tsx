import Link from "next/link"

export default function AISkillsCrisis() {
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
            <span className="text-slate-900 font-medium">The AI Skills Crisis</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-slate-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-400/20 rounded-full text-red-200 text-sm font-medium mb-6">
              Part 1 of 4
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">The AI Skills Crisis</h1>
            <p className="text-xl text-slate-300 text-pretty">
              Understanding the unprecedented challenge facing workers, communities, and economies as artificial
              intelligence transforms every sector — and why urgent action is needed now.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* The Challenge */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Defining Moment</h2>
              <p className="text-slate-700 leading-relaxed">
                Artificial intelligence is no longer a future technology — it is reshaping the present. From healthcare
                to manufacturing, from customer service to creative industries, AI is fundamentally changing how work
                gets done, who has access to opportunity, and which communities thrive or fall behind.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Yet while AI promises unprecedented productivity and innovation, it also risks deepening existing
                inequalities. Without intentional intervention, AI will concentrate wealth and power in the hands of
                those who already have access to technology, education, and capital — leaving millions of workers,
                students, and small businesses on the margins.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">85M</div>
                <div className="text-slate-900 font-semibold mb-2">Jobs Displaced by 2030</div>
                <div className="text-sm text-slate-600">
                  World Economic Forum estimates 85 million jobs displaced by automation and AI
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">23%</div>
                <div className="text-slate-900 font-semibold mb-2">Latino AI Representation</div>
                <div className="text-sm text-slate-600">
                  Latinos represent 23% of workforce but hold less than 8% of AI/tech jobs
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">$4.4T</div>
                <div className="text-slate-900 font-semibold mb-2">Lost Economic Output</div>
                <div className="text-sm text-slate-600">
                  Potential GDP loss if workers aren't reskilled for the AI economy by 2030
                </div>
              </div>
            </div>

            {/* Key Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">The Multifaceted Crisis</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    1. Workforce Displacement Without Transition Support
                  </h3>
                  <p className="text-slate-700 mb-3">
                    As AI automates routine tasks, millions of workers face job loss or wage stagnation. Yet most lack
                    access to affordable, relevant training programs that prepare them for AI-enabled careers.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Administrative, data entry, and customer service roles most at risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Workers over 45 and those without college degrees face greatest barriers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Traditional workforce systems not designed for rapid technological change</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Educational Access Gaps</h3>
                  <p className="text-slate-700 mb-3">
                    K-12 and higher education systems are not keeping pace with AI innovation. Students in underserved
                    communities lack exposure to AI concepts, computational thinking, and the foundational skills needed
                    for future careers.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Only 35% of U.S. high schools offer computer science courses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Puerto Rico and rural districts have even less access to tech education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Teacher training in AI literacy virtually nonexistent</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Small Business Competitiveness Crisis</h3>
                  <p className="text-slate-700 mb-3">
                    Small businesses — the backbone of local economies — risk being left behind as larger corporations
                    adopt AI tools for efficiency, customer insights, and operations. Without support, the small
                    business sector faces permanent decline.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>78% of small business owners lack understanding of AI applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Cost and complexity create barriers to adoption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Latino and women-owned businesses disproportionately affected</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    4. Representation and Power Imbalances in AI Development
                  </h3>
                  <p className="text-slate-700 mb-3">
                    The people building AI systems do not reflect the diversity of the people impacted by them. This
                    leads to biased algorithms, exclusionary products, and technologies that reinforce rather than
                    reduce inequality.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Women hold only 22% of AI research and development roles globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Black and Latino professionals critically underrepresented in AI leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Puerto Rican and Caribbean voices largely absent from AI policy conversations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Puerto Rico Context */}
            <div className="bg-blue-50 rounded-xl p-8 mb-16 border border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Puerto Rico: A Case Study in Urgency</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Puerto Rico exemplifies the stakes of the AI skills crisis. With high unemployment, brain drain of young
                professionals to the mainland, economic vulnerability, and limited tech infrastructure, the island faces
                existential challenges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Yet Puerto Rico also holds unique advantages: a bilingual, bicultural workforce; a strategic position as
                a bridge between the United States and Latin America; world-class universities; and a resilient
                community committed to innovation and self-determination.
              </p>
              <p className="text-slate-700 leading-relaxed font-semibold">
                The question is not whether Puerto Rico can lead in AI — it's whether Puerto Rico will be given the
                resources, recognition, and partnerships to do so.
              </p>
            </div>

            {/* The Cost of Inaction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Cost of Inaction</h2>
              <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-600">
                <p className="text-slate-800 leading-relaxed mb-4">
                  If we fail to act, the consequences will be severe and long-lasting:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>Permanent unemployment</strong> for millions of workers unable to transition to AI-enabled
                      roles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>Widening wealth gaps</strong> as AI productivity gains accrue only to tech companies and
                      investors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>Small business extinction</strong> as AI-powered competitors dominate markets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>Algorithmic discrimination</strong> embedded in critical systems affecting housing,
                      employment, healthcare, and justice
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>Loss of democratic voice</strong> as marginalized communities have no seat at the table
                      shaping AI policy
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* A Call to Action */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-4">But There Is Another Path Forward</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                The AI skills crisis is not inevitable. With vision, urgency, and coordinated action, we can ensure that
                artificial intelligence becomes a tool for empowerment rather than exclusion.
              </p>
              <p className="text-slate-200 leading-relaxed font-semibold">
                That is the mission of the American Foundation for Artificial Intelligence — and the focus of this
                strategic plan.
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
              href="/strategic-plan-2030"
              className="text-slate-600 hover:text-blue-600 font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Overview
            </Link>
            <Link
              href="/strategic-plan-2030/transformative-change"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              Next: Transformative Change
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
