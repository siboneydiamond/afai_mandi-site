import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, TrendingUp, Lightbulb, DollarSign, Network } from "lucide-react"

export default function StartupNavigatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Navigate Your Startup Journey with Confidence
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 text-pretty">
              Free resources, expert guidance, and AI-powered tools to help entrepreneurs build, launch, and scale
              successful businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Start and Grow</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AFAI Startup Navigator provides comprehensive support for entrepreneurs at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Planning</h3>
              <p className="text-slate-600 mb-6">
                Step-by-step guides, templates, and AI-assisted tools to help you create a solid business plan and
                validate your idea.
              </p>
              <Link
                href="/startup-navigator/business-planning"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Funding & Finance</h3>
              <p className="text-slate-600 mb-6">
                Connect with investors, understand funding options, and learn financial management essentials for your
                startup.
              </p>
              <Link
                href="/startup-navigator/funding"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mentorship Network</h3>
              <p className="text-slate-600 mb-6">
                Get matched with experienced entrepreneurs and industry experts who can guide you through challenges and
                opportunities.
              </p>
              <Link
                href="/startup-navigator/mentorship"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Tools & Resources</h3>
              <p className="text-slate-600 mb-6">
                Access AI-powered tools for market research, competitor analysis, content creation, and business
                automation.
              </p>
              <Link
                href="/startup-navigator/ai-tools"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth Strategies</h3>
              <p className="text-slate-600 mb-6">
                Learn proven strategies for customer acquisition, scaling operations, and sustainable business growth.
              </p>
              <Link
                href="/startup-navigator/growth"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community & Events</h3>
              <p className="text-slate-600 mb-6">
                Join a vibrant community of entrepreneurs, attend workshops, pitch competitions, and networking events.
              </p>
              <Link
                href="/startup-navigator/community"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Startup Journey in 4 Steps</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We guide you through every stage of entrepreneurship, from idea to successful business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Validate Your Idea</h3>
              <p className="text-slate-600">
                Use our validation tools and frameworks to test your business concept and understand your target market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Build Your Plan</h3>
              <p className="text-slate-600">
                Create a comprehensive business plan with financial projections, marketing strategy, and operational
                roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Launch & Iterate</h3>
              <p className="text-slate-600">
                Get support launching your MVP, gathering customer feedback, and iterating based on real-world data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Scale & Grow</h3>
              <p className="text-slate-600">
                Access growth resources, funding opportunities, and strategic partnerships to scale your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Startups We've Supported</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real entrepreneurs building real businesses with AFAI Startup Navigator.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="TechFlow Solutions"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">TechFlow Solutions</h3>
              <p className="text-slate-600 mb-4">
                "AFAI's mentorship and AI tools helped us secure $500K in seed funding and launch in 6 months."
              </p>
              <p className="text-sm font-semibold text-slate-900">— Maria Rodriguez, Founder</p>
            </Card>

            <Card className="p-8">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="EcoMart PR"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">EcoMart PR</h3>
              <p className="text-slate-600 mb-4">
                "The business planning resources and community support were invaluable. We're now profitable with 50+
                employees."
              </p>
              <p className="text-sm font-semibold text-slate-900">— Carlos Mendez, CEO</p>
            </Card>

            <Card className="p-8">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="HealthBridge"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">HealthBridge</h3>
              <p className="text-slate-600 mb-4">
                "From idea to 10,000 users in 18 months. AFAI connected us with the right investors and mentors."
              </p>
              <p className="text-sm font-semibold text-slate-900">— Dr. Ana Santos, Co-Founder</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for Diverse Entrepreneurs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're just starting or ready to scale, Startup Navigator supports all entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">First-Time Founders</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Step-by-step guidance from idea to launch
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Business fundamentals training
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Mentorship from experienced entrepreneurs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Access to templates and frameworks
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth-Stage Startups</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Scaling strategies and operational excellence
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Investor network and funding support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Advanced AI automation tools
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Strategic partnership opportunities
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Women Entrepreneurs</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Women-focused funding opportunities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Supportive community of women founders
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Leadership development programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Work-life integration resources
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Entrepreneurs</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Mission-driven business model frameworks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Impact measurement and reporting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Grant writing and philanthropy connections
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Community engagement strategies
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Free Resources to Get Started</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access essential tools and templates immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/startup-navigator/resources/business-plan-template" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                  Business Plan Template
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive template with financial projections and market analysis sections.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Download Free <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link href="/startup-navigator/resources/pitch-deck" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Investor Pitch Deck</h3>
                <p className="text-slate-600 mb-4">Professional pitch deck template designed to win over investors.</p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Download Free <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link href="/startup-navigator/resources/financial-model" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Financial Model</h3>
                <p className="text-slate-600 mb-4">
                  Excel-based financial model with 3-year projections and scenario planning.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Download Free <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/startup-navigator/resources">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your Entrepreneurial Journey?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
            Join thousands of entrepreneurs building successful businesses with AFAI Startup Navigator.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
              Sign Up Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
