import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, DollarSign, Users, TrendingUp, Building2 } from "lucide-react"

export default function FundingPage() {
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
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Funding & Finance Resources</h1>
            <p className="text-xl text-slate-600 mb-8">
              Access funding opportunities, connect with investors, and master financial management for your startup.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              Explore Funding Options
            </Button>
          </div>
        </div>
      </section>

      {/* Funding Types Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Types of Funding</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Grants</h3>
              <p className="text-slate-600 mb-4">
                Non-dilutive funding from government agencies, foundations, and nonprofits.
              </p>
              <p className="text-sm font-semibold text-slate-900">$5K - $500K</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Angel Investors</h3>
              <p className="text-slate-600 mb-4">Individual investors providing early-stage capital and mentorship.</p>
              <p className="text-sm font-semibold text-slate-900">$25K - $500K</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Venture Capital</h3>
              <p className="text-slate-600 mb-4">Professional investors for high-growth startups ready to scale.</p>
              <p className="text-sm font-semibold text-slate-900">$500K - $10M+</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Small Business Loans</h3>
              <p className="text-slate-600 mb-4">Traditional bank loans and SBA-backed financing options.</p>
              <p className="text-sm font-semibold text-slate-900">$10K - $5M</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Network Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">AFAI Investor Network</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Get introduced to investors actively looking for startups like yours.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">500+ Investors</h3>
              <p className="text-slate-600">
                Angel investors, VC firms, and impact investors connected to our platform.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Warm Introductions</h3>
              <p className="text-slate-600">Get personally introduced by AFAI staff and mentors based on fit.</p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pitch Preparation</h3>
              <p className="text-slate-600">Practice sessions and feedback to perfect your investor pitch.</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Join Investor Network</Button>
          </div>
        </div>
      </section>

      {/* Financial Management Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Financial Management Essentials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Planning</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Budgeting and forecasting</li>
                <li>• Cash flow management</li>
                <li>• Financial modeling tools</li>
                <li>• Scenario planning</li>
                <li>• KPI tracking and reporting</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Accounting & Compliance</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Bookkeeping best practices</li>
                <li>• Tax planning and filing</li>
                <li>• Legal structure selection</li>
                <li>• Payroll management</li>
                <li>• Audit preparation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Secure Funding for Your Startup?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Connect with investors, access grants, and master financial management.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
