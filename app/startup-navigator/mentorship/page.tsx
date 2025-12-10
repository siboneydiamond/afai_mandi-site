import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, Calendar, Award } from "lucide-react"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b">
        <div className="container mx-auto px-6">
          <Link href="/startup-navigator" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Startup Navigator
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Mentorship Network</h1>
            <p className="text-xl text-slate-600 mb-8">
              Connect with experienced entrepreneurs and industry experts who can guide you through challenges and
              accelerate your growth.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              Find a Mentor
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How Mentorship Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Share Your Profile</h3>
              <p className="text-slate-600">
                Tell us about your startup, challenges, and what you're looking for in a mentor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get Matched</h3>
              <p className="text-slate-600">
                We match you with mentors based on industry, expertise, and your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Connect & Meet</h3>
              <p className="text-slate-600">
                Schedule your first session and start building a relationship with your mentor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Grow Together</h3>
              <p className="text-slate-600">
                Regular sessions, advice on demand, and ongoing support for your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mentor Expertise Areas</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technology & Product</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Software development</li>
                <li>• Product-market fit</li>
                <li>• Technical architecture</li>
                <li>• AI/ML integration</li>
                <li>• MVP development</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business & Operations</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Business model design</li>
                <li>• Operations scaling</li>
                <li>• Team building</li>
                <li>• Strategic planning</li>
                <li>• Process optimization</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing & Sales</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Growth marketing</li>
                <li>• Customer acquisition</li>
                <li>• Brand development</li>
                <li>• Sales strategy</li>
                <li>• Go-to-market planning</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fundraising & Finance</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Investor relations</li>
                <li>• Pitch preparation</li>
                <li>• Financial modeling</li>
                <li>• Unit economics</li>
                <li>• Due diligence</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Specific</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Healthcare & biotech</li>
                <li>• Fintech</li>
                <li>• E-commerce</li>
                <li>• SaaS</li>
                <li>• Social impact</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Leadership & Culture</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Founder leadership</li>
                <li>• Company culture</li>
                <li>• Hiring strategies</li>
                <li>• Board management</li>
                <li>• Work-life balance</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mentorship Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1-on-1 Sessions</h3>
              <p className="text-slate-600">Monthly video calls with your dedicated mentor</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Office Hours</h3>
              <p className="text-slate-600">Drop-in sessions for quick questions and advice</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Network Access</h3>
              <p className="text-slate-600">Introductions to investors, partners, and customers</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Feedback</h3>
              <p className="text-slate-600">Review pitches, plans, and strategies with experienced eyes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Mentors</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah Chen"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Sarah Chen</h3>
              <p className="text-sm text-slate-600 text-center mb-4">
                Former VP Product at TechCorp
                <br />2 exits, $50M+ raised
              </p>
              <p className="text-slate-600 text-sm">
                Specializes in SaaS product development, growth strategy, and fundraising.
              </p>
            </Card>

            <Card className="p-6">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Marcus Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Marcus Johnson</h3>
              <p className="text-sm text-slate-600 text-center mb-4">
                Serial Entrepreneur
                <br />3 successful exits
              </p>
              <p className="text-slate-600 text-sm">
                Expert in e-commerce, supply chain, and scaling operations from 0 to $10M.
              </p>
            </Card>

            <Card className="p-6">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Dr. Elena Rodriguez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Dr. Elena Rodriguez</h3>
              <p className="text-sm text-slate-600 text-center mb-4">
                Biotech Founder & CEO
                <br />
                FDA approval expert
              </p>
              <p className="text-slate-600 text-sm">
                Healthcare innovation, regulatory strategy, and impact investing specialist.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get Matched with Your Ideal Mentor</h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs getting expert guidance to build successful businesses.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            Apply for Mentorship
          </Button>
        </div>
      </section>
    </div>
  )
}
