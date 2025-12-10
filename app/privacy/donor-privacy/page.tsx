import Link from "next/link"
import { Heart, Shield, FileText } from "lucide-react"

export default function DonorPrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donor Privacy Policy</h1>
            <p className="text-xl text-slate-300">Updated January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-slate-700 mb-8">
              As a donor submitting personally identifying information ("Personal Information") to us or any of our
              staff, you consent to the terms and conditions of the policy and to our processing and use of Personal
              Information for the purposes stated below.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Personal Information</h2>

            <p>
              "Personal Information" is information that identifies you personally, such as your name, address,
              telephone number, and email address. We collect and store the personally identifiable information that you
              have provided us via one of the email addresses identified on our website or when you otherwise contact us
              in person, by phone or email, with a question.
            </p>

            <p>
              We collect your name, email address and other contact information if you register for an event or training
              program. We also collect your name, email address, telephone number and payment information when you make
              a contribution, either on our website, at a special event, over the phone or by mailing in a check.
            </p>

            <p>
              The above list provides a sample of personal information that may be collected by AFAI. From time to time,
              we may collect personal information from you in ways not described above.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Use and Disclosure of Personal Information</h2>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  We only rent or exchange lists we maintain that may include your Personal Information, collected on
                  the website or through any other activities, with other third parties we believe engage in activities
                  that are not inconsistent with the mission and core beliefs of AFAI. You may opt out of having your
                  Personal Information shared by us by following the process described in our{" "}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                    general privacy policy
                  </Link>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>We will not send you mailings on behalf of other organizations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  We will collect payment information, billing address and other information necessary to process a
                  donation or event registration.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  We will use your information to comply with the law or in the good faith belief that such action is
                  necessary to conform to the requirements of law or comply with legal process served on us.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  We will use the personal information to protect against potential fraud. We may verify with third
                  parties the information collected in the course of processing a gift, event registration or other
                  donation.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  You have the right to review information that we have collected about you. To review that information
                  please contact us in writing.
                </span>
              </li>
            </ul>

            <p className="mt-8">
              Except as described in this Privacy Policy or at the time we request the information, we do not otherwise
              disclose your personal information to any third parties.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Changes to the Privacy Policy</h2>

            <p>
              We reserve the right to change this Privacy Policy from time to time. When we do, we will note the last
              update at the top of this Privacy Policy.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <p className="text-slate-800">
                You can learn more by reading{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                  our general Privacy Policy
                </Link>
                .
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Contact Information</h2>

            <div className="bg-blue-50 rounded-lg p-8 mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Questions about donor privacy?</h3>

              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold">Postal Mail:</p>
                  <p>American Foundation for Artificial Intelligence</p>
                  <p>1752 Calle Carolina</p>
                  <p>San Juan, PR 00912</p>
                </div>

                <div>
                  <p className="font-semibold">Email:</p>
                  <p>info@AmericanFoundationforAI.org</p>
                </div>

                <div>
                  <p className="font-semibold">Telephone:</p>
                  <p>(787) 555-AFAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Policies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/privacy"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
