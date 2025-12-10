import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowLeft } from "lucide-react"

export default function WomenInAISeminarPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Women in AI Leadership Summit</h1>
          <div className="space-y-2 text-white text-lg">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Ana G. Méndez University, San Juan</span>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span>October 17–19, 2025</span>
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span>Women Entrepreneurs & Professionals</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span>3-Day Leadership Summit</span>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About This Summit</h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              The Women in AI Leadership Summit is designed to empower women to lead in the AI revolution. Through
              keynote speeches, interactive workshops, mentorship sessions, and networking opportunities, participants
              will gain the confidence, skills, and connections needed to excel in AI-driven careers and businesses.
            </p>
            <p>
              This summit addresses the unique challenges women face in technology while celebrating successes and
              creating pathways for more women to enter and lead in the AI field.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What You'll Experience</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Keynote addresses from leading women in AI and technology</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Technical AI skills training and hands-on workshops</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Leadership development and confidence-building sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Mentorship opportunities with established women leaders</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Strategies for overcoming barriers in male-dominated fields</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Building your professional network and support system</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Funding opportunities and resources for women-led ventures</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Summit Tracks</h3>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Entrepreneurship Track</h4>
              <p className="text-slate-700">
                For women building AI-powered businesses or integrating AI into existing ventures. Focus on fundraising,
                scaling, and sustainable growth.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Career Development Track</h4>
              <p className="text-slate-700">
                For professionals seeking to advance in AI-related roles. Focus on technical skills, leadership
                development, and navigating corporate environments.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Technical Skills Track</h4>
              <p className="text-slate-700">
                For those wanting to deepen technical expertise in AI, machine learning, and data science. Hands-on
                coding and project-based learning.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Featured Speakers</h3>
          <p className="text-slate-700 mb-6">
            Hear from pioneering women who have broken barriers and are leading innovation in AI across industries
            including technology, healthcare, finance, education, and public service.
          </p>

          <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Join a Movement</h3>
            <p className="text-slate-700 mb-6">
              Be part of a growing community of women leading the AI revolution. Connect with mentors, build lifelong
              relationships, and access ongoing support as you advance your career or business. Limited spots
              available—priority given to applicants from Puerto Rico and underserved communities.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                Apply Now
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
