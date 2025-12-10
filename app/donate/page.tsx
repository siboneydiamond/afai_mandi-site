import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, Heart, Building2, TrendingUp, Mail, Shield, Users } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 text-balance">
              Donate to the American Foundation for Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8">
              Your contribution expands access to AI education, workforce opportunity, small-business empowerment,
              women's economic advancement, and responsible innovation across the United States and Puerto Rico.
            </p>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6">
              Donate Now
              <Heart className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Fuel Opportunity. Strengthen Communities. Expand Access.
            </h2>
            <p className="text-xl text-gray-700 mb-8">Your donation directly supports:</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              "AI education for students, educators, and families",
              "Workforce development & upskilling for higher wages and stronger job security",
              "Small-business AI adoption to increase revenue and strengthen local economies",
              "Women's economic empowerment and career transition pathways",
              "Responsible AI research that protects the public",
              "Community innovation & municipal modernization across underserved regions",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-bold text-center mt-12">
            Every dollar advances equitable access to AI opportunity.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Ways to Give</h2>

            <div className="space-y-8">
              {/* Online Giving */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Online Giving</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      The fastest, most secure way to support AFAI. All contributions are tax-deductible within IRS
                      guidelines.
                    </p>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                      Donate Online
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Monthly Giving Circle */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Monthly Giving Circle</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Join the community of sustaining donors who power long-term impact. Monthly support expands
                      digital access, training programs, and community capacity all year long.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Join the Giving Circle
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Corporate & Foundation */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Corporate & Foundation Partnerships</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Partner with AFAI to strengthen workforce pipelines, expand access to AI skills, and support
                      community innovation. We collaborate with companies, philanthropic foundations, and social-impact
                      investors.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Partner With Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stock, Crypto & DAF */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Stock, Crypto & Donor-Advised Funds (DAF)</h3>
                    <p className="text-lg text-gray-700 mb-4">AFAI accepts contributions in:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Appreciated stock
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Cryptocurrency
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Donor-advised funds
                      </li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      We provide transparent documentation for all gift types and can coordinate with your financial
                      advisor.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Give Stock or Crypto
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Check Donations */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Check Donations</h3>
                    <p className="text-lg text-gray-700 mb-4">Make checks payable to:</p>
                    <div className="bg-indigo-50 rounded-xl p-6 mb-4">
                      <p className="font-bold text-lg mb-2">American Foundation for Artificial Intelligence</p>
                      <p className="text-gray-700 mb-1">Mail to:</p>
                      <p className="text-gray-700">1752 Calle Carolina</p>
                      <p className="text-gray-700">San Juan, PR 00912</p>
                    </div>
                    <p className="text-gray-700">Please include any gift designation in the memo line.</p>
                  </div>
                </div>
              </div>

              {/* Legacy & Planned Giving */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Legacy & Planned Giving</h3>
                    <p className="text-lg text-gray-700 mb-4">Create lasting impact through:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        Bequests
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        Beneficiary designations
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        Estate gifts
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        Charitable trusts
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                      Planned gifts strengthen communities for decades to come.
                    </p>
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                      Learn About Legacy Giving
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-4xl font-bold">Transparency & Accountability</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-4 mb-8">
                {[
                  "AFAI is a 501(c)(3) public charity",
                  "EIN: 66-1116357",
                  "All donations are tax-deductible to the extent permitted by law",
                  "Annual reports, financial summaries, and IRS filings are publicly available",
                  "All grant funds and donations are used exclusively for charitable and educational purposes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed bg-yellow-50 rounded-xl p-6">
                Thanks to innovation sponsors and private partners, AFAI is able to allocate 100% of your public
                donation to programs that expand access and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your Support Builds a More Inclusive, Technologically Ready America
            </h2>
            <p className="text-xl text-gray-300 mb-8">Every gift moves us closer to a future where:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                "Students succeed",
                "Workers advance",
                "Small businesses grow",
                "Women lead",
                "Communities innovate",
                "Opportunity belongs to everyone",
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4">
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6">
              Donate Now
              <Heart className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
