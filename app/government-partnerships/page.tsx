import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Shield, Wifi, Briefcase, Store, CheckCircle2 } from "lucide-react"

export default function GovernmentPartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/placeholder.svg?height=800&width=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Policy & Government Partnerships</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              AFAI collaborates with public institutions, municipalities, and government agencies to expand AI access,
              strengthen digital infrastructure, and ensure communities adopt technology responsibly and equitably.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Our work supports education, workforce development, economic mobility, and public-sector modernization —
              without engaging in political activity or lobbying.
            </p>
            <p className="text-xl text-gray-900 leading-relaxed mb-6">
              We provide nonpartisan research, technical assistance, capacity-building, and community-centered
              innovation models.
            </p>
            <p className="text-xl text-gray-900 font-medium">
              We help government partners build stronger, more resilient, more inclusive digital ecosystems that serve
              all residents.
            </p>
          </div>
        </div>
      </section>

      {/* Why Government Collaboration Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Government Collaboration Matters</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Cities, states, and territories across the U.S. face significant challenges:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                "Rapid AI adoption without clear standards",
                "Limited digital literacy among residents",
                "Workforce disruption pressures",
                "Outdated public systems and infrastructure",
                "Gaps in digital access and equitable service delivery",
                "Limited capacity for AI risk evaluation and governance",
              ].map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-2xl text-gray-900 font-medium mb-4">
                Public institutions need support to modernize responsibly and equitably — while maintaining
                transparency, ethics, and community trust.
              </p>
              <p className="text-xl text-blue-900 font-bold">AFAI helps governments bridge these gaps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Approach</h2>
            <p className="text-xl text-gray-700 mb-8 text-center">
              We help public-sector partners adopt AI tools and strategies that:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improve service delivery",
                "Increase operational efficiency",
                "Enhance community engagement",
                "Expand resident access",
                "Protect vulnerable populations",
                "Reduce administrative burdens",
                "Ensure responsible, ethical implementation",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 text-center mt-8 italic">
              All support is strictly nonpartisan, educational, and aligned with IRS guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Government Partnership Pillars */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Government Partnership Pillars</h2>

            <div className="space-y-12">
              {/* Pillar 1 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">1. Public-Sector Training & Capacity-Building</h3>
                    <p className="text-lg text-gray-300 mb-4">We train government teams to:</p>
                    <ul className="space-y-2">
                      {[
                        "Integrate responsible AI tools",
                        "Improve workflows",
                        "Enhance communication",
                        "Support public-facing services",
                        "Strengthen emergency response",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">
                      Training is tailored to agency roles, community needs, and operational realities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">2. Municipal AI Readiness Assessments</h3>
                    <p className="text-lg text-gray-300 mb-4">We help cities and territories:</p>
                    <ul className="space-y-2">
                      {[
                        "Evaluate current digital capacity",
                        "Identify gaps and risks",
                        "Map responsible AI opportunities",
                        "Build modernization plans",
                        "Strengthen equity and access",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">Assessments guide long-term digital transformation.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">3. Responsible AI Frameworks</h3>
                    <p className="text-lg text-gray-300 mb-4">AFAI provides:</p>
                    <ul className="space-y-2">
                      {[
                        "Ethical adoption models",
                        "Transparency guidelines",
                        "Fairness & bias safeguards",
                        "Resident-facing communication standards",
                        "Community trust-building frameworks",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">This ensures AI supports — not harms — the public.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">4. Community Digital Inclusion</h3>
                    <p className="text-lg text-gray-300 mb-4">We partner with governments to:</p>
                    <ul className="space-y-2">
                      {[
                        "Expand community Wi-Fi",
                        "Establish digital learning centers",
                        "Distribute devices",
                        "Support vulnerable populations",
                        "Close the urban–rural digital divide",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">
                      Community inclusion is essential for equitable innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">5. Workforce & Economic Mobility Initiatives</h3>
                    <p className="text-lg text-gray-300 mb-4">
                      We align with federal and municipal workforce systems to:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Deliver AI upskilling",
                        "Prepare residents for emerging jobs",
                        "Strengthen employer partnerships",
                        "Support industry-aligned talent pipelines",
                        "Accelerate regional economic growth",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">This helps cities build future-ready workforces.</p>
                  </div>
                </div>
              </div>

              {/* Pillar 6 */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-pink-500 flex items-center justify-center flex-shrink-0">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">6. Small-Business Innovation Ecosystems</h3>
                    <p className="text-lg text-gray-300 mb-4">We support:</p>
                    <ul className="space-y-2 mb-4">
                      {["Economic development offices", "Chambers of commerce", "Local business districts"].map(
                        (item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ),
                      )}
                    </ul>
                    <p className="text-lg text-gray-300 mb-2">…to strengthen small-business AI adoption through:</p>
                    <ul className="space-y-2">
                      {[
                        "Training",
                        "Modernization strategies",
                        "Technical assistance",
                        "Community innovation hubs",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 mt-4 italic">
                      These efforts boost local competitiveness and job creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Who We Partner With</h2>
            <p className="text-xl text-gray-700 mb-12 text-center">AFAI collaborates with:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                "Municipal and territorial governments",
                "Workforce development agencies",
                "Economic development organizations",
                "Public schools and universities",
                "Nonprofit and community-based organizations",
                "Public libraries and cultural institutions",
                "Emergency response teams",
                "Health and human services agencies",
              ].map((partner, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <p className="text-lg font-medium text-gray-900">{partner}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 text-center italic">
              All partnerships are nonpartisan, public-good–focused, and grounded in community needs.
            </p>
          </div>
        </div>
      </section>

      {/* Puerto Rico Blueprint */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">
              Puerto Rico AI Blueprint: Government Innovation Pillar
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-8">
              Puerto Rico is the cornerstone of our public-sector innovation strategy.
            </p>
            <p className="text-xl text-gray-900 leading-relaxed mb-6">
              We work with municipalities and agencies across the island to:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Expand digital access",
                "Modernize public services",
                "Support economic development",
                "Strengthen local talent pipelines",
                "Increase community resilience",
                "Build ethical, transparent AI models",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-900 font-bold text-center">
              This creates a scalable example for the mainland U.S.
            </p>
          </div>
        </div>
      </section>

      {/* Nonpartisan Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Nonpartisan, Ethical, Community-First Government Support
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                AFAI does not lobby, influence legislation, or engage in political activity.
              </p>
              <p className="text-lg text-gray-700 mb-6">Our work focuses exclusively on:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  "Education",
                  "Research",
                  "Community support",
                  "Responsible innovation",
                  "Public-benefit capacity-building",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 italic text-center">
                All partnerships respect IRS 501(c)(3) requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Build Stronger Public Systems With AFAI</h2>
            <p className="text-xl text-gray-300 mb-12">
              We help government agencies modernize responsibly, strengthen community access, and support equitable
              digital transformation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
