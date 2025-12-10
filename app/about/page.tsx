import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Lightbulb, Shield, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/placeholder.svg?height=800&width=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">About AFAI</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Expanding equitable access to AI education, workforce development, and economic opportunity across the
              United States and Puerto Rico.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The American Foundation for Artificial Intelligence (AFAI) is a 501(c)(3) public charity dedicated to
              expanding equitable access to AI education, workforce development, small-business enablement, women's
              economic empowerment, and responsible innovation across the United States and Puerto Rico.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium mt-6">
              We believe AI must strengthen communities, not replace them — and that every person deserves the skills
              and tools to build economic mobility in the modern digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To ensure that every American — especially underserved communities and Puerto Rico — has access to the
                AI skills, tools, and opportunities needed to build economic mobility, strengthen communities, and
                thrive in the modern digital economy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A nation where AI expands opportunity, reduces inequity, and fuels shared prosperity — with communities
                leading the future, not being left behind by it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Dignity",
                  description: "Every person deserves access to opportunity.",
                  color: "pink",
                },
                {
                  icon: Users,
                  title: "Equity",
                  description: "Technology must close gaps, not widen them.",
                  color: "blue",
                },
                {
                  icon: Globe,
                  title: "Community",
                  description: "Local voices guide the solutions.",
                  color: "green",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Bold ideas that serve the public good.",
                  color: "purple",
                },
                {
                  icon: Shield,
                  title: "Responsibility",
                  description: "AI must be ethical, transparent, and safe.",
                  color: "indigo",
                },
                {
                  icon: Target,
                  title: "Opportunity",
                  description: "Skills that promote economic mobility and stability.",
                  color: "yellow",
                },
              ].map((value, index) => (
                <div key={index} className={`bg-${value.color}-50 rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                  <div className={`w-12 h-12 rounded-xl bg-${value.color}-100 flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What We Do</h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              AFAI operates six major program areas:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI Education & Literacy",
                  description: "Building AI-ready students, teachers, and school systems.",
                  link: "/programs/education",
                },
                {
                  title: "Workforce Development & Upskilling",
                  description: "Empowering workers with practical AI skills for higher wages and career growth.",
                  link: "/programs/workforce",
                },
                {
                  title: "Small Business & Community Empowerment",
                  description: "Helping entrepreneurs use AI to grow, innovate, and stabilize their businesses.",
                  link: "/programs/small-business",
                },
                {
                  title: "Women's Economic Empowerment",
                  description:
                    "Creating accessible pathways for women into digital careers, entrepreneurship, and leadership.",
                  link: "/programs/women",
                },
                {
                  title: "Responsible AI & Public-Benefit Research",
                  description: "Developing ethical frameworks and community-first standards for safe AI adoption.",
                  link: "/programs/responsible-ai",
                },
                {
                  title: "Community Innovation & Municipal Capacity-Building",
                  description:
                    "Strengthening local governments, nonprofits, and public services through responsible AI.",
                  link: "/programs/community",
                },
              ].map((program, index) => (
                <Link
                  key={index}
                  href={program.link}
                  className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {index + 1}. {program.title}
                  </h3>
                  <p className="text-gray-300">{program.description}</p>
                  <div className="mt-4 text-yellow-400 flex items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our National Strategy</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              AFAI strengthens the entire ecosystem:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Schools",
                "Workers",
                "Small businesses",
                "Community organizations",
                "Municipal governments",
                "Nonprofits",
                "Public institutions",
                "Economic development agencies",
              ].map((entity, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="text-lg font-medium text-gray-900">{entity}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mt-12 text-center">
              We work at the intersection of education, workforce readiness, public-sector modernization, and economic
              opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Puerto Rico Blueprint */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">Puerto Rico AI Blueprint</h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-6">
              Puerto Rico is the focal point of our national strategy — a living demonstration of how AI can strengthen
              local economies, transform education, modernize public services, and expand opportunity across an entire
              region.
            </p>
            <p className="text-xl text-gray-900 leading-relaxed font-medium text-center">
              Success in Puerto Rico provides a model that can scale across underserved communities nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Governance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Leadership & Governance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              AFAI is governed by a Board of Directors responsible for:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Strategic oversight",
                "Compliance",
                "Financial integrity",
                "Program monitoring",
                "Ethical and responsible operations",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We maintain strict adherence to IRS nonprofit standards, public-transparency expectations,
              conflict-of-interest policies, and responsible-governance best practices.
            </p>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Leadership includes:</h3>
              <div className="space-y-4">
                {[
                  "Nonprofit and philanthropic executives",
                  "Technology experts",
                  "Educators",
                  "Civic innovators",
                  "Community leaders",
                ].map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{role}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Together, they ensure AFAI remains mission-driven, ethical, and committed to public benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Transparency & Accountability</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">AFAI is committed to:</h3>
                <div className="space-y-4">
                  {[
                    "Annual impact reporting",
                    "Financial transparency",
                    "Public-benefit documentation",
                    "Responsible use of donor funds",
                    "High governance standards",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">As a public charity, we publish:</h3>
                <div className="space-y-4">
                  {[
                    "Annual reports",
                    "Audited financials",
                    "990 filings",
                    "Program evaluations",
                    "Impact dashboards",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Us</h2>
            <p className="text-xl text-gray-300 mb-8">AFAI partners with:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                "Schools",
                "Employers",
                "Universities",
                "Municipalities",
                "Nonprofits",
                "Philanthropic foundations",
                "Corporate partners",
                "Community organizations",
              ].map((partner, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4">
                  <p className="text-gray-200">{partner}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-medium mb-8">
              Together, we build equitable access to AI opportunity — ensuring no one is left behind.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
