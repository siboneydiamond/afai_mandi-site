import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-4xl text-pretty leading-relaxed">
            We shift power dynamics across tech and academia to help Puerto Rican and Latinx thinkers, creators, and
            builders maximize the multifaceted future of artificial intelligence.
          </p>
          <p className="text-lg text-blue-100 max-w-4xl mt-4 text-pretty leading-relaxed">
            We're here to support partners, funders, educators, workforce agencies, research institutions, and community
            organizations advancing equitable access to AI education, workforce mobility, and responsible innovation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Telephone */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Phone className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Telephone</h3>
              <p className="text-gray-600 mb-2">San Juan Office:</p>
              <a href="tel:7876060064" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                787-606-0064
              </a>
            </div>

            {/* Mailing Address */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mailing Address</h3>
              <address className="text-gray-600 not-italic leading-relaxed">
                American Foundation for Artificial Intelligence
                <br />
                1752 Calle Carolina
                <br />
                San Juan, Puerto Rico 00912
              </address>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Administrative Office (Mainland U.S.)</p>
                <p className="text-gray-600">Washington, D.C.</p>
                <p className="text-sm text-gray-500 mt-1">For policy and continental partnerships</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-12 rounded-2xl mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Stay Connected</h3>
            <p className="text-gray-800 mb-8 text-lg">
              Follow AFAI for updates, insights, impact stories, and find out how to take action.
            </p>
            <form className="grid md:grid-cols-2 gap-4 mb-6">
              <Input type="text" placeholder="First Name*" required className="bg-white" />
              <Input type="text" placeholder="Last Name*" required className="bg-white" />
              <Input type="email" placeholder="Email*" required className="bg-white" />
              <Input type="text" placeholder="Postal Code*" required className="bg-white" />
            </form>
            <div className="flex items-start gap-3 mb-6">
              <input type="checkbox" id="privacy" required className="mt-1" />
              <label htmlFor="privacy" className="text-sm text-gray-800">
                I agree to AFAI{" "}
                <Link href="/privacy" className="underline hover:text-gray-900">
                  Privacy Policy
                </Link>{" "}
                and consent to receiving email communications
              </label>
            </div>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3">Subscribe</Button>

            <div className="flex gap-6 mt-8 pt-8 border-t border-yellow-600">
              <Link href="#" className="text-gray-900 hover:text-gray-700 flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                <span className="font-medium">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                <span className="font-medium">Twitter/X</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Have a question? Contact the AFAI team.</h2>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-gray-700 leading-relaxed mb-3">
              We may have answers to your questions on our Frequently Asked Questions page. If not, please contact us
              and a team member will get back to you. Our team responds within 1–2 business days.
            </p>
            <Link href="/help" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              View our FAQs →
            </Link>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Full Name*" required />
              <Input type="email" placeholder="Email Address*" required />
            </div>
            <Input type="text" placeholder="Organization (optional)" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic of Inquiry</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Education & Student Programs</option>
                <option>Workforce & Employer Partnerships</option>
                <option>Small Business Support</option>
                <option>Women's Initiatives</option>
                <option>Government Partnerships</option>
                <option>Research & Responsible AI</option>
                <option>Philanthropy & Donations</option>
                <option>Press & Media</option>
                <option>Other</option>
              </select>
            </div>
            <Textarea placeholder="Message*" required rows={6} />
            <p className="text-sm text-gray-500">
              Your information is protected and will not be shared outside of AFAI. See our{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Statement
              </Link>{" "}
              for details.
            </p>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3">Send Message →</Button>
          </form>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Department Contacts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* General Inquiries */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">General Inquiries</h3>
              <p className="text-sm text-gray-600 mb-4">For general information about AFAI programs and activities</p>
              <a
                href="mailto:info@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@AmericanFoundationforAI.org</span>
              </a>
            </div>

            {/* Media & Press */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Media & Press</h3>
              <p className="text-sm text-gray-600 mb-4">For interviews, quotes, and media materials</p>
              <a
                href="mailto:press@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">press@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/news" className="text-sm text-blue-600 hover:text-blue-700">
                Visit the Press Room →
              </Link>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Education & Student Programs</h3>
              <p className="text-sm text-gray-600 mb-4">For schools, teachers, and youth organizations</p>
              <a
                href="mailto:education@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">education@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/learn" className="text-sm text-blue-600 hover:text-blue-700">
                Explore educator resources →
              </Link>
            </div>

            {/* Workforce */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Workforce Development</h3>
              <p className="text-sm text-gray-600 mb-4">For employers and workforce boards</p>
              <a
                href="mailto:workforce@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">workforce@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/skills-programs" className="text-sm text-blue-600 hover:text-blue-700">
                Explore Workforce Training →
              </Link>
            </div>

            {/* Small Business */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Small Business Support</h3>
              <p className="text-sm text-gray-600 mb-4">For entrepreneurs and business organizations</p>
              <a
                href="mailto:business@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">business@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/startup-navigator" className="text-sm text-blue-600 hover:text-blue-700">
                Explore Small Business Programs →
              </Link>
            </div>

            {/* Women's Empowerment */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Women's Economic Empowerment</h3>
              <p className="text-sm text-gray-600 mb-4">For women's networks and gender-equity partners</p>
              <a
                href="mailto:women@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">women@AmericanFoundationforAI.org</span>
              </a>
            </div>

            {/* Government */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Government Partnerships</h3>
              <p className="text-sm text-gray-600 mb-4">For municipalities and public agencies</p>
              <a
                href="mailto:gov@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">gov@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/government-partnerships" className="text-sm text-blue-600 hover:text-blue-700">
                Explore Government Partnerships →
              </Link>
            </div>

            {/* Research */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Research & Responsible AI</h3>
              <p className="text-sm text-gray-600 mb-4">For universities and research groups</p>
              <a
                href="mailto:research@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">research@AmericanFoundationforAI.org</span>
              </a>
            </div>

            {/* Philanthropy */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Philanthropy & Major Gifts</h3>
              <p className="text-sm text-gray-600 mb-4">For foundations and corporate partners</p>
              <a
                href="mailto:philanthropy@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">philanthropy@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/donate" className="text-sm text-blue-600 hover:text-blue-700">
                Explore Ways to Give →
              </Link>
            </div>

            {/* Donor Services */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Donor Services</h3>
              <p className="text-sm text-gray-600 mb-4">For tax receipts and compliance documents</p>
              <a
                href="mailto:donors@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">donors@AmericanFoundationforAI.org</span>
              </a>
              <Link href="/public-disclosures" className="text-sm text-blue-600 hover:text-blue-700">
                IRS Determination Letter →
              </Link>
            </div>

            {/* Volunteers */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Volunteers</h3>
              <p className="text-sm text-gray-600 mb-4">For individuals, groups, and corporations</p>
              <a
                href="mailto:Volunteer@AmericanFoundationforAI.org"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Volunteer@AmericanFoundationforAI.org</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/contact/partnership-inquiry"
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Partnership Inquiry</h3>
              <p className="text-gray-600 mb-4">Explore collaboration opportunities with AFAI</p>
              <span className="text-yellow-600 font-semibold">Submit Inquiry →</span>
            </Link>

            <Link href="/contact/request-call" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Request a Call</h3>
              <p className="text-gray-600 mb-4">Schedule a conversation with our team</p>
              <span className="text-yellow-600 font-semibold">Schedule Call →</span>
            </Link>

            <Link
              href="/contact/speaker-request"
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Request a Speaker</h3>
              <p className="text-gray-600 mb-4">Book AFAI experts for your event</p>
              <span className="text-yellow-600 font-semibold">Request Speaker →</span>
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/feedback" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow block">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Submit Feedback or Concern</h3>
              <p className="text-gray-600 mb-4">
                Report concerns, provide program feedback, or submit a formal grievance
              </p>
              <span className="text-yellow-600 font-semibold">Submit Feedback →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
