import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Users, CheckCircle, ArrowRight, Play } from "lucide-react"

export default function SkillsProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Together with communities across the United States and Puerto Rico, AFAI builds in-demand AI skills for
              the digital future. We also create opportunities for our graduates to kickstart their careers in
              high-growth fields.
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Traineeship Programme"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-semibold mb-4">
                New
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">AI Workforce Traineeship Programme</h2>
              <p className="text-lg text-slate-600 mb-4">
                Undergo 12 months of comprehensive training in AI for Business Operations or AI for Healthcare,
                supported by workforce development partners. The programme integrates practical AI knowledge and
                hands-on skills, equipping trainees with the understanding they need to navigate the evolving workplace.
              </p>
              <p className="text-slate-700 font-medium mb-6">Applications for 2026 cohort are now open.</p>
              <Button asChild className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                <Link href="/skills-programs/traineeship">
                  Learn More & Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Programmes Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Browse Programmes</h2>

          {/* Program Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            <Button asChild variant="default" className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/skills-programs/traineeship">AI Workforce Traineeship</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/certificates">AFAI Career Certificates</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/learn">AI Skills Academy</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/skills-programs/career-placement">Career Placement Programme</Link>
            </Button>
          </div>

          {/* Main Program Card */}
          <Card className="p-12 bg-white">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">AI Workforce Traineeship Programme</h3>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              We're launching a new cohort of the AI Workforce Traineeship Programme, in partnership with workforce
              development agencies and industry leaders. Trainees will undergo a 12-month full-time training programme,
              which comprises 3 months of foundational AI training and 9 months of on-the-job training with leading
              employers in healthcare, business operations, technology, and more. Trainees will choose from multiple
              training tracks including AI for Healthcare, AI for Business Operations, and AI for Technology Roles. Look
              forward to a robust and practical curriculum guided by industry practitioners and mentorship from
              experienced professionals.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Upon successful completion, all trainees will receive an AFAI certificate of completion,
              industry-recognized credentials, and access to the AFAI Career Placement Programme.
            </p>
            <Button asChild className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/skills-programs/traineeship">
                View Programme Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why join the programme?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                3 months of training immersion and 9 months of on-the-job training
              </h3>
              <p className="text-slate-600">
                Comprehensive program combining classroom learning with real-world experience at leading companies
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Robust development plan and mentorship by industry professionals
              </h3>
              <p className="text-slate-600">
                One-on-one guidance and career development from experienced practitioners in your field
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Structured and practical training guided by industry practitioners
              </h3>
              <p className="text-slate-600">
                Hands-on projects and real business challenges that prepare you for career success
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl overflow-hidden relative h-[400px] flex items-center justify-center">
            <Play className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg">
                "Maria Rodriguez joined the AFAI Traineeship under the AI for Healthcare track. The programme provided
                her with extensive knowledge about AI applications in patient care, and practical, hands-on training,
                enabling her successful transition into the healthcare technology industry."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Check your eligibility</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">U.S. Citizens or Permanent Residents</h3>
                <p className="text-slate-600">Must be legally authorized to work in the United States</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Available for full-time commitment</h3>
                <p className="text-slate-600">
                  Must be available at the programme start date and committed to completing the full 12 months
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">First-time participant</h3>
                <p className="text-slate-600">
                  Must not have participated in other federally-funded workforce training programmes in the past 12
                  months
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Minimum qualifications</h3>
                <p className="text-slate-600">
                  Possess the minimum education and/or work experience qualifications for your chosen track
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Application process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Apply online</h3>
              <p className="text-slate-600">
                Tell us who you are and what you bring through your resume and application
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Up to 3 interviews</h3>
              <p className="text-slate-600">
                Meet with the program coordinator, industry mentors, and potential host employers
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Decision and offer</h3>
              <p className="text-slate-600">
                Receive your acceptance and placement based on your application and interview performance
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-8">
            *This process typically takes 4-6 weeks. Only shortlisted applicants will be notified directly.
          </p>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Learning tracks</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Healthcare Track */}
            <Card className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">AI for Healthcare</h3>
                <span className="text-xl font-bold text-slate-900">$3,500/month*</span>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-slate-700">
                  This track equips you with the skills to advance your career in healthcare AI. During the 3 months
                  external training, you'll learn how to:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Apply AI tools to patient documentation, care coordination, and clinical workflows
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Understand healthcare data privacy, HIPAA compliance, and ethical AI use in medical settings
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Gain hands-on experience with AI-assisted diagnostic support and treatment planning tools
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700">
                  During the 9 months on-the-job training at leading healthcare organizations, you'll work on real
                  patient care improvement projects and collaborate with medical professionals.
                </p>
              </div>
              <Button asChild className="w-full bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/skills-programs/traineeship/healthcare">View Healthcare Track Details</Link>
              </Button>
            </Card>

            {/* Business Operations Track */}
            <Card className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">AI for Business Operations</h3>
                <span className="text-xl font-bold text-slate-900">$3,000/month*</span>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-slate-700">
                  In this track, you will explore AI applications across business functions including marketing,
                  operations, customer service, and analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Learn to automate workflows, enhance customer engagement, and improve operational efficiency with
                      AI
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Master AI-driven analytics, forecasting, and decision-making tools for business growth
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Develop expertise in implementing AI solutions that drive measurable business outcomes
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700">
                  You will transition to on-the-job training at leading companies where you'll work on real projects and
                  develop professional skills in AI-enabled business environments.
                </p>
              </div>
              <Button asChild className="w-full bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/skills-programs/traineeship/business">View Business Track Details</Link>
              </Button>
            </Card>
          </div>
          <p className="text-sm text-slate-600 mt-6">
            *Stipend amount is non-negotiable and subject to applicable taxes and other deductions.
          </p>
        </div>
      </section>

      {/* Graduate Success Stories */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Graduate Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "Working over 6 years in hospitality, I made a transition to pursue the AFAI traineeship in AI for
                Business. The hands-on experience I gained, and the mentorship and support from the programme helped
                hone my technical skills and boosted my confidence, enabling me to secure a position at a tech company."
              </p>
              <p className="font-semibold text-slate-900">Carlos Martinez, Traineeship Programme Graduate</p>
            </Card>
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "With 5 years in retail and a business degree, I joined AFAI's traineeship to shift into AI-enabled
                operations. The focus on practical AI tools and hands-on project experience were pivotal for my career
                transition into a management role."
              </p>
              <p className="font-semibold text-slate-900">Jennifer Williams, Traineeship Programme Graduate</p>
            </Card>
            <Card className="p-8">
              <p className="text-slate-700 italic mb-6">
                "Working in the nonprofit sector for 4 years, I made a mid-career transition to join the AFAI
                Traineeship Programme. The programme profoundly shaped my approach to problem-solving and equipped me
                with AI skills that make me more effective in my mission-driven work."
              </p>
              <p className="font-semibold text-slate-900">Aisha Johnson, Traineeship Programme Graduate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                How do I know which pathway is the right fit for me?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Consider your current experience, career goals, and interests. The Healthcare track is ideal for those
                interested in medical technology, patient care, and health systems. The Business Operations track suits
                those interested in marketing, operations, analytics, and business growth. Review each track's
                prerequisites and curriculum details to make an informed decision.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                When does the Traineeship Programme start?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                The next cohort begins in January 2026. Applications are now open and will be reviewed on a rolling
                basis until all positions are filled.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                Can I apply if I'm not a U.S. citizen or permanent resident?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                At this time, the programme is only available to U.S. citizens and permanent residents due to funding
                requirements and employer partnerships.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                What if I need additional assistance for the interview?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                AFAI provides interview preparation resources and support to all shortlisted candidates. Contact our
                programme coordinators for specific accommodation requests.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                Where will classes be held?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                The first 3 months of training will be held at AFAI training centers in major cities including San Juan,
                Puerto Rico, New York, Miami, and Chicago. On-the-job training locations vary based on employer
                partnerships.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                What kind of certificate will I receive?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Upon completion, you'll receive an AFAI Certificate of Completion and industry-recognized credentials
                specific to your track (e.g., Professional AI in Healthcare Certificate or Business AI Operations
                Certificate).
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                What happens after the traineeship?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                All graduates gain access to the AFAI Career Placement Programme, which provides job placement support,
                networking opportunities, and ongoing professional development resources.
              </p>
            </details>
            <details className="group border-b border-slate-200 pb-6">
              <summary className="text-xl font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                Will I be able to secure a full-time role with my host employer?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-slate-600">
                While we cannot guarantee employment, many of our host employers hire trainees who demonstrate strong
                performance during their on-the-job training. Our placement rate is over 75% for graduates securing
                full-time roles within 3 months of completion.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to transform your career with AI?</h2>
          <p className="text-xl text-slate-800 mb-8">
            Join the next cohort of the AFAI Workforce Traineeship Programme
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/skills-programs/traineeship">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
