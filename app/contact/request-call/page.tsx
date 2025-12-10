import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RequestCall() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Request a Call With AFAI</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Schedule a conversation with a member of our leadership or partnerships team. Whether you are exploring
            program participation, collaboration, philanthropy, or press engagement, we look forward to connecting.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                <Input type="text" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <Input type="email" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Input type="tel" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <Input type="text" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of the Call*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Program Participation</option>
                <option>Employer / Workforce Partnership</option>
                <option>School or District Partnership</option>
                <option>Small Business Support</option>
                <option>Women's Initiatives</option>
                <option>Government Collaboration</option>
                <option>Media / Press</option>
                <option>Philanthropy</option>
                <option>Research / Responsible AI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Meeting Format*</label>
              <div className="flex gap-6 mt-3">
                <label className="flex items-center gap-2">
                  <input type="radio" name="format" value="phone" className="text-yellow-400" />
                  <span className="text-gray-700">Phone Call</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="format" value="video" className="text-yellow-400" />
                  <span className="text-gray-700">Video Meeting</span>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date(s)</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Window</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Morning (9am - 12pm)</option>
                  <option>Afternoon (12pm - 3pm)</option>
                  <option>Late Afternoon (3pm - 6pm)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <Textarea rows={4} placeholder="Any specific topics or questions you'd like to discuss?" />
            </div>

            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3 w-full md:w-auto">
              Schedule Call →
            </Button>
          </form>

          {/* Success Message (hidden by default) */}
          <div className="hidden mt-12 p-8 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your Call Request Is Scheduled</h3>
                <p className="text-gray-700 leading-relaxed">
                  Thank you for connecting with AFAI. You will receive a confirmation email with your meeting details
                  shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
