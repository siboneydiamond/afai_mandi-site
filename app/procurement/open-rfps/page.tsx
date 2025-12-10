import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const openRFPs = [
  {
    id: "rfp-2025-001",
    title: "AI Education Platform Development Services",
    description:
      "AFAI seeks qualified vendors to develop and implement a comprehensive AI education platform for K-12 students and educators across Puerto Rico.",
    region: "Puerto Rico",
    deadline: "March 15, 2025",
    estimatedValue: "$250,000 - $350,000",
    category: "Technology & Software Development",
    issueDate: "January 10, 2025",
    slug: "ai-education-platform-development",
  },
  {
    id: "rfp-2025-002",
    title: "Workforce Training Curriculum Design",
    description:
      "Request for proposals to design and develop AI workforce training curriculum for adult learners, including hands-on projects and assessments.",
    region: "Mainland USA & Puerto Rico",
    deadline: "March 22, 2025",
    estimatedValue: "$150,000 - $200,000",
    category: "Curriculum Development",
    issueDate: "January 15, 2025",
    slug: "workforce-training-curriculum",
  },
  {
    id: "rfp-2025-003",
    title: "Research Services: AI Impact on Small Business",
    description:
      "Seeking research partners to conduct comprehensive study on AI adoption and economic impact among small businesses in underserved communities.",
    region: "Puerto Rico",
    deadline: "April 5, 2025",
    estimatedValue: "$100,000 - $150,000",
    category: "Research & Evaluation",
    issueDate: "January 20, 2025",
    slug: "ai-small-business-research",
  },
  {
    id: "rfp-2025-004",
    title: "Community Outreach and Marketing Services",
    description:
      "AFAI is seeking qualified firms to provide comprehensive community outreach, marketing, and communications services for AI education programs.",
    region: "Puerto Rico",
    deadline: "April 12, 2025",
    estimatedValue: "$80,000 - $120,000",
    category: "Marketing & Communications",
    issueDate: "January 25, 2025",
    slug: "community-outreach-marketing",
  },
]

export default function OpenRFPsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="text-sm mb-4 text-blue-200">
            <Link href="/procurement" className="hover:text-white">
              Procurement
            </Link>
            <span className="mx-2">/</span>
            <span>Currently Open RFPs</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Currently Open RFPs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            View our active Request for Proposals and submit your bid to partner with AFAI on expanding AI education and
            workforce development.
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="container mx-auto px-6">
          <p className="text-slate-700">
            <strong>Important:</strong> All RFPs must be submitted by the specified deadline. Late submissions will not
            be accepted. For questions, contact{" "}
            <a href="mailto:procurement@AmericanFoundationforAI.org" className="text-blue-700 hover:underline">
              procurement@AmericanFoundationforAI.org
            </a>
          </p>
        </div>
      </section>

      {/* RFPs List */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-6">
            {openRFPs.map((rfp) => (
              <Card key={rfp.id} className="p-8 hover:shadow-lg transition-shadow border-2">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {rfp.id}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                        {rfp.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{rfp.title}</h3>

                    <p className="text-slate-700 mb-4 leading-relaxed">{rfp.description}</p>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-slate-900">Region:</span>{" "}
                        <span className="text-slate-700">{rfp.region}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Issue Date:</span>{" "}
                        <span className="text-slate-700">{rfp.issueDate}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Estimated Value:</span>{" "}
                        <span className="text-slate-700">{rfp.estimatedValue}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-red-700">Deadline:</span>{" "}
                        <span className="text-red-700 font-semibold">{rfp.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button asChild className="bg-blue-700 hover:bg-blue-800">
                      <Link href={`/procurement/open-rfps/${rfp.slug}`}>View RFP Details</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/procurement/open-rfps/${rfp.slug}#submit`}>Submit Proposal</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No RFPs Alternative - Comment this in when no RFPs are active */}
          {/* <div className="text-center py-16">
            <div className="bg-slate-50 rounded-lg p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                No Open RFPs at This Time
              </h2>
              <p className="text-slate-700 mb-6">
                There are currently no active Request for Proposals. Please check back soon or sign up for notifications.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get Notified of New RFPs
                </Link>
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions About Our RFP Process?</h2>
          <p className="text-lg text-slate-700 mb-8">
            Review our procurement policies or contact our procurement team for assistance with your proposal
            submission.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/procurement/policies/procurement-policy">View Procurement Policy</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/contact">Contact Procurement Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
