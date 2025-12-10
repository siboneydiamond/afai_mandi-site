import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, GraduationCap, Heart, Lightbulb, Globe } from "lucide-react"
import { GlobeIcon } from "lucide-react"
import { UsersIcon } from "lucide-react"
import { LightbulbIcon } from "lucide-react"

export default function PuertoRicoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/placeholder.svg?height=800&width=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Puerto Rico AI Blueprint</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Puerto Rico is the focus of developing US AI national strategy — a living demonstration of how equitable,
              community-centered AI adoption can strengthen education, workforce mobility, small-business growth, and
              public-sector innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The island's cultural resilience, creativity, and spirit of reinvention make it the ideal environment to
              build a model that can be scaled across underserved regions throughout the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Why Puerto Rico */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Puerto Rico</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-red-600">Challenges Faced</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Puerto Rico faces the same challenges seen across underserved U.S. communities, but at greater
                  intensity:
                </p>
                <div className="space-y-4">
                  {[
                    "Gaps in digital access",
                    "Under-resourced public institutions",
                    "Economic volatility",
                    "Migrating talent",
                    "Uneven technology adoption",
                    "Limited AI training pipelines",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-green-600">Unique Strengths</h3>
                <p className="text-lg text-gray-700 mb-6">And yet, the island holds unique strengths:</p>
                <div className="space-y-4">
                  {[
                    "Strong youth population",
                    "A vibrant entrepreneurial ecosystem",
                    "Deep cultural identity",
                    "Global tourism recognition",
                    "Strong civic networks",
                    "Large bilingual workforce",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <p className="text-2xl font-bold">
                This combination makes Puerto Rico the perfect place to design and test inclusive AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">AFAI's AI Blueprint Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center">
              The Puerto Rico AI Blueprint is AFAI's commitment to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Expand AI literacy across schools",
                "Create AI-ready workforce pipelines",
                "Modernize small businesses",
                "Strengthen women-led innovation",
                "Improve municipal services",
                "Build safe, responsible AI systems for public benefit",
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-yellow-50 rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold text-gray-900">
                The blueprint transforms Puerto Rico into a model for equitable digital transformation — powered by
                community voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Puerto Rico as an AI Hub */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Puerto Rico as an AI Hub</h2>
            <p className="text-xl text-gray-300 mb-12 text-center">We use the island to test scalable models for:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "K–12 AI education integration",
                "Workforce upskilling aligned with tourism, healthcare, logistics, and creative industries",
                "Small-business digital modernization",
                "Women-led entrepreneurship",
                "Municipal AI readiness",
                "Ethical AI adoption models",
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-yellow-400 font-medium mt-12 text-center">
              These insights guide national expansion in underserved cities, rural regions, and other U.S. territories.
            </p>
          </div>
        </div>
      </section>

      {/* Community Empowerment Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Community Empowerment Strategy</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              AFAI's work in Puerto Rico centers community leadership:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Partnering with local organizations",
                  color: "blue",
                },
                {
                  icon: Globe,
                  title: "Integrating cultural context",
                  color: "green",
                },
                {
                  icon: Heart,
                  title: "Designing training for real community needs",
                  color: "pink",
                },
                {
                  icon: GraduationCap,
                  title: "Building local talent pipelines",
                  color: "purple",
                },
                {
                  icon: Lightbulb,
                  title: "Creating community-owned innovation hubs",
                  color: "yellow",
                },
                {
                  icon: Building2,
                  title: "Ensuring sustainability beyond external funding",
                  color: "indigo",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <p className="text-lg text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-gray-900">
                This isn't outside intervention — it's collaborative, community-driven impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector-Specific Innovation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sector-Specific Innovation</h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              We focus on sectors that define the future AI economy:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Tourism & Hospitality",
                  description: "Workforce training, guest experience optimization, business modernization.",
                  color: "blue",
                },
                {
                  title: "Healthcare & Human Services",
                  description: "Documentation support, administrative automation, training for caregivers.",
                  color: "green",
                },
                {
                  title: "Logistics & Transportation",
                  description: "Forecasting tools, workflow efficiencies, port operations support.",
                  color: "orange",
                },
                {
                  title: "Creative & Cultural Industries",
                  description: "AI tools for media, storytelling, design, and content production.",
                  color: "purple",
                },
                {
                  title: "Small Business & Entrepreneurship",
                  description: "AI marketing, operational improvements, financial planning.",
                  color: "yellow",
                },
              ].map((sector, index) => (
                <div key={index} className={`bg-${sector.color}-50 rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                  <h3 className="text-2xl font-bold mb-3">{sector.title}</h3>
                  <p className="text-lg text-gray-700">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "María",
                  role: "Hospitality Worker",
                  story: "AI skills helped her automate scheduling, improve guest experience, and earn a promotion.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  name: "Rosa & Tania",
                  role: "Entrepreneurs",
                  story: "AI-driven marketing tools expanded their customer base and stabilized revenue.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  name: "Jayden",
                  role: "High School Senior",
                  story: "AI Fundamentals course sparked his pathway into computer science.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-600 mb-4">{story.role}</p>
                    <p className="text-lg text-gray-700">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-12 text-lg">
              More stories will be added as local programs scale.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Partners */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Regional Partners</h2>
            <p className="text-xl text-gray-300 mb-12 text-center">AFAI collaborates with:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Municipalities across Puerto Rico",
                "Local chambers of commerce",
                "Universities and vocational institutions",
                "K–12 schools and education networks",
                "Women's empowerment groups",
                "Cultural and creative organizations",
                "Nonprofit coalitions",
                "Tourism and hospitality employers",
              ].map((partner, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                    <p className="text-gray-200">{partner}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-yellow-400 font-medium mt-12 text-center">
              These partnerships anchor the blueprint in local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* National Model */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              The Blueprint Becomes a National Model
            </h2>
            <p className="text-2xl text-gray-900 leading-relaxed mb-8">
              Puerto Rico is more than a program site — it is a roadmap for how AI can strengthen communities across the
              United States.
            </p>
            <Link href="/programs">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6">
                Explore Our Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latinos in AI related initiative section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Related Initiatives</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/latinos-in-ai"
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GlobeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors">Latinos in AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Global initiative led from Puerto Rico connecting 4,200+ Latino AI professionals across 42 countries.
                </p>
                <div className="text-blue-600 font-semibold flex items-center gap-2 mt-4">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/programs/women"
                className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-xl bg-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-700 transition-colors">
                  Women's Empowerment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Creating accessible pathways for women into digital careers and AI leadership roles.
                </p>
                <div className="text-pink-600 font-semibold flex items-center gap-2 mt-4">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/startup-navigator"
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LightbulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-700 transition-colors">
                  Startup Navigator
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Supporting Puerto Rican entrepreneurs with AI tools, mentorship, and business development resources.
                </p>
                <div className="text-purple-600 font-semibold flex items-center gap-2 mt-4">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
