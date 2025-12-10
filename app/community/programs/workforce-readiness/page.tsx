import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react"

export default function WorkforceReadinessPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">
              Community
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">AI Workforce Readiness Program</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/community" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Community
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Workforce Readiness Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Preparing workers and job seekers for AI-powered careers through comprehensive training, mentorship, and
            industry connections.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                The AI Workforce Readiness Program equips workers transitioning into AI-enhanced roles with the
                technical skills, professional development, and industry connections needed to succeed in the evolving
                job market.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through partnerships with workforce boards, employers, and training institutions, we provide accessible
                pathways for underserved communities to access high-quality AI education and career opportunities.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/skills-programs/traineeship">
                  Apply to Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
                <div className="text-gray-600">Workers Trained</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">$18K</div>
                <div className="text-gray-600">Avg. Salary Increase</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">6 months</div>
                <div className="text-gray-600">Program Duration</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Program Components</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Training</h3>
              <p className="text-gray-600">
                Comprehensive AI fundamentals, prompt engineering, automation tools, and data literacy skills.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mentorship</h3>
              <p className="text-gray-600">
                One-on-one guidance from AI professionals and industry leaders throughout your journey.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Services</h3>
              <p className="text-gray-600">
                Resume building, interview prep, and direct connections to hiring partners.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certifications</h3>
              <p className="text-gray-600">
                Industry-recognized credentials that validate your AI skills to employers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Application */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Eligibility & How to Apply</h2>

          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Who Can Apply</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Workers looking to transition into AI-enhanced roles
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Job seekers from underserved communities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Individuals with high school diploma or equivalent
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Commitment to 15-20 hours per week for 6 months
              </li>
            </ul>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/skills-programs/traineeship">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of workers who have successfully transitioned into AI-powered careers through AFAI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/skills-programs/traineeship">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
