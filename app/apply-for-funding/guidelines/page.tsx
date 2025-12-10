import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FundingGuidelinesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/apply-for-funding" className="hover:text-blue-600">
              Apply for Funding
            </Link>
            <span>/</span>
            <span className="text-slate-900">Funding Guidelines</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Funding Guidelines</h1>
            <p className="text-xl text-blue-100 mb-6">
              Complete guidelines for applying to AFAI funding programs for AI education and workforce development.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="w-5 h-5 mr-2" />
              Download Full Guidelines (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The American Foundation for Artificial Intelligence (AFAI) supports organizations working to expand
                equitable access to AI education, workforce mobility, and responsible innovation in underserved
                communities across Puerto Rico and the United States.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our funding programs provide financial support, technical assistance, and partnership opportunities to
                schools, nonprofits, workforce agencies, municipalities, and community organizations implementing
                transformative AI education and workforce development programs.
              </p>
            </div>

            {/* Award Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Award Types</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Planning Awards</h3>
                    <p className="text-slate-700 mb-4">
                      <strong>Award Range:</strong> $5,000 - $15,000
                      <br />
                      <strong>Duration:</strong> 6-12 months
                    </p>
                    <p className="text-slate-700 mb-4">
                      Planning awards support organizations in developing comprehensive strategies, conducting community
                      needs assessments, building partnerships, and designing new AI education or workforce programs.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">Eligible Activities:</p>
                      <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                        <li>Community needs assessment and stakeholder engagement</li>
                        <li>Curriculum development and program design</li>
                        <li>Partnership development and coalition building</li>
                        <li>Pilot program planning and evaluation framework development</li>
                        <li>Staff training and capacity building</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Program Implementation Awards</h3>
                    <p className="text-slate-700 mb-4">
                      <strong>Award Range:</strong> $25,000 - $100,000
                      <br />
                      <strong>Duration:</strong> 12-24 months
                    </p>
                    <p className="text-slate-700 mb-4">
                      Implementation awards support organizations in launching or scaling proven AI education and
                      workforce development programs that directly serve underserved communities.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">Eligible Activities:</p>
                      <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                        <li>AI literacy education for students (K-12)</li>
                        <li>Workforce upskilling and reskilling programs</li>
                        <li>Small business AI modernization initiatives</li>
                        <li>Women's economic empowerment through AI skills</li>
                        <li>Municipal digital transformation projects</li>
                        <li>Community AI labs and innovation hubs</li>
                        <li>Responsible AI education and policy development</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Eligibility Criteria</h2>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Eligible Organizations
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>501(c)(3) nonprofit organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Public and charter schools, school districts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Colleges, universities, and research institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Workforce development boards and training providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Municipal governments and public agencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Community-based organizations and grassroots groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Business associations and chambers of commerce</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Geographic Focus
                  </h3>
                  <p className="text-slate-700 mb-3">
                    AFAI prioritizes funding for organizations serving underserved communities in:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Puerto Rico</strong> (all regions - Metro, Central, South, East, West)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Mainland United States</strong> with emphasis on Latino/Hispanic communities, rural
                        areas, and economically distressed regions
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                    Ineligible Organizations & Activities
                  </h3>
                  <p className="text-red-800 mb-3">AFAI does not fund:</p>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>For-profit businesses or individuals (unless partnering with eligible organization)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Religious organizations for religious purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Political campaigns or lobbying activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>General operating support without specific program focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Capital campaigns, building construction, or equipment purchases unrelated to program delivery
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Projects that primarily benefit outside the United States or Puerto Rico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Retrospective funding for projects already completed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Selection Criteria */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Selection Criteria</h2>

              <p className="text-slate-700 mb-6">All applications are evaluated based on the following criteria:</p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">1. Alignment with AFAI Mission (25%)</h3>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                      <li>Direct connection to expanding AI education access</li>
                      <li>Focus on underserved communities and populations</li>
                      <li>Commitment to responsible and ethical AI principles</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">2. Community Need & Impact (25%)</h3>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                      <li>Clear demonstration of community need</li>
                      <li>Potential for meaningful, measurable impact</li>
                      <li>Number of individuals directly served</li>
                      <li>Long-term community benefits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">3. Program Design & Innovation (20%)</h3>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                      <li>Clear goals, objectives, and activities</li>
                      <li>Evidence-based or innovative approach</li>
                      <li>Realistic timeline and milestones</li>
                      <li>Evaluation and measurement plan</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">4. Organizational Capacity (15%)</h3>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                      <li>Demonstrated experience with similar programs</li>
                      <li>Qualified staff and leadership</li>
                      <li>Financial stability and management capacity</li>
                      <li>Community connections and trust</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">5. Budget & Sustainability (15%)</h3>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                      <li>Clear, reasonable budget aligned with activities</li>
                      <li>Cost-effectiveness and value for investment</li>
                      <li>Plan for sustainability beyond grant period</li>
                      <li>Additional funding sources or partnerships</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Application Process</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Submit Concept Note</h3>
                        <p className="text-slate-700 mb-3">
                          Submit a brief 2-3 page concept note outlining your proposed project, target population,
                          expected outcomes, and budget estimate. Concept notes are reviewed on a rolling basis.
                        </p>
                        <p className="text-sm text-slate-600">
                          <strong>Timeline:</strong> Review within 3-4 weeks
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Invitation to Submit Full Proposal</h3>
                        <p className="text-slate-700 mb-3">
                          If your concept note is approved, you'll be invited to submit a full proposal with detailed
                          project plan, budget, evaluation framework, and supporting documents.
                        </p>
                        <p className="text-sm text-slate-600">
                          <strong>Timeline:</strong> 4-6 weeks to complete full proposal
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Review & Due Diligence</h3>
                        <p className="text-slate-700 mb-3">
                          AFAI staff and external reviewers evaluate all full proposals. We may schedule site visits or
                          request additional information.
                        </p>
                        <p className="text-sm text-slate-600">
                          <strong>Timeline:</strong> 6-8 weeks for review
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Award Decision & Grant Agreement</h3>
                        <p className="text-slate-700 mb-3">
                          Applicants are notified of funding decisions. Successful applicants sign a grant agreement
                          outlining deliverables, reporting requirements, and payment schedule.
                        </p>
                        <p className="text-sm text-slate-600">
                          <strong>Timeline:</strong> 2-3 weeks to finalize agreement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">Total Timeline</p>
                      <p className="text-yellow-800">
                        From concept note submission to award decision: approximately 3-5 months. We encourage early
                        submission to allow time for the full process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Required Documents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Required Documents</h2>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">For Concept Note Submission:</h3>
                  <ul className="space-y-2 text-slate-700 mb-6">
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>2-3 page concept note (PDF format)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Simple budget outline (can be included in concept note)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Letter(s) of support (optional but recommended)</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-slate-900 mb-4">For Full Proposal Submission:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Completed full proposal (8-12 pages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Detailed line-item budget with narrative justification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>IRS 501(c)(3) determination letter (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Most recent financial statements or audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Board of directors list</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Key staff resumes/biographies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Letters of commitment from partners</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Reporting Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Reporting Requirements</h2>

              <Card>
                <CardContent className="p-6">
                  <p className="text-slate-700 mb-4">Successful grantees are required to submit:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Progress Reports:</strong> Quarterly updates on activities, milestones achieved,
                        challenges encountered, and participant data
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Financial Reports:</strong> Quarterly expenditure reports with receipts and
                        documentation
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Final Report:</strong> Comprehensive summary of outcomes, impact data, lessons learned,
                        and sustainability plan
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Site Visits:</strong> AFAI staff may conduct site visits to observe program
                        implementation and meet with participants
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Questions?</h2>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="text-slate-700 mb-4">
                    Our funding team is here to help answer your questions and provide guidance throughout the
                    application process.
                  </p>
                  <div className="space-y-3">
                    <p className="text-slate-900">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:funding@AmericanFoundationforAI.org" className="text-blue-600 hover:underline">
                        funding@AmericanFoundationforAI.org
                      </a>
                    </p>
                    <p className="text-slate-900">
                      <strong>Phone:</strong> 787-606-0064 (San Juan Office)
                    </p>
                    <p className="text-slate-900">
                      <strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM AST
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact/request-call">
                        Schedule a Call
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-slate-900 border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-lg mb-6">
                  Submit your concept note and join our network of partners expanding AI education access.
                </p>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
                  <Link href="/apply-for-funding/submit-concept-note">
                    Submit Concept Note
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
