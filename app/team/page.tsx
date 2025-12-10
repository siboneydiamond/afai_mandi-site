import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, Lightbulb, CheckCircle2 } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/placeholder.svg?height=800&width=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Driving equitable AI access through leadership, expertise, and community collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Delivering transformative AI access requires a unified effort from dedicated leaders, practitioners,
              educators, technologists, and community partners.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium mb-6">
              The American Foundation for Artificial Intelligence (AFAI) is powered by the passion and expertise of
              individuals committed to building an inclusive, AI-ready future for all.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Below, meet the people and groups who guide our mission, provide strategic oversight, and ensure that AFAI
              programs remain innovative, ethical, and community-centered.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Staff</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                AFAI's staff forms the operational backbone of the organization — executing programs, building
                partnerships, supporting communities, and transforming strategy into measurable impact.
              </p>
            </div>

            {/* Leadership */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-yellow-600" />
                </div>
                Leadership
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Position Open",
                    title: "President & CEO",
                    bio: "Responsible for strategic direction, mission stewardship, national expansion, and executive leadership.",
                  },
                  {
                    name: "Position Open",
                    title: "Chief Operations & Programs Officer",
                    bio: "Oversees all program divisions, Talent Hub operations, and execution of AFAI's national initiatives.",
                  },
                  {
                    name: "Position Open",
                    title: "Chief Product & Technology Officer",
                    bio: "Leads AI platform development, AFAI Academy, digital infrastructure, and technology strategy.",
                  },
                  {
                    name: "Position Open",
                    title: "Chief Revenue Officer",
                    bio: "Oversees fundraising, partnerships, donor relations, and revenue strategy.",
                  },
                  {
                    name: "Position Open",
                    title: "SVP of Development",
                    bio: "Leads philanthropic engagement, campaigns, and institutional fundraising.",
                  },
                  {
                    name: "Position Open",
                    title: "VP of Engineering",
                    bio: "Manages engineering teams delivering AI tools, platform enhancements, and innovation pipelines.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                    <p className="text-yellow-600 font-medium mb-3">{member.title}</p>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "Director of Programs",
                    bio: "Leads nationwide workforce and small-business initiatives, ensuring consistency, relevance, and impact.",
                  },
                  {
                    name: "Position Open",
                    title: "Senior Program Analyst",
                    bio: "Supports program evaluation, data analysis, and outcomes measurement across Talent Hubs.",
                  },
                  {
                    name: "Position Open",
                    title: "Content Manager",
                    bio: "Develops curriculum content, learning materials, and digital resources for AFAI Academy.",
                  },
                  {
                    name: "Position Open",
                    title: "Program Coordinator",
                    bio: "Manages scheduling, learner onboarding, logistics, and program operations within Hubs.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Success */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Customer Success</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "Customer Success Specialist",
                    bio: "Supports learners, business clients, and partners across AFAI's programs.",
                  },
                  {
                    name: "Position Open",
                    title: "Customer Success Manager",
                    bio: "Oversees support systems, intake processes, and user success across Talent Hubs.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Development</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "Senior Major Gifts Officer",
                    bio: "Manages donor relationships and philanthropic investment strategies.",
                  },
                  {
                    name: "Position Open",
                    title: "Director of Grants & Growth Initiatives",
                    bio: "Leads grant writing, federal partnerships, and institutional funding opportunities.",
                  },
                  {
                    name: "Position Open",
                    title: "Development Associate",
                    bio: "Coordinates fundraising campaigns, donor events, and stewardship activities.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Marketing</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "Vice President, Digital Marketing",
                    bio: "Shapes AFAI's marketing strategy, digital presence, and brand identity.",
                  },
                  {
                    name: "Position Open",
                    title: "Marketing Manager",
                    bio: "Oversees campaigns, partner communications, media, and digital engagement.",
                  },
                  {
                    name: "Position Open",
                    title: "Communications Specialist",
                    bio: "Writes content, manages announcements, supports storytelling and press.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Engineering</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "VP of Engineering",
                    bio: "Leads all engineering operations and oversees the AFAI Academy's technical architecture.",
                  },
                  {
                    name: "Position Open",
                    title: "Software Engineer",
                    bio: "Develops platform enhancements, tool features, and system integrations.",
                  },
                  {
                    name: "Position Open",
                    title: "AI Systems Engineer",
                    bio: "Ensures compliance, safe AI deployment, and optimization of AI-assisted training tools.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance & Operations */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Finance & Operations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Position Open",
                    title: "Director of Finance & Compliance",
                    bio: "Manages audits, grant compliance, budgeting, and internal controls.",
                  },
                  {
                    name: "Position Open",
                    title: "Human Resources Coordinator",
                    bio: "Oversees recruitment, onboarding, training, and HR operations.",
                  },
                  {
                    name: "Position Open",
                    title: "Project Management Officer",
                    bio: "Coordinates cross-functional initiatives, timelines, reporting, and internal workflows.",
                  },
                  {
                    name: "Position Open",
                    title: "Operations Assistant",
                    bio: "Handles logistics, support requests, scheduling, and daily Hub needs.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Board of Directors</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-8">
                AFAI's Board provides fiduciary oversight, strategic direction, and governance leadership, ensuring the
                organization remains mission-aligned, accountable, and effective.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold mb-6">Board Responsibilities include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Ensuring compliance and ethical governance",
                  "Setting long-term strategy",
                  "Approving budgets and major initiatives",
                  "Guiding executive leadership",
                  "Safeguarding the organization's public mission",
                ].map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Position Open", title: "Board Chair" },
                { name: "Position Open", title: "Board Vice Chair" },
                { name: "Position Open", title: "Board Treasurer" },
                { name: "Position Open", title: "Board Secretary" },
                { name: "Position Open", title: "Board Member" },
                { name: "Position Open", title: "Board Member" },
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-yellow-600 font-medium">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Groups */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Groups</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                AFAI's Expert Groups bring together leaders from industry, academia, public policy, workforce
                development, and AI research to help guide our strategic priorities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                These groups provide high-level insights that strengthen curriculum development, AI ethics frameworks,
                workforce alignment, Talent Hub operations, and national partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Workforce Modernization Advisory Group",
                  icon: Users,
                  color: "blue",
                },
                {
                  name: "Small Business Innovation Advisory Group",
                  icon: Lightbulb,
                  color: "green",
                },
                {
                  name: "Responsible AI & Ethics Advisory Group",
                  icon: Shield,
                  color: "purple",
                },
                {
                  name: "Education & Academic Integration Advisory Group",
                  icon: Users,
                  color: "yellow",
                },
              ].map((group, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-${group.color}-100 flex items-center justify-center mb-4`}>
                    <group.icon className={`w-6 h-6 text-${group.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{group.name}</h3>
                  <p className="text-gray-400 text-sm">Members to be announced</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standing Board Committees */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Standing Board Committees</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                AFAI maintains standing committees that support governance excellence and operational integrity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Audit & Compliance Committee",
                  description: "Oversees internal controls, audits, policy adherence, and regulatory compliance.",
                },
                {
                  name: "Finance Committee",
                  description:
                    "Protects financial health, reviews budgets, monitors spending, and ensures responsible stewardship.",
                },
                {
                  name: "Program & Impact Committee",
                  description:
                    "Evaluates program outcomes, ensures alignment with mission, and guides innovation strategies.",
                },
                {
                  name: "Responsible AI & Ethics Committee",
                  description:
                    "Ensures all AFAI initiatives uphold transparency, fairness, bias reduction, and community protection.",
                },
              ].map((committee, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">{committee.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{committee.description}</p>
                  <p className="text-sm text-gray-500">Committee members to be announced</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Council of Community & Industry Leaders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Council of Community & Industry Leaders</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This Council is a diverse group of practitioners, nonprofit leaders, AI researchers, community
                advocates, and industry experts who collaborate to strengthen AFAI's current and future initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                They provide real-world insights into community needs, regional workforce gaps, small business
                realities, academic alignment, equity baselines, and the Talent Hub role in local ecosystems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 md:p-12 text-center">
              <Users className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Council Members</h3>
              <p className="text-gray-700 text-lg">
                We are building a diverse council of leaders to guide our mission. Council members will be announced
                soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're building a world-class team dedicated to expanding AI access and opportunity for all. Explore career
              opportunities and help us shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
