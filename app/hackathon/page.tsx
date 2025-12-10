import { Button } from "@/components/ui/button"
import { Users, Trophy, Lightbulb, Code, Presentation, ChevronDown } from "lucide-react"

export default function HackathonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-blue-400 text-lg font-semibold tracking-wide">AFAI HACKATHON</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Explore. Build. Innovate:</h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-blue-300">Unleashing Innovation Through AI</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">San Juan, Puerto Rico | March 15th – 17th, 2026</p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Apply Now
            </Button>
            <p className="mt-4 text-sm text-gray-300">Application Deadline: February 15, 2026</p>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-l from-blue-500/30 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center">
                <Code className="w-48 h-48 text-white opacity-20" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The AI Innovation Challenge</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>The AI Innovation Challenge</strong> is a three-day intensive program for college students and
                emerging professionals (ages 18+) ready to build, pitch, and innovate. Teams will use cutting-edge AI
                tools to design tech-based solutions to real-world challenges—grounded in community impact, ethical AI
                principles, and inclusive innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Connect with visionary entrepreneurs and AI experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Develop tangible tech solutions to community challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Compete for prizes and seed funding for your project</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Join a community of passionate builders and future leaders</span>
                </li>
              </ul>
              <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900">Applications Open Soon</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The Hackathon is structured around three key stages:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-gray-200">1</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Concept Development</h3>
              <p className="text-gray-600">Define a community-based challenge and pitch an AI-powered solution.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-gray-200">2</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Prototype Building</h3>
              <p className="text-gray-600">Create a functional tech demo using AI tools and earned resources.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="text-8xl font-bold text-gray-200">3</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Presentation className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Final Pitch</h3>
              <p className="text-gray-600">
                Present your solution to a panel of judges, investors, and community leaders.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-700">
              Teams begin with a limited number of <strong>AI Credits</strong>, which can be used to access help from
              tools like ChatGPT, Claude, or specialized APIs. As teams progress, they earn{" "}
              <strong>Hackathon Points</strong> from judges based on creativity, feasibility, and community
              impact—simulating a real market where great ideas gain traction and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Trophy className="w-12 h-12 text-yellow-500 mr-4" />
              <h2 className="text-4xl font-bold">Scholarships & Prizes</h2>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Available Scholarships</h3>
              <p className="text-gray-700 mb-6">
                Students can apply for scholarships covering up to <strong>$1,500</strong>, including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <span>
                    <strong>Travel:</strong> Up to $700 for domestic or international flights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <span>
                    <strong>Accommodation & Meals:</strong> Up to $400 for lodging and food
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <span>
                    <strong>Event Registration:</strong> Valued at $400
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Competition Prizes</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">1st Place</div>
                  <div className="text-2xl font-semibold mb-2">$5,000</div>
                  <p className="text-sm text-gray-600">+ Seed funding consideration</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">2nd Place</div>
                  <div className="text-2xl font-semibold mb-2">$3,000</div>
                  <p className="text-sm text-gray-600">+ Mentorship program access</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">3rd Place</div>
                  <div className="text-2xl font-semibold mb-2">$1,500</div>
                  <p className="text-sm text-gray-600">+ Certificate program voucher</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-gray-600 text-center">
              Scholarships are awarded based on a short written application and essay response. Recipients will be
              notified by email and are expected to complete a post-event reflection or testimonial.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Who is the Hackathon for?",
                a: "The AFAI Hackathon is for college students and emerging professionals (ages 18+) interested in using AI to solve real-world community challenges, particularly those focused on education, workforce development, small business innovation, and social impact.",
              },
              {
                q: "Who is sponsoring the Hackathon?",
                a: "The American Foundation for Artificial Intelligence (AFAI) in partnership with local Puerto Rican universities, tech companies, and community organizations.",
              },
              {
                q: "What is the cost to attend without a scholarship?",
                a: "$400 per participant, which includes meals, event materials, mentorship access, and networking opportunities.",
              },
              {
                q: "What is the deadline to apply?",
                a: "All applications must be submitted by February 15, 2026. Scholarship applications are reviewed on a rolling basis.",
              },
              {
                q: "How do I apply for a scholarship?",
                a: "Register and submit a short essay (500-750 words) answering: 'How can AI technology be leveraged to create positive social impact in underserved communities?' Recipients will be notified by email within two weeks of application.",
              },
              {
                q: "Do I need coding experience?",
                a: "While coding experience is helpful, it's not required. We welcome participants with diverse skills including design, business strategy, community organizing, and communication. Teams are encouraged to have mixed skill sets.",
              },
              {
                q: "Can I participate remotely?",
                a: "This is an in-person event. However, we offer generous travel scholarships to make attendance accessible to qualified participants from across the U.S. and internationally.",
              },
              {
                q: "What is the team size?",
                a: "Teams typically consist of 3-5 members. You can apply with a pre-formed team or be matched with other participants during the event kickoff.",
              },
              {
                q: "What should I bring?",
                a: "Bring your laptop, chargers, any specialized equipment you need, business casual attire for the pitch presentation, and an open mind ready to innovate!",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-lg">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in Puerto Rico for three days of innovation, collaboration, and AI-powered problem solving.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
            Apply for AFAI Hackathon 2026
          </Button>
          <p className="mt-4 text-sm">Limited to 100 participants • Apply by February 15, 2026</p>
        </div>
      </section>
    </div>
  )
}
