import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Briefcase, CheckCircle, ArrowRight, BookOpen, Award } from "lucide-react"

export default function CampusPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Equip students with AI-ready skills</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Give students, faculty, and alumni the tools they need to succeed within and beyond the classroom. With
              comprehensive AI education programs, AFAI is the learning solution that helps you deliver on your
              institutional mission, at every level.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6"
            >
              <Link href="/contact">
                Chat with us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Solutions for each level of learning</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From current students to alumni, we provide AI education that strengthens your entire academic community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <Card className="border-t-4 border-t-blue-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Current Students</h3>
                <p className="text-gray-600 text-sm">Build AI skills for career readiness</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-green-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Faculty & Staff</h3>
                <p className="text-gray-600 text-sm">Upskill with AI teaching tools</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-purple-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Alumni</h3>
                <p className="text-gray-600 text-sm">Continuing AI education</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Foundation Students</h3>
                <p className="text-gray-600 text-sm">Core AI literacy programs</p>
              </CardContent>
            </Card>
          </div>

          {/* Solution 1: Current Students */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Prepare students for the AI workforce</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Enhance undergraduate and graduate curricula with <strong>self-paced AI courses</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Access stackable <strong>AI certifications, micro-credentials, and professional programs</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Ideal for institutions that want to{" "}
                    <strong>improve graduate employability and equip students with career-ready AI skills</strong>,
                    digital competencies, and leadership abilities needed to stand out in the modern job market.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Link href="/programs/education">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students learning AI"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution 2: Faculty & Staff */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Upskill faculty and staff</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Empower staff and faculty with self-paced courses and professional certificates in{" "}
                    <strong>AI literacy, digital tools, instructional design</strong>, and more.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Reduce time-consuming busywork by incorporating <strong>AI tools into existing curricula</strong>,
                    and free up time for advising, research, and innovation.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Ideal for institutions that want to create <strong>sustainable faculty development plans</strong>{" "}
                    and prioritize institution-wide AI readiness goals.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Link href="/programs/education">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Faculty learning AI"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution 3: Alumni */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Engage alumni networks</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Create or expand <strong>continuing education offerings</strong> with AI professional certificates.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Connect alumni with <strong>professional AI development opportunities</strong> that help them reach
                    their career goals.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Ideal for institutions that want to{" "}
                    <strong>cultivate active, supportive, and enthusiastic alumni networks</strong> through lifelong
                    learning.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <Link href="/programs/education">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Alumni engagement"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Solution 4: Foundation Students */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Strengthen foundation-year programs</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Create or expand foundation-year programs with{" "}
                    <strong>AI fundamentals courses and micro-credentials</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Help foundation-year students <strong>master core AI competencies</strong>, boost their academic
                    record, and build confidence in the digital classroom.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Ideal for institutions that want to build{" "}
                    <strong>clear and accessible pathways to AI-ready degree programs</strong>.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/programs/education">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Foundation students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-12">
            Content from leading AI education providers, universities, and industry partners
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Skills to help students start their careers on the right foot
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            With AFAI programs, you get access to comprehensive AI training covering essential workplace skills and
            emerging technologies.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "AI Fundamentals",
              "Machine Learning",
              "Data Science",
              "AI Ethics",
              "Prompt Engineering",
              "Digital Literacy",
              "Workplace AI Tools",
              "AI for Business",
            ].map((skill) => (
              <Card key={skill} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-4">"</div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              Students are really motivated to learn with AFAI. They can get the knowledge and the certification in a
              short time, and they know these credentials will help them stand out in the job market later on.
            </p>
            <p className="text-lg font-semibold">— Dr. Maria Rodriguez</p>
            <p className="text-base">Director of Digital Learning, State University</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Bridge the classroom and the workplace</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            <strong>Trusted by educational institutions across the United States and Puerto Rico</strong>
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Campus news and insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Case Study",
                title: "State University: Equipping students with AI-ready skills",
                excerpt:
                  "Looking to set a new standard in education, leaders at State University partnered with AFAI to embrace AI technology and build a new educational framework to meet today's global demands.",
                link: "#",
              },
              {
                category: "Case Study",
                title: "Community College: Investing in self-directed AI learning",
                excerpt:
                  "Community college leaders are always thinking about what happens after students leave the classroom. AI skills provide the competitive edge graduates need.",
                link: "#",
              },
              {
                category: "Case Study",
                title: "Technical Institute: Supporting students in building in-demand skills",
                excerpt:
                  "By integrating AI education into core curricula, the Technical Institute is preparing students for the digital economy and closing the skills gap.",
                link: "#",
              },
            ].map((article, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    href={article.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    View article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's bring your vision to life</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Become known as an institution that invests in the AI-readiness of every learner, from prospective
            applicants to accomplished alumni. Ready to get started?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6"
          >
            <Link href="/contact">
              Chat with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
