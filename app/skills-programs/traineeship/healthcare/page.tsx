import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, BookOpen } from "lucide-react"

export default function HealthcareTrackPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8">
            <Link href="/skills-programs" className="text-blue-300 hover:text-white">
              Skills Programmes
            </Link>
            <span className="mx-2 text-blue-400">/</span>
            <Link href="/skills-programs/traineeship" className="text-blue-300 hover:text-white">
              Traineeship
            </Link>
            <span className="mx-2 text-blue-400">/</span>
            <span className="text-white">AI for Healthcare</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                Healthcare Track
              </span>
              <h1 className="text-5xl font-bold mb-6">AI for Healthcare Track</h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform healthcare delivery and patient outcomes with practical AI applications in clinical settings,
                operations, and health systems management.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold">$3,500</div>
                  <div className="text-blue-300">Monthly Stipend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">12 Months</div>
                  <div className="text-blue-300">Full Programme</div>
                </div>
              </div>
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                Apply to Healthcare Track
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Healthcare Training"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Duration</div>
                <div className="text-slate-600">3 months training + 9 months OJT</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Certification</div>
                <div className="text-slate-600">Professional AI in Healthcare</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Class Size</div>
                <div className="text-slate-600">Small cohorts (15-20)</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Prerequisites</div>
                <div className="text-slate-600">High school + healthcare interest</div>
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
            Comprehensive training covering AI applications across the healthcare spectrum
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Phase 1: Foundational Training (Months 1-3)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">AI Fundamentals for Healthcare</div>
                    <div className="text-slate-600">
                      Introduction to machine learning, natural language processing, and computer vision in medical
                      contexts
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Clinical Documentation AI</div>
                    <div className="text-slate-600">
                      AI-assisted charting, clinical note generation, and medical record management
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Healthcare Data Privacy & Ethics</div>
                    <div className="text-slate-600">
                      HIPAA compliance, patient data protection, and ethical AI use in medical settings
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Diagnostic Support Systems</div>
                    <div className="text-slate-600">
                      AI-powered diagnostic tools, imaging analysis, and decision support systems
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Patient Engagement AI</div>
                    <div className="text-slate-600">
                      Chatbots, virtual health assistants, and patient communication tools
                    </div>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Phase 2: On-the-Job Training (Months 4-12)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Real Clinical Environment Experience</div>
                    <div className="text-slate-600">
                      Work alongside healthcare professionals in hospitals, clinics, or health systems
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Healthcare Operations Projects</div>
                    <div className="text-slate-600">
                      Implement AI solutions for scheduling, resource allocation, and workflow optimization
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Quality Improvement Initiatives</div>
                    <div className="text-slate-600">
                      Use AI analytics to identify opportunities for better patient outcomes
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Professional Mentorship</div>
                    <div className="text-slate-600">
                      Regular guidance from experienced healthcare IT and clinical leaders
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Portfolio Development</div>
                    <div className="text-slate-600">
                      Build a portfolio of healthcare AI projects to showcase to future employers
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
              <div className="text-4xl font-bold text-blue-600 mb-2">80%+</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Job Placement Rate</div>
              <div className="text-slate-600">Healthcare track graduates employed within 3 months</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$55-75K</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Starting Salary Range</div>
              <div className="text-slate-600">Average first-year compensation for graduates</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Hired by Host Employer</div>
              <div className="text-slate-600">Trainees offered full-time roles at their OJT site</div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Potential Career Paths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Healthcare AI Specialist</h4>
                <p className="text-sm text-slate-600">Implement and manage AI tools in clinical settings</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Clinical Operations Analyst</h4>
                <p className="text-sm text-slate-600">Optimize healthcare workflows with AI analytics</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Health Information Specialist</h4>
                <p className="text-sm text-slate-600">Manage AI-enabled health records and data systems</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Patient Engagement Coordinator</h4>
                <p className="text-sm text-slate-600">Deploy AI tools for patient communication and support</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Healthcare Quality Analyst</h4>
                <p className="text-sm text-slate-600">Use AI to improve patient outcomes and safety</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-slate-900 mb-1">Medical Technology Coordinator</h4>
                <p className="text-sm text-slate-600">Support implementation of AI diagnostic tools</p>
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
            Our healthcare track partners with leading hospitals, health systems, and healthcare technology companies
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6 flex items-center justify-center bg-slate-50">
                <div className="text-center">
                  <div className="w-full h-24 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-slate-400 font-semibold">Partner Logo {i}</span>
                  </div>
                  <p className="text-sm text-slate-600">Healthcare Partner</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-600">
            Training and placement opportunities with major hospitals, health systems, and healthcare technology
            companies across the U.S.
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Prerequisites & Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Minimum Requirements</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">High school diploma or equivalent</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Basic computer and internet skills</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Strong interest in healthcare and patient care</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Commitment to full 12-month programme</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Preferred Experience</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Prior healthcare experience (any role)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Customer service or patient interaction experience</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Associate degree or coursework in health-related field</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Basic understanding of medical terminology</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare with AI?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the Healthcare Track and become part of the future of patient care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/contact">Apply to Healthcare Track</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/skills-programs/traineeship">Compare All Tracks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
