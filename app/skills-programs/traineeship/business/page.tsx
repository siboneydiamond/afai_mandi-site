import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, BookOpen } from "lucide-react"

export default function BusinessTrackPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8">
            <Link href="/skills-programs" className="text-green-300 hover:text-white">
              Skills Programmes
            </Link>
            <span className="mx-2 text-green-400">/</span>
            <Link href="/skills-programs/traineeship" className="text-green-300 hover:text-white">
              Traineeship
            </Link>
            <span className="mx-2 text-green-400">/</span>
            <span className="text-white">AI for Business Operations</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-sm font-semibold mb-4">
                Business Track
              </span>
              <h1 className="text-5xl font-bold mb-6">AI for Business Operations Track</h1>
              <p className="text-xl text-green-100 mb-8">
                Drive business growth and operational excellence with practical AI applications in marketing, analytics,
                customer engagement, and process automation.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold">$3,000</div>
                  <div className="text-green-300">Monthly Stipend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">12 Months</div>
                  <div className="text-green-300">Full Programme</div>
                </div>
              </div>
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                Apply to Business Track
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Business Training"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 bg-green-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Duration</div>
                <div className="text-slate-600">3 months training + 9 months OJT</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Certification</div>
                <div className="text-slate-600">Business AI Operations Certificate</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Class Size</div>
                <div className="text-slate-600">Small cohorts (15-20)</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Prerequisites</div>
                <div className="text-slate-600">High school + business interest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">What You'll Learn</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive training covering AI applications across all business functions
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Phase 1: Foundational Training (Months 1-3)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">AI for Business Fundamentals</div>
                    <div className="text-slate-600">
                      Introduction to AI applications in business contexts, automation, and analytics
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">AI-Powered Marketing</div>
                    <div className="text-slate-600">
                      Marketing automation, customer segmentation, content creation, and campaign optimization
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Business Analytics & Forecasting</div>
                    <div className="text-slate-600">
                      Data-driven decision making, predictive analytics, and AI-powered business intelligence
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Customer Experience AI</div>
                    <div className="text-slate-600">
                      Chatbots, virtual assistants, personalization engines, and customer service automation
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Process Automation</div>
                    <div className="text-slate-600">
                      Workflow optimization, RPA, document processing, and operational efficiency tools
                    </div>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Phase 2: On-the-Job Training (Months 4-12)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Real Business Environment</div>
                    <div className="text-slate-600">
                      Work with leading companies implementing AI across operations, marketing, and analytics
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Cross-Functional Projects</div>
                    <div className="text-slate-600">
                      Collaborate with marketing, operations, and analytics teams on AI initiatives
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Business Impact Analysis</div>
                    <div className="text-slate-600">Measure and report on the ROI of AI implementations</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Professional Development</div>
                    <div className="text-slate-600">Regular mentorship from business leaders and AI practitioners</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Portfolio Building</div>
                    <div className="text-slate-600">
                      Create case studies of successful AI projects to showcase to employers
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Career Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">75%+</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Job Placement Rate</div>
              <div className="text-slate-600">Business track graduates employed within 3 months</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$50-70K</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Starting Salary Range</div>
              <div className="text-slate-600">Average first-year compensation for graduates</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Hired by Host Employer</div>
              <div className="text-slate-600">Trainees offered full-time roles at their OJT site</div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Potential Career Paths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Business AI Analyst</h4>
                <p className="text-sm text-slate-600">Analyze and implement AI solutions for business growth</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Marketing Automation Specialist</h4>
                <p className="text-sm text-slate-600">Deploy and manage AI-powered marketing campaigns</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Operations Coordinator</h4>
                <p className="text-sm text-slate-600">Optimize business processes with AI and automation</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Customer Experience Specialist</h4>
                <p className="text-sm text-slate-600">Implement AI tools for enhanced customer engagement</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Business Intelligence Analyst</h4>
                <p className="text-sm text-slate-600">Use AI analytics to drive strategic decisions</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Digital Transformation Coordinator</h4>
                <p className="text-sm text-slate-600">Support company-wide AI adoption initiatives</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Training Partners & Host Employers</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Our business track partners with leading companies across industries including retail, hospitality, finance,
            and technology
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6 flex items-center justify-center bg-slate-50">
                <div className="text-center">
                  <div className="w-full h-24 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-slate-400 font-semibold">Partner Logo {i}</span>
                  </div>
                  <p className="text-sm text-slate-600">Business Partner</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-600">
            Training and placement opportunities with major corporations, growing startups, and industry leaders
            nationwide
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Prerequisites & Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Minimum Requirements</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">High school diploma or equivalent</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Proficiency with computers and standard office software</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Interest in business operations and technology</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Commitment to full 12-month programme</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Preferred Experience</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Previous work experience in business, retail, or customer service
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Familiarity with marketing, sales, or operations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Associate degree or coursework in business-related field</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Strong analytical and problem-solving skills</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Drive Business Success with AI?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join the Business Operations Track and accelerate your career in the AI-enabled workplace
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/contact">Apply to Business Track</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-green-900 hover:bg-green-50">
              <Link href="/skills-programs/traineeship">Compare All Tracks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
