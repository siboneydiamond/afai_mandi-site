import Link from "next/link"
import { Award, CheckCircle, TrendingUp, Share2, BookOpen } from "lucide-react"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Teal Background */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Benefits of an AFAI verified certificate</h1>
            </div>

            {/* Certificate Mockup */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-2xl transform rotate-2">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600 italic">Verified</p>
                    <p className="text-xs text-gray-600">Certificate</p>
                  </div>
                  <Award className="w-12 h-12 text-yellow-500" />
                </div>

                <p className="text-xs text-gray-600 mb-2">This is to certify that</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Maria Rodriguez</h2>

                <p className="text-sm text-gray-600 mb-2">
                  has successfully completed all courses and received passing grades for a Verified Certificate in
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Skills for the Modern Workforce</h3>

                <p className="text-xs text-gray-500 mb-8">
                  a course offered by AFAI, the American Foundation for Artificial Intelligence
                </p>

                <div className="border-t pt-4 flex justify-between items-end">
                  <div className="text-xs text-gray-500">
                    <p className="font-semibold mb-1">Roberto Valdez</p>
                    <p>Program Director</p>
                    <p>AFAI</p>
                  </div>

                  <div className="text-xs text-gray-500 text-right">
                    <p className="font-semibold">Verified Certificate</p>
                    <p>Issued: January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="mt-12 max-w-3xl">
            <p className="text-lg mb-4">
              Sometimes you want to take a course just for the sheer joy of learning something new.
            </p>
            <p className="text-lg">
              But sometimes, you need to complete a course to qualify for a better job or promotion. If you want to
              enroll in an AFAI course to advance your career, consider a verified certificate.
            </p>
          </div>
        </div>
      </section>

      {/* What is a verified certificate */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is a verified certificate?</h2>
              <p className="text-lg text-gray-700 mb-6">
                A verified certificate from AFAI can provide proof for an employer, school, or other institution that
                you have successfully completed an online AI skills course.
              </p>
              <p className="text-gray-700 mb-6">
                Verified certificates include all the same course material (lectures, readings, and practice
                assignments) included in the free version of the course, as well as:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">A professional AI skills certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Unlimited access to the course material</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Graded assignments and exams</span>
                </li>
              </ul>

              <Link
                href="/programs"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Find a course
              </Link>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-yellow-500" />
                  Share your accomplishments with employers
                </h3>
                <p className="text-gray-700">
                  Impress your employer with a verified certificate that showcases your AI skills. You can share it with
                  others securely through a dedicated link provided by AFAI. A verified certificate is generally
                  preferable if you plan to mention your course on job applications, when seeking a promotion, or on
                  school applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                  Access graded assignments
                </h3>
                <p className="text-gray-700">
                  Upgrading a course to the verified certificate track will give you access to graded assignments so you
                  can work toward a passing score to earn a certificate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-yellow-500" />
                  Motivate yourself
                </h3>
                <p className="text-gray-700">
                  A verified certificate program is a great way to motivate yourself to complete the course and
                  celebrate your success. Sometimes, we all need an extra push to learn something new or advance our
                  careers. Working toward an AI skills certificate keeps you motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-yellow-500">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl text-gray-800 mb-4 italic">
            "AFAI confirmed that the course was indeed practical and job-focused, that it covers real-world AI
            applications, and is graded rigorously. With this credential, my employer approved a promotion and salary
            increase."
          </blockquote>
          <p className="text-gray-600">
            — Maria Rodriguez | Healthcare Administrator | San Juan, Puerto Rico | AI Skills for Healthcare Operations
          </p>
        </div>
      </section>

      {/* Why you should purchase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why you should purchase a verified certificate</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gain access to graded materials</h3>
              <p className="text-gray-700">
                The verified certificate track unlocks access to all course materials, including graded assignments,
                which can help you keep track of your performance and gain useful feedback.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gain unlimited access to course content</h3>
              <p className="text-gray-700">
                You will have unlimited access to this course material as long as it exists on AFAI's platform, so you
                can keep on learning or brush up on what you've learned at any time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Showcase your accomplishment</h3>
              <p className="text-gray-700">
                When you pass your course, you'll receive a certificate verifying your AI skills. You can share your
                certificate with friends, employers, and others through an easy-to-share link we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AFAI */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Why AFAI?</h2>

          <p className="text-lg text-gray-700 mb-6">
            Since its founding, AFAI has connected <strong>thousands of learners</strong> across the United States and
            Puerto Rico with <strong>high-quality AI education</strong>. AFAI was founded with the mission of making AI
            skills accessible to everyone, especially underserved communities. From AI fundamentals and workforce
            applications to small business enablement and women's empowerment, there's an expert-led certificate program
            for <strong>every type of learner</strong>, <strong>schedule</strong>, and <strong>budget</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            AFAI may be the best platform to use for earning a verified AI certificate if you:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                Want practical, job-focused AI skills that can be immediately applied in your workplace.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                Learn best with flexible, accessible training designed for working professionals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                Want to begin or advance your career in AI-enabled roles across multiple industries.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                Value community-focused, equitable access to AI education and workforce development.
              </span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <blockquote className="text-lg text-gray-800 mb-3 italic">
              "AFAI courses are a badge of honor. I can confidently tell employers that I have taken these courses and
              gained real AI skills — mentioning that alone opens doors!"
            </blockquote>
            <p className="text-gray-600">
              — Carlos Mendez | Small Business Owner | Ponce, Puerto Rico | AI Marketing Accelerator
            </p>
          </div>
        </div>
      </section>

      {/* Find a course CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find a course</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our current program offerings and start your journey toward earning a verified certificate.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Browse all courses
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Frequently asked questions about verified certificates</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">What is a verified certificate?</h3>
              <p className="text-gray-700 mb-3">
                Verified certificates are certificates of completion with fees that vary by course. Many learners use
                verified certificates to bolster job and school applications.
              </p>
              <p className="text-gray-700">
                Verified certificates are available for many AFAI courses. The AFAI course catalog lists all the courses
                that offer verified certificates.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Are AFAI certificates recognized?</h3>
              <p className="text-gray-700">
                Yes. Verified certificates are official documents that show your peers and employer that you gained
                relevant AI skills through the course you completed. AFAI courses are designed in collaboration with
                industry experts and focus on practical, job-ready skills. While generally recognized as valid proof of
                specific AI competencies, certificates alone may not be enough to qualify you for your desired career.
                Employers may require additional qualifications, such as a degree or relevant work experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Should I put AFAI courses on my resume?</h3>
              <p className="text-gray-700">
                Yes! AFAI courses can bolster your resume — especially when you pay for a verified certificate, which is
                an official document that showcases your mastery of AI skills. You should always adjust your resume to
                ensure its contents are as relevant as possible to the job you're applying for.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                How do I earn a certificate after upgrading to the verified track?
              </h3>
              <p className="text-gray-700">
                After purchasing the verified track, you will be able to complete the graded assignments within the
                course. To receive a certificate, you will need a passing total score before the course end date. Find
                your course's minimum passing score and your total score on the progress tab within the course.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">What types of certificates does AFAI offer?</h3>
              <p className="text-gray-700 mb-3">AFAI offers two types of certificates:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Course certificates, which are available for a fee that varies by course</li>
                <li>
                  Program certificates, which are available when you successfully complete a series of courses that make
                  up a program
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Can I get a refund if I change my mind?</h3>
              <p className="text-gray-700">
                Yes, you can request a refund up to two weeks after the course start date. Please reach out to
                info@AmericanFoundationforAI.org to ask for a refund.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Always free to audit */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">AFAI courses are always free to audit</h2>
          <p className="text-lg text-gray-700 mb-8">
            As always, you can still enroll to audit a course for free and access the learning materials.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Browse all courses
          </Link>
        </div>
      </section>
    </div>
  )
}
