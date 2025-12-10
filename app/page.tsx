import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Store,
  Users,
  Shield,
  Building2,
  Globe,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/placeholder.svg?height=1080&width=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight">
              Building an AI-Ready America
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-12 leading-relaxed text-balance">
              Expanding equitable access to AI education, workforce opportunity, and economic mobility across the United
              States and Puerto Rico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
                  Explore Our Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 bg-transparent"
                >
                  Support Our Mission
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              AI Must Strengthen Communities, Not Replace Them
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The American Foundation for Artificial Intelligence (AFAI) ensures that every person has access to the AI
              skills, tools, and opportunities needed to thrive in the modern digital economy — with a focus on
              underserved communities that need support most.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
              <p className="text-xl text-gray-600">
                Six community-driven programs that expand access and create opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "AI Education",
                  description: "Building AI-ready students, educators, and school systems across America.",
                  bgColor: "bg-blue-100",
                  iconColor: "text-blue-600",
                  link: "/programs/education",
                },
                {
                  icon: Briefcase,
                  title: "Workforce Development",
                  description: "Empowering workers with practical AI skills for higher wages and career growth.",
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                  link: "/programs/workforce",
                },
                {
                  icon: Store,
                  title: "Small Business Enablement",
                  description: "Helping entrepreneurs use AI to grow, compete, and strengthen local economies.",
                  bgColor: "bg-purple-100",
                  iconColor: "text-purple-600",
                  link: "/programs/small-business",
                },
                {
                  icon: Users,
                  title: "Women's Empowerment",
                  description: "Creating accessible pathways for women into digital careers and leadership.",
                  bgColor: "bg-pink-100",
                  iconColor: "text-pink-600",
                  link: "/programs/women",
                },
                {
                  icon: Shield,
                  title: "Responsible AI",
                  description: "Developing ethical frameworks for safe, transparent, community-first AI adoption.",
                  bgColor: "bg-indigo-100",
                  iconColor: "text-indigo-600",
                  link: "/programs/responsible-ai",
                },
                {
                  icon: Building2,
                  title: "Community Innovation",
                  description: "Strengthening municipalities and public institutions through responsible AI.",
                  bgColor: "bg-orange-100",
                  iconColor: "text-orange-600",
                  link: "/programs/community",
                },
              ].map((program, index) => (
                <Link
                  key={index}
                  href={program.link}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all group"
                >
                  <div
                    className={`w-16 h-16 rounded-xl ${program.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                  <div className="text-yellow-600 font-semibold flex items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Learners Reached", icon: Users },
                { number: "500+", label: "Partner Organizations", icon: Building2 },
                { number: "100+", label: "Communities Served", icon: Globe },
                { number: "$10M+", label: "Economic Impact", icon: TrendingUp },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Puerto Rico Blueprint */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Puerto Rico AI Blueprint</h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-8">
              Puerto Rico is the focal point of our national strategy — a living demonstration of how equitable,
              community-centered AI can transform education, workforce mobility, small business growth, and public
              innovation.
            </p>
            <Link href="/puerto-rico">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6">
                Explore the Blueprint
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latinos in AI initiative section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Latinos in AI</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Led from Puerto Rico, Latinos in AI is a global initiative bringing together 4,200+ Latino AI
                  researchers, practitioners, and advocates across 42 countries to advance Latino participation and
                  leadership in AI innovation.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Puerto Rico serves as the strategic bridge between North and Latin America, hosting our annual summit
                  and coordinating cross-cultural AI research, policy advocacy, and workforce development.
                </p>
                <Link href="/latinos-in-ai">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn About the Initiative
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Latinos in AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Stories of Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María Rodriguez",
                  role: "Hospitality Worker, Puerto Rico",
                  quote:
                    "AI training helped me automate guest workflows and earn a promotion. Now I'm helping train others.",
                  image: "latina woman hospitality professional",
                },
                {
                  name: "Jayden Williams",
                  role: "High School Senior",
                  quote:
                    "AFAI's AI course opened my eyes to computer science. I'm now pursuing a tech degree in college.",
                  image: "african american male high school student",
                },
                {
                  name: "Rosa Chen",
                  role: "Small Business Owner",
                  quote:
                    "AI marketing tools grew my customer base and stabilized revenue. My business is thriving now.",
                  image: "asian woman small business owner",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-20 h-20 rounded-full bg-gray-300 mb-6 overflow-hidden">
                    <img
                      src={`/.jpg?height=80&width=80&query=${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Free AI Skills Training</h2>
              <p className="text-xl text-gray-600">
                Access world-class AI education designed for real-world application
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "AI Fundamentals", students: "15,000+", level: "Beginner" },
                { title: "Business AI Applications", students: "8,500+", level: "Intermediate" },
                { title: "AI for Entrepreneurs", students: "5,200+", level: "All Levels" },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{course.students} students</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">{course.level}</span>
                  </div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900">Enroll Free</Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/learn">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                  Browse All Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the Movement</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Partner with AFAI to expand AI access, strengthen communities, and build an inclusive digital future for
              all Americans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
                  Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 bg-transparent"
                >
                  Make a Donation
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
