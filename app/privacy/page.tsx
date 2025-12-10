import Link from "next/link"
import { FileText, Shield, Lock } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-300">Updated January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-slate-700 mb-8">
              The American Foundation for Artificial Intelligence (AFAI) strongly believes in protecting the integrity
              and privacy of personal information gathered from our supporters and others through all our communication
              channels and from visitors to our website. The protection of your privacy is of great importance to us.
            </p>

            <p>
              We have created this privacy policy to communicate our practices regarding the collection and
              dissemination of personal information that is provided to us and that can be linked to a specific
              individual, such as a name, postal address, telephone number(s), email address, among other information
              (hereinafter "Personal Information"), as well as certain non-personally identifiable information collected
              when you visit many of our web pages such as the type of browser you are using (e.g., Chrome or Firefox),
              the type of operating system you are using (e.g., Windows or Mac OS), the domain name of your internet
              service provider (e.g., AT&T or Verizon), aggregate data about the number of visits to the site and/or
              aggregate data about the pages visited (hereinafter "Aggregate Data").
            </p>

            <p>
              This policy also applies when you use social media that overlaps AFAI's social media and/or website, as
              well as to personal information we collect offline. This policy does not apply to information or data AFAI
              purchases from other sources. AFAI uses its best efforts to not share information it collects from those
              persons it provides services to (commonly referred to as "program participants"). See our supplemental{" "}
              <Link href="/privacy/donor-privacy" className="text-blue-600 hover:text-blue-700">
                donor privacy policy
              </Link>{" "}
              for how we use the information we collect through social media fundraising efforts, including but not
              limited to mobile text to give programs and which applies to donors in tandem with this Privacy Policy.
            </p>

            <p>
              This policy will be updated periodically, so please be sure to reread it from time to time. The most
              recent date the privacy policy was updated is provided at the top of the page. By submitting your personal
              information to us, you are agreeing that AFAI may use the information in accordance with this privacy
              policy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              AFAI's Collection and Use of Personal Information and Your Privacy
            </h2>

            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>
                  <a href="#infocollect" className="text-blue-600 hover:text-blue-700">
                    Information We Collect
                  </a>
                </li>
                <li>
                  <a href="#howuse" className="text-blue-600 hover:text-blue-700">
                    How We Use Your Information
                  </a>
                </li>
                <li>
                  <a href="#howshare" className="text-blue-600 hover:text-blue-700">
                    How We Share Your Information
                  </a>
                </li>
                <li>
                  <a href="#howstore" className="text-blue-600 hover:text-blue-700">
                    How We Store and Protect your Information
                  </a>
                </li>
                <li>
                  <a href="#rights" className="text-blue-600 hover:text-blue-700">
                    Your Rights and Choice Regarding Your Data
                  </a>
                </li>
                <li>
                  <a href="#tracking" className="text-blue-600 hover:text-blue-700">
                    Third Party Links and Behavioral Tracking
                  </a>
                </li>
              </ol>
            </div>

            <h3 id="infocollect" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              1. INFORMATION WE COLLECT
            </h3>

            <h4 className="text-xl font-semibold text-slate-800 mt-6 mb-3">A. Information You Provide to Us</h4>

            <p>
              When you provide information to AFAI such as your name, telephone number, address, email address, or other
              personal information, we collect that information.
            </p>

            <p>
              When you contact us or we contact you, we collect any information that you provide, including the contents
              of the messages or attachments you send us.
            </p>

            <h4 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
              B. Information We Collect When You Use the Website
            </h4>

            <p>
              AFAI also collects some anonymous information each time you visit the Website so we can improve the
              overall quality of your online experience. We collect your IP address, referral data, browser, and
              platform type. You do not have to register with AFAI before we can collect this anonymous information.
            </p>

            <h3 id="howuse" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              2. HOW WE USE YOUR INFORMATION
            </h3>

            <p>We use your personal information to:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Communicate with you about our programs and fundraising</li>
              <li>Educate you about our AI education and workforce development activities</li>
              <li>Respond to legal proceedings and obligations</li>
            </ul>

            <h3 id="howshare" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              3. HOW WE SHARE YOUR INFORMATION
            </h3>

            <p>
              We may share your Personal Information with certain nonprofit or commercial organizations so that they may
              contact you about products, services, or offers that we think would be of interest to you.
            </p>

            <p>
              AFAI uses third-party vendors to provide services on this website and in offline business operations. The
              information that you submit on this site may be provided to those vendors on a confidential basis so that
              those vendors can provide services (such as maintaining our database, sending email messages, facilitating
              fundraising activities, or processing credit card transactions) on our behalf.
            </p>

            <h3 id="howstore" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              4. HOW WE STORE AND PROTECT YOUR INFORMATION
            </h3>

            <p>
              We take appropriate security measures to protect against unauthorized access to or unauthorized
              alteration, disclosure, or destruction of data. We restrict access to your personally identifying
              information to employees who need to know that information to operate, develop or improve our services.
            </p>

            <h3 id="rights" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              5. YOUR RIGHTS AND CHOICE REGARDING YOUR DATA
            </h3>

            <p>
              You have the right to review, correct, delete, and obtain a copy of your personal data. You also have the
              right to opt out of certain processing activities. To exercise these rights, please contact us using the
              information provided at the end of this policy.
            </p>

            <h3 id="tracking" className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              6. THIRD PARTY LINKS AND BEHAVIORAL TRACKING
            </h3>

            <p>
              We may include links or offers to third-party products or services on our website. These third-party sites
              have separate and independent privacy policies. We are not responsible or liable for the content and
              activities of these third-party sites.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Cookie Policy</h2>

            <p>
              We use cookies, small files that are sent to your Web browser and stored on your computer's hard drive, to
              improve our site's operation. The majority of browsers accept cookies, but your browser should also give
              you options for preventing, accepting, or receiving notice of new cookies.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Contact AFAI</h2>

            <div className="bg-blue-50 rounded-lg p-8 mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                If you wish to have your data deleted, opt-out of receiving future communications, or exercise any other
                privacy right:
              </h3>

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

              <p className="mt-6 text-sm text-slate-600">
                All deletion and opt-out requests will be honored, but please be patient with us as it may take six (6)
                to eight (8) weeks for opt-out changes to be fully implemented.
              </p>
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
                href="/privacy/donor-privacy"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">Donor Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Lock className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
