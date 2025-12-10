import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-2xl mb-4">AFAI</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advancing Latino innovators to build, govern, and lead emerging AI technologies through education,
              research, and equitable access—driving inclusive digital growth for Puerto Rico and the United States by
              expanding access to AI education, workforce development, and economic opportunity.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Learning Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Learning</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/learn" className="hover:text-yellow-400 transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/learn/business-administration" className="hover:text-yellow-400 transition-colors">
                  Business Administration
                </Link>
              </li>
              <li>
                <Link href="/learn/business-communication" className="hover:text-yellow-400 transition-colors">
                  Business Communication
                </Link>
              </li>
              <li>
                <Link href="/learn/computer-programming" className="hover:text-yellow-400 transition-colors">
                  Computer Programming
                </Link>
              </li>
              <li>
                <Link href="/learn/economics" className="hover:text-yellow-400 transition-colors">
                  Economics
                </Link>
              </li>
              <li>
                <Link href="/learn/design" className="hover:text-yellow-400 transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/learn/law" className="hover:text-yellow-400 transition-colors">
                  Law
                </Link>
              </li>
              <li>
                <Link href="/learn/math" className="hover:text-yellow-400 transition-colors">
                  Math
                </Link>
              </li>
              <li>
                <Link href="/learn/social-science" className="hover:text-yellow-400 transition-colors">
                  Social Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/certificates" className="hover:text-yellow-400 transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-yellow-400 transition-colors">
                  Campus Solutions
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-yellow-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/puerto-rico" className="hover:text-yellow-400 transition-colors">
                  Puerto Rico Blueprint
                </Link>
              </li>
              <li>
                <Link href="/government-partnerships" className="hover:text-yellow-400 transition-colors">
                  Government Partnerships
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-yellow-400 transition-colors">
                  Submit Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Organization</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-yellow-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-yellow-400 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/latinos-in-ai" className="hover:text-yellow-400 transition-colors">
                  Latinos in AI
                </Link>
              </li>
              <li>
                <Link href="/apply-for-funding" className="hover:text-yellow-400 transition-colors">
                  Apply for Funding
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-yellow-400 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/public-disclosures" className="hover:text-yellow-400 transition-colors">
                  Public Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h4 className="text-white font-bold mb-6 text-center">Our Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
              <h5 className="text-white font-semibold mb-2">San Juan, Puerto Rico</h5>
              <p className="text-sm text-gray-400">1752 Calle Carolina</p>
              <p className="text-sm text-gray-400">San Juan, PR 00912</p>
            </div>
            <div className="text-center">
              <Phone className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
              <h5 className="text-white font-semibold mb-2">Phone</h5>
              <p className="text-sm text-gray-400">+1 (787) 555-0100</p>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
              <h5 className="text-white font-semibold mb-2">Email</h5>
              <p className="text-sm text-gray-400">info@AmericanFoundationforAI.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} American Foundation for Artificial Intelligence. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <p className="text-gray-400">501(c)(3) EIN: 66-1116357</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
