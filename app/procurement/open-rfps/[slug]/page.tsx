import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

const rfpDetails: Record<string, any> = {
  "ai-education-platform-development": {
    id: "RFP-2025-001",
    title: "AI Education Platform Development Services",
    issueDate: "January 10, 2025",
    deadline: "March 15, 2025",
    estimatedValue: "$250,000 - $350,000",
    region: "Puerto Rico",
    category: "Technology & Software Development",
    description:
      "The American Foundation for Artificial Intelligence (AFAI) seeks qualified vendors to develop and implement a comprehensive AI education platform for K-12 students and educators across Puerto Rico.",
    background:
      "AFAI is committed to expanding access to quality AI education in underserved communities. This platform will serve as the cornerstone of our digital education initiative, reaching thousands of students and hundreds of educators across the island.",
    scope: [
      "Design and develop a bilingual (English/Spanish) web-based learning platform",
      "Create interactive AI literacy curriculum for grades 6-12",
      "Develop educator dashboard with progress tracking and analytics",
      "Integrate gamification elements to enhance student engagement",
      "Provide technical training for AFAI staff and pilot educators",
      "Ensure WCAG 2.1 AA accessibility compliance",
      "Implement secure user authentication and data privacy measures",
      "Provide 12 months of technical support and maintenance",
    ],
    deliverables: [
      "Fully functional, responsive web platform",
      "6 curriculum modules with 40+ interactive lessons",
      "Educator training materials and documentation",
      "Technical documentation and source code",
      "User testing reports and platform analytics setup",
      "Monthly progress reports during development",
    ],
    qualifications: [
      "Minimum 5 years experience in educational technology platform development",
      "Demonstrated experience with bilingual content development",
      "Portfolio of at least 3 completed education platforms",
      "Technical expertise in modern web frameworks and cloud infrastructure",
      "Experience working with nonprofit or educational institutions",
      "Understanding of FERPA and student data privacy regulations",
    ],
    timeline: "Project duration: 10 months from contract signing",
    evaluation: [
      "Technical approach and methodology (30%)",
      "Team qualifications and experience (25%)",
      "Cost proposal and budget breakdown (20%)",
      "Timeline and project management plan (15%)",
      "References and past performance (10%)",
    ],
  },
  "workforce-training-curriculum": {
    id: "RFP-2025-002",
    title: "Workforce Training Curriculum Design",
    issueDate: "January 15, 2025",
    deadline: "March 22, 2025",
    estimatedValue: "$150,000 - $200,000",
    region: "Mainland USA & Puerto Rico",
    category: "Curriculum Development",
    description:
      "Request for proposals to design and develop AI workforce training curriculum for adult learners, including hands-on projects and assessments.",
    background:
      "AFAI is expanding its workforce development programs to help workers transition into AI-enhanced roles. We seek experienced curriculum developers to create comprehensive, practical training materials.",
    scope: [
      "Develop 4 workforce training modules (80 hours total)",
      "Create bilingual training materials and workbooks",
      "Design hands-on projects using industry-standard AI tools",
      "Develop assessment rubrics and certification criteria",
      "Create train-the-trainer materials for program facilitators",
      "Include case studies from real business applications",
      "Ensure content is accessible to learners with varied technical backgrounds",
    ],
    deliverables: [
      "Complete curriculum guide with lesson plans",
      "Student workbooks and digital resources",
      "Instructor guides and presentation materials",
      "Assessment tools and certification standards",
      "20+ hands-on project templates",
      "Train-the-trainer workshop materials",
    ],
    qualifications: [
      "Experience in adult education and workforce development",
      "Deep understanding of AI applications in business contexts",
      "Track record of creating accessible technical training content",
      "Experience with competency-based education models",
      "Portfolio of curriculum development projects",
    ],
    timeline: "Project duration: 6 months from contract signing",
    evaluation: [
      "Curriculum design approach and quality (35%)",
      "Relevant experience and qualifications (25%)",
      "Understanding of audience needs (20%)",
      "Cost and value proposition (15%)",
      "Timeline and deliverables (5%)",
    ],
  },
  "ai-small-business-research": {
    id: "RFP-2025-003",
    title: "Research Services: AI Impact on Small Business",
    issueDate: "January 20, 2025",
    deadline: "April 5, 2025",
    estimatedValue: "$100,000 - $150,000",
    region: "Puerto Rico",
    category: "Research & Evaluation",
    description:
      "Seeking research partners to conduct comprehensive study on AI adoption and economic impact among small businesses in underserved communities.",
    background:
      "AFAI needs rigorous research to understand barriers and opportunities for AI adoption in small businesses, particularly in Puerto Rico and other underserved regions.",
    scope: [
      "Conduct literature review on AI adoption in small business",
      "Design and implement mixed-methods research study",
      "Survey 500+ small businesses across multiple sectors",
      "Conduct 40+ in-depth interviews with business owners",
      "Analyze economic impact and ROI of AI adoption",
      "Identify barriers to adoption and policy recommendations",
      "Produce executive summary and full research report",
      "Present findings at AFAI stakeholder meeting",
    ],
    deliverables: [
      "Research protocol and methodology document",
      "Survey instruments (English and Spanish)",
      "Interim progress reports",
      "Comprehensive final research report (80-100 pages)",
      "Executive summary (10 pages)",
      "Data visualization and infographics",
      "Policy brief with recommendations",
      "Presentation to AFAI leadership and stakeholders",
    ],
    qualifications: [
      "PhD or equivalent in economics, business, or related field",
      "Experience conducting research in Puerto Rico or similar contexts",
      "Track record of published research in relevant areas",
      "Expertise in mixed-methods research design",
      "IRB approval experience and ethical research practices",
      "Bilingual research team (English/Spanish)",
    ],
    timeline: "Project duration: 12 months from contract signing",
    evaluation: [
      "Research methodology and design (35%)",
      "Team qualifications and experience (30%)",
      "Understanding of context and subject matter (20%)",
      "Cost proposal (10%)",
      "Timeline and feasibility (5%)",
    ],
  },
  "community-outreach-marketing": {
    id: "RFP-2025-004",
    title: "Community Outreach and Marketing Services",
    issueDate: "January 25, 2025",
    deadline: "April 12, 2025",
    estimatedValue: "$80,000 - $120,000",
    region: "Puerto Rico",
    category: "Marketing & Communications",
    description:
      "AFAI is seeking qualified firms to provide comprehensive community outreach, marketing, and communications services for AI education programs.",
    background:
      "To maximize program participation and community impact, AFAI needs strategic marketing and outreach services that resonate with diverse audiences in Puerto Rico.",
    scope: [
      "Develop comprehensive marketing strategy for AFAI programs",
      "Create bilingual marketing materials (print and digital)",
      "Manage social media presence across 3 platforms",
      "Design and execute community outreach campaigns",
      "Produce video content showcasing program impact",
      "Coordinate with local media for press coverage",
      "Organize 6 community information sessions",
      "Track engagement metrics and provide monthly reports",
    ],
    deliverables: [
      "Marketing strategy document",
      "Brand guidelines and creative assets",
      "Social media content calendar and posts",
      "4 video testimonials and program spotlights",
      "Print materials (flyers, posters, brochures)",
      "Community outreach event materials",
      "Monthly analytics and performance reports",
      "Final campaign evaluation report",
    ],
    qualifications: [
      "Experience marketing education or nonprofit programs",
      "Strong understanding of Puerto Rican communities and culture",
      "Bilingual team with native Spanish language capability",
      "Portfolio of successful community engagement campaigns",
      "Video production and social media management expertise",
      "Demonstrated ability to reach underserved audiences",
    ],
    timeline: "Contract period: 12 months with option to renew",
    evaluation: [
      "Marketing strategy and creative approach (30%)",
      "Relevant experience and portfolio (25%)",
      "Understanding of target audiences (20%)",
      "Cost proposal and deliverables (15%)",
      "Team qualifications (10%)",
    ],
  },
}

