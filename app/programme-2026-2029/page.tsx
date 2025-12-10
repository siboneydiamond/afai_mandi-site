import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Users, Building2, GraduationCap, Briefcase } from "lucide-react"

export default function Programme20262029Page() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/vision-and-programme" className="hover:text-slate-900">
              Vision and Programme
            </Link>
            <span>/</span>
            <span className="text-slate-900">AFAI Programme 2026-2029</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=500&width=1920&query=diverse+people+working+with+AI+technology+in+modern+workspace)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AFAI Programme 2026-2029</h1>
          <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            <Link href="/programme-2026-2029/download">
              <Download className="w-5 h-5 mr-2" />
              Download the Programme
            </Link>
          </Button>
        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1920&query=puerto+rico+landscape+road+mountains)",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 font-semibold mb-6">
                IMPLEMENTATION ROADMAP
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                The AFAI Programme 2026-2029 lays out specific goals and targets with the aim to achieve three impacts:
              </h2>
            </div>

            <div className="space-y-6 text-lg">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-slate-900 flex-shrink-0">1.</span>
                <div>
                  <strong className="text-slate-900">AI Education Access (skills, knowledge and opportunity)</strong>{" "}
                  has been effectively expanded, democratized and mainstreamed across underserved communities in Puerto
                  Rico and the United States, with particular focus on Latino, women, and rural populations.
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl font-bold text-slate-900 flex-shrink-0">2.</span>
                <div>
                  <strong className="text-slate-900">Workforce transformation and economic mobility</strong> has
                  contributed significantly to addressing systemic inequality through AI-powered upskilling, career
                  transitions, and small business modernization to build economic resilience and reduce the risks of
                  automation displacement.
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl font-bold text-slate-900 flex-shrink-0">3.</span>
                <div>
                  <strong className="text-slate-900">Equitable, ethical, and responsible development of AI</strong> and
                  AI-powered systems have contributed to both technological advancement and a just, inclusive and
                  sustainable society where Latino voices shape AI policy and governance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Focus Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            We are driving change across four focus areas:
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Link
              href="/programme-2026-2029/students"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <GraduationCap className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Students & Youth
                </h3>
                <p className="text-slate-600">
                  To prepare the next generation for AI careers, we need to reach students early—and ensure equitable
                  access to AI education from K-12 through higher education.
                </p>
              </div>
            </Link>

            <Link
              href="/programme-2026-2029/workforce"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Workforce & Workers
                </h3>
                <p className="text-slate-600">
                  We've made progress in workforce training, but workers need accessible upskilling pathways to remain
                  competitive and transition into AI-enhanced careers.
                </p>
              </div>
            </Link>

            <Link
              href="/programme-2026-2029/small-business"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Small Business
                </h3>
                <p className="text-slate-600">
                  Small businesses are the backbone of local economies, yet most lack resources to adopt AI. They need
                  accessible tools and training to stay competitive.
                </p>
              </div>
            </Link>

            <Link
              href="/programme-2026-2029/communities"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Communities & Municipalities
                </h3>
                <p className="text-slate-600">
                  Government services and community organizations are essential to public wellbeing, but they're often
                  under-resourced and slow to modernize with AI tools.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformational Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-700 mb-8">
              AFAI will leverage its core capabilities to mainstream AI education and workforce mobility across eight
              transformational areas identified below by developing new ways of working, new partnerships, and new tools
              and data.
            </p>
            <div className="relative h-[600px] flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=800&query=flower+diagram+infographic+eight+petals+center+circle)",
                }}
              />
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {[
                  "Education Reform",
                  "Workforce Mobility",
                  "Economic Equity",
                  "Digital Access",
                  "Policy Advocacy",
                  "Research & Ethics",
                  "Community Partnerships",
                  "Innovation Hubs",
                ].map((area) => (
                  <div key={area} className="bg-yellow-400/90 backdrop-blur-sm p-4 rounded-lg text-center">
                    <p className="font-semibold text-slate-900 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Achieve Goals */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How will we achieve our goals?</h2>
          <p className="text-xl text-center text-slate-300 mb-16 max-w-3xl mx-auto">
            Increasing collaboration and cooperation across all parts of the organization, we will focus on pathways we
            are already using to drive change.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Convening and networking</h3>
              <p className="text-slate-300">
                We have a unique role bringing diverse coalitions together—educators, employers, policymakers, and
                communities—and exploring new technology to make our networks more accessible.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Guiding with robust research and data</h3>
              <p className="text-slate-300">
                AFAI will remain a trusted voice for equitable AI, guiding policy with robust evidence and lived
                experience—including that of Latino communities and marginalized populations—and sharing data publicly.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Policy and advocacy</h3>
              <p className="text-slate-300">
                AFAI will guide local and federal policies that create change, and play a stronger role in frameworks
                that align AI development with economic justice and social equity.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Empowering and capacity building</h3>
              <p className="text-slate-300">
                We will offer training and resources to help partners grow their skills and implement AI education,
                workforce programs, and responsible innovation even more effectively.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Mobilizing resources for action</h3>
              <p className="text-slate-300">
                We will continue to mobilize funding and partnerships for our network, while learning from our
                communities how we can best support local needs and priorities.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Advancing education and awareness</h3>
              <p className="text-slate-300">
                Understanding AI's impact on work and society fuels empowered action. AFAI will work with partners to
                advance AI literacy and embed ethical AI principles into communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            United as a force for AI equity, we are committed to contributing to national AI readiness strategies, the
            UN Sustainable Development Goals, and responsible AI frameworks—and reporting our progress at the annual
            AFAI Impact Summit.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            <Link href="/programme-2026-2029/download">
              Explore the Programme
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/vision-and-programme">Back to Vision and Programme</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/strategic-plan-2030">20-Year Strategic Vision</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
