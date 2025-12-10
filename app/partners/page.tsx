import Link from "next/link"
import { BookOpen, Users, Building2, Lightbulb, Heart, LucideBanknote as GraduateCapBanknote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Us</h1>
          <p className="text-xl text-blue-100 max-w-4xl leading-relaxed">
            AFAI collaborates with institutions committed to expanding equitable access to AI skills and opportunity.
          </p>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">We welcome partnerships with:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Schools & Districts",
              "Universities",
              "Workforce Boards & Employers",
              "Municipal Governments",
              "Small-Business Networks",
              "Women's Organizations",
              "Nonprofits & Community Organizations",
              "Foundations & Philanthropic Donors",
              "Corporate CSR & Talent Development Programs",
              "Research Institutions",
            ].map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <p className="text-gray-900 font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Types of Partnerships</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <BookOpen className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Education Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI literacy for students, curriculum integration, educator professional development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Workforce Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upskilling cohorts, micro-credentials, worker mobility initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <Building2 className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Municipal & Government Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Workflow modernization, emergency communication, community digital equity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    Small Business & Entrepreneurship Partnerships
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Modernization workshops, AI tools support, local business acceleration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Corporate & CSR Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Co-branded programs, employee volunteerism, workforce initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <GraduateCapBanknote className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">University & Research Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Joint studies, ethical AI frameworks, public-benefit research.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Philanthropic Partnerships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Multi-year giving, named programs, community innovation funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Partner?</h2>
          <p className="text-lg text-gray-800 mb-8">
            Join us in expanding equitable access to AI education and opportunity.
          </p>
          <Link href="/contact/partnership-inquiry">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
              Submit Partnership Inquiry →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
