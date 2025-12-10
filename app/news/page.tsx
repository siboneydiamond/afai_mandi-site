"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const newsArticles = [
  {
    id: 1,
    type: "Impact Stories",
    title: "Building AI-Ready Futures in Puerto Rico",
    date: "January 15, 2025",
    excerpt: "How AFAI's workforce training programs are transforming careers across the island.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["Workforce Development", "Puerto Rico"],
    region: "Puerto Rico",
    slug: "building-ai-ready-futures-puerto-rico",
  },
  {
    id: 2,
    type: "Program Updates",
    title: "New AI Fundamentals Course Launches with Google Partnership",
    date: "January 10, 2025",
    excerpt: "AFAI announces expanded Google Career Certificate program reaching 10,000+ learners.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["AI Education", "Partnerships"],
    region: "Mainland USA",
    slug: "google-partnership-expansion",
  },
  {
    id: 3,
    type: "Impact Stories",
    title: "Women Leading AI Innovation: Meet Our Fellowship Graduates",
    date: "January 5, 2025",
    excerpt: "Five women share their journey from the AFAI Fellowship to AI leadership roles.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["Women's Empowerment", "AI Education"],
    region: "Mainland USA",
    slug: "women-leading-ai-innovation",
  },
  {
    id: 4,
    type: "Research",
    title: "Responsible AI Framework: New Guidelines for Ethical Implementation",
    date: "December 28, 2024",
    excerpt: "AFAI releases comprehensive framework for responsible AI adoption in organizations.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["Responsible AI", "Research"],
    region: "Mainland USA",
    slug: "responsible-ai-framework",
  },
  {
    id: 5,
    type: "Community",
    title: "San Juan Talent Hub Opens: A New Gateway to AI Careers",
    date: "December 20, 2024",
    excerpt: "AFAI inaugurates state-of-the-art learning facility in the heart of Puerto Rico's capital.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["Community Impact", "Puerto Rico"],
    region: "Puerto Rico",
    slug: "san-juan-talent-hub-opens",
  },
  {
    id: 6,
    type: "Program Updates",
    title: "Small Business AI Adoption Reaches 500 Companies",
    date: "December 15, 2024",
    excerpt: "Local businesses see 40% productivity gains after completing AFAI training programs.",
    image: "/placeholder.svg?height=400&width=600",
    topics: ["Small Business", "Community Impact"],
    region: "Puerto Rico",
    slug: "small-business-ai-adoption",
  },
]

export default function NewsPage() {
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [topicFilter, setTopicFilter] = useState<string>("all")
  const [regionFilter, setRegionFilter] = useState<string>("all")

  const filteredArticles = newsArticles.filter((article) => {
    if (typeFilter !== "all" && article.type !== typeFilter) return false
    if (topicFilter !== "all" && !article.topics.includes(topicFilter)) return false
    if (regionFilter !== "all" && article.region !== regionFilter) return false
    return true
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AFAI News</h1>
            <p className="text-xl text-blue-100">
              Stay informed with the latest news from AFAI. Explore stories about how we're expanding AI access,
              strengthening communities, and building an inclusive future.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-slate-50 py-8 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="By Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Impact Stories">Impact Stories</SelectItem>
                  <SelectItem value="Program Updates">Program Updates</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                </SelectContent>
              </Select>

              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger className="w-[200px] bg-white">
                  <SelectValue placeholder="By Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  <SelectItem value="AI Education">AI Education</SelectItem>
                  <SelectItem value="Workforce Development">Workforce Development</SelectItem>
                  <SelectItem value="Small Business">Small Business</SelectItem>
                  <SelectItem value="Women's Empowerment">Women's Empowerment</SelectItem>
                  <SelectItem value="Responsible AI">Responsible AI</SelectItem>
                  <SelectItem value="Community Impact">Community Impact</SelectItem>
                  <SelectItem value="Partnerships">Partnerships</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                </SelectContent>
              </Select>

              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="By Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Puerto Rico">Puerto Rico</SelectItem>
                  <SelectItem value="Mainland USA">Mainland USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {(typeFilter !== "all" || topicFilter !== "all" || regionFilter !== "all") && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setTypeFilter("all")
                  setTopicFilter("all")
                  setRegionFilter("all")
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} className="group block">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Image */}
                  <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded">
                        {article.type}
                      </span>
                      {article.topics.slice(0, 2).map((topic, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{article.date}</span>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">{article.excerpt}</p>

                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all">
                      Read full story
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No articles found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-slate-800 mb-8">
              Subscribe to our newsletter to receive the latest AFAI news, program updates, and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-900 focus:outline-none focus:border-blue-600"
              />
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
