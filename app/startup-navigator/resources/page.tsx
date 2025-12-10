import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Download, FileText, Video, Headphones } from "lucide-react"

export default function ResourcesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Free Startup Resources</h1>
            <p className="text-xl text-slate-600 mb-8">
              Download templates, watch tutorials, and access tools to accelerate your startup journey.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Templates & Frameworks</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Plan Template</h3>
              <p className="text-slate-600 mb-4">Comprehensive 30+ page business plan template with examples.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pitch Deck Template</h3>
              <p className="text-slate-600 mb-4">Investor-ready pitch deck with proven structure and design.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Model</h3>
              <p className="text-slate-600 mb-4">Excel-based 3-year financial projection model.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lean Canvas</h3>
              <p className="text-slate-600 mb-4">One-page business model canvas for rapid planning.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Marketing Plan</h3>
              <p className="text-slate-600 mb-4">Go-to-market strategy template with examples.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cap Table Template</h3>
              <p className="text-slate-600 mb-4">Track equity ownership and manage your cap table.</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Video Tutorials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-full h-40 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">How to Validate Your Business Idea</h3>
              <p className="text-slate-600 mb-4">45 min • Beginner</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Watch Now
              </Button>
            </Card>

            <Card className="p-6">
              <div className="w-full h-40 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fundraising 101: From Pitch to Close</h3>
              <p className="text-slate-600 mb-4">60 min • Intermediate</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Watch Now
              </Button>
            </Card>

            <Card className="p-6">
              <div className="w-full h-40 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Building Your MVP in 90 Days</h3>
              <p className="text-slate-600 mb-4">50 min • Beginner</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Watch Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Startup Navigator Podcast</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">From Idea to $10M ARR</h3>
                <p className="text-slate-600 mb-4">Sarah Chen shares how she built and scaled her SaaS startup.</p>
                <Button variant="outline" size="sm">
                  Listen Now
                </Button>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fundraising in Tough Markets</h3>
                <p className="text-slate-600 mb-4">VC insights on raising capital when conditions are challenging.</p>
                <Button variant="outline" size="sm">
                  Listen Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get Full Access to All Resources</h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Create a free account to download all templates, watch videos, and track your progress.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            Sign Up Free
          </Button>
        </div>
      </section>
    </div>
  )
}
