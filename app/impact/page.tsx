import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Building2, Heart, Shield, Home } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/placeholder.svg?height=800&width=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Impact</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              AFAI measures impact through the lives we change, the skills we build, and the communities we strengthen.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Our work expands opportunity for students, workers, small businesses, women, and public-serving
              institutions across the United States and Puerto Rico.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium">
              AI becomes meaningful only when it improves lives — and our impact shows exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* Why Impact Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Impact Matters</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The AI era is not defined by technology alone — it is defined by who benefits from it.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  AFAI ensures that access, skills, and opportunity reach people that have historically been left
                  behind.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Community Impact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Our impact is measured in:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Stronger digital confidence",
                  "Increased economic mobility",
                  "Expanded career pathways",
                  "Healthier small-business ecosystems",
                  "More resilient communities",
                  "Ethical, transparent adoption of AI",
                  "Improved educational outcomes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-medium text-gray-900 mt-8 text-center">
                This is not theoretical impact — it is measurable, community-level change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Across Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Impact Across Our Core Programs</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Education */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold">Education & AI Literacy</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Students gain:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stronger academic engagement</li>
                    <li>• Higher digital confidence</li>
                    <li>• Exposure to career pathways</li>
                    <li>• Improved project-based learning</li>
                    <li>• Excitement for STEM fields</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Educators gain:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI instructional tools</li>
                    <li>• Professional development</li>
                    <li>• Sustainable classroom integration</li>
                    <li>• Confidence in technology use</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">School systems gain:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Increased innovation capacity</li>
                    <li>• Stronger district-wide readiness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Workforce */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold">Workforce Development & Upskilling</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Workers experience:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Wage increases</li>
                    <li>• Job promotions</li>
                    <li>• Improved job security</li>
                    <li>• More competitive skill profiles</li>
                    <li>• Reduced burnout through automation</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Employers benefit from:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modernized internal processes</li>
                    <li>• Higher productivity</li>
                    <li>• Improved customer service</li>
                    <li>• Skilled talent pipelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Small Business */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold">Small Business & Community Empowerment</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Small businesses report:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Increased revenue</li>
                    <li>• Better financial planning</li>
                    <li>• Stronger marketing performance</li>
                    <li>• Streamlined operations</li>
                    <li>• More time for growth and innovation</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Communities see:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stronger local economies</li>
                    <li>• Improved business survivability</li>
                    <li>• Technology adoption across corridors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Women's Empowerment */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-3xl font-bold">Women's Economic Empowerment</h3>
              </div>
              <div className="bg-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Women experience:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Increased income</li>
                    <li>• Flexible and accessible training</li>
                    <li>• Successful re-entry into workforce</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Microbusiness launches</li>
                    <li>• Leadership readiness</li>
                    <li>• Improved financial stability</li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-700 font-medium">
                  Families, neighborhoods, and community organizations benefit from the ripple effect.
                </p>
              </div>
            </div>

            {/* Responsible AI */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold">Responsible AI & Public-Benefit Research</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Public institutions gain:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ethical AI frameworks</li>
                    <li>• Safer adoption</li>
                    <li>• Improved trust</li>
                    <li>• Strengthened digital infrastructure</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Communities gain:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Transparency</li>
                    <li>• Reduced risk</li>
                    <li>• Informed public access to technology</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Innovation */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold">Community Innovation & Municipal Capacity</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Municipalities report:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stronger emergency response</li>
                    <li>• Reduced administrative burdens</li>
                    <li>• Improved public service workflows</li>
                    <li>• More equitable public access</li>
                    <li>• Community-wide digital uplift</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Nonprofits benefit through:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Better tools</li>
                    <li>• Modernized operations</li>
                    <li>• Staff upskilling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Impact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Stories of Impact</h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              These stories represent the core of our mission.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold mb-3">María</h3>
                <p className="text-gray-400 mb-4">Hospitality Worker, Puerto Rico</p>
                <p className="text-gray-300 leading-relaxed">
                  Used AI for guest experience workflows and earned a promotion.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Jayden</h3>
                <p className="text-gray-400 mb-4">High School Senior</p>
                <p className="text-gray-300 leading-relaxed">
                  Completed AI Fundamentals, built his first AI project, and gained a pathway into computer science.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Rosa & Tania</h3>
                <p className="text-gray-400 mb-4">Small-Business Owners</p>
                <p className="text-gray-300 leading-relaxed">
                  Used AI marketing tools to grow their customer base and stabilize revenue.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Elena</h3>
                <p className="text-gray-400 mb-4">Single Mother & Career Changer</p>
                <p className="text-gray-300 leading-relaxed">
                  Gained AI administrative training and secured a new remote job with higher pay and flexibility.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-medium text-yellow-400">Each story reflects a broader truth:</p>
              <p className="text-xl text-gray-300 mt-4">
                When people gain AI skills, opportunity expands — for entire communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Puerto Rico Blueprint */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Puerto Rico AI Blueprint: Demonstration of Impact</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Puerto Rico allows us to demonstrate:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Large-scale AI literacy",
                "Regional workforce transformation",
                "Small-business modernization",
                "Municipal digital capacity-building",
                "Ethical, transparent adoption",
                "Equitable community-first innovation",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold text-yellow-400">What we prove in Puerto Rico becomes a national model.</p>
          </div>
        </div>
      </section>

      {/* How We Measure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">How We Measure Impact</h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl mb-8 text-gray-700">We track:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "Enrollment & participation",
                  "Skills acquisition",
                  "Wage growth",
                  "Job placement",
                  "Business revenue uplift",
                  "Education outcomes",
                  "Digital access improvements",
                  "Organizational capacity increases",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 text-center">
                We publish annual impact reports for full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Impact Is the Promise. Equity Is the Goal. Opportunity Is the Outcome.
            </h2>
            <Link href="/stories">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6">
                Explore Impact Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
