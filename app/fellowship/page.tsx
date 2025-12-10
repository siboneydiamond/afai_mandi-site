import { Button } from "@/components/ui/button"
import { DollarSign, FileText, Users, Briefcase, Award, Calendar, Check } from "lucide-react"

export default function FellowshipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">AFAI</span>
              <span className="text-blue-400"> Fellowship</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-200">Become a leading voice in</h2>
            <p className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 italic">AI & Technology Policy</p>
            <div className="mb-8">
              <p className="text-xl md:text-2xl mb-2">$5,000 Paid Fellowship | Remote + In-Person</p>
              <p className="text-lg text-gray-300">Application Deadline: March 1, 2026</p>
            </div>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fellowship participants in discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mt-8">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fellow presenting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Ideas Into Influence</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>The AFAI Fellowship</strong> is an intensive 4-month program that develops emerging scholars and
                practitioners into influential voices who shape public understanding of artificial intelligence,
                technology policy, and digital innovation.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you aspire to write long-form policy analysis, produce educational video content, launch a
                technology podcast, or build a social media following—we'll give you the skills, platform, and network
                to make complex AI concepts accessible and actionable.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Gain</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">$5,000 Stipend</h3>
              <p className="text-gray-600">
                Paid in two installments at the completion of each program phase (remote and in-person)
              </p>
            </div>

            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Published Portfolio</h3>
              <p className="text-gray-600">
                Across multiple formats (articles, videos, podcasts) on AFAI platforms and partner media outlets
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">
                From successful AI researchers, policy experts, journalists, and digital creators
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Professional Network</h3>
              <p className="text-gray-600">
                Access to AFAI's network of AI companies, think tanks, universities, and media organizations
              </p>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">All Expenses Paid</h3>
              <p className="text-gray-600">
                For 7-day summer intensive in Puerto Rico (travel, accommodation, and meals reimbursed)
              </p>
            </div>

            <div className="text-center">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Platform-Building Skills</h3>
              <p className="text-gray-600">
                Learn to grow your audience, engage stakeholders, and amplify your impact across channels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Program Structure</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Phase 1: Remote Intensive</h3>
              <p className="text-lg font-semibold text-blue-700 mb-4">February 1 – May 31, 2026</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Live Sessions:</strong> Tuesdays & Thursdays, 6:00-8:00 PM ET via Zoom
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Weekly Commitment:</strong> 10-12 hours including sessions and assignments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Core Training:</strong> AI policy analysis, content creation, research methods, and public
                    communication
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Phase 2: In-Person Summit</h3>
              <p className="text-lg font-semibold text-orange-700 mb-4">July 2026 (7 days)</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Location:</strong> San Juan, Puerto Rico
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Immersive Experience:</strong> With your cohort, AFAI leadership, and guest speakers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Networking:</strong> Meet established AI researchers, policymakers, journalists, and
                    entrepreneurs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span>
                    <strong>All Expenses Covered:</strong> Flights, accommodation, meals, and activities fully
                    reimbursed
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Fellows Are Saying</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "The AFAI Fellowship gave me the tools and confidence to transition from academia into technology
                policy. Within six months of completing the program, I landed my dream job at a leading AI think tank."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold">Sarah Martinez</p>
                <p className="text-sm text-gray-600">2024 Fellow</p>
                <p className="text-sm text-blue-600">Policy Analyst, Center for AI Policy</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "This fellowship made me a better writer, clearer thinker, and more effective communicator. The
                mentorship and network I gained continue to open doors years after completing the program."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold">James Chen</p>
                <p className="text-sm text-gray-600">2023 Fellow</p>
                <p className="text-sm text-blue-600">Technology Columnist, Tech Policy Today</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "The AFAI Fellowship transformed my understanding of AI ethics and gave me a platform to share important
                ideas with wider audiences. I now consult for organizations building responsible AI systems."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold">Aisha Patel</p>
                <p className="text-sm text-gray-600">2025 Fellow</p>
                <p className="text-sm text-blue-600">Independent AI Ethics Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Your Curriculum</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Master three core competencies that will define your career in AI and technology policy
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Think Like a Technologist</h3>
              <p className="text-gray-700">
                Deep dive into AI fundamentals, machine learning, ethics, and emerging technologies through guided
                readings and expert discussions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Write for Impact</h3>
              <p className="text-gray-700">
                Learn the step-by-step process for crafting compelling policy briefs, op-eds, research reports, and
                multimedia content that influences decision-makers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Lead with Purpose</h3>
              <p className="text-gray-700">
                Develop the communication skills, ethical framework, and strategic thinking required for leadership in
                the AI age.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Weekly Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Tuesday Masterclasses</p>
                  <p className="text-gray-600">
                    Learn from AI researchers, policymakers, journalists, and successful content creators
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Thursday Workshops</p>
                  <p className="text-gray-600">Hands-on content creation with immediate peer and mentor feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Format Labs</p>
                  <p className="text-gray-600">
                    Specialized training in your chosen medium (writing, video, podcasting, social media)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Publishing Pipeline</p>
                  <p className="text-gray-600">
                    Regular opportunities to publish your work on AFAI platforms and partner outlets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Who Should Apply?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">You're a Perfect Fit if:</h3>
              <ul className="space-y-3">
                {[
                  "You're 18+ and passionate about AI's impact on society",
                  "You can commit 10-12 hours weekly from February-May 2026",
                  "You want to make complex AI concepts accessible through modern media",
                  "You're eager to build an audience and shape public discourse",
                  "You see yourself as a bridge between technology and policy",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">We Welcome:</h3>
              <ul className="space-y-3">
                {[
                  "Students and recent grads seeking career direction in AI/tech",
                  "Professionals pivoting to policy, journalism, or advocacy",
                  "International applicants (you handle visa if needed)",
                  "Self-taught enthusiasts without formal technical credentials",
                  "Anyone with drive to become an influential voice in AI",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Timeline</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  label: "Application Deadline",
                  date: "March 1, 2026 at 11:59 PM ET",
                  color: "bg-red-100 text-red-700",
                },
                {
                  label: "Interview Invitations",
                  date: "Rolling basis through February",
                  color: "bg-blue-100 text-blue-700",
                },
                { label: "Final Decisions", date: "Mid-March 2026", color: "bg-green-100 text-green-700" },
                { label: "Program Starts", date: "February 1, 2026", color: "bg-purple-100 text-purple-700" },
              ].map((item, index) => (
                <div key={index} className={`${item.color} rounded-lg p-6 flex justify-between items-center`}>
                  <span className="font-semibold text-lg">{item.label}</span>
                  <span className="font-bold">{item.date}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-gray-600 font-semibold">
              Last Year: 150+ applications for 15 spots. Apply early for best consideration.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shape AI Policy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait. With only 15 spots and applications reviewed on a rolling basis, your best chance is to apply
            today.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-6 text-lg">
            Apply for AFAI Fellowship 2026
          </Button>
          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-lg mb-2">Still Have Questions?</p>
            <p className="text-blue-200">
              Contact:{" "}
              <a href="mailto:fellowship@americanfoundationforai.org" className="underline hover:text-white">
                fellowship@americanfoundationforai.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
