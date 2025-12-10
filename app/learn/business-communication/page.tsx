import Link from "next/link"
import { BookOpen, Clock } from "lucide-react"

export default function BusinessCommunicationPage() {
  const courses = [
    {
      title: "Professional Communication with AI",
      institution: "AFAI Communication School",
      type: "Professional Certificate",
      courses: "4 Courses",
      level: "Beginner",
      duration: "6 weeks",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Digital Marketing Fundamentals",
      institution: "AFAI Marketing Institute",
      type: "Course",
      level: "Beginner",
      duration: "4 weeks",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Leadership Communication",
      institution: "AFAI Academy",
      type: "Professional Certificate",
      courses: "5 Courses",
      level: "Intermediate",
      duration: "2 months",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Content Marketing Strategy",
      institution: "AFAI Digital School",
      type: "Course",
      level: "Intermediate",
      duration: "5 weeks",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/learn" className="hover:text-white">
              Learn
            </Link>
            <span className="mx-2">›</span>
            <span>Business Communication</span>
          </nav>

          <h1 className="text-5xl font-bold mb-6">Business Communication Courses</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Enhance your professional communication skills with AI-powered courses in writing, speaking, marketing, and
            digital leadership.
          </p>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">89 courses available</h2>
            <div className="flex gap-4">
              <select className="border border-slate-300 rounded-lg px-4 py-2">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-4 py-2">
                <option>All Types</option>
                <option>Course</option>
                <option>Professional Certificate</option>
                <option>Program</option>
              </select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-200"
              >
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{course.institution}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">{course.type}</span>
                    {course.courses && <span className="text-xs text-slate-600">{course.courses}</span>}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "public speaking",
              "professional writing",
              "digital marketing",
              "content marketing",
              "social media",
              "branding",
              "storytelling",
              "leadership",
              "negotiations",
              "copywriting",
            ].map((topic) => (
              <Link
                key={topic}
                href={`/learn/${topic.replace(/ /g, "-")}`}
                className="bg-white hover:bg-slate-100 px-6 py-3 rounded-full border border-slate-200 transition-colors capitalize"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Career Pathways</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Communications Manager</h3>
              <p className="text-slate-600 mb-4">Lead organizational communication strategies using modern AI tools.</p>
              <p className="text-sm text-slate-500">Average salary: $65,000 - $90,000</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Content Strategist</h3>
              <p className="text-slate-600 mb-4">Develop and execute content strategies with AI-powered insights.</p>
              <p className="text-sm text-slate-500">Average salary: $60,000 - $85,000</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Marketing Manager</h3>
              <p className="text-slate-600 mb-4">Drive marketing initiatives using AI-enhanced communication tools.</p>
              <p className="text-sm text-slate-500">Average salary: $70,000 - $95,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your communication skills?</h2>
          <p className="text-lg mb-8">Join thousands mastering business communication with AI</p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition-colors">
            Explore All Courses
          </button>
        </div>
      </section>
    </div>
  )
}
