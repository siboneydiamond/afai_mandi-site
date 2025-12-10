import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">The People That Power Our Mission</h1>
        </div>
      </section>

      {/* Filter and Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* View Filter */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-medium text-muted-foreground">View:</span>
            <Select defaultValue="our-staff">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="our-staff">Our Staff</SelectItem>
                <SelectItem value="executive-team">Executive Team</SelectItem>
                <SelectItem value="board-members">Board Members</SelectItem>
                <SelectItem value="advisory-board">Advisory Board</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Our Staff Section */}
          <div id="our-staff">
            <h2 className="text-3xl font-bold mb-4">Our Staff</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Our dedicated AFAI team is always here to expand equitable access to AI education, workforce development,
              and economic opportunity. We're honored to strengthen communities across the United States and Puerto Rico
              alongside our partners.
            </p>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
              {staffMembers.map((member) => (
                <Link key={member.slug} href={`/our-people/${member.slug}`} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-yellow-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Executive Team Section */}
          <div id="executive-team" className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Executive Team</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Our executive leadership team guides AFAI's strategic vision, ensuring our programs deliver measurable
              impact and expand opportunity for all.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {executiveTeam.map((member) => (
                <Link key={member.slug} href={`/our-people/${member.slug}`} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-yellow-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Board Members Section */}
          <div id="board-members" className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Our Board of Directors provides strategic oversight, governance leadership, and ensures AFAI remains
              mission-aligned, accountable, and effective.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {boardMembers.map((member) => (
                <Link key={member.slug} href={`/our-people/${member.slug}`} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-yellow-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Advisory Board Section */}
          <div id="advisory-board">
            <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Our Advisory Board brings together leaders from industry, academia, public policy, and AI research to
              guide our strategic priorities and strengthen our programs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {advisoryBoard.map((member) => (
                <Link key={member.slug} href={`/our-people/${member.slug}`} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-yellow-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to expand equitable access to AI opportunity.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  )
}

// Staff Members Data
const staffMembers = [
  {
    name: "Sarah Chen",
    title: "Director of Programs",
    image: "/placeholder.svg?height=200&width=200",
    slug: "sarah-chen",
  },
  {
    name: "Marcus Johnson",
    title: "Senior Program Analyst",
    image: "/placeholder.svg?height=200&width=200",
    slug: "marcus-johnson",
  },
  {
    name: "Elena Rodriguez",
    title: "Content Manager",
    image: "/placeholder.svg?height=200&width=200",
    slug: "elena-rodriguez",
  },
  {
    name: "David Kim",
    title: "Customer Success Manager",
    image: "/placeholder.svg?height=200&width=200",
    slug: "david-kim",
  },
  {
    name: "Jessica Martinez",
    title: "Development Associate",
    image: "/placeholder.svg?height=200&width=200",
    slug: "jessica-martinez",
  },
  {
    name: "Thomas Anderson",
    title: "Marketing Manager",
    image: "/placeholder.svg?height=200&width=200",
    slug: "thomas-anderson",
  },
  {
    name: "Priya Patel",
    title: "Software Engineer",
    image: "/placeholder.svg?height=200&width=200",
    slug: "priya-patel",
  },
  {
    name: "Michael Brown",
    title: "Finance Coordinator",
    image: "/placeholder.svg?height=200&width=200",
    slug: "michael-brown",
  },
]

// Executive Team Data
const executiveTeam = [
  {
    name: "Dr. James Thompson",
    title: "President & CEO",
    image: "/placeholder.svg?height=200&width=200",
    slug: "james-thompson",
  },
  {
    name: "Lisa Chen",
    title: "Chief Operations & Programs Officer",
    image: "/placeholder.svg?height=200&width=200",
    slug: "lisa-chen",
  },
  {
    name: "Robert Williams",
    title: "Chief Product & Technology Officer",
    image: "/placeholder.svg?height=200&width=200",
    slug: "robert-williams",
  },
  {
    name: "Maria Garcia",
    title: "Chief Revenue Officer",
    image: "/placeholder.svg?height=200&width=200",
    slug: "maria-garcia",
  },
]

// Board Members Data
const boardMembers = [
  {
    name: "Dr. Patricia Anderson",
    title: "Board Chair",
    image: "/placeholder.svg?height=200&width=200",
    slug: "patricia-anderson",
  },
  {
    name: "John Matthews",
    title: "Board Vice Chair",
    image: "/placeholder.svg?height=200&width=200",
    slug: "john-matthews",
  },
  {
    name: "Dr. Raj Kumar",
    title: "Board Treasurer",
    image: "/placeholder.svg?height=200&width=200",
    slug: "raj-kumar",
  },
  {
    name: "Sandra Lee",
    title: "Board Secretary",
    image: "/placeholder.svg?height=200&width=200",
    slug: "sandra-lee",
  },
  {
    name: "Michael Foster",
    title: "Board Member",
    image: "/placeholder.svg?height=200&width=200",
    slug: "michael-foster",
  },
  {
    name: "Dr. Angela Rivers",
    title: "Board Member",
    image: "/placeholder.svg?height=200&width=200",
    slug: "angela-rivers",
  },
]

// Advisory Board Data
const advisoryBoard = [
  {
    name: "Dr. Steven Park",
    title: "AI Research Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "steven-park",
  },
  {
    name: "Jennifer Walsh",
    title: "Workforce Development Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "jennifer-walsh",
  },
  {
    name: "Carlos Mendez",
    title: "Small Business Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "carlos-mendez",
  },
  {
    name: "Dr. Emily White",
    title: "Education Policy Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "emily-white",
  },
  {
    name: "David Chen",
    title: "Technology Ethics Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "david-chen-advisor",
  },
  {
    name: "Dr. Michelle Johnson",
    title: "Community Development Advisor",
    image: "/placeholder.svg?height=200&width=200",
    slug: "michelle-johnson",
  },
]
