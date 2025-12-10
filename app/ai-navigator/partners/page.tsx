import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Target, TrendingUp, Award, CheckCircle, Building } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative">
          <Button asChild variant="ghost" className="text-white hover:text-yellow-500 mb-6">
            <Link href="/ai-navigator">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to AI Career Navigator
            </Link>
          </Button>
          <h1 className="text-5xl font-bold mb-6">Partner Programme</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Join AFAI in expanding access to AI career guidance for underserved communities across the United States.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Partner With AFAI</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              AFAI's Partner Programme offers organizations free access to AI Career Navigator for their communities,
              cohorts, or learner groups. We're looking for partners who share our mission of expanding equitable access
              to AI education and career opportunities.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Whether you're a workforce development agency, educational institution, community organization, or
              employer, AI Career Navigator can enhance your support offerings and help more people build successful AI
              careers.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Best of all, there's no cost to partner organizations. We provide the technology, training, and ongoing
              support you need to integrate AI Career Navigator into your programs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Partner Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Free Access for Your Community</h3>
                <p className="text-slate-600">
                  Provide unlimited access to AI Career Navigator for all learners in your programs at no cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enhanced Support Offerings</h3>
                <p className="text-slate-600">
                  Strengthen your programs with cutting-edge career planning technology and personalized guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Improved Outcomes</h3>
                <p className="text-slate-600">
                  Help more learners successfully transition into AI careers with data-driven recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Training & Support</h3>
                <p className="text-slate-600">
                  Receive comprehensive training for your team and ongoing technical support from AFAI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Building className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Co-Branding Options</h3>
                <p className="text-slate-600">
                  Customize the tool with your organization's branding to maintain your identity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Impact Reporting</h3>
                <p className="text-slate-600">
                  Access analytics and reporting tools to measure program effectiveness and learner progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Who Should Partner With Us</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Workforce Development Agencies</h3>
              <p className="text-slate-700 text-lg">
                Enhance your job training programs with AI career planning tools that help participants identify the
                right skills to learn and certifications to pursue.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Educational Institutions</h3>
              <p className="text-slate-700 text-lg">
                Support your students with personalized AI career guidance that complements your academic programs and
                improves placement outcomes.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Community Organizations</h3>
              <p className="text-slate-700 text-lg">
                Provide your community members with access to cutting-edge career planning technology that removes
                barriers to AI education.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Government Agencies</h3>
              <p className="text-slate-700 text-lg">
                Strengthen public workforce programs with tools that help residents build AI skills aligned with
                regional economic needs.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Employers</h3>
              <p className="text-slate-700 text-lg">
                Develop your workforce by providing employees with personalized AI upskilling pathways that align with
                your business needs.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Nonprofit Organizations</h3>
              <p className="text-slate-700 text-lg">
                Expand your program offerings with professional career planning tools that help the communities you
                serve access AI opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Partner Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How to Become a Partner</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Submit Your Application</h3>
                <p className="text-slate-700 text-lg">
                  Complete our partnership application form describing your organization and the communities you serve.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Initial Consultation</h3>
                <p className="text-slate-700 text-lg">
                  Meet with our team to discuss your needs, goals, and how AI Career Navigator can support your
                  programs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Onboarding & Training</h3>
                <p className="text-slate-700 text-lg">
                  Your team receives comprehensive training on using AI Career Navigator and integrating it into your
                  programs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Launch & Support</h3>
                <p className="text-slate-700 text-lg">
                  Begin using the tool with your community, with ongoing support and regular check-ins from AFAI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to Partner With AFAI?</h2>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto mb-8">
            Join us in expanding equitable access to AI education and career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <Link href="/contact">Apply to Become a Partner</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold bg-transparent"
            >
              <Link href="/ai-navigator/learn-more">Learn More About the Tool</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
