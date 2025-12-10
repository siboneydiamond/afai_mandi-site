import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BookOpen, Award, Users, Lightbulb } from "lucide-react"

export default function EducatorTrainingPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">
              Community
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Educator AI Training & Certification</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/community" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Community
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Educator AI Training & Certification</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Empowering teachers and administrators to integrate AI literacy into their classrooms and prepare students
            for an AI-powered future.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Educator AI Training & Certification program equips K-12 teachers, administrators, and education
                professionals with the knowledge and skills to effectively teach AI concepts and integrate AI tools into
                their curricula.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through hands-on workshops, curriculum resources, and ongoing support, educators learn to demystify AI
                for students while fostering critical thinking about technology's role in society.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/contact">
                  Request Educator Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">850+</div>
                <div className="text-gray-600">Educators Trained</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-gray-600">Schools Partnered</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">15K+</div>
                <div className="text-gray-600">Students Reached</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Free for Educators</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What You'll Learn</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Fundamentals</h3>
              <p className="text-gray-600">
                Core AI concepts explained in accessible, classroom-ready language for all grade levels.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Curriculum Integration</h3>
              <p className="text-gray-600">Strategies for weaving AI literacy into existing lessons across subjects.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical AI Teaching</h3>
              <p className="text-gray-600">Addressing bias, privacy, and responsible AI use with students.</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certification</h3>
              <p className="text-gray-600">Earn recognized credentials demonstrating AI teaching competency.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Training Options</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Workshop Series</h3>
              <p className="text-gray-600 mb-6">
                6-week professional development series with hands-on activities and peer collaboration.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 12 hours of training</li>
                <li>• Ready-to-use lesson plans</li>
                <li>• Ongoing support</li>
                <li>• Certificate of completion</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/contact">Request for School</Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 border-green-600">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Certification</h3>
              <p className="text-gray-600 mb-6">Comprehensive program leading to AFAI AI Educator Certification.</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 40 hours of training</li>
                <li>• Complete curriculum toolkit</li>
                <li>• Mentorship & coaching</li>
                <li>• Professional credential</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Custom Training</h3>
              <p className="text-gray-600 mb-6">
                Tailored professional development designed for your school or district's specific needs.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Flexible duration</li>
                <li>• Customized content</li>
                <li>• On-site or virtual</li>
                <li>• District-wide implementation</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Empower Your Students with AI Literacy</h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of educators who are preparing students for an AI-powered future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Request Training</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/learn">View Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
