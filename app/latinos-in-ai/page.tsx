import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LatinosInAIPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-3 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link href="/news" className="text-slate-600 hover:text-slate-900">
              News & Stories
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Latinos in AI</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-slate-600">AFAI INITIATIVE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-slate-900">Latinos in AI</h1>

          {/* Hero Image with Number Overlay */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Latinos in AI Leadership"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-8 right-8 bg-yellow-400 text-slate-900 px-6 py-4 rounded-lg">
              <div className="text-6xl font-bold">42</div>
              <div className="text-sm font-semibold uppercase">Countries</div>
            </div>
          </div>

          {/* Leader Profile */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Dr. María Isabel Santiago</h2>
            <p className="text-lg font-semibold text-yellow-600 mb-6">
              Executive Director, Latinos in AI - Puerto Rico
            </p>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                Latinos in AI, supported by the American Foundation for Artificial Intelligence, aims to amplify Latino
                voices in the development, deployment, and governance of artificial intelligence technologies across the
                Americas and beyond. Led from Puerto Rico, we envision a future where Latino communities—from San Juan
                to Mexico City, from Los Angeles to Buenos Aires—have the opportunity to shape AI in ways that reflect
                our cultures, languages, and values, ensuring technology serves the many, not just the few.
              </p>

              <p>
                Latinos in AI's growing membership includes more than{" "}
                <strong>4,200 AI technologists, researchers, entrepreneurs, and policy advocates</strong> across{" "}
                <strong>42 countries</strong>— representing every major Latino community in the Western Hemisphere and
                diaspora communities worldwide. Like our diverse members, our work spans policy advocacy, education,
                research, and entrepreneurship. From submitting recommendations to Congressional Hispanic Caucus members
                to breaking down barriers for Spanish-speaking AI professionals, we create pathways for Latinos to
                impact the present and future of artificial intelligence.
              </p>

              <p>
                Our flagship programs like <strong>"Líderes Emergentes en IA"</strong> (Emerging Leaders in AI) provide
                financial support, mentorship, and community to help Latino students and professionals pursue advanced
                degrees, launch startups, and conduct groundbreaking research. We host annual conferences in Puerto Rico
                that bring together the brightest minds in Latino AI innovation.
              </p>

              <p className="text-lg font-semibold text-slate-900 border-l-4 border-yellow-400 pl-4">
                Technology reflects those who build it. With artificial intelligence rapidly transforming industry and
                society, an ethical and equitable future depends on AI research, innovation, and policy that centers
                Latino perspectives, bilingual capabilities, and cultural intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Impact Across Latino Communities</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">4,200+</div>
              <div className="text-slate-600 font-medium">Members Worldwide</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">42</div>
              <div className="text-slate-600 font-medium">Countries Represented</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">850+</div>
              <div className="text-slate-600 font-medium">Research Papers Published</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <BookOpen className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">120+</div>
              <div className="text-slate-600 font-medium">Educational Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Key Programs & Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Líderes Emergentes en IA</h3>
              <p className="text-slate-600 mb-6">
                Our flagship fellowship program provides financial support, mentorship, and community for Latino
                students pursuing graduate studies in AI and machine learning.
              </p>
              <Link
                href="/fellowship"
                className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Annual Puerto Rico AI Summit</h3>
              <p className="text-slate-600 mb-6">
                Our annual conference brings together 1,000+ Latino AI researchers, entrepreneurs, and advocates for
                workshops, networking, and knowledge sharing.
              </p>
              <Link
                href="/seminars"
                className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-2"
              >
                View Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Policy & Advocacy Network</h3>
              <p className="text-slate-600 mb-6">
                We work with policymakers to ensure Latino communities have a voice in AI regulation, ethics frameworks,
                and technology policy development.
              </p>
              <Link
                href="/government-partnerships"
                className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-2"
              >
                Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Puerto Rico Leadership Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Puerto Rico?</h2>
          <p className="text-xl leading-relaxed mb-8 text-blue-50">
            Puerto Rico serves as the perfect bridge between North American innovation and Latin American talent. With
            its unique position as a U.S. territory, vibrant bilingual culture, growing tech ecosystem, and deep
            connections throughout Latin America, Puerto Rico is uniquely positioned to lead the Latino AI movement. Our
            island's resilience, creativity, and community-first values shape an approach to AI that prioritizes equity,
            cultural sensitivity, and social impact.
          </p>
          <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            <Link href="/puerto-rico" className="flex items-center gap-2">
              Explore Our Puerto Rico Hub <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Related Initiatives */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Related AFAI Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/programs/women-empowerment" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Women's Economic Empowerment"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded text-2xl font-bold">
                  38
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                Latinas in Tech Leadership
              </h3>
              <p className="text-slate-600 mt-2">
                Empowering Latina women entrepreneurs and technologists across the Americas.
              </p>
            </Link>

            <Link href="/startup-navigator" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Latino Startup Ecosystem"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded text-2xl font-bold">
                  250+
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                Latino AI Startup Network
              </h3>
              <p className="text-slate-600 mt-2">
                Supporting Latino entrepreneurs building AI-powered businesses and solutions.
              </p>
            </Link>

            <Link href="/learn" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bilingual AI Education"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded text-2xl font-bold">
                  15K+
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                Bilingual AI Education
              </h3>
              <p className="text-slate-600 mt-2">
                Making AI education accessible in Spanish and English for Latino learners worldwide.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Join the Movement</h2>
          <p className="text-xl mb-8 text-slate-800">
            Be part of building an AI future that reflects and empowers Latino communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/contact">Become a Member</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
            >
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
