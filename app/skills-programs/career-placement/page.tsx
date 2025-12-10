import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Briefcase, Users, FileText, TrendingUp, Building2, GraduationCap } from "lucide-react"

export default function CareerPlacementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8">
            <Link href="/skills-programs" className="text-purple-300 hover:text-white">
              Skills Programmes
            </Link>
            <span className="mx-2 text-purple-400">/</span>
            <span className="text-white">Career Placement Programme</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Career Placement Programme</h1>
              <p className="text-xl text-purple-100 mb-8">
                Navigate your career journey with our comprehensive placement support. Connect with hiring companies in
                high-growth industries through exclusive access to our job portal, career counseling, and professional
                development resources.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                  Register Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Explore Jobs
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Career Placement"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Partner in Career Success</h2>
            <p className="text-xl text-slate-600">
              AFAI's Career Placement Programme provides comprehensive support to help you secure meaningful employment
              in AI-enabled industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Exclusive Job Portal</h3>
              <p className="text-slate-600">
                Access hundreds of job opportunities from employers actively seeking AI-skilled candidates
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Career Counseling</h3>
              <p className="text-slate-600">
                One-on-one guidance from experienced career advisors who understand the AI job market
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Resources</h3>
              <p className="text-slate-600">
                Resume reviews, interview prep, networking events, and skill development workshops
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What's Included</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Job Search Support</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Exclusive Job Board Access</div>
                    <div className="text-slate-600">
                      Browse opportunities from vetted employers seeking AI-skilled talent
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Job Matching Services</div>
                    <div className="text-slate-600">
                      Personalized job recommendations based on your skills and career goals
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Application Support</div>
                    <div className="text-slate-600">
                      Assistance with job applications, cover letters, and follow-up strategies
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Employer Connections</div>
                    <div className="text-slate-600">Direct introductions to hiring managers and recruiters</div>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Career Development</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Resume & LinkedIn Optimization</div>
                    <div className="text-slate-600">
                      Professional reviews and updates to showcase your AI skills effectively
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Interview Preparation</div>
                    <div className="text-slate-600">
                      Mock interviews, coaching, and feedback to improve your performance
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Networking Events</div>
                    <div className="text-slate-600">Connect with employers, alumni, and industry professionals</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Ongoing Skills Development</div>
                    <div className="text-slate-600">
                      Access to workshops, webinars, and continuing education resources
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Industries We Serve</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Connect with employers across high-growth sectors actively hiring AI-skilled professionals
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Building2 className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Technology</h3>
              <p className="text-sm text-slate-600">Software companies, startups, and tech enterprises</p>
            </Card>
            <Card className="p-6">
              <Briefcase className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Healthcare</h3>
              <p className="text-sm text-slate-600">Hospitals, health systems, and medical technology</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Finance</h3>
              <p className="text-sm text-slate-600">Banks, fintech, insurance, and financial services</p>
            </Card>
            <Card className="p-6">
              <Users className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Retail & E-commerce</h3>
              <p className="text-sm text-slate-600">Consumer brands, online marketplaces, logistics</p>
            </Card>
            <Card className="p-6">
              <GraduationCap className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Education</h3>
              <p className="text-sm text-slate-600">Schools, universities, and ed-tech companies</p>
            </Card>
            <Card className="p-6">
              <Building2 className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Hospitality</h3>
              <p className="text-sm text-slate-600">Hotels, restaurants, tourism, and entertainment</p>
            </Card>
            <Card className="p-6">
              <Briefcase className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Manufacturing</h3>
              <p className="text-sm text-slate-600">Production facilities, supply chain, quality control</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Professional Services</h3>
              <p className="text-sm text-slate-600">Consulting, marketing, HR, and business services</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Placement Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
              <div className="text-slate-900 font-semibold mb-1">Placement Rate</div>
              <div className="text-sm text-slate-600">Within 3 months of programme completion</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-900 font-semibold mb-1">Partner Employers</div>
              <div className="text-sm text-slate-600">Actively hiring through our platform</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$58K</div>
              <div className="text-slate-900 font-semibold mb-1">Average Starting Salary</div>
              <div className="text-sm text-slate-600">For graduates in AI-enabled roles</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-slate-900 font-semibold mb-1">Satisfaction Rate</div>
              <div className="text-sm text-slate-600">Programme participants recommend our services</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Register */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Who Can Register</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Priority Access</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">AFAI programme graduates (Traineeship, Certificates, Academy)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Recent career changers seeking AI-enabled roles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Workers displaced by economic shifts or industry changes</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">General Access</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Job seekers with AI skills or relevant training</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professionals from underserved communities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Anyone seeking to advance their career in AI-enabled industries
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "The Career Placement Programme connected me with three companies in my first month. The interview
                coaching was invaluable—I felt confident and prepared. I accepted an offer within 6 weeks of
                registration."
              </p>
              <p className="font-semibold text-slate-900">Sarah Chen</p>
              <p className="text-sm text-slate-600">Now: Business Analyst at Tech Corp</p>
            </Card>
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "After completing the traineeship, the placement team helped me refine my resume and connected me with
                employers. The networking events were game-changers—I met my current employer at one!"
              </p>
              <p className="font-semibold text-slate-900">Marcus Johnson</p>
              <p className="text-sm text-slate-600">Now: Operations Coordinator at Healthcare Plus</p>
            </Card>
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "I was nervous about transitioning careers, but the career counselors provided amazing support. They
                helped me showcase my transferable skills and AI training. I landed my dream job in 2 months."
              </p>
              <p className="font-semibold text-slate-900">Elena Rodriguez</p>
              <p className="text-sm text-slate-600">Now: Customer Success Specialist at StartupHub</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Register for the Career Placement Programme and connect with employers seeking AI-skilled talent
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/contact">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-purple-900 hover:bg-purple-50">
              <Link href="/skills-programs">View All Programmes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
