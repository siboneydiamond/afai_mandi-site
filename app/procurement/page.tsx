export default function ProcurementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Procurement</h1>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            AFAI procurement covers the purchase of goods and services, including the procurement of consultancy
            services and the contracting of implementing partners. AFAI is committed to ensuring that procurement is
            conducted to a high standard and that best practices are adhered to at all times.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/procurement#overview"
              className="text-blue-700 hover:text-blue-800 font-semibold text-lg hover:underline"
            >
              Overview →
            </a>
            <a
              href="/procurement/open-rfps"
              className="text-blue-700 hover:text-blue-800 font-semibold text-lg hover:underline"
            >
              Currently Open RFPs →
            </a>
            <a
              href="/procurement/contract-awards"
              className="text-blue-700 hover:text-blue-800 font-semibold text-lg hover:underline"
            >
              Contract Award Notices →
            </a>
          </div>
        </div>
      </section>

      {/* Competitive Process Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Competitive Request for Proposals Process</h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              For all contracts above $25,000, contractors are selected through a formal competitive process unless an
              exception from competition is justified and formally granted.
            </p>
            <p>
              For any competitive procurement with an estimated value of $100,000 or higher, the opportunity to submit a
              Proposal is open to all eligible Suppliers. All such opportunities are advertised on this webpage.
            </p>
          </div>
        </div>
      </section>

      {/* Related Policies Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related AFAI Policies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/procurement/policies/procurement-policy"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-yellow-400 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                  AFAI Procurement Policy and Procedures
                </span>
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a
              href="/procurement/policies/travel-policy"
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-yellow-400 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                  AFAI Travel Policy for Non-Staff
                </span>
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Competitive Process Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              The exact process for taking part and submitting a Proposal varies from case to case. The relevant
              information is included in each published Request for Proposals. The competitive process is rigorous and
              designed to determine the best combination of quality and costs. We ensure that all potential suppliers
              are subject to the same conditions and that information received is confidential. In addition, we
              stipulate that our suppliers:
            </p>

            <ul className="space-y-2 list-disc pl-6">
              <li>Adhere to sound environmental practices</li>
              <li>Maintain ethical business practices at all times</li>
              <li>Are not involved in any form of corruption or any fraudulent activities</li>
              <li>Do not engage in any collusive or coercive practices</li>
            </ul>

            <p>
              AFAI seeks to minimize environmental impacts in all its procurement decisions. Suppliers and Proposals are
              evaluated on the basis of both environmental and commercial factors, determined as appropriate for each
              individual purchase, and including: capacity and expertise; whole-life-cost; quality; fit to requirements;
              environmental policy, impact and risk management approach; financial health of the Supplier; previous
              experience and reputation.
            </p>

            <p>
              Purchases are evaluated using a variety of criteria clearly detailed in each Request for Proposals (RFP).
              Only the criteria and their relative importance as stated in the RFP will be used to evaluate Proposals.
            </p>

            <p>For more information, please check our Procurement Policy using the link above.</p>
          </div>
        </div>
      </section>

      {/* Exclusion Criteria Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Exclusion Criteria</h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              Suppliers will be excluded from taking part in a procurement procedure if they or persons having powers of
              representation, decision-making or control over them:
            </p>

            <ol className="space-y-3 list-decimal pl-6">
              <li>
                Have a conflict of interests, real or perceived, that may affect, or may be perceived to affect, them in
                the execution of their responsibilities under the proposed contract
              </li>
              <li>
                Are not registered on the professional or trade register of the State in which they are established
              </li>
              <li>
                Have been convicted of failing to comply with environmental regulatory requirements or other legal
                requirements relating to sustainability and environmental protection
              </li>
              <li>
                Are bankrupt or being wound up, are having their affairs administered by the courts, have entered into
                an arrangement with creditors, have suspended business activities, are the subject of proceedings
                concerning those matters, or are in any analogous situation arising from a similar procedure provided
                for in national legislation or regulations
              </li>
              <li>
                Have been convicted of an offence concerning their professional conduct by a judgment of a competent
                authority which has the force of res judicata
              </li>
              <li>Have been guilty of grave professional misconduct</li>
              <li>
                Are not in compliance with their obligations relating to the payment of social security contributions or
                the payment of taxes in accordance with the legal provisions of the country in which they are
                established or with those of the United States or those of the country where the contract is to be
                performed
              </li>
              <li>
                Have been the subject of a judgment which has the force of res judicata for fraud, corruption,
                involvement in a criminal organization, money laundering or any other illegal activity
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Complaints Procedure Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Complaints Procedure</h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              The contact details and processes for communicating as part of an RFP are detailed in each respective
              Request for Proposals. These must be followed in the first instance. Attempts at communicating with AFAI
              in regard to an ongoing competitive process in any way other than as prescribed in the RFP may lead to the
              disqualification of the Proposal/Bidder.
            </p>
            <p>
              If you have a complaint or concern regarding the propriety of how a competitive process is being or has
              been executed, please contact{" "}
              <a href="mailto:procurement@AmericanFoundationforAI.org" className="text-blue-700 hover:underline">
                procurement@AmericanFoundationforAI.org
              </a>
              . Such complaints or concerns will be treated as confidential and are not considered in breach of the
              above restrictions on communication.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Submit a Proposal?</h2>
          <p className="text-xl mb-8 text-blue-100">
            View our currently open RFPs to find opportunities that match your expertise
          </p>
          <a
            href="/procurement/open-rfps"
            className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            View Open RFPs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
