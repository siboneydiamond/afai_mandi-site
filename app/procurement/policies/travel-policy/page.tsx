import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TravelPolicyPage() {
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
            <span>Travel Policy</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">AFAI Travel Policy for Non-Staff</h1>
          <p className="text-lg text-slate-300">Version 1.2 | Effective January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Purpose</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              This policy establishes guidelines for travel arrangements and expense reimbursement for non-staff
              individuals traveling on behalf of or at the request of the American Foundation for Artificial
              Intelligence (AFAI). This includes consultants, contractors, board members, partners, and guest speakers.
            </p>

            {/* Scope */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">2. Scope</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              This policy applies to all non-staff travelers engaged in AFAI activities including consultancy
              assignments, board meetings, conferences, training events, partnership meetings, and site visits. Travel
              must be pre-approved and directly related to AFAI programs or organizational activities.
            </p>

            {/* Authorization */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">3. Travel Authorization</h2>
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-6">
              <p className="text-slate-700 mb-4">
                All travel must be authorized in advance by the appropriate AFAI staff member:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <strong>Program-related travel:</strong> Program Director approval required
                </li>
                <li>
                  <strong>Consultant travel:</strong> Contract supervisor approval required
                </li>
                <li>
                  <strong>Board member travel:</strong> Executive Director approval required
                </li>
                <li>
                  <strong>International travel:</strong> Executive Director approval required
                </li>
              </ul>
            </div>

            {/* Airfare */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">4. Airfare</h2>
            <div className="space-y-4 mb-6 text-slate-700">
              <p>
                <strong>Domestic Travel (within USA and Puerto Rico):</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Economy class for all flights under 5 hours</li>
                <li>Premium economy or business class may be authorized for flights over 5 hours at AFAI discretion</li>
                <li>Book at least 21 days in advance when possible to secure best rates</li>
                <li>Use of travel comparison sites (Kayak, Google Flights) to identify cost-effective options</li>
              </ul>

              <p className="mt-4">
                <strong>International Travel:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Economy class for flights under 8 hours</li>
                <li>Premium economy or business class may be authorized for flights over 8 hours</li>
                <li>Must be booked through AFAI-approved channels or with prior approval</li>
              </ul>
            </div>

            {/* Lodging */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">5. Lodging</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              AFAI will cover reasonable hotel accommodations at mid-range hotels in safe, convenient locations.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-slate-900 mb-3">Maximum Daily Lodging Rates (excluding taxes)</h4>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <strong>Puerto Rico - San Juan Metro:</strong> $150/night
                </li>
                <li>
                  <strong>Puerto Rico - Other regions:</strong> $120/night
                </li>
                <li>
                  <strong>U.S. Major Cities:</strong> $180/night
                </li>
                <li>
                  <strong>U.S. Other locations:</strong> $140/night
                </li>
                <li>
                  <strong>International:</strong> Varies by location, pre-approval required
                </li>
              </ul>
              <p className="text-sm text-slate-600 mt-4">
                Exceptions may be granted for conferences with designated hotels or high-cost cities.
              </p>
            </div>

            {/* Meals */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">6. Meals and Per Diem</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Daily meal allowances (per diem) are provided for overnight travel:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-900 mb-2">Puerto Rico</h5>
                <p className="text-slate-700">$60 per day</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-900 mb-2">Mainland USA</h5>
                <p className="text-slate-700">$70 per day</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h5 className="font-bold text-slate-900 mb-2">International</h5>
                <p className="text-slate-700">Varies by location</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm">
              Per diem is provided for meals not otherwise provided (e.g., conference meals, client-hosted meals).
              Receipts are not required for per diem. Alcohol is not reimbursable.
            </p>

            {/* Ground Transportation */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">7. Ground Transportation</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>
                <strong>Local transportation:</strong> Taxi, ride-share (Uber/Lyft), or public transit
              </li>
              <li>
                <strong>Rental cars:</strong> Mid-size or economy vehicles only, require pre-approval
              </li>
              <li>
                <strong>Mileage reimbursement:</strong> Personal vehicle use reimbursed at IRS standard rate
              </li>
              <li>
                <strong>Parking and tolls:</strong> Reimbursable with receipts
              </li>
            </ul>

            {/* Reimbursement */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">8. Expense Reimbursement Process</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Submit Expense Report</h4>
                  <p className="text-slate-700">
                    Complete AFAI expense report form within 30 days of travel completion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Attach Receipts</h4>
                  <p className="text-slate-700">Include receipts for all expenses over $25 (except per diem)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Submit for Approval</h4>
                  <p className="text-slate-700">Send to supervising AFAI staff member for review and approval</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Receive Reimbursement</h4>
                  <p className="text-slate-700">
                    Approved expenses processed within 14 business days via direct deposit or check
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Reimbursable */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-12">9. Non-Reimbursable Expenses</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <p className="font-bold text-slate-900 mb-2">The following expenses are NOT reimbursable:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Alcoholic beverages</li>
                <li>Personal entertainment</li>
                <li>Mini-bar charges</li>
                <li>Movies or in-room entertainment</li>
                <li>Personal shopping or souvenirs</li>
                <li>Fines or penalties (parking tickets, traffic violations)</li>
                <li>Travel insurance (unless pre-approved)</li>
                <li>First-class or business-class upgrades (unless authorized)</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Questions About Travel Policy?</h3>
              <p className="text-slate-700 mb-4">
                For questions regarding travel arrangements or expense reimbursement:
              </p>
              <p className="text-slate-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:finance@AmericanFoundationforAI.org" className="text-blue-700 hover:underline">
                  finance@AmericanFoundationforAI.org
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
