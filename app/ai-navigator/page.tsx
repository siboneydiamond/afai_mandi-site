import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Briefcase, TrendingUp, Users, BookOpen, Award, CheckCircle } from "lucide-react"

export default function AINavigatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">AI Career Navigator</h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 text-pretty leading-relaxed">
                Not sure where to start your AI journey? AI Career Navigator is AFAI's innovative tool that gives you
                access to an AI-powered career planning system, personalized guidance, and expert support, designed to
                help you build AI skills and advance your career.
              </p>
              <p className="text-lg mb-6 text-slate-300">
                AI Career Navigator provides personalized recommendations to learners and job seekers, helping them
                plan, prioritize, and achieve their career goals. The combination of cutting-edge AI technology and
                AFAI's expertise in workforce development provides a unique combination of capabilities.
              </p>
              <p className="text-lg mb-6 text-slate-300">The public beta version of AI Career Navigator is live now.</p>
              <p className="text-lg mb-8 text-slate-300 font-semibold">
                The best part – AI Career Navigator is free to use! That's for individual learners, and for our
                partners.
              </p>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                <Link href="/ai-navigator/learn-more">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-slate-700 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">AI-Powered Career Assessment</h3>
                <p className="text-slate-600">
                  Get personalized recommendations based on your skills, interests, and career goals using advanced AI
                  technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Customized Learning Paths</h3>
                <p className="text-slate-600">
                  Receive tailored course recommendations from AFAI's extensive catalog to help you achieve your career
                  objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Job Market Insights</h3>
                <p className="text-slate-600">
                  Access real-time data on AI job opportunities, salary ranges, and in-demand skills in your region.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
                <p className="text-slate-600">
                  Monitor your skill development and career advancement with detailed analytics and milestone tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
                <p className="text-slate-600">
                  Connect with AI professionals and career advisors who can provide guidance tailored to your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Certificate Recommendations</h3>
                <p className="text-slate-600">
                  Get suggestions for industry-recognized certifications that align with your career path and market
                  demand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Take the Assessment</h3>
                <p className="text-slate-600 text-lg">
                  Complete a comprehensive assessment that evaluates your current skills, experience, interests, and
                  career aspirations in the AI field.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Get Your Personalized Plan</h3>
                <p className="text-slate-600 text-lg">
                  Receive a customized career roadmap with specific courses, certifications, and milestones tailored to
                  your goals and timeline.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Start Learning</h3>
                <p className="text-slate-600 text-lg">
                  Begin your AI education journey with recommended courses from AFAI and our partner institutions, with
                  ongoing support from mentors.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-bold flex items-center justify-center text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Track Progress & Adjust</h3>
                <p className="text-slate-600 text-lg">
                  Monitor your advancement, earn certifications, and receive updated recommendations as you develop new
                  skills and the job market evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose AI Career Navigator</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Free access</strong> for all learners and AFAI partner organizations
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Personalized recommendations</strong> powered by cutting-edge AI technology
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Real-time job market data</strong> to ensure your skills match industry demand
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Access to expert mentors</strong> from AFAI's network of AI professionals
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Flexible learning</strong> that adapts to your schedule and learning pace
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">
                <strong>Focus on underserved communities</strong> with specialized support for Puerto Rico and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner Organizations</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We want to offer access to AI Career Navigator to as many aspiring AI professionals in the U.S. as possible.
            We're looking for partners who are supporting communities, cohorts, or groups of learners and who want to
            increase their support offer.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
            <Link href="/ai-navigator/partners">Learn More About Our Partner Programme</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to Navigate Your AI Career?</h2>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto mb-8">
            Start your journey today with personalized guidance and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <Link href="/ai-navigator/start">Start Your Assessment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
