import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"

export default function VisionAndProgrammePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=500&width=1920&query=diverse+people+learning+AI+technology+bright+future)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Vision and Programme</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering underserved communities through equitable access to AI education, workforce mobility, and
            responsible innovation
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Vision for AI Equity</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              AFAI envisions a future where AI education, workforce opportunity, and technological innovation are
              accessible to all communities—especially those historically excluded from tech. We are building pathways
              for Latino talent, Puerto Rican leadership, and underserved populations to shape the AI-powered economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To expand equitable access to AI skills, workforce mobility, and responsible innovation across
                underserved communities in Puerto Rico and the United States.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-600">
                Equity, innovation, community empowerment, responsible technology, and Latino leadership in shaping the
                future of AI.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Impact</h3>
              <p className="text-slate-600">
                Training 50,000+ individuals, partnering with 200+ organizations, and establishing Puerto Rico as a
                leader in responsible AI by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Links Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Strategic Framework</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Link
              href="/programme-2026-2029"
              className="group block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AFAI Programme 2026-2029
                  </h3>
                  <p className="text-slate-600">
                    Our 4-year implementation roadmap focusing on students, workforce, small business, and communities
                    with specific goals and targets.
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
              </div>
            </Link>

            <Link
              href="/strategic-plan-2030"
              className="group block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    20-Year Strategic Vision
                  </h3>
                  <p className="text-slate-600">
                    Our long-term strategic plan through 2030 addressing the AI skills crisis and charting pathways for
                    transformative change.
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
              </div>
            </Link>

            <Link
              href="/puerto-rico"
              className="group block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Puerto Rico AI Blueprint
                  </h3>
                  <p className="text-slate-600">
                    Our framework for establishing Puerto Rico as a global leader in responsible AI development and
                    Latino tech talent.
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building AI Equity</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with AFAI to expand access to AI education and create pathways for underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/partners">Become a Partner</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
