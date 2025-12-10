import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProcurementPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <nav className="text-sm mb-4 text-slate-400">
            <Link href="/procurement" className="hover:text-white">
              Procurement
            </Link>
            <span className="mx-2">/</span>
            <Link href="/procurement" className="hover:text-white">
              Policies
            </Link>
            <span className="mx-2">/</span>
            <span>Procurement Policy</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">AFAI Procurement Policy and Procedures</h1>
          <p className="text-lg text-slate-300">Version 2.0 | Effective January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Introduction and Purpose</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              The American Foundation for Artificial Intelligence (AFAI) Procurement Policy establishes the framework
              for acquiring goods and services in support of our mission to expand equitable access to AI education and
              workforce development. This policy ensures that all procurement activities are conducted with integrity,
              transparency, accountability, and in compliance with applicable laws and donor requirements.
            </p>

            {/* Scope */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">2. Scope</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              This policy applies to all procurement of goods and services by AFAI, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Professional and consultancy services</li>
              <li>Technology and software</li>
              <li>Educational materials and curriculum development</li>
              <li>Research and evaluation services</li>
              <li>Marketing and communications services</li>
              <li>Event management and logistics</li>
              <li>Office supplies and equipment</li>
            </ul>

            {/* Principles */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">3. Procurement Principles</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              All AFAI procurement activities shall be guided by the following principles:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core Principles</h3>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <strong>Value for Money:</strong> Achieving optimal combination of quality, cost, and sustainability
                </li>
                <li>
                  <strong>Fair Competition:</strong> Providing equal opportunity to all qualified suppliers
                </li>
                <li>
                  <strong>Transparency:</strong> Conducting procurement openly and documenting decisions
                </li>
                <li>
                  <strong>Integrity:</strong> Maintaining ethical standards and avoiding conflicts of interest
                </li>
                <li>
                  <strong>Accountability:</strong> Taking responsibility for procurement decisions and outcomes
                </li>
                <li>
                  <strong>Sustainability:</strong> Considering environmental and social impact
                </li>
              </ul>
            </div>

            {/* Procurement Thresholds */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">4. Procurement Thresholds and Methods</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Procurement methods vary based on the estimated value of the purchase:
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Under $5,000 - Direct Purchase</h4>
                <p className="text-slate-700">
                  Direct purchase by authorized staff. Obtain best value through price comparison where practical. No
                  competitive process required.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  $5,000 - $25,000 - Request for Quotations (RFQ)
                </h4>
                <p className="text-slate-700">
                  Obtain at least three written quotations from qualified suppliers. Document selection rationale.
                  Requires approval from Program Director.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">$25,000 - $100,000 - Competitive Selection</h4>
                <p className="text-slate-700">
                  Competitive process with written proposals. May be limited to pre-qualified suppliers or select
                  competitive process. Requires Executive Director approval.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Over $100,000 - Formal Request for Proposals (RFP)
                </h4>
                <p className="text-slate-700">
                  Open competitive RFP process publicly advertised. Formal evaluation committee. Requires Board approval
                  for contracts over $250,000.
                </p>
              </div>
            </div>

            {/* RFP Process */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">5. Request for Proposals Process</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              For procurements over $100,000, AFAI follows a formal RFP process:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">RFP Development</h4>
                  <p className="text-slate-700">
                    Prepare detailed RFP document including scope, evaluation criteria, timeline, and submission
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Public Advertisement</h4>
                  <p className="text-slate-700">
                    Advertise RFP on AFAI website and relevant platforms. Minimum 21 days for proposal submission.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Proposal Evaluation</h4>
                  <p className="text-slate-700">
                    Evaluation committee reviews proposals against published criteria. May include interviews or
                    presentations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Award Decision</h4>
                  <p className="text-slate-700">
                    Selection based on best value. Award notification and contract negotiation. Public announcement of
                    award.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicts of Interest */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">6. Conflicts of Interest</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              All staff involved in procurement must disclose any actual, potential, or perceived conflicts of interest.
              Individuals with conflicts must recuse themselves from the procurement process. AFAI prohibits procurement
              from organizations in which staff, board members, or their immediate family members have a financial
              interest.
            </p>

            {/* Supplier Standards */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">7. Supplier Standards</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">AFAI expects all suppliers to:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain ethical business practices</li>
              <li>Respect human rights and labor standards</li>
              <li>Minimize environmental impact</li>
              <li>Maintain data privacy and security standards</li>
              <li>Prohibit bribery, corruption, and fraudulent practices</li>
            </ul>

            {/* Contact */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Questions About This Policy?</h3>
              <p className="text-slate-700 mb-4">
                For questions or clarifications regarding AFAI procurement policies, contact:
              </p>
              <p className="text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:procurement@AmericanFoundationforAI.org" className="text-blue-700 hover:underline">
                  procurement@AmericanFoundationforAI.org
                </a>
                <br />
                <strong>Phone:</strong> 787-606-0064
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Download Full Policy Document (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