export default function RFPDetailPage({ params }: { params: { slug: string } }) {
  const rfp = rfpDetails[params.slug]

  if (!rfp) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <nav className="text-sm mb-4 text-blue-200">
            <Link href="/procurement" className="hover:text-white">
              Procurement
            </Link>
            <span className="mx-2">/</span>
            <Link href="/procurement/open-rfps" className="hover:text-white">
              Open RFPs
            </Link>
            <span className="mx-2">/</span>
            <span>{rfp.id}</span>
          </nav>

          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded">{rfp.id}</span>
                <span className="bg-white/20 text-white text-sm px-3 py-1 rounded">{rfp.category}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{rfp.title}</h1>
              <p className="text-xl text-blue-100">{rfp.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-slate-600 mb-1">Issue Date</div>
              <div className="font-semibold text-slate-900">{rfp.issueDate}</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Deadline</div>
              <div className="font-semibold text-red-700">{rfp.deadline}</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Estimated Value</div>
              <div className="font-semibold text-slate-900">{rfp.estimatedValue}</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Region</div>
              <div className="font-semibold text-slate-900">{rfp.region}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Background */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Background</h2>
                <p className="text-slate-700 leading-relaxed">{rfp.background}</p>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Scope of Work</h2>
                <ul className="space-y-3">
                  {rfp.scope.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Expected Deliverables</h2>
                <ul className="space-y-3">
                  {rfp.deliverables.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Required Qualifications</h2>
                <ul className="space-y-3">
                  {rfp.qualifications.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold mt-0.5">•</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Project Timeline</h2>
                <p className="text-slate-700">{rfp.timeline}</p>
              </div>

              {/* Evaluation Criteria */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Proposal Evaluation Criteria</h2>
                <ul className="space-y-2">
                  {rfp.evaluation.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="font-semibold text-blue-700">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h3>

                <div className="space-y-4 mb-6">
                  <Button asChild className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300">
                    <a href="#submit">Submit Proposal</a>
                  </Button>

                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="/procurement/policies/procurement-policy">Download RFP Document</a>
                  </Button>
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Questions?</h4>
                    <p className="text-sm text-slate-600 mb-3">Contact our procurement team for clarifications</p>
                    <a
                      href="mailto:procurement@AmericanFoundationforAI.org"
                      className="text-blue-700 hover:underline text-sm"
                    >
                      procurement@AmericanFoundationforAI.org
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Important</h4>
                    <p className="text-sm text-slate-600">
                      All proposals must be submitted by <strong className="text-red-700">{rfp.deadline}</strong>. Late
                      submissions will not be accepted.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section id="submit" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Submit Your Proposal</h2>
          <p className="text-lg text-slate-700 mb-8 text-center">
            To submit a proposal for this RFP, please follow the submission guidelines in the RFP document and send your
            complete proposal package to our procurement team.
          </p>

          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Submission Requirements</h3>
            <ul className="space-y-3 mb-6 text-slate-700">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Complete proposal including technical and cost components
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Company profile and relevant experience
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                At least 3 professional references
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Proof of insurance and business registration
              </li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-700">
                <strong>Submit to:</strong> procurement@AmericanFoundationforAI.org
                <br />
                <strong>Subject Line:</strong> Proposal for {rfp.id} - {rfp.title}
              </p>
            </div>

            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <a href="mailto:procurement@AmericanFoundationforAI.org?subject=Proposal for {rfp.id}">
                Email Your Proposal
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
