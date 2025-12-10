import Link from "next/link"
import { Award, Briefcase, Target, Share2, CheckCircle, TrendingUp, FileCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Certificate Preview */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-balance">Benefits of a verified certificate</h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty">
                Sometimes you want to take a course just for the sheer joy of learning something new. But sometimes, you
                need to complete a course to qualify for a better job or promotion. If you want to enroll in an AFAI
                course to advance your career, consider a verified certificate.
              </p>
            </div>

            {/* Certificate Preview */}
            <div className="bg-white rounded-lg shadow-2xl p-8 text-slate-900 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-bl-full"></div>
              <div className="mb-6">
                <span className="text-sm font-semibold text-slate-600 italic">Verified</span>
                <h3 className="text-2xl font-bold">Certificate</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">This is to certify that</p>
              <h2 className="text-3xl font-bold mb-6">Your Name</h2>
              <p className="text-sm text-slate-600 mb-2">
                has successfully completed all courses and received passing grades for a Verified Certificate in
              </p>
              <h3 className="text-xl font-semibold mb-6">AI Skills & Workforce Readiness</h3>
              <p className="text-sm text-slate-600 mb-8">
                A course offered by the American Foundation for Artificial Intelligence
              </p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <span className="text-xs font-semibold">AFAI</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Credential ID</p>
                  <p className="text-xs font-mono">AFAI-2025-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Verified Certificate */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is a verified certificate?</h2>
              <p className="text-lg text-slate-700 mb-6">
                A verified certificate from AFAI can provide proof for an employer, school, or other institution that
                you have successfully completed an AI skills training program.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Verified certificates include all the same course material (lectures, readings, and practice
                assignments) included in the free version of the course, as well as:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">A professional certificate with your name</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Unlimited access to the course material</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Graded assignments and exams</span>
                </li>
              </ul>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">Find a Course</Button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Share your accomplishments with employers</h3>
                <p className="text-slate-700">
                  Impress your employer with a verified certificate that showcases your skills. You can share your
                  verified certificate with others securely through a dedicated link provided by AFAI. A verified
                  certificate is generally preferable if you plan to mention your course on job applications, when
                  seeking a promotion, or on school applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Access graded assignments</h3>
                <p className="text-slate-700">
                  Upgrading a course to the verified certificate track will give you access to graded assignments so you
                  can work toward a passing score to earn a certificate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Motivate yourself</h3>
                <p className="text-slate-700">
                  A verified certificate program is a great way to motivate yourself to complete the course and
                  celebrate your success. Sometimes, we all need an extra push to learn something new or advance our
                  careers. Working toward a certificate keeps you motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build skills and your career</h3>
              <p className="text-slate-600">
                Impress your employer with a verified certificate that documents your learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Challenge yourself</h3>
              <p className="text-slate-600">
                Sometimes we all need that extra push. Working towards a certificate keeps you motivated.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Share it with the world</h3>
              <p className="text-slate-600">
                Share your verified certificate with others securely through a dedicated link that we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Purchase Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why you should earn a verified certificate</h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Gain access to graded materials</h3>
                <p className="text-slate-700">
                  With this track, you will have access to all course materials including graded assignments, which we
                  use to assess your knowledge of the subject area and determine whether you've mastered the material to
                  earn a certificate.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Gain unlimited access to course content</h3>
                <p className="text-slate-700">
                  You will have unlimited access to this course material (as long as it exists on AFAI platforms) to
                  keep on learning, and brush up on what you've learned at any time.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Showcase your accomplishment on your LinkedIn profile or resume
                </h3>
                <p className="text-slate-700">
                  When you pass your course, you'll receive your certificate. You can share your certificate with
                  friends, employers and others through an easy-to-share link we provide, or in certain cases stack it
                  towards a larger credential, such as a Professional Certificate or specialized program.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Help support our mission</h3>
                <p className="text-slate-700">
                  AFAI uses certificate fees to support our mission to provide quality AI education to everyone across
                  the United States and Puerto Rico, and to improve learning through research and community
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-semibold text-slate-900 mb-6 italic text-balance">
              "AFAI confirmed that the course was indeed taught at a professional level, that it provided real-world
              applicable skills. With this certification, my employer recognized the training and I qualified for a
              promotion."
            </p>
            <footer className="text-slate-800 font-medium">
              — Maria Rodriguez, Hospitality Manager | San Juan, Puerto Rico
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Find a Course CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Find a Course</h2>
          <p className="text-xl text-slate-600 mb-8">
            Browse our current offerings and find a verified certificate course to take.
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">
            Browse All Courses
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Common Questions About Verified Certificates</h2>

          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="text-xl font-semibold cursor-pointer">What is a verified certificate?</summary>
              <p className="mt-4 text-slate-700">
                A verified certificate is official documentation from AFAI that proves you successfully completed an AI
                skills training course, passed all graded assignments, and demonstrated mastery of the material.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="text-xl font-semibold cursor-pointer">
                Why should I sign up for a verified certificate?
              </summary>
              <p className="mt-4 text-slate-700">
                Verified certificates provide official proof of your skills to employers, help you advance your career,
                motivate you to complete the course, and can be shared on LinkedIn, resumes, and job applications.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="text-xl font-semibold cursor-pointer">
                How do I earn a certificate after upgrading to the verified track?
              </summary>
              <p className="mt-4 text-slate-700">
                Once you upgrade to the verified track, complete all course materials, pass the graded assignments with
                the required score, and your certificate will be automatically generated and made available for
                download.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="text-xl font-semibold cursor-pointer">
                What types of certificates does AFAI offer?
              </summary>
              <p className="mt-4 text-slate-700">
                AFAI offers verified certificates for AI Skills training, Workforce Readiness programs, Small Business
                AI Adoption courses, and specialized tracks in Women's Economic Empowerment and Responsible AI.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="text-xl font-semibold cursor-pointer">
                Can I get a refund if I change my mind?
              </summary>
              <p className="mt-4 text-slate-700">
                Yes, AFAI offers a refund period within the first 14 days of enrollment in a verified certificate track,
                provided you haven't completed more than 25% of the course material.
              </p>
            </details>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              View All Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Always Free Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">AFAI Courses are Always Free to Audit</h2>
          <p className="text-xl text-slate-300 mb-8">
            As always, you can still enroll to audit a course for free and access all learning materials.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
          >
            Browse All Free Courses
          </Button>
        </div>
      </section>
    </main>
  )
}
