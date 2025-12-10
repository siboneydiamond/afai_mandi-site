import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowLeft } from "lucide-react"

export default function AIFundamentalsSeminarPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">AI Fundamentals: Theory, Practice, & Application</h1>
          <div className="space-y-2 text-white text-lg">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>University of Puerto Rico, San Juan</span>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span>July 15–18, 2025</span>
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span>High School Students (Ages 16-18)</span>
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
              This intensive 3-day residential program introduces high school students to the fundamentals of artificial
              intelligence and its real-world applications. Through interactive lectures, hands-on projects, and
              discussions with AI experts, students will gain a comprehensive understanding of how AI works and how it's
              transforming industries.
            </p>
            <p>
              Perfect for students curious about technology, interested in STEM careers, or looking to understand one of
              the most important technological shifts of our time.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Foundations of AI and machine learning concepts</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">How AI algorithms make decisions and predictions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Ethical considerations and responsible AI development</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                Real-world AI applications in healthcare, education, business, and more
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Hands-on experience building simple AI models</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Career pathways in AI and technology</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Daily Schedule</h3>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 1: Introduction to AI</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• Check-in and welcome orientation</li>
                <li>• What is AI? History and evolution</li>
                <li>• AI vs. Machine Learning vs. Deep Learning</li>
                <li>• Campus tour and team-building activities</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 2: Hands-On with AI</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• How AI learns: Training models workshop</li>
                <li>• Build your first AI project (guided)</li>
                <li>• AI in everyday life: Case studies</li>
                <li>• Guest speaker: Industry AI expert</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 3: Ethics, Future, and Your Path</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• Responsible AI and ethical considerations</li>
                <li>• The future of AI and emerging trends</li>
                <li>• AI career pathways and education</li>
                <li>• Project presentations and closing ceremony</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your AI Journey?</h3>
            <p className="text-slate-700 mb-6">
              Join us this summer at the University of Puerto Rico for an unforgettable learning experience.
              Applications are reviewed on a rolling basis, and scholarships are available.
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">Apply Now</Button>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
