import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Clock, Users, Award, DollarSign, MapPin } from "lucide-react"

export default function TraineeshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8">
            <Link href="/skills-programs" className="text-slate-300 hover:text-white">
              Skills Programmes
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-white">AI Workforce Traineeship</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">AI Workforce Traineeship Programme</h1>
              <p className="text-xl text-slate-300 mb-8">
                12-month comprehensive training program combining 3 months of intensive AI education with 9 months of
                hands-on experience at leading organizations
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traineeship Programme"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">12 Months</div>
              <div className="text-slate-600">Total Duration</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">$3,000-3,500</div>
              <div className="text-slate-600">Monthly Stipend</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">75%+</div>
              <div className="text-slate-600">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">2 Tracks</div>
              <div className="text-slate-600">Specialized Pathways</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Programme Overview</h2>
              <p className="text-lg text-slate-700 mb-6">
                The AFAI Workforce Traineeship Programme is a comprehensive 12-month training initiative designed to
                equip individuals with the AI skills needed to thrive in today's rapidly evolving workplace.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                This programme combines rigorous classroom training with practical on-the-job experience, ensuring that
                graduates are not just familiar with AI concepts, but can apply them effectively in real-world business
                environments.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Months 1-3: Intensive Training</h3>
                    <p className="text-slate-600">
                      Foundational AI knowledge, technical skills, and industry-specific applications
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Months 4-12: On-the-Job Training</h3>
                    <p className="text-slate-600">
                      Real-world application at leading companies with mentorship and guidance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Career Support</h3>
                    <p className="text-slate-600">
                      Job placement assistance, networking opportunities, and ongoing professional development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-yellow-50 border-yellow-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Gain</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Industry-recognized AI certifications</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Hands-on experience with leading AI tools and platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Professional network of industry leaders and peers</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Portfolio of real-world projects to showcase to employers</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Monthly stipend throughout the entire 12-month programme</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Application Timeline</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-slate-900">Applications Open</div>
                    <div className="text-slate-600">Now through November 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Interviews</div>
                    <div className="text-slate-600">October 2025 - December 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Programme Starts</div>
                    <div className="text-slate-600">January 2026</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Choose Your Track</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Select the pathway that aligns with your career goals and interests
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">AI for Healthcare</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">$3,500</div>
                  <div className="text-sm text-slate-600">per month</div>
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                Transform healthcare delivery with AI applications in patient care, clinical operations, and health
                systems management.
              </p>
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-900">You'll Learn:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    AI-assisted patient documentation and care coordination
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Healthcare data privacy, HIPAA compliance, and ethical AI
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Diagnostic support systems and treatment planning
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Healthcare operations optimization with AI
                  </li>
                </ul>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/skills-programs/traineeship/healthcare">
                  View Healthcare Track
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">AI for Business Operations</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">$3,000</div>
                  <div className="text-sm text-slate-600">per month</div>
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                Drive business growth and efficiency with AI applications in marketing, operations, analytics, and
                customer engagement.
              </p>
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-900">You'll Learn:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    AI-powered marketing automation and customer insights
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Business process automation and workflow optimization
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Data analytics, forecasting, and AI-driven decision making
                  </li>
                  <li className="flex gap-2 text-slate-600">
                    <span className="text-yellow-600">•</span>
                    Customer service AI and engagement strategies
                  </li>
                </ul>
              </div>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/skills-programs/traineeship/business">
                  View Business Track
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Eligibility Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Required Qualifications</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">U.S. citizen or permanent resident</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Available for full-time commitment (12 months)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">High school diploma or equivalent (minimum)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Basic computer literacy</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">First-time participant in workforce training programmes</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ideal Candidates</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Career changers seeking to enter tech-enabled fields</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Recent graduates looking to gain practical AI experience</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professionals from underserved communities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Individuals demonstrating strong commitment and motivation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Those with a passion for learning and innovation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Training Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">San Juan, PR</h3>
              <p className="text-sm text-slate-600">Primary Training Center</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">New York, NY</h3>
              <p className="text-sm text-slate-600">Training Center</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Miami, FL</h3>
              <p className="text-sm text-slate-600">Training Center</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Chicago, IL</h3>
              <p className="text-sm text-slate-600">Training Center</p>
            </Card>
          </div>
          <p className="text-center text-slate-600 mt-8">
            On-the-job training locations vary based on employer partnerships and may include additional cities across
            the U.S.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Your AI Career Journey?</h2>
          <p className="text-xl text-slate-800 mb-8">Applications for the 2026 cohort are now open</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
              <Link href="/help">Get Help with Your Application</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
