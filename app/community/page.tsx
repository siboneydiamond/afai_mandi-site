import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Briefcase, Calendar, ArrowRight } from "lucide-react"

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg?height=800&width=1600&query=diverse group of people collaborating in modern workspace)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="text-yellow-400">Community</span> is our action word
          </h1>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            asChild
          >
            <Link href="#share-opportunities">
              Share Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Professional Membership Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-yellow-400">Professional</span> Membership
              </h2>

              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  AI is already having an outsized impact on our everyday lives, from healthcare to housing to workforce
                  development, and that influence is just going to continue to expand. We advocate for inclusive
                  representation wherever those implementations are happening and we need people power to keep that
                  critical work going.
                </p>

                <p>
                  AFAI welcomes new members anywhere in the world who have a voice in the direction, application, and
                  regulation of artificial intelligence. If you're a practitioner (student, engineer, technologist,
                  researcher, founder, emerging professional) or a collaborator (investor, legislator, philanthropist,
                  activist, educator) in the AI ecosystem, our movement needs your momentum.
                </p>

                <p className="text-yellow-400 font-semibold">Membership is currently free.</p>
              </div>

              <Button size="lg" className="mt-8 bg-yellow-400 text-slate-900 hover:bg-yellow-500" asChild>
                <Link href="#membership-form">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Community members"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials Carousel */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8 border-l-4 border-yellow-400">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Carlos Rivera"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>

              <p className="text-sm font-semibold text-yellow-600 mb-2">AFAI MEMBER</p>
              <h3 className="text-2xl font-bold mb-4">Carlos Rivera</h3>

              <p className="text-gray-700 italic">
                "I studied computer science at a Puerto Rico university but struggled finding opportunities in AI. AFAI
                has been a beacon of light. It's a place where I can find resources to boost my career and connect with
                people who want me to succeed, which is more important than monetary gain."
              </p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8 border-l-4 border-blue-400">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="María González"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>

              <p className="text-sm font-semibold text-blue-600 mb-2">SMALL BUSINESS OWNER</p>
              <h3 className="text-2xl font-bold mb-4">María González</h3>

              <p className="text-gray-700 italic">
                "AFAI has continuously exposed me to opportunities I never knew existed. The AI training helped me
                modernize my restaurant's operations, and the community support has been invaluable. Through AFAI, I
                gained skills that increased my revenue by 40% and gave me confidence to expand."
              </p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-8 border-l-4 border-green-400">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Dr. Roberto Méndez"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>

              <p className="text-sm font-semibold text-green-600 mb-2">EDUCATOR & RESEARCHER</p>
              <h3 className="text-2xl font-bold mb-4">Dr. Roberto Méndez, Ph.D.</h3>

              <p className="text-gray-700 italic">
                "My journey with AFAI, as an educator implementing AI curriculum, has been transformative. Within
                months, it led to a feature in EdTech Magazine, a keynote at the National Education Conference, and
                partnerships with three school districts."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Membership Benefits</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Community</h3>
              <p className="text-gray-600">
                Connect to a global community of more than 3,500 AI practitioners, educators, workers, and allies to
                help you grow in your educational and career development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Development</h3>
              <p className="text-gray-600">
                Tap into premier career development resources including exclusive job and training opportunities,
                speaking engagements, mentorship, and personal brand-building to help you advance in the field.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Access to Exclusive Events</h3>
              <p className="text-gray-600">
                Access curated, members-only events, workshops, seminars, and socials to build your professional network
                and expand your AI knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Activities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Community Engagement Activities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Conferences & Socials</h3>
              <p className="text-gray-600 mb-6">
                It's important that we create space for our community to regularly connect and share ideas. We host
                socials and workshops at key AI/ML conferences where we can expand our community and our community can
                expand theirs.
              </p>
              <Button variant="outline" asChild>
                <Link href="/community/conferences-socials">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">General Events</h3>
              <p className="text-gray-600 mb-6">
                We don't just grow our community—we celebrate it. AFAI collaborates with industry, academic, and civil
                society organizations to create virtual and in-person events that elevate how we think about AI and its
                impact on communities.
              </p>
              <Button variant="outline" asChild>
                <Link href="/events">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Ecosystem Support</h3>
              <p className="text-gray-600 mb-6">
                Support generates support, and we share resources with like-minded organizations to advance our shared
                mission of creating a more equitable AI ecosystem, especially where our members are leading and
                supporting as well.
              </p>
              <Button variant="outline" asChild>
                <Link href="/community/ecosystem-support">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Highlights</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600" />
              <div className="p-6">
                <p className="text-sm font-semibold text-yellow-600 mb-2">ARTICLE</p>
                <h3 className="text-xl font-bold mb-4">
                  AFAI Announces New Board of Directors and Advisory Board Members
                </h3>
                <Button variant="link" className="p-0 text-blue-600" asChild>
                  <Link href="/news">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">PRESS</p>
                <h3 className="text-xl font-bold mb-4">
                  Puerto Rico Leads National Initiative for Latino AI Talent Development
                </h3>
                <Button variant="link" className="p-0 text-blue-600" asChild>
                  <Link href="/news">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">AFAI Programs</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            We support members of our global community across four main programs:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/community/programs/workforce-readiness" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Workforce Readiness Program"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    AI Workforce Readiness Program
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/community/programs/educator-training" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Educator AI Training"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    Educator AI Training & Certification
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/community/programs/small-business" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Small Business AI Modernization"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    Small Business AI Modernization
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/fellowship" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="AI Policy Fellowship"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    AI Policy & Leadership Fellowship
                  </h3>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">AFAI Initiatives</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            We empower Latinos and underserved communities in the AI field through four key initiatives:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/startup-navigator" className="group">
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Innovation & Entrepreneurship"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-yellow-600 transition-colors">
                    Innovation & Entrepreneurship
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/community/initiatives/research-advocacy" className="group">
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Research & Advocacy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-yellow-600 transition-colors">
                    Research & Advocacy
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/government-partnerships" className="group">
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Civil Society & Policy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-yellow-600 transition-colors">
                    Civil Society & Policy
                  </h3>
                </div>
              </Card>
            </Link>

            <Link href="/latinos-in-ai" className="group">
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Latinos in AI"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-yellow-600 transition-colors">Latinos in AI</h3>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Events</h2>
            <Button asChild>
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AFAI Social @ NeurIPS 2025",
                category: "AFAI Socials",
                location: "Vancouver Convention Center",
                href: "/events",
              },
              {
                title: "2025 AFAI Annual Workshop",
                category: "Annual Workshop",
                location: "San Juan Convention Center",
                href: "/events",
              },
              {
                title: "Women in AI Leadership Summit",
                category: "Community Event",
                location: "Virtual & In-Person",
                href: "/events",
              },
            ].map((event, index) => (
              <Link key={index} href={event.href}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600" />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-blue-600 mb-2">{event.category}</p>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Started</h2>
          <p className="text-xl mb-12 opacity-90">
            We envision a thriving, end-to-end ecosystem sustainably allocating Latino and underserved talent to the
            development of AI through engaging with students, researchers, workers, and entrepreneurs.
          </p>

          <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-gray-100" asChild>
            <Link href="#membership-form">
              Become an AFAI Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
