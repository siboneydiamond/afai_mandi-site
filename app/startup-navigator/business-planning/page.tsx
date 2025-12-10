import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Download, FileText } from "lucide-react"

export default function BusinessPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b">
        <div className="container mx-auto px-6">
          <Link href="/startup-navigator" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Startup Navigator
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Business Planning Made Simple</h1>
            <p className="text-xl text-slate-600 mb-8">
              Create a comprehensive business plan with our step-by-step frameworks, AI-powered tools, and expert
              templates. Turn your idea into a viable business strategy.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              Start Planning Now
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Create Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What You'll Create</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Executive Summary</h3>
              <p className="text-slate-600 mb-6">
                Craft a compelling overview of your business, including mission statement, value proposition, and key
                objectives.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Business concept and unique value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Target market definition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Competitive advantages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Financial highlights</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Analysis</h3>
              <p className="text-slate-600 mb-6">
                Understand your industry, target customers, and competitive landscape with data-driven insights.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Industry trends and size</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Customer personas and needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Competitive analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Market entry strategy</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Operations Plan</h3>
              <p className="text-slate-600 mb-6">
                Detail how your business will operate day-to-day, from production to delivery.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Production and fulfillment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Technology and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Team structure and roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Key milestones and timeline</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Projections</h3>
              <p className="text-slate-600 mb-6">
                Build realistic financial forecasts that show profitability and funding needs.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>3-year revenue projections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cost structure and margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cash flow analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Break-even analysis</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">AI-Powered Planning Tools</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Leverage artificial intelligence to accelerate your business planning process.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Research AI</h3>
              <p className="text-slate-600 mb-4">
                Get instant insights on market size, trends, and opportunities for your industry.
              </p>
              <Button variant="outline" size="sm">
                Try Tool
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Competitor Analyzer</h3>
              <p className="text-slate-600 mb-4">Analyze competitors automatically and identify gaps in the market.</p>
              <Button variant="outline" size="sm">
                Try Tool
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Calculator</h3>
              <p className="text-slate-600 mb-4">
                Generate financial projections based on your business model and assumptions.
              </p>
              <Button variant="outline" size="sm">
                Try Tool
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Free Business Plan Templates</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">One-Page Business Plan</h3>
                <p className="text-slate-600 mb-4">
                  Perfect for getting started quickly. Covers all essentials in a single page.
                </p>
                <Button variant="outline" size="sm">
                  Download Template
                </Button>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Business Plan</h3>
                <p className="text-slate-600 mb-4">
                  Full 30+ page template for detailed planning and investor presentations.
                </p>
                <Button variant="outline" size="sm">
                  Download Template
                </Button>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Lean Startup Canvas</h3>
                <p className="text-slate-600 mb-4">Visual one-page framework for rapid business model development.</p>
                <Button variant="outline" size="sm">
                  Download Template
                </Button>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Social Enterprise Plan</h3>
                <p className="text-slate-600 mb-4">
                  Specialized template for mission-driven and impact-focused businesses.
                </p>
                <Button variant="outline" size="sm">
                  Download Template
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Start Building Your Business Plan Today
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Get expert guidance, AI tools, and templates to create a winning business plan.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  )
}
