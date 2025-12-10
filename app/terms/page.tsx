import Link from "next/link"
import { FileCheck, Shield, AlertCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileCheck className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-xl text-slate-300">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-slate-700 mb-8">
              Welcome to the American Foundation for Artificial Intelligence website, operated by AFAI and located at
              AmericanFoundationforAI.org (the "Site"). The following terms and conditions ("Terms") govern your use of
              this Site. By accessing, viewing, or using the content, material, or services available on or through this
              Site, you indicate that you have read and understand these Terms, that you agree to them and intend to be
              legally bound by them. If you do not agree to these Terms, or if you are under 13 years of age, you are
              not granted permission to use this Site and must exit immediately.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. Informational Purposes Only</h2>

            <p>
              The information on this Site is for informational purposes only. Without limiting anything else in these
              Terms or otherwise, AFAI is not responsible for any errors or omissions in the Site or Site Materials, as
              defined in Section 3 of these Terms and Conditions.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. Registration</h2>

            <p>
              In order to access certain content, services, products or benefits on the Site, you may be asked to
              register and create an account. As part of the registration process, you must click to agree to these
              Terms, and may then be asked to select a user name and password. You are fully responsible for your
              account, including use of the account by any third party, and maintaining the confidentiality of your
              password. You may terminate your account at any time by contacting us by email at
              info@AmericanFoundationforAI.org.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Proprietary Rights</h2>

            <p>
              As between you and AFAI, AFAI owns or licenses all data, content, graphics, forms, artwork, images,
              photographs, functional components and any software concepts and documentation and other material on, in
              or made available through the Site ("Site Materials"), as well as the selection, coordination,
              arrangement, and organization and enhancement of the Site Materials. All Site Materials are protected
              pursuant to copyright, trademark, patent and other applicable laws.
            </p>

            <p>
              All names, trademarks, service marks, certification marks, symbols, slogans or logos appearing on the Site
              are proprietary to AFAI or its affiliates, licensors, or suppliers. Use or misuse of these trademarks is
              expressly prohibited and may violate federal and state trademark law.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">4. Unauthorized Activities</h2>

            <p>You agree that you will not use the Site for:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any illegal or unauthorized purposes that violate any local, national, or international laws</li>
              <li>
                Modifying, copying, distributing, displaying, performing, reproducing, publishing, licensing, creating
                derivative works from, transferring, selling any of the Site Materials
              </li>
              <li>
                Attempting to gain unauthorized access to AFAI's computer system or engaging in any activity that
                interferes with the performance of the Site
              </li>
              <li>
                Removing, circumventing, disabling, damaging or otherwise interfering in any way with any
                security-related features of the Site
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">5. Materials Submitted to the Site</h2>

            <p>
              Certain features of the Site may allow you to contribute comments, feedback, information, content, and
              other materials ("User Content"). By posting User Content, you grant AFAI a worldwide, perpetual,
              irrevocable, transferable, license to access, use, distribute, reproduce, display, modify, create
              derivative works based upon, and sublicense, the User Content, all without any compensation to you
              whatsoever.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">6. Third Party Web Sites and Content</h2>

            <p>
              The Site may contain links to other Internet Web sites for the convenience of users in locating
              information, products, or services that may be of interest. AFAI does not recommend and expressly
              disclaims any responsibility for the content, the accuracy of the information, or quality of products or
              services provided by or advertised on third party sites.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">7. Privacy Policy</h2>

            <p>
              Any Personal Information that you provide to AFAI on the Site is subject to our Privacy Policy. For more
              information,{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                click here to view the Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">8. Disclaimer</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <p className="font-semibold text-slate-900 mb-2">IMPORTANT DISCLAIMER:</p>
              <p className="text-slate-700">
                THE SITE, THE SITE MATERIALS, USER CONTENT, SERVICES, PRODUCTS, INFORMATION AND OTHER MATERIALS ON, IN
                AND MADE AVAILABLE THROUGH THE SITE ARE MADE AVAILABLE "AS IS" AND "WITH ALL FAULTS." USE OF THE SITE IS
                ENTIRELY AT YOUR OWN RISK.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">9. Limitation of Liability</h2>

            <p>
              AFAI AND ITS LICENSORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES OF ANY KIND WHATSOEVER, INCLUDING LOST REVENUES OR LOST PROFITS, WHICH MAY
              OR DOES RESULT FROM THE USE OF, ACCESS TO, OR INABILITY TO USE THE SITE.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">10. Indemnification</h2>

            <p>
              You shall indemnify AFAI and its directors, officers, employees, agents, contractors and licensors against
              all claims, actions, suits, and other proceedings arising out of or incurred in connection with the Site
              and your use of the Site.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">11. Internet Security</h2>

            <p>
              AFAI uses reasonable efforts to ensure that the Site is generally available. However, there will be
              occasions when access to the Site will be interrupted or unavailable. You agree that AFAI shall not be
              liable to you for any modification, suspension or discontinuance of the Site.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">12. Complaint Procedures</h2>

            <p>
              If you believe that any content or postings on this Site violates your intellectual property or other
              rights, please notify AFAI by email at info@AmericanFoundationforAI.org with a comprehensive detailed
              message setting forth:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name and the name of your company, if any</li>
              <li>Your contact information, including your email address</li>
              <li>The nature and substance of your complaint</li>
              <li>A statement that the information is accurate</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">13. Changes to these Terms; Termination</h2>

            <p>
              AFAI reserves the right at any time to modify, alter or update these Terms. Your use of the Site following
              any changes means that you agree to follow and be bound by the terms as changed.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">14. Governing Law and Jurisdiction</h2>

            <p>
              These Terms will be governed by and construed in accordance with the laws of the Commonwealth of Puerto
              Rico and the United States, without reference to its conflict of law rules. By accessing, viewing, or
              using the services on the Site, you consent and agree to the exclusive jurisdiction of the federal and
              state courts located in San Juan, Puerto Rico.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Contact Information</h2>

            <div className="bg-blue-50 rounded-lg p-8 mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Questions about these terms?</h3>

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
                href="/privacy/donor-privacy"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">Donor Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
