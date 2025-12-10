import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, TrendingUp, Globe } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-slate-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-semibold">Great Place to Work Certified</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance">Working at AFAI</h1>
            <p className="text-lg leading-relaxed text-slate-800">
              From expanding AI literacy to advancing workforce development and economic opportunity, we're working
              towards a future where every person in every community can thrive in the Intelligence Age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-slate-700">
              The American Foundation for Artificial Intelligence (AFAI) seeks to improve lives by expanding equitable
              access to AI education, workforce training, and economic opportunity. True to our founding spirit,
              whenever there is a need in our communities, AFAI is there. We bring a comprehensive approach to every
              challenge, actively listening and responding to local needs. Our focus on Puerto Rico and underserved
              communities across the United States means we can test innovations and scale impact to transform lives.
            </p>
            <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="https://careers.afai.org">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">Why Work at AFAI?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Comprised of talented, community-minded leaders of all backgrounds and experiences, AFAI staff work
                every day to pursue our shared vision of a world where every person has access to AI education and
                economic opportunity. Our people are catalysts for transformational change. No matter your role or level
                of seniority, when you work at AFAI, every day you'll be able to use your unique talents to help
                mobilize communities to action and ensure everyone can thrive in the Intelligence Age!
              </p>
              <p>
                We also offer a treasure trove of opportunities to improve yourself while improving communities. From
                professional development programs to regional and national conferences for enhanced networking and
                shared practices, there is never a shortage of opportunities to develop your career through AFAI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="AFAI team members collaborating"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                Career Development
              </div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900">Next-Generation Leaders</h2>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                The AFAI Next-Gen Leaders Initiative is an innovative future-focused leadership program designed to
                equip emerging leaders to navigate complexity, drive community impact, and lead with strategic foresight
                in the AI age.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-8">
                We are preparing not only AFAI leaders, but also civil society leaders and community advocates, to be
                ready for whatever future is coming and to help shape that future through responsible AI adoption and
                equitable access to technology.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
              >
                <Link href="/fellowship">
                  Learn About Our Fellowship Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Young Leaders Section */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                Young Leaders
              </div>
              <h2 className="mb-6 text-4xl font-bold">Global Leadership Opportunities</h2>
              <p className="text-lg leading-relaxed mb-6">
                As part of our mission to nurture globally minded young leaders passionate about building strong,
                equitable communities where everyone can thrive in the Intelligence Age, AFAI partners with leading
                organizations to support empowering young people to build a fair, sustainable, AI-ready future for all.
              </p>
              <p className="text-lg leading-relaxed">
                Our team members have opportunities to attend international conferences, participate in leadership
                development programs, and connect with changemakers around the world.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Young leaders at conference"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-center text-slate-900">Why Choose AFAI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Collaborative Culture</h3>
              <p className="text-slate-600">
                Work alongside passionate professionals committed to making a difference in underserved communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Career Growth</h3>
              <p className="text-slate-600">
                Access professional development, leadership programs, and opportunities to expand your skills.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Globe className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Meaningful Impact</h3>
              <p className="text-slate-600">
                See the direct results of your work transforming lives through AI education and workforce development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Competitive Benefits</h3>
              <p className="text-slate-600">
                Comprehensive health coverage, retirement plans, paid time off, and work-life balance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-balance">Join The Team</h2>
          <p className="mb-8 text-xl text-slate-300 max-w-3xl mx-auto">
            Want to join our team? Check out our careers page to explore opportunities with us across Puerto Rico and
            the United States!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="https://careers.afai.org">
                Explore All Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/our-people">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
