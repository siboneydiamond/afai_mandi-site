import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Target, Users, TrendingUp, Award, BookOpen, Building } from "lucide-react"

export default function LearnMorePage() {
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
          <h1 className="text-5xl font-bold mb-6">About AI Career Navigator</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Learn more about how AFAI's innovative career planning tool can transform your AI education journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              AI Career Navigator was developed by AFAI to address a critical challenge: helping individuals from
              underserved communities navigate the complex and rapidly evolving AI job market. We recognized that many
              talented people want to build AI careers but don't know where to start or which skills to prioritize.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              By combining advanced AI technology with AFAI's deep expertise in workforce development and education, AI
              Career Navigator provides personalized guidance that adapts to each learner's unique situation, goals, and
              learning pace.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our tool is completely free for individual learners and partner organizations, removing financial barriers
              to career planning and ensuring equitable access to AI career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Personalized Career Roadmaps</h3>
                <p className="text-slate-600">
                  Get a customized plan based on your current skills, experience level, interests, and target career
                  roles in AI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Course Recommendations</h3>
                <p className="text-slate-600">
                  Access curated learning paths from AFAI's catalog and partner institutions, matched to your career
                  goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Job Market Intelligence</h3>
                <p className="text-slate-600">
                  Stay informed about AI job trends, salary expectations, and in-demand skills in your region and
                  industry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Mentor Connections</h3>
                <p className="text-slate-600">
                  Connect with experienced AI professionals who can provide guidance and answer your career questions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Certification Guidance</h3>
                <p className="text-slate-600">
                  Receive recommendations for industry-recognized certifications that will strengthen your career
                  prospects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Building className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Employer Partnerships</h3>
                <p className="text-slate-600">
                  Access job opportunities from AFAI's network of partner employers actively seeking AI talent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Powered by Advanced AI</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              AI Career Navigator uses state-of-the-art artificial intelligence and machine learning algorithms to
              analyze your skills, assess job market trends, and generate personalized recommendations. The system
              continuously learns and adapts as you progress through your learning journey.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Our technology considers hundreds of factors including your background, learning pace, career goals,
              geographic location, industry trends, and employer requirements to create a truly personalized career
              development plan.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Unlike generic career advice, AI Career Navigator provides specific, actionable recommendations that are
              updated in real-time as the AI job market evolves.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Is AI Career Navigator really free?</h3>
              <p className="text-slate-700">
                Yes! AI Career Navigator is completely free for individual learners and partner organizations. AFAI
                believes that access to career planning tools should not be a barrier to building an AI career.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Who can use AI Career Navigator?</h3>
              <p className="text-slate-700">
                Anyone interested in building or advancing an AI career can use the tool. It's designed for people at
                all skill levels, from complete beginners to professionals looking to transition into AI roles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">How long does the assessment take?</h3>
              <p className="text-slate-700">
                The initial assessment takes approximately 20-30 minutes to complete. You'll answer questions about your
                background, skills, interests, and career goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Can I update my career plan?</h3>
              <p className="text-slate-700">
                Your career plan is dynamic and can be updated as you complete courses, gain new skills, or change your
                career goals. The AI continuously refines recommendations based on your progress.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Do I need to take AFAI courses?</h3>
              <p className="text-slate-700">
                While we primarily recommend courses from AFAI and our partner institutions, the tool may also suggest
                resources from other reputable providers to ensure you get the best education for your goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">How does mentorship work?</h3>
              <p className="text-slate-700">
                Based on your career plan, you may be matched with mentors from AFAI's network. Mentorship is optional
                but highly recommended for personalized guidance and industry insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to Get Started?</h2>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto mb-8">
            Take the first step toward your AI career today with personalized guidance.
          </p>
          <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
            <Link href="/ai-navigator/start">Start Your Career Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
