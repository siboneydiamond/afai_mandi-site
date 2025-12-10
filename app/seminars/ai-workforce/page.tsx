import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowLeft } from "lucide-react"

export default function AIWorkforceSeminarPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">AI & Workforce Transformation</h1>
          <div className="space-y-2 text-white text-lg">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Florida International University, Miami</span>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span>August 5–8, 2025</span>
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span>College Students & Early-Career Professionals</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span>3-Day Residential Program</span>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About This Seminar</h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              This program is designed for college students and early-career professionals who want to understand how AI
              is reshaping the workforce and how to position themselves for success in an AI-driven economy. Learn
              practical skills, networking strategies, and career development techniques that will give you a
              competitive edge.
            </p>
            <p>
              Through case studies, hands-on workshops, and panel discussions with industry leaders, you'll gain
              insights into how to leverage AI tools in your career and how to prepare for emerging job opportunities.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                How AI is transforming industries and creating new career opportunities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Essential AI tools and platforms for professional productivity</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Upskilling strategies and continuous learning in the AI age</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Building your personal brand with AI-enhanced skills</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Networking with professionals and thought leaders in AI</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Resume and interview strategies for AI-integrated roles</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Program Highlights</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Industry Panel Discussions</h4>
              <p className="text-slate-700">
                Hear directly from executives, hiring managers, and AI professionals about the skills they're looking
                for and how to stand out in the job market.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Hands-On Workshops</h4>
              <p className="text-slate-700">
                Practice with real AI tools used in business, marketing, data analysis, and project management. Build
                projects you can showcase to employers.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Career Development Sessions</h4>
              <p className="text-slate-700">
                One-on-one resume reviews, mock interviews, LinkedIn profile optimization, and personalized career
                coaching.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Networking Opportunities</h4>
              <p className="text-slate-700">
                Connect with peers, mentors, recruiters, and AFAI alumni working in AI-driven roles across various
                industries.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Invest in Your Future</h3>
            <p className="text-slate-700 mb-6">
              Position yourself for success in the AI economy. Join us in Miami for 3 days of intensive learning,
              networking, and career development. Limited spots available.
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">Apply Now</Button>
              <Button variant="outline">Request More Info</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
