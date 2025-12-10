import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const peopleData: Record<string, any> = {
  "james-thompson": {
    name: "Dr. James Thompson",
    title: "President & CEO",
    category: "Executive Team",
    image: "/placeholder.svg?height=400&width=400",
    email: "jthompson@afai.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    bio: [
      "Dr. James Thompson serves as President and CEO of the American Foundation for Artificial Intelligence (AFAI), where he leads the organization's mission to expand equitable access to AI education, workforce development, and economic opportunity across the United States and Puerto Rico.",
      "Before joining AFAI, Dr. Thompson served as Vice President of Digital Innovation at a major educational technology company, where he oversaw the development of AI-powered learning platforms serving millions of students worldwide.",
      "He holds a Ph.D. in Computer Science from MIT, an M.B.A. from Harvard Business School, and a B.S. in Engineering from Stanford University. His research has been published in leading journals, and he is a frequent speaker on AI ethics, workforce transformation, and inclusive technology.",
      "Dr. Thompson serves on the advisory boards of several technology and education nonprofits and has been recognized as a leader in responsible AI adoption.",
    ],
    expertise: [
      "AI Strategy & Leadership",
      "Educational Technology",
      "Workforce Development",
      "Digital Transformation",
      "Public-Private Partnerships",
    ],
  },
  "sarah-chen": {
    name: "Sarah Chen",
    title: "Director of Programs",
    category: "Our Staff",
    image: "/placeholder.svg?height=400&width=400",
    email: "schen@afai.org",
    linkedin: "https://linkedin.com",
    bio: [
      "Sarah Chen serves as Director of Programs at AFAI, overseeing the design, implementation, and evaluation of all workforce development and education initiatives across the United States and Puerto Rico.",
      "With over 12 years of experience in program management and community development, Sarah has successfully launched training programs that have reached thousands of learners in underserved communities.",
      "Prior to AFAI, Sarah led workforce innovation programs at a national nonprofit, where she developed partnerships with Fortune 500 companies to create skills training pathways for displaced workers.",
      "Sarah holds a Master's in Public Administration from Columbia University and a B.A. in Sociology from UC Berkeley. She is passionate about using technology to create economic mobility for all.",
    ],
    expertise: [
      "Program Management",
      "Workforce Development",
      "Community Partnerships",
      "Curriculum Design",
      "Impact Measurement",
    ],
  },
  "patricia-anderson": {
    name: "Dr. Patricia Anderson",
    title: "Board Chair",
    category: "Board of Directors",
    image: "/placeholder.svg?height=400&width=400",
    email: "panderson@afai.org",
    linkedin: "https://linkedin.com",
    bio: [
      "Dr. Patricia Anderson serves as Board Chair of AFAI, bringing over 25 years of leadership in technology, education, and nonprofit governance.",
      "Currently serving as President of a leading technology foundation, Dr. Anderson has dedicated her career to ensuring that technological advancement benefits all communities, especially those historically underserved.",
      "She previously served as Chief Strategy Officer at a Fortune 500 technology company, where she led initiatives to expand digital access and workforce training in rural and urban communities.",
      "Dr. Anderson holds a Ph.D. in Education Policy from Harvard University and has served on numerous corporate and nonprofit boards focused on education, technology, and economic development.",
    ],
    expertise: [
      "Nonprofit Governance",
      "Strategic Planning",
      "Education Policy",
      "Technology Access",
      "Board Leadership",
    ],
  },
  "steven-park": {
    name: "Dr. Steven Park",
    title: "AI Research Advisor",
    category: "Advisory Board",
    image: "/placeholder.svg?height=400&width=400",
    email: "spark@university.edu",
    linkedin: "https://linkedin.com",
    bio: [
      "Dr. Steven Park serves on AFAI's Advisory Board, providing expertise in AI research, ethics, and responsible technology deployment.",
      "He is currently a Professor of Computer Science at a leading research university, where he directs the AI Ethics and Society Lab. His research focuses on algorithmic fairness, bias mitigation, and community-centered AI development.",
      "Dr. Park has published over 50 peer-reviewed papers and has been recognized with numerous awards for his contributions to ethical AI development. He regularly advises government agencies and technology companies on responsible AI practices.",
      "He holds a Ph.D. in Computer Science from Stanford University and serves on several advisory boards focused on technology ethics and public-benefit AI research.",
    ],
    expertise: ["AI Ethics", "Machine Learning", "Algorithmic Fairness", "Research Leadership", "Policy Advising"],
  },
}

export default function PersonDetailPage({ params }: { params: { slug: string } }) {
  const person = peopleData[params.slug]

  if (!person) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/our-people"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our People
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-2">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden">
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-4">
                {person.category}
              </div>
              <h1 className="text-4xl font-bold mb-2">{person.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{person.title}</p>

              {/* Contact Links */}
              <div className="flex gap-3">
                {person.email && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${person.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                )}
                {person.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {person.twitter && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Biography</h2>
          <div className="prose prose-lg max-w-none">
            {person.bio.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      {person.expertise && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {person.expertise.map((skill: string) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet the Entire Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about the dedicated professionals driving AFAI's mission forward.
          </p>
          <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
            <Link href="/our-people">View All Team Members</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
