import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowLeft } from "lucide-react"

export default function AISmallBusinessSeminarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/seminars" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Seminars</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[500px] bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/placeholder.svg?height=500&width=1920')" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">AI for Small Business Innovation</h1>
          <div className="space-y-2 text-white text-lg">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>University of Puerto Rico, Mayagüez</span>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span>September 12–14, 2025</span>
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span>Entrepreneurs & Small Business Owners</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span>2-Day Intensive Workshop</span>
            </p>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About This Workshop</h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              Designed specifically for small business owners and entrepreneurs, this intensive 2-day workshop provides
              practical, immediately applicable AI strategies to help you compete with larger companies, improve
              efficiency, and grow your business.
            </p>
            <p>
              No technical background required. Learn how to leverage affordable AI tools for marketing, customer
              service, operations, and financial planning. Leave with a customized AI adoption plan for your business.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">AI tools for marketing automation and social media management</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Customer service chatbots and automated support systems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Inventory management and operational efficiency with AI</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Financial planning, forecasting, and data analysis tools</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Personalized customer experiences using AI insights</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Cost-effective AI implementation strategies for small budgets</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Workshop Format</h3>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Interactive Learning</h4>
              <p className="text-slate-700">
                Hands-on sessions where you'll actually use AI tools and see immediate results. Bring your laptop and
                work on your own business challenges.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Peer Collaboration</h4>
              <p className="text-slate-700">
                Share experiences and learn from other business owners facing similar challenges. Build your network of
                entrepreneurial peers.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Expert Guidance</h4>
              <p className="text-slate-700">
                One-on-one consultations with AI business consultants to develop a customized implementation plan for
                your specific business.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Post-Workshop Support</h4>
              <p className="text-slate-700">
                Access to AFAI's small business resources, ongoing mentorship, and a community of AI-enabled
                entrepreneurs.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Transform Your Business with AI</h3>
            <p className="text-slate-700 mb-6">
              Don't get left behind. Learn how to use AI to compete effectively, serve customers better, and grow your
              business. Affordable pricing and scholarships available for qualifying businesses.
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">Register Now</Button>
              <Button variant="outline">Download Curriculum</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
