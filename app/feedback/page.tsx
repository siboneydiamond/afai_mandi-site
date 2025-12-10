import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload } from "lucide-react"

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <img src="/placeholder.svg?height=80&width=200" alt="AFAI Logo" className="mx-auto h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Feedback or Report a Concern</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your voice matters. Help us improve our programs and address any concerns.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Required Fields Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-700 text-center">
                All fields marked with <span className="text-red-600">*</span> are required and must be filled.
              </p>
            </div>

            {/* Introduction Text */}
            <div className="mb-8 space-y-4 text-slate-600">
              <p>
                The American Foundation for Artificial Intelligence takes all concerns seriously and provides a safe way
                to raise feedback related to our staff, programs, partners, or supported activities. This mechanism is
                open to anyone affected by or involved in our work—including learners, educators, employers, community
                members, partner organizations, donors, and others with relevant knowledge.
              </p>
              <p>
                It applies to any AFAI-supported activity reasonably believed to have caused or contributed to harm,
                including discrimination, safety violations, ethical concerns, or program quality issues. You will not
                face retaliation for speaking up, and your identity will be kept confidential if requested.
              </p>
              <p>
                All submissions are reviewed by our Feedback Coordinator who is not involved in day-to-day program
                operations. Concerns raised in good faith will be reviewed, documented, and addressed fairly and
                promptly, and may be escalated to senior leadership when appropriate.
              </p>
              <p>
                AFAI is committed to transparency, accountability, and responsible innovation. We uphold principles of
                equity, dignity, and community protection in all areas of our work.
              </p>
              <p>
                You may submit feedback by filling this form, or by directly emailing us at{" "}
                <a href="mailto:feedback@AmericanFoundationforAI.org" className="text-blue-600 hover:underline">
                  feedback@AmericanFoundationforAI.org
                </a>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8">
              {/* Name and Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Name and Contact Information</h2>
                  <p className="text-sm text-slate-600">
                    If you do not feel comfortable sharing your personal identification, please enter the name and
                    contact information of a trusted intermediary through whom you wish to communicate.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-600">*</span>
                    </Label>
                    <Input id="firstName" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-600">*</span>
                    </Label>
                    <Input id="lastName" type="text" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact">
                    Email or other contact information <span className="text-red-600">*</span>
                  </Label>
                  <Input id="contact" type="text" required className="mt-1" />
                  <p className="text-xs text-slate-500 mt-1">
                    If sharing phone number, please include the country code
                  </p>
                </div>

                <div>
                  <Label htmlFor="language">What is your preferred language of communication?</Label>
                  <Input id="language" type="text" placeholder="English, Spanish, etc." className="mt-1" />
                  <p className="text-xs text-slate-500 mt-1">
                    We currently have the internal capacity to review concerns in English and Spanish.
                  </p>
                </div>
              </div>

              {/* Description of the Concern */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Description of the Feedback or Concern</h2>
                  <p className="text-sm text-slate-600">
                    Please include as much detail as possible. The more specific and detailed information provided, the
                    more thoroughly and effectively the concern can be investigated and addressed. If this issue has
                    already been reported elsewhere, please mention so and what, if anything, has resulted from it.
                  </p>
                </div>

                <div>
                  <Label htmlFor="program">
                    What is the specific program or project of concern related to AFAI?{" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="program"
                    type="text"
                    placeholder="Program name, location, or partner organization"
                    required
                    className="mt-1"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Program name, Talent Hub location, partner organization, or implementing entity.
                  </p>
                </div>

                <div>
                  <Label htmlFor="category">
                    Type of Feedback or Concern <span className="text-red-600">*</span>
                  </Label>
                  <select
                    id="category"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select a category...</option>
                    <option value="program-quality">Program Quality or Delivery</option>
                    <option value="discrimination">Discrimination or Harassment</option>
                    <option value="safety">Safety or Health Concerns</option>
                    <option value="ethics">Ethical Concerns or Misconduct</option>
                    <option value="access">Access or Equity Issues</option>
                    <option value="financial">Financial or Administrative Issues</option>
                    <option value="data-privacy">Data Privacy or Security</option>
                    <option value="positive">Positive Feedback or Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description">
                    What happened? <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    rows={6}
                    required
                    placeholder="Please provide a detailed description of what occurred, including any relevant context, dates, and individuals involved."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="date">
                    Date of the incident <span className="text-red-600">*</span>
                  </Label>
                  <Input id="date" type="date" required className="mt-1" />
                  <p className="text-xs text-slate-500 mt-1">
                    Please enter a date to the best of your recollection. In the case of multiple occurrences, list that
                    in the description above.
                  </p>
                </div>

                <div>
                  <Label htmlFor="witnesses">Witnesses (if applicable)</Label>
                  <Textarea
                    id="witnesses"
                    rows={3}
                    placeholder="Names and contact information of any witnesses, if applicable and if you feel comfortable sharing."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="outcome">What would you like to see as an outcome?</Label>
                  <Textarea
                    id="outcome"
                    rows={3}
                    placeholder="How would you like this concern to be addressed? What resolution are you seeking?"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>Include attachments if desired</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-sm text-slate-600 mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-slate-500">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    id="fileUpload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="fileUpload">
                    <Button type="button" variant="outline" className="mt-4 bg-transparent" asChild>
                      <span>Choose Files</span>
                    </Button>
                  </label>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-yellow-600" />
                  Confidentiality and Protection
                </h3>
                <p className="text-sm text-slate-600">
                  Your submission will be treated with the utmost confidentiality. Only authorized personnel involved in
                  reviewing and addressing your concern will have access to this information. We are committed to
                  protecting you from retaliation and ensuring a fair process.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  Submit Feedback
                </Button>
                <Button type="button" variant="outline" size="lg" asChild className="flex-1 bg-transparent">
                  <Link href="/contact">Cancel</Link>
                </Button>
              </div>

              {/* Alternative Contact */}
              <div className="text-center text-sm text-slate-600 pt-4 border-t">
                <p>
                  Prefer to submit via email?{" "}
                  <a href="mailto:feedback@AmericanFoundationforAI.org" className="text-blue-600 hover:underline">
                    feedback@AmericanFoundationforAI.org
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Link href="/privacy" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Privacy Policy</h3>
              <p className="text-sm text-slate-600">Learn how we protect your information</p>
            </Link>
            <Link href="/help" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Help Center</h3>
              <p className="text-sm text-slate-600">Find answers to common questions</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Contact Us</h3>
              <p className="text-sm text-slate-600">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
