import Link from "next/link"
import { ArrowLeft, CheckCircle, Users, BookOpen, Building2, Lightbulb, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SpeakerRequest() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/contact" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Contact</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Request a Speaker</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            AFAI provides expert speakers for conferences, summits, panels, workshops, academic events, and media
            engagements.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our speakers present on:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <BookOpen className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Education Reform</h3>
                <p className="text-sm text-gray-600">Transforming learning for the AI era</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <Users className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Workforce Transformation</h3>
                <p className="text-sm text-gray-600">Preparing workers for AI-driven jobs</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <Globe className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Digital Equity</h3>
                <p className="text-sm text-gray-600">Closing the technology divide</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Responsible AI & Ethics</h3>
                <p className="text-sm text-gray-600">Building safe, fair AI systems</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <Lightbulb className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Small-Business Modernization</h3>
                <p className="text-sm text-gray-600">AI tools for entrepreneurs</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
              <Building2 className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Public-Sector Innovation</h3>
                <p className="text-sm text-gray-600">Modernizing government services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Speaker Request Form</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                <Input type="text" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization*</label>
                <Input type="text" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <Input type="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                <Input type="tel" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Name*</label>
                <Input type="text" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date(s)*</label>
                <Input type="date" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Speaker Requested*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Executive Leadership</option>
                <option>Education Director</option>
                <option>Workforce & Mobility Director</option>
                <option>Responsible AI Lead</option>
                <option>Municipal Innovation Director</option>
                <option>PR Blueprint Team</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic of Interest*</label>
              <Input type="text" required placeholder="e.g., AI Workforce Transformation" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Audience*</label>
                <Input type="text" required placeholder="e.g., 200 educators" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Format*</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Keynote</option>
                  <option>Panel Discussion</option>
                  <option>Workshop</option>
                  <option>Fireside Chat</option>
                  <option>Virtual Presentation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget / Honorarium (optional)</label>
              <Input type="text" placeholder="If applicable" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <Textarea rows={4} placeholder="Any specific requirements or details about the event..." />
            </div>

            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3 w-full md:w-auto">
              Request a Speaker →
            </Button>
          </form>

          {/* Success Message (hidden by default) */}
          <div className="hidden mt-12 p-8 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Speaker Request Received</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team will review your submission and respond within 3–5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
