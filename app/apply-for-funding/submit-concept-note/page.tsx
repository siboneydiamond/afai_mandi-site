import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Upload, FileText } from "lucide-react"
import Link from "next/link"

export default function SubmitConceptNotePage() {
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
            <span className="text-slate-900">Submit Concept Note</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit a Concept Note</h1>
            <p className="text-xl text-blue-100">
              Share your vision for expanding AI education and workforce opportunity in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200 mb-8">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Before You Begin</h3>
                    <p className="text-sm text-blue-800 mb-3">
                      Please review our funding guidelines and eligibility criteria before submitting your concept note.
                      The concept note is a brief 2-3 page overview of your proposed project.
                    </p>
                    <Link href="/apply-for-funding/guidelines">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Funding Guidelines
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card>
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Applicant Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Applicant Information</h2>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="orgName">Organization Name *</Label>
                          <Input id="orgName" required placeholder="Your organization name" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="orgType">Organization Type *</Label>
                          <Select required>
                            <SelectTrigger id="orgType" className="mt-2">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                              <SelectItem value="school">School/District</SelectItem>
                              <SelectItem value="university">University/College</SelectItem>
                              <SelectItem value="workforce">Workforce Board</SelectItem>
                              <SelectItem value="municipality">Municipality/Government Agency</SelectItem>
                              <SelectItem value="community">Community Organization</SelectItem>
                              <SelectItem value="business">Business Association</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="contactName">Primary Contact Name *</Label>
                          <Input id="contactName" required placeholder="First and last name" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="contactTitle">Title/Position *</Label>
                          <Input id="contactTitle" required placeholder="Your title" className="mt-2" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" required placeholder="email@example.com" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" required placeholder="(000) 000-0000" className="mt-2" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Organization Address *</Label>
                        <Input id="address" required placeholder="Street address" className="mt-2 mb-3" />
                        <div className="grid md:grid-cols-3 gap-4">
                          <Input placeholder="City" required />
                          <Input placeholder="State/Territory" required />
                          <Input placeholder="ZIP Code" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="region">Project Region *</Label>
                        <Select required>
                          <SelectTrigger id="region" className="mt-2">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pr-metro">Puerto Rico - Metro Area</SelectItem>
                            <SelectItem value="pr-central">Puerto Rico - Central</SelectItem>
                            <SelectItem value="pr-south">Puerto Rico - South</SelectItem>
                            <SelectItem value="pr-west">Puerto Rico - West</SelectItem>
                            <SelectItem value="pr-east">Puerto Rico - East</SelectItem>
                            <SelectItem value="mainland">Mainland USA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Information</h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="projectTitle">Project Title *</Label>
                        <Input
                          id="projectTitle"
                          required
                          placeholder="Brief, descriptive title for your project"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select required>
                          <SelectTrigger id="projectType" className="mt-2">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">AI Education (K-12)</SelectItem>
                            <SelectItem value="workforce">Workforce Development</SelectItem>
                            <SelectItem value="small-business">Small Business Modernization</SelectItem>
                            <SelectItem value="women">Women's Economic Empowerment</SelectItem>
                            <SelectItem value="municipal">Municipal Innovation</SelectItem>
                            <SelectItem value="research">Research & Responsible AI</SelectItem>
                            <SelectItem value="community">Community Digital Equity</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="awardType">Award Type Requested *</Label>
                        <Select required>
                          <SelectTrigger id="awardType" className="mt-2">
                            <SelectValue placeholder="Select award type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="planning">Planning Award ($5,000 - $15,000)</SelectItem>
                            <SelectItem value="implementation">
                              Program Implementation Award ($25,000 - $100,000)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fundingRequested">Funding Amount Requested *</Label>
                          <Input id="fundingRequested" type="number" required placeholder="$0" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="projectDuration">Project Duration (months) *</Label>
                          <Input
                            id="projectDuration"
                            type="number"
                            required
                            placeholder="6-24 months"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="summary">Project Summary (500 words max) *</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-2">
                          Provide a brief overview of your proposed project, including goals, target population, and
                          expected outcomes.
                        </p>
                        <Textarea
                          id="summary"
                          required
                          rows={8}
                          placeholder="Describe your project..."
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="population">Target Population *</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-2">
                          Who will directly benefit from this project? Include demographics and estimated number of
                          participants.
                        </p>
                        <Textarea
                          id="population"
                          required
                          rows={4}
                          placeholder="Describe the population you will serve..."
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="need">Community Need *</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-2">
                          What specific need or gap in AI education/workforce development does this project address?
                        </p>
                        <Textarea
                          id="need"
                          required
                          rows={4}
                          placeholder="Describe the community need..."
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="capacity">Organizational Capacity *</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-2">
                          Briefly describe your organization's experience and capacity to implement this project.
                        </p>
                        <Textarea
                          id="capacity"
                          required
                          rows={4}
                          placeholder="Describe your organizational capacity..."
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Supporting Documents */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Supporting Documents</h2>

                    <div className="space-y-6">
                      <div>
                        <Label>Concept Note Document (PDF, 2-3 pages) *</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-3">
                          Upload a brief concept note following our guidelines. Include project overview, objectives,
                          approach, budget estimate, and timeline.
                        </p>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-sm text-slate-600 mb-1">
                            <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">PDF (max 5MB)</p>
                        </div>
                      </div>

                      <div>
                        <Label>Budget Outline (Optional)</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-3">
                          A simple budget breakdown (can be included in concept note or uploaded separately).
                        </p>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-sm text-slate-600 mb-1">
                            <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">PDF or Excel (max 5MB)</p>
                        </div>
                      </div>

                      <div>
                        <Label>Letter of Support (Optional)</Label>
                        <p className="text-sm text-slate-600 mt-1 mb-3">
                          Letters from partners, community organizations, or other stakeholders supporting your project.
                        </p>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-sm text-slate-600 mb-1">
                            <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">PDF (max 5MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Confirmation</h2>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox id="confirm1" required className="mt-1" />
                        <Label htmlFor="confirm1" className="text-sm leading-relaxed cursor-pointer">
                          I confirm that the information provided in this concept note is accurate and complete to the
                          best of my knowledge.
                        </Label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="confirm2" required className="mt-1" />
                        <Label htmlFor="confirm2" className="text-sm leading-relaxed cursor-pointer">
                          I have reviewed the{" "}
                          <Link href="/apply-for-funding/guidelines" className="text-blue-600 hover:underline">
                            funding guidelines
                          </Link>{" "}
                          and confirm that our organization and project meet the eligibility criteria.
                        </Label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="confirm3" required className="mt-1" />
                        <Label htmlFor="confirm3" className="text-sm leading-relaxed cursor-pointer">
                          I understand that submitting a concept note does not guarantee funding and that AFAI will
                          review all submissions based on merit and alignment with our mission.
                        </Label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="confirm4" required className="mt-1" />
                        <Label htmlFor="confirm4" className="text-sm leading-relaxed cursor-pointer">
                          I agree to AFAI's{" "}
                          <Link href="/terms" className="text-blue-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Submit Concept Note
                    </Button>
                    <Button type="button" variant="outline" size="lg" asChild>
                      <Link href="/apply-for-funding">Cancel</Link>
                    </Button>
                  </div>

                  <p className="text-sm text-slate-600">
                    Questions about the application process? Contact our funding team at{" "}
                    <a href="mailto:funding@AmericanFoundationforAI.org" className="text-blue-600 hover:underline">
                      funding@AmericanFoundationforAI.org
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
