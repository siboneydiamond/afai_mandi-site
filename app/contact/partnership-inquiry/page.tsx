import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PartnershipInquiry() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partnership Inquiry</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We welcome collaboration with schools, municipalities, nonprofits, employers, universities, foundations, and
            corporate partners committed to expanding equitable access to AI skills and opportunity.
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization / Institution Name*</label>
                <Input type="text" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title / Role</label>
                <Input type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <Input type="email" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <Input type="tel" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Category* (Select all that apply)
              </label>
              <div className="space-y-2 mt-3">
                {[
                  "School or District",
                  "Workforce Board / Employer",
                  "Small Business Organization",
                  "Women's Empowerment Agency",
                  "Municipality / Public Agency",
                  "University / Research Institution",
                  "Philanthropy / Foundation",
                  "Corporate CSR or Talent Program",
                ].map((category) => (
                  <label key={category} className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Puerto Rico — Metro</option>
                <option>Puerto Rico — Central</option>
                <option>Puerto Rico — South</option>
                <option>Puerto Rico — West</option>
                <option>Puerto Rico — East</option>
                <option>Mainland U.S.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description of Your Goals*</label>
              <Textarea
                rows={6}
                required
                placeholder="Tell us about your partnership goals and how you envision collaborating with AFAI..."
              />
            </div>

            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3 w-full md:w-auto">
              Submit Partnership Request →
            </Button>
          </form>

          {/* Success Message (hidden by default) */}
          <div className="hidden mt-12 p-8 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Your Partnership Inquiry Has Been Received
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Thank you for your interest in partnering with AFAI. Our partnerships team will review your submission
                  and follow up within 3–5 business days to discuss next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
