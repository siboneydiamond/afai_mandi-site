import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function ApplyForFundingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=400&width=1920&query=diverse+students+learning+AI+technology+in+classroom)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-yellow-400 text-slate-900 font-semibold text-sm rounded-full mb-4">
            APPLY FOR FUNDING
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Partner with AFAI</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Partner with AFAI to Expand AI Education and Workforce Opportunity
          </h2>

          <div className="border-l-4 border-yellow-400 pl-6 mb-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              AFAI supports nonprofit organizations, educational institutions, community groups, and Indigenous
              communities to expand access to AI education, workforce mobility, and responsible innovation. We do this
              by providing funding and other support to create sustainable AI training programs, upskilling initiatives,
              and community-centered technology education that benefits students, workers, small businesses, and
              underserved populations. Since our founding, we have supported organizations across Puerto Rico and the
              mainland United States toward the creation and expansion of AI education programs.{" "}
              <strong>
                AFAI always welcomes new applications for AI education and workforce development funding, with the
                following criteria and guidance designed to help streamline the process.
              </strong>
            </p>
          </div>
        </div>

        {/* Three Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Types of Awards */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Types of Awards"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Types of Awards</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Broadly speaking, AFAI offers two types of funding support grants: Planning Awards and Program
                Implementation Awards.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="#types">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Selection Criteria */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Selection Criteria"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">AFAI Project Selection Criteria</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Before starting the application process, please review the required criteria to ensure your organization
                and/or project qualify for selection.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="#criteria">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Steps for Applying */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Steps for Applying"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Steps for Applying for AFAI Support</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Our application process is collaborative, and our aim is to support the creation of AI education
                programs that will serve communities sustainably.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="#steps">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Types of Awards Section */}
        <div id="types" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Types of Awards</h2>

          <p className="text-lg text-slate-700 mb-8">
            Broadly speaking, AFAI offers two types of funding support grants: Planning Awards and Program
            Implementation Awards.
          </p>

          <div className="space-y-8">
            {/* Planning Awards */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">— Planning Awards</h3>
              <p className="text-slate-700 leading-relaxed">
                AFAI provides Planning Awards to assess the potential for creating or expanding AI education and
                workforce development programs. These awards are intended to address specific information gaps in
                program design, as precursors to applying for a Program Implementation Award. For instance, Planning
                Awards can support developing curriculum frameworks, conducting community needs assessments, or piloting
                small-scale training modules. The average size of Planning Awards is <strong>$15,000</strong>; in
                exceptional situations, amounts greater than $30,000 may be considered.
              </p>
            </div>

            {/* Program Implementation Awards */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">— Program Implementation Awards</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                AFAI's primary awards support the creation and expansion of AI education programs, workforce training
                initiatives, and community technology centers. The goal is to empower organizations to facilitate new,
                lasting, and sustainable AI education programs that are in line with community needs and priorities.
                There is no set maximum grant amount for these Awards, with applications assessed and awarded on an
                individual basis.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="font-semibold text-slate-900 mb-2">
                  Application Deadlines for Program Implementation Awards of $150,000 and above are:
                </p>
                <p className="text-lg font-bold text-slate-900">February 15 • June 15 • October 15</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8">
            <p className="text-slate-700 font-medium">
              <strong>Please note:</strong> You never need to pay a consultant or intermediary to apply for AFAI
              funding. We only review applications submitted directly by eligible organizations, and we will work with
              you to refine your proposal if it aligns with our mission and priorities.
            </p>
          </div>

          <div className="mt-6 p-6 bg-slate-50 rounded-lg">
            <p className="text-slate-700">
              We recommend submitting a concept note four months in advance of these deadlines. See{" "}
              <Link href="#steps" className="text-blue-600 hover:underline font-medium">
                Steps for Applying for AFAI Support
              </Link>{" "}
              below for further detail.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="#promo-grid">Back to Top</Link>
            </Button>
          </div>
        </div>

        {/* Project Selection Criteria Section */}
        <div id="criteria" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">AFAI Project Selection Criteria</h2>

          {/* Required Criteria */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wide">
              Required Criteria for All Projects:
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold mb-2">
                    1. The primary objective must be the creation or expansion of AI education, workforce training, or
                    community technology programs.
                  </p>
                  <p className="text-slate-700 ml-6">
                    1.1 The proposed program must serve populations with limited current access to AI education and
                    technology training.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold mb-2">2. The proposed program serves to:</p>
                  <p className="text-slate-700 ml-6 italic mb-1">
                    2.1 Provide AI literacy and foundational technology skills to underserved students, workers, or
                    community members; <strong>AND/OR</strong>
                  </p>
                  <p className="text-slate-700 ml-6 italic mb-1">
                    2.2 Support workforce upskilling and career mobility in AI-related fields; <strong>AND/OR</strong>
                  </p>
                  <p className="text-slate-700 ml-6 italic">
                    2.3 Enable small businesses and entrepreneurs to adopt AI tools and modernize operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    3. The Project Implementer must be a legally registered nonprofit organization, educational
                    institution, or community organization authorized to conduct work in the country or territory of the
                    project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    4. The project demonstrates support from relevant community stakeholders, educational institutions,
                    workforce agencies, and/or local governments, and that relevant community engagement and consent
                    processes have been or will be properly conducted.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    5. The program will address critical barriers to AI education access and workforce opportunity in
                    the target community.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    6. A management system (program plan, advisory committee, and evaluation framework) is, or will be,
                    in place that ensures positive and sustained outcomes for program participants.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    7. Programs will incorporate principles of responsible AI, ethical technology use, and digital
                    equity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Required Criteria */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Additional Required Criteria for Specific Project Types
            </h3>

            <div className="space-y-8">
              {/* Community-Led Programs */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  8. Projects where Indigenous Peoples' and/or Local Communities' Leadership is the Primary Strategy
                </h4>
                <div className="space-y-3 ml-6">
                  <p className="text-slate-700">
                    8.1 Substantial program authority and decision-making will be led by the Indigenous Peoples or Local
                    Communities.
                  </p>
                  <p className="text-slate-700 italic">
                    8.2 Program design, curriculum, and implementation will be guided by community priorities and
                    cultural values; <strong>OR</strong>
                  </p>
                  <p className="text-slate-700 italic">
                    8.3 Programs will be delivered in partnership with community-based organizations with established
                    trust and relationships.
                  </p>
                </div>
              </div>

              {/* Workforce Development Programs */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  9. Projects where Workforce Development is the Primary Strategy
                </h4>
                <div className="space-y-3 ml-6">
                  <p className="text-slate-700">
                    9.1 Training programs address documented workforce skill gaps and employer demand for AI-related
                    competencies.
                  </p>
                  <p className="text-slate-700">
                    9.2 Programs include pathways to employment, career advancement, or entrepreneurship.
                  </p>
                  <p className="text-slate-700 italic">
                    9.3 Training leads to recognized credentials, certificates, or micro-credentials;{" "}
                    <strong>OR</strong>
                  </p>
                  <p className="text-slate-700 italic">
                    9.4 Programs include employer partnerships and job placement support; <strong>OR</strong>
                  </p>
                  <p className="text-slate-700 italic">
                    9.5 Strategic value in building regional AI workforce capacity.
                  </p>
                </div>
              </div>

              {/* Education Programs */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  10. Projects where K-12 or Higher Education is the Primary Strategy
                </h4>
                <div className="space-y-3 ml-6">
                  <p className="text-slate-700">
                    10.1 Programs are integrated into existing educational structures or pathways, including:
                  </p>
                  <p className="text-slate-700 italic ml-6">
                    10.1.1 Curriculum aligned with educational standards and learning outcomes; <strong>OR</strong>
                  </p>
                  <p className="text-slate-700 italic ml-6">
                    10.1.2 Educator professional development to sustain program delivery; <strong>OR</strong>
                  </p>
                  <p className="text-slate-700 italic ml-6">
                    10.1.3 Programs serve Title I schools or under-resourced educational institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preferred Criteria */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Preferred Criteria for All Projects</h3>

            <div className="space-y-4">
              {[
                "Programs are offered in multiple languages, particularly English and Spanish, to serve diverse populations.",
                "The Project Implementer has a solid track record of delivering education or workforce development programs with measurable outcomes.",
                "The project demonstrates a clear strategy for sustainable funding beyond the initial grant period.",
                "The project promotes economic opportunity through employment pathways, entrepreneurship support, or career advancement.",
                "Processes are in place to evaluate program effectiveness, participant outcomes, and community impact.",
                "Program governance is legitimate, inclusive, equitable, and accountable to the communities served.",
                "Local or regional governments, workforce boards, or educational institutions have signaled their support for the program.",
                "Organizations will be supported with capacity-strengthening funds for staff training, technology infrastructure, or program development.",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="#promo-grid">Back to Top</Link>
            </Button>
          </div>
        </div>

        {/* Steps for Applying Section */}
        <div id="steps" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Steps for Applying for AFAI Support</h2>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Our application process is collaborative, and we work with applicants to ensure the necessary stages of
            successful program establishment are covered, including curriculum development, community engagement,
            sustainability planning, and impact measurement. Our aim is to support the creation and expansion of AI
            education programs that serve students, workers, and communities sustainably, with applications expected to
            demonstrate how this will be achieved.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Confirm eligibility to receive AFAI support</h3>
              <div className="space-y-3 ml-6">
                <p className="text-slate-700">
                  1.1 All applicants must be legally registered nonprofit organizations, educational institutions, or
                  community organizations that are authorized to conduct work in the country or territory of the
                  proposed project.
                </p>
                <p className="text-slate-700">
                  1.2 Your project must be in line with our{" "}
                  <Link href="#criteria" className="text-blue-600 hover:underline font-medium">
                    Project Criteria
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Submit a Concept Note</h3>
              <p className="text-slate-700 mb-4">
                You never need to pay a consultant or intermediary to apply for AFAI funding. We only review
                applications submitted directly by eligible organizations, and we will work with you to refine your
                proposal if it aligns with our mission and priorities.
              </p>
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                <Link href="/apply-for-funding/submit-concept-note">Submit a Concept Note</Link>
              </Button>
              <div className="space-y-3 ml-6 mt-6">
                <p className="text-slate-700">
                  2.1 Concept notes are accepted anytime, and reviewed within 1-2 months.
                </p>
                <p className="text-slate-700">
                  2.2 If you are submitting a Concept Note for a Program Implementation Award of over $150,000,{" "}
                  <strong>
                    we recommend submitting your Concept Note for review four months in advance of our application
                    deadlines of February 15 • June 15 • October 15.
                  </strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Submit an Application</h3>
              <p className="text-slate-700 mb-4">
                If your concept note is successful, you will be contacted by an AFAI staff member and invited to submit
                a detailed application via our online portal system. The application stage can involve our providing
                simple guidance through to helping craft the project structure and language in the application, as
                needed.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-900 font-semibold mb-2">
                    Planning Awards; Program Implementation Awards of less than $150,000:
                  </p>
                  <ul className="list-disc ml-6 text-slate-700">
                    <li>These are accepted on a rolling basis and may be funded anytime throughout the year.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold mb-2">
                    Program Implementation Awards of $150,000 and above:
                  </p>
                  <ul className="list-disc ml-6 text-slate-700">
                    <li>
                      February 15 • June 15 • October 15 of each calendar year; approved projects are typically funded
                      about 6 months after each application deadline.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What We Cannot Fund */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mt-8">
            <h4 className="font-bold text-slate-900 mb-4">
              Please note that AFAI support focuses on direct program implementation centered around AI education and
              workforce development. As such, we are unable to fund the following:
            </h4>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Fixed rate overhead costs, although please note that itemized expenditures will be considered.
                </span>
              </li>
              <li className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Long-term academic research without direct educational programming.
                </span>
              </li>
              <li className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">General operating support or unrestricted funding.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8">
            <p className="text-slate-700">
              Please feel free to contact us at{" "}
              <a
                href="mailto:funding@AmericanFoundationforAI.org"
                className="text-blue-600 hover:underline font-medium"
              >
                funding@AmericanFoundationforAI.org
              </a>{" "}
              if you have questions about partnering with us.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="#promo-grid">Back to Top</Link>
            </Button>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-400 p-8 rounded-lg text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            You never need to pay a consultant or intermediary to apply for AFAI funding.
          </h3>
          <p className="text-lg text-slate-700">
            We only review applications submitted directly by eligible organizations, and we will work with you to
            refine your proposal if it aligns with our mission and priorities.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Apply?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
              <Link href="/apply-for-funding/submit-concept-note">Submit Concept Note</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:funding@AmericanFoundationforAI.org">Contact Funding Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
