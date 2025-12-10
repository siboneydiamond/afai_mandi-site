"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Calendar, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["All", "Conferences & Summits", "Workshops", "Webinars", "Community Events"]

const upcomingEvents = [
  {
    slug: "latinos-in-ai-summit-2025",
    title: "2025 Latinos in AI Summit",
    type: "Conferences & Summits",
    location: "San Juan Convention Center, Puerto Rico",
    date: "July 15-17, 2025",
    description:
      "Join 500+ Latino AI professionals, researchers, and students for three days of networking, learning, and celebrating Latino excellence in AI.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "ai-workforce-workshop-spring-2025",
    title: "AI Workforce Transformation Workshop",
    type: "Workshops",
    location: "Virtual",
    date: "May 20, 2025",
    description:
      "A hands-on workshop for HR leaders and workforce development professionals on implementing AI upskilling programs.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "women-in-ai-webinar-april-2025",
    title: "Women in AI: Breaking Barriers",
    type: "Webinars",
    location: "Online",
    date: "April 12, 2025",
    description:
      "Panel discussion featuring Latina women leaders in AI sharing their journeys and insights on advancing in the field.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "small-business-ai-bootcamp-2025",
    title: "Small Business AI Bootcamp",
    type: "Workshops",
    location: "Ponce, Puerto Rico",
    date: "June 5-6, 2025",
    description:
      "Two-day intensive bootcamp teaching small business owners practical AI tools for marketing, operations, and customer service.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const pastEvents = [
  {
    slug: "latinos-in-ai-summit-2024",
    title: "2024 Latinos in AI Summit",
    type: "Conferences & Summits",
    location: "San Juan, Puerto Rico",
    date: "September 20-22, 2024",
    description:
      "Our inaugural summit brought together 350 participants from 15 countries to advance Latino representation in AI.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "ai-education-workshop-2024",
    title: "2024 AI Education Workshop",
    type: "Workshops",
    location: "Virtual",
    date: "November 8, 2024",
    description: "Educators from 50+ schools learned how to integrate AI literacy into K-12 curriculum.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "workforce-leaders-roundtable-2024",
    title: "Workforce Leaders Roundtable",
    type: "Community Events",
    location: "Washington, D.C.",
    date: "October 15, 2024",
    description: "Policy makers and workforce board directors discussed strategies for AI workforce preparation.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "responsible-ai-webinar-series-2024",
    title: "Responsible AI Webinar Series",
    type: "Webinars",
    location: "Online",
    date: "August-December 2024",
    description: "Six-part series exploring ethical AI development, bias mitigation, and community impact.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filterEvents = (events: typeof upcomingEvents) => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || event.type === selectedCategory
      return matchesSearch && matchesCategory
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Events</h1>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="bg-white/10 border-white/20 mb-8">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              UPCOMING
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
              PAST EVENTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {filterEvents(upcomingEvents).length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-slate-600 text-lg">There are currently no upcoming events matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filterEvents(upcomingEvents).map((event) => (
                  <Link
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-yellow-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        View more
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            <div className="grid md:grid-cols-2 gap-6">
              {filterEvents(pastEvents).map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-slate-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      View more
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Newsletter CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated on AFAI Events</h2>
          <p className="text-white/80 mb-6">Subscribe to our newsletter to receive event announcements and updates.</p>
          <Button asChild className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            <Link href="/contact">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
