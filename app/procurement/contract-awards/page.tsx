import { Card } from "@/components/ui/card"
import Link from "next/link"

const contractAwards = [
  {
    id: "CA-2024-015",
    title: "Digital Literacy Platform Maintenance Services",
    awardedTo: "TechEd Solutions, Inc.",
    location: "San Juan, Puerto Rico",
    awardDate: "December 18, 2024",
    contractValue: "$75,000",
    category: "Technology Services",
    duration: "12 months",
  },
  {
    id: "CA-2024-014",
    title: "Community Engagement and Outreach Coordination",
    awardedTo: "Voces Unidas PR",
    location: "Ponce, Puerto Rico",
    awardDate: "December 10, 2024",
    contractValue: "$95,000",
    category: "Community Outreach",
    duration: "18 months",
  },
  {
    id: "CA-2024-013",
    title: "Impact Evaluation Services for Workforce Programs",
    awardedTo: "Research Insights Group",
    location: "Washington, D.C.",
    awardDate: "November 22, 2024",
    contractValue: "$120,000",
    category: "Research & Evaluation",
    duration: "10 months",
  },
  {
    id: "CA-2024-012",
    title: "Curriculum Translation and Localization Services",
    awardedTo: "BilingualBridge Consulting",
    location: "San Juan, Puerto Rico",
    awardDate: "November 15, 2024",
    contractValue: "$45,000",
    category: "Translation Services",
    duration: "6 months",
  },
  {
    id: "CA-2024-011",
    title: "Graphic Design and Branding Services",
    awardedTo: "Creative Collective PR",
    location: "San Juan, Puerto Rico",
    awardDate: "October 28, 2024",
    contractValue: "$55,000",
    category: "Creative Services",
    duration: "12 months",
  },
]

export default function ContractAwardsPage() {
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
            <span>Contract Award Notices</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Contract Award Notices</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            View awarded contracts resulting from AFAI's competitive procurement process. We are committed to
            transparency in all contracting decisions.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-slate-700 leading-relaxed">
            The following contracts have been awarded through AFAI's competitive Request for Proposals (RFP) process.
            All awards comply with AFAI procurement policies and were selected based on evaluation criteria detailed in
            each RFP. For questions about awarded contracts, contact{" "}
            <a href="mailto:procurement@AmericanFoundationforAI.org" className="text-blue-700 hover:underline">
              procurement@AmericanFoundationforAI.org
            </a>
          </p>
        </div>
      </section>

      {/* Contract Awards List */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-6">
            {contractAwards.map((award) => (
              <Card key={award.id} className="p-8 border-2 hover:border-yellow-400 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Awarded
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                        {award.category}
                      </span>
                      <span className="text-slate-500 text-xs">{award.id}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{award.title}</h3>

                    <div className="space-y-2 text-slate-700">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span>
                          <strong>Awarded to:</strong> {award.awardedTo}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>
                          <strong>Location:</strong> {award.location}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 mt-4 pt-4 border-t border-slate-200">
                      <div className="text-sm">
                        <span className="font-semibold text-slate-900">Award Date:</span>{" "}
                        <span className="text-slate-700">{award.awardDate}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-slate-900">Contract Value:</span>{" "}
                        <span className="text-slate-700">{award.contractValue}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-slate-900">Duration:</span>{" "}
                        <span className="text-slate-700">{award.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Commitment to Transparency</h2>
          <p className="text-slate-700 leading-relaxed mb-6 text-center">
            AFAI is committed to transparent and competitive procurement practices. All contract awards are made based
            on rigorous evaluation of proposals against published criteria. We ensure fair competition and value for our
            programs and the communities we serve.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/procurement/policies/procurement-policy"
              className="text-blue-700 hover:underline font-semibold"
            >
              View Our Procurement Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/contact" className="text-blue-700 hover:underline font-semibold">
              Contact Procurement Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
