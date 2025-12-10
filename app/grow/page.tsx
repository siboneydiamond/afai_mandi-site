import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Briefcase, Building2, GraduationCap, School, Users } from "lucide-react"

export default function GrowPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-blue-600">New!</span> Learn AI skills with Google Career Certificates,
            now available through AFAI.{" "}
            <Link href="/learn/ai-fundamentals-certificate" className="text-blue-600 hover:text-blue-700 underline">
              Enroll now
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional development"
                width={600}
                height={500}
                className="w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5 shadow-lg">
                <p className="text-sm font-medium">⏱ 0:30</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Start your path to a career. Google Career Certificates now available through AFAI.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Google Career Certificates deliver real, positive career outcomes. Built by Google experts, you'll gain
              job-ready skills in data analytics, project management, UX design, IT support, and more. No degree or
              experience required.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
              <Link href="/certificates">Explore Google Career Certificates</Link>
            </Button>
          </div>
        </div>

        {/* Side Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link href="/learn/ai-fundamentals-certificate" className="group">
            <div className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="AI Learning"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">Learn in-demand skills from Google experts</h3>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow group-hover:bg-yellow-500 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/impact" className="group">
            <div className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Impact"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">Google Career Certificates Impact Report</h3>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow group-hover:bg-yellow-500 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Professional Training Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">
            Google Career Certificates for job seekers
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Certificate graduate"
                width={500}
                height={500}
                className="w-full"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-lg px-4 py-3 shadow-lg border-l-4 border-red-500">
                <p className="text-xs font-semibold text-slate-500 uppercase">Sarah</p>
                <p className="text-sm font-bold text-red-600">AI Workforce Certificate</p>
                <p className="text-sm font-bold text-slate-900">Graduate</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Google Data Analytics Certificate",
                  description: "Learn data analysis skills used by top employers",
                  href: "/learn/ai-fundamentals-certificate",
                  icon: BookOpen,
                },
                {
                  title: "Google Project Management Certificate",
                  description: "Master project management fundamentals",
                  href: "/micromasters/ai-workforce-transformation",
                  icon: Users,
                },
                {
                  title: "Google UX Design Certificate",
                  description: "Create user experiences that delight customers",
                  href: "/certificates",
                  icon: Briefcase,
                },
                {
                  title: "Google IT Support Certificate",
                  description: "Start your career in IT support",
                  href: "/programs/women",
                  icon: GraduationCap,
                },
              ].map((cert) => (
                <Link
                  key={cert.href}
                  href={cert.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <cert.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{cert.title}</h3>
                    <p className="text-sm text-slate-600">{cert.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </Link>
              ))}

              <div className="pt-4">
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  <Link href="/certificates">View all Google Career Certificates</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical AI Training Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">
            Free Google training for everyone
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 order-2 lg:order-1">
              {[
                {
                  title: "Google AI Skills Academy",
                  description: "Free online courses to boost AI productivity",
                  href: "/learn",
                  icon: BookOpen,
                },
                {
                  title: "Google AI for Educators",
                  description: "Integrate AI tools in the classroom",
                  href: "/programs/education",
                  icon: School,
                },
                {
                  title: "Google Responsible AI Essentials",
                  description: "Learn ethical AI practices and governance",
                  href: "/programs/responsible-ai",
                  icon: Award,
                },
                {
                  title: "Google Community AI Workshops",
                  description: "Local training in your community",
                  href: "/programs/community",
                  icon: Users,
                },
              ].map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                    <course.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{course.title}</h3>
                    <p className="text-sm text-slate-600">{course.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </Link>
              ))}

              <div className="pt-4">
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  <Link href="/learn">Explore AI Training</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="AI Learning"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Small Business Resources */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">
            Google tools and resources for small businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Grow Your Business with Google AI",
                description: "Google AI tools and training for small businesses",
                href: "/programs/small-business",
              },
              {
                title: "Google Business AI Toolkit",
                description: "Free resources to modernize operations",
                href: "/programs/small-business",
              },
              {
                title: "Google Success Stories",
                description: "Learn how businesses use Google AI to grow",
                href: "/impact",
              },
              {
                title: "Google View More Resources",
                description: "Comprehensive small business support",
                href: "/programs/small-business",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-green-600" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-slate-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs and Partnerships */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">Programs and partnerships</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "Google AFAI for Employers",
                description: "Training to close skills gaps and fuel growth",
                href: "/government-partnerships",
              },
              {
                title: "Google Academic Institutions",
                description: "Bring AI certificates to your campus",
                href: "/campus",
              },
              {
                title: "Google Nonprofits & Community Organizations",
                description: "Resources to teach valuable AI skills",
                href: "/programs/community",
              },
              {
                title: "Google K-12 Educators",
                description: "Help students succeed with AI skills",
                href: "/programs/education",
              },
              {
                title: "Google Government Agencies",
                description: "Modernize public services with AI",
                href: "/government-partnerships",
              },
              {
                title: "Google Become a Partner",
                description: "Join our network of partners",
                href: "/government-partnerships",
              },
            ].map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 flex-1">{program.title}</h3>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-yellow-500 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-slate-600">{program.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-600 mb-4">Creating lasting change with our partners:</p>
            <p className="text-slate-700 mb-8">
              Interested in partnering with AFAI?{" "}
              <Link href="/government-partnerships" className="text-blue-600 hover:text-blue-700 underline">
                Learn more at our Partners page
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay up to date with AFAI</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI training opportunities, program updates, and success stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8">Subscribe</Button>
          </div>
          <p className="text-xs text-slate-400 mt-4 max-w-2xl mx-auto">
            By clicking subscribe, you consent to receive email communication from AFAI. Your information will be used
            in accordance with our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
