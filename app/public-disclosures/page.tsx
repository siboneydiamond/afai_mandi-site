import Link from "next/link"
import { FileText, Mail, MapPin, Building2 } from "lucide-react"

export default function PublicDisclosuresPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mx-auto mb-8">
              <FileText className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Public Disclosures & IRS Transparency</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              AFAI is committed to transparency, strong governance, and responsible stewardship of all donated
              resources.
            </p>
          </div>
        </div>
      </section>

      {/* Tax-Exempt Status */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Tax-Exempt Status</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    American Foundation for Artificial Intelligence (AFAI) is a public charity recognized as tax-exempt
                    under section 501(c)(3) of the Internal Revenue Code.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our mission is to expand equitable access to artificial intelligence education, workforce development,
                small business enablement, women's economic empowerment, and responsible AI research, with a focus on
                underserved communities in Puerto Rico and across the United States.
              </p>

              <h3 className="text-2xl font-bold mb-6">Public Document Access</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In accordance with IRS regulations, AFAI will make its IRS Form 1023 (Application for Recognition of
                Exemption) and its annual Form 990 information returns available for public inspection upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Request Documents</h2>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To request copies of our IRS Form 1023 or annual Form 990 filings, please contact:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">American Foundation for Artificial Intelligence</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">1752 Calle Carolina</p>
                    <p className="text-gray-700">San Juan, PR 00912</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <a
                      href="mailto:info@AmericanFoundationforAI.org"
                      className="text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      info@AmericanFoundationforAI.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Note:</span> A reasonable fee may be charged for printing and mailing
                  physical copies, as permitted by IRS rules. Wherever possible, AFAI will provide digital copies at no
                  cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Commitment</h2>
            <p className="text-xl text-gray-900 leading-relaxed font-medium">
              AFAI is committed to transparency, strong governance, and responsible stewardship of all donated
              resources.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Additional Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/about" className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">About AFAI</h3>
                <p className="text-gray-700">Learn more about our mission, vision, values, and governance structure.</p>
              </Link>

              <Link href="/impact" className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">Impact Reports</h3>
                <p className="text-gray-700">View our annual impact reports and program evaluation data.</p>
              </Link>

              <Link href="/donate" className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">Donate</h3>
                <p className="text-gray-700">
                  Support our mission to expand equitable AI access across the United States and Puerto Rico.
                </p>
              </Link>

              <Link href="/contact" className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">Contact Us</h3>
                <p className="text-gray-700">
                  Get in touch with our team for partnerships, questions, or additional information.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
