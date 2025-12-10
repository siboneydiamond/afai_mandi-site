import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, GraduationCap, Award, CheckCircle2 } from "lucide-react"

export default function SeminarsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1920')" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              AFAI <span className="text-yellow-400">Seminar</span> Series
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-white mb-4">
              AI for All. <br />
              Opportunity. Access. Innovation.
            </p>
            <p className="text-xl text-white/90 mb-8">
              Learn how artificial intelligence is transforming careers, communities, and the future of work.
            </p>
            <div className="space-y-2 text-white text-lg mb-8">
              <p className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">July 15–18, University of Puerto Rico</span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">August 5–8, Florida International University</span>
              </p>
            </div>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
              APPLICATIONS OPEN
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder.svg?height=500&width=600" alt="AFAI Seminar" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <strong>AFAI Seminar Series</strong> creates life-changing experiences for students, professionals,
                and community leaders who are curious about artificial intelligence and its impact on society.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Explore AI fundamentals, workforce transformation, responsible innovation, and practical applications
                through interactive workshops, hands-on projects, and discussions with industry leaders. Past AFAI
                seminar alumni have gone on to launch tech startups, lead AI initiatives, and drive innovation in their
                communities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Develop practical AI skills</strong> applicable to business, healthcare, education, and
                    community service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Connect with AI experts</strong>, industry leaders, and innovative faculty
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Build hands-on projects</strong> and develop your portfolio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Participate in community impact initiatives</strong> across Puerto Rico and underserved
                    communities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Earn a certificate of completion</strong> recognized by employers and institutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Join a community</strong> of passionate innovators and future leaders
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Student presentation"
              className="rounded-lg shadow-lg"
            />
            <img src="/placeholder.svg?height=400&width=600" alt="Group photo" className="rounded-lg shadow-lg" />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
              APPLICATIONS OPEN
            </Button>
          </div>
        </div>
      </section>

      {/* Seminars List */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">2025 Seminars</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Seminar 1 */}
            <Link href="/seminars/ai-fundamentals" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  AI Fundamentals: Theory, Practice, & Application
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Location:</strong> University of Puerto Rico (San Juan)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Dates:</strong> July 15–18, 2025
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Audience:</strong> High school students (ages 16-18)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Format:</strong> 3-day residential program
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-slate-600">
                  Explore the foundations of AI, machine learning basics, ethical considerations, and real-world
                  applications across industries.
                </p>
              </div>
            </Link>

            {/* Seminar 2 */}
            <Link href="/seminars/ai-workforce" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  AI & Workforce Transformation
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Location:</strong> Florida International University (Miami)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Dates:</strong> August 5–8, 2025
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Audience:</strong> College students & early-career professionals
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Format:</strong> 3-day residential program
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-slate-600">
                  Learn how AI is reshaping industries, career preparation strategies, and how to leverage AI tools for
                  professional growth.
                </p>
              </div>
            </Link>

            {/* Seminar 3 */}
            <Link href="/seminars/ai-small-business" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  AI for Small Business Innovation
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Location:</strong> University of Puerto Rico (Mayagüez)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Dates:</strong> September 12–14, 2025
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Audience:</strong> Entrepreneurs & small business owners
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Format:</strong> 2-day intensive workshop
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-slate-600">
                  Practical AI tools and strategies for marketing, operations, customer service, and business growth.
                </p>
              </div>
            </Link>

            {/* Seminar 4 */}
            <Link href="/seminars/women-in-ai" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Women in AI Leadership Summit
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Location:</strong> Ana G. Méndez University (San Juan)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Dates:</strong> October 17–19, 2025
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Audience:</strong> Women entrepreneurs & professionals
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Format:</strong> 3-day leadership summit
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-slate-600">
                  Empowering women to lead AI innovation, overcome barriers, and build successful tech careers and
                  businesses.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">The AFAI Seminar Experience</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get a Feel for College Life</h3>
              <p className="text-slate-600">
                Students spend nights in dorms, dine cafeteria-style, and learn in lecture halls, experiencing college
                life for 3 days and nights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Make New Friends & Network</h3>
              <p className="text-slate-600">
                We bring in engaging AI experts, innovators, and leaders, and host team challenges and projects to make
                learning exciting!
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gain Skills for Success</h3>
              <p className="text-slate-600">
                Students develop practical AI skills to create value for their communities and accomplish their personal
                and professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">2024 SEMINARS BY THE NUMBERS</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-slate-600">Total Events</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">350+</div>
              <div className="text-slate-600">Scholarships Granted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-slate-600">AI Experts & Speakers</div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">WHAT PARTICIPANTS ARE SAYING:</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">91%</div>
                <p className="text-slate-600">stated the ideas presented were likely to impact their career path</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">88%</div>
                <p className="text-slate-600">stated they were highly satisfied with the seminar experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">93%</div>
                <p className="text-slate-600">stated they would recommend AFAI seminars to a friend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Cost & Scholarships</h2>
          <p className="text-center text-lg text-slate-600 mb-12">
            AFAI is a 501(c)(3) non-profit. Our affordable pricing and scholarships are made possible thanks to generous
            supporters!
          </p>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">TOTAL TUITION COST: $99</h3>
            <p className="text-lg text-slate-700 mb-6">
              All inclusive! Housing, meals, materials, and campus tour covered.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>
                  Students get a feel for college life by staying overnight on campus throughout the program. Male and
                  female students are housed in separate facilities/floors. Staff are on campus with students 24/7.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>
                  All meals provided. Students dine cafeteria-style on campus with access to a wide variety of options
                  to suit most diets.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>All learning materials, laptops for use during the seminar, and AI tool access included.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">TUITION & TRAVEL REIMBURSEMENT SCHOLARSHIPS</h3>

            <div className="space-y-4 text-slate-700">
              <p>
                Limited tuition reimbursement scholarships are available and awarded on a rolling basis. We also offer
                limited travel reimbursement scholarships.
              </p>
              <p>
                Students awarded travel scholarships will be reimbursed up to <strong>$500</strong> in qualified travel
                expenses after submitting valid receipts and attending the seminar.
              </p>
              <p>
                Apply for scholarships (tuition, travel, or both) when you apply to a seminar. Your application will be
                reviewed and you'll receive an email within 1-2 weeks notifying you of acceptance and scholarship
                awards.
              </p>
            </div>

            <div className="mt-6">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                <Link href="#faq">Learn More in FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {/* FAQ Items */}
            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                Who should register for AFAI seminars?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                AFAI seminars are open to anyone interested in learning about artificial intelligence and its
                applications. We offer different programs for high school students (ages 16-18), college students,
                early-career professionals, entrepreneurs, and business owners. All we ask is that you are respectful,
                intellectually curious, and willing to engage in presentations and discussions.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                How advanced are these seminars?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                The programs are designed to focus on fundamentals and practical applications. No prior AI or
                programming experience is required. We will discuss foundational concepts, real-world applications, and
                hands-on projects. Our goal is for you to leave with confidence and practical skills you can immediately
                apply. These programs serve as a strong foundation for your AI learning journey.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                How much do seminars cost?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Thanks to the generosity of our donors, seminar tuition is $99. The cost is all-inclusive and covers
                materials, lodging, meals, and AI tool access for the entirety of your stay on campus. Shuttles are
                provided to and from the closest airport for students traveling by air at no additional cost. Students
                are responsible for travel to and from the seminar location.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What financial assistance is available?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                <p className="mb-3">
                  <strong>TUITION REIMBURSEMENT:</strong>
                </p>
                <p className="mb-3">
                  Students may apply for a tuition reimbursement scholarship when applying for a seminar. Qualifying
                  applicants will receive reimbursement for the full tuition fee AFTER attending the seminar. Recipients
                  are expected to be model attendees and complete pre-seminar coursework.
                </p>

                <p className="mb-3 mt-6">
                  <strong>TRAVEL REIMBURSEMENT:</strong>
                </p>
                <p>
                  We offer a limited number of travel reimbursement scholarships. Qualifying applicants will be
                  reimbursed up to $500 in travel expenses after attending the seminar and submitting valid receipts.
                  Both scholarships may be applied for during the application process.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What are qualified travel expenses?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Qualifying expenses include airline tickets or mileage reimbursements of 67 cents per mile if driving a
                personal vehicle (based on IRS standard). Reimbursements are paid AFTER the seminar conclusion. Note:
                Rental cars, gas purchases, checked bags, bus and train tickets are not applicable travel costs.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                How will I get reimbursed?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Tuition reimbursements will be refunded 5-10 business days after the seminar to the credit card used
                during registration. Travel reimbursements may be distributed via PayPal (5-10 business days) or by
                check mailed via USPS (10-20 business days). The reimbursement method is selected when applying for the
                scholarship.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                When does registration close for seminars?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Registration closes on a rolling basis once seminars reach capacity. Early application is strongly
                encouraged. Final registration deadline is typically 4 weeks before the seminar start date, or when all
                spots are filled.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What steps does AFAI take to promote safety at seminars?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Safety and well-being are our highest priorities. All AFAI staff undergo background checks. The
                student-to-staff ratio is approximately 10:1. Staff and chaperones stay on campus with students 24/7. We
                provide shuttle buses to/from designated airport locations with AFAI staff on board. Male and female
                students are housed in separate facilities/floors. Mandatory floor checks occur nightly by assigned
                staff of the same gender. Emergency communication plans allow us to contact students, parents, and
                emergency contacts directly.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What should I pack?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                The dress code is casual and appropriate. Bring all toiletries and personal items needed for any
                overnight trip. Specific instructions on linens will be emailed. We recommend bringing a notebook and
                pen for note-taking, a water bottle, comfortable walking shoes, and any personal electronics (laptop
                optional, but computers will be provided). Check your email for specific packing instructions for your
                seminar.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What dining options are available?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Students dine on campus for all meals. Dining is cafeteria-style with a buffet of options meeting most
                dietary requirements. If you have complex dietary needs, please email us at least two weeks before the
                seminar start date so we can ensure they are accommodated.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                Can participants request a roommate?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Yes. There is a space to request a roommate during registration. Requests must be mutual to be met. If
                requests are made after registration, both parties (or parents for minors) must email us with the
                request.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                Are participants required to attend all sessions?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Yes. To receive the full seminar experience and earn a certificate of completion, we ask that
                participants attend all talks, workshops, and activities.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                Will there be pre-seminar assignments?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                Yes, participants will receive preparatory materials and an online pre-seminar course via email to
                prepare for discussions and hands-on projects. Students awarded tuition reimbursement scholarships are
                required to complete pre-seminar coursework before the program to receive reimbursement.
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                What is your cancellation policy?
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-slate-700">
                <p className="mb-3">
                  To continue providing the best seminars at low cost and respect our donors, we need accurate
                  attendance counts. Please inform us promptly if you cannot attend.
                </p>

                <p className="mb-3">
                  <strong>CANCELLATION REFUND SCHEDULE:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>30+ days prior to seminar: $85 refund</li>
                  <li>30-7 days prior to seminar: $50 refund</li>
                  <li>7 days or less prior to seminar: $0 refund</li>
                </ul>

                <p className="mt-3">
                  Cancellations must be submitted via our online cancellation form. If you fail to provide notice, AFAI
                  will retain the entire tuition charge.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Join the AI Revolution?</h2>
          <p className="text-xl text-slate-800 mb-8">
            Applications are now open for our 2025 summer seminar series. Spots fill quickly—apply today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
