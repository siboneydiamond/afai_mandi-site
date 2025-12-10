import Link from "next/link"
import { Search, Users, BookOpen, CreditCard, Award, Briefcase, Smartphone, HelpCircle } from "lucide-react"

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section with Search */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Search for your answer below</h1>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">Popular search topics:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                Apply for financial assistance
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                Get course help
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                Login issues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Account Basics */}
            <Link href="#account-basics" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <Users className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                ACCOUNT BASICS
              </h3>
            </Link>

            {/* Courses */}
            <Link href="#courses" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <BookOpen className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                COURSES
              </h3>
            </Link>

            {/* Payments & Refunds */}
            <Link href="#payments" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <CreditCard className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                PAYMENTS & REFUNDS
              </h3>
            </Link>

            {/* Certificates */}
            <Link href="#certificates" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <Award className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                CERTIFICATES
              </h3>
            </Link>

            {/* Programs */}
            <Link href="#programs" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <Briefcase className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                PROGRAMS
              </h3>
            </Link>

            {/* Workforce Training */}
            <Link href="#workforce" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <Users className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                WORKFORCE TRAINING
              </h3>
            </Link>

            {/* Mobile */}
            <Link href="#mobile" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <Smartphone className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                MOBILE
              </h3>
            </Link>

            {/* FAQ */}
            <Link href="#faq" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <HelpCircle className="w-12 h-12 text-gray-700 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-yellow-600 transition-colors">
                FAQ
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Top Articles</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: AFAI Support */}
            <div id="account-basics">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">AFAI Learner Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I apply for Financial Assistance?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What does archived mean?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I confirm my email?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What does it cost to take a course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is self-paced or instructor-paced? Which is my course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (20+)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Account Basics */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Account Basics</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I confirm my email?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What if I am having login problems or forgot my password?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I link or unlink my AFAI account to a social media account?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What if I did not receive a password reset message?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is AFAI?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (20+)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Certificates */}
            <div id="certificates">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Certificates</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Where can I find my certificate?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What types of certificates does AFAI offer?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is a verified certificate?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Can I receive college credit or credit hours for my course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Where can I find my program certificate?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (15)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Rows */}
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {/* Courses */}
            <div id="courses">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Courses</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What does archived mean?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is self-paced or instructor-paced? Which is my course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I enroll in a course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What does it cost to take a course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I unenroll from a course?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (25+)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Payments & Financial Aid */}
            <div id="payments">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Payments & Financial Aid</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I apply for Financial Assistance?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What payment methods are accepted?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I request a refund?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is AFAI's refund policy?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Can I get a receipt for my purchase?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (18)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs & Pathways */}
            <div id="programs">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Programs & Pathways</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What are AFAI's program offerings?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I enroll in a program?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is the difference between a course and a program?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Can I get college credit for completing a program?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How long does it take to complete a program?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (12)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* More Sections */}
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {/* Workforce Training */}
            <div id="workforce">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Workforce Training</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What workforce training programs does AFAI offer?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How can my employer partner with AFAI?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Are there flexible learning options for working professionals?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Can I get AI skills training for my specific industry?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I access the Talent Hub?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (16)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technical Support */}
            <div id="mobile">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Technical Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Is there a mobile app for AFAI Academy?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What browsers are supported?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    I'm having video playback issues. What should I do?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How do I access course materials offline?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Who do I contact for technical support?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (14)
                  </Link>
                </li>
              </ul>
            </div>

            {/* General FAQ */}
            <div id="faq">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">General FAQ</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    What is AFAI?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Who can benefit from AFAI programs?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Are AFAI courses really free?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    How is AFAI different from other learning platforms?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Can nonprofits and schools partner with AFAI?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View All (22)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Still need help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to assist you with any questions or issues.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Contact Support
          </Link>

          <div className="mt-6">
            <Link href="/feedback" className="text-blue-600 hover:text-blue-800 font-medium">
              Submit Feedback or Report a Concern →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
