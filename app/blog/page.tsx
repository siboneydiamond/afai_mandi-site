"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const blogPosts = [
  {
    id: 1,
    slug: "bridging-digital-divide-puerto-rico",
    title: "Bridging the Digital Divide: Puerto Rico's Path to AI Leadership",
    excerpt:
      "As AI transforms every sector of the global economy, Puerto Rico stands at a crossroads. With strategic investment in education and infrastructure, the island can become a bridge between North and Latin American AI innovation...",
    author: "Dr. María Isabel Santiago",
    date: "December 8, 2024",
    category: "AI Policy & Leadership",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    slug: "women-leading-ai-revolution",
    title: "Women Leading the AI Revolution: Breaking Barriers in Tech",
    excerpt:
      "In underserved communities across the U.S., women are often excluded from emerging technology careers. Our Women in AI initiative is changing that narrative by providing pathways to high-paying tech careers...",
    author: "Carmen Rodriguez",
    date: "November 28, 2024",
    category: "Women's Empowerment",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    slug: "ai-workforce-transformation-now",
    title: "The Workforce Transformation We Need: AI Skills for All",
    excerpt:
      "The future of work is here, and workers in traditional industries are being left behind. This month, as policymakers debate workforce development funding, we argue that AI literacy is no longer optional—it's essential...",
    author: "James Mitchell",
    date: "November 15, 2024",
    category: "Workforce Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    slug: "small-business-ai-adoption",
    title: "Small Businesses, Big Impact: AI Adoption in Underserved Communities",
    excerpt:
      "While large corporations invest billions in AI, small businesses in underserved communities struggle to access even basic automation tools. Our Small Business AI Program shows how targeted support can level the playing field...",
    author: "Luis Hernandez",
    date: "October 22, 2024",
    category: "Small Business",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    slug: "responsible-ai-development",
    title: "Responsible AI Development: Building Trust Through Transparency",
    excerpt:
      "As AI systems become more prevalent in education, hiring, and public services, concerns about bias and accountability grow. How can we ensure AI serves everyone fairly? Our approach emphasizes community involvement...",
    author: "Dr. Elena Chen",
    date: "October 10, 2024",
    category: "Responsible AI",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    slug: "latino-ai-talent-pipeline",
    title: "Building the Latino AI Talent Pipeline: From Education to Employment",
    excerpt:
      "Latino communities represent a vast untapped talent pool for the AI economy. With intentional investment in bilingual education and culturally responsive training, we can create pathways from K-12 to tech careers...",
    author: "Sofia Ramirez",
    date: "September 28, 2024",
    category: "Education",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [themeFilter, setThemeFilter] = useState("all")
  const [authorFilter, setAuthorFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const featuredPost = blogPosts[0]
  const sidebarPosts = blogPosts.slice(1, 5)
  const allPosts = blogPosts

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">AFAI Insights</h1>
            <p className="text-lg leading-relaxed text-blue-100 mb-8">
              AFAI&apos;s Insights blog is a platform for thought leaders, practitioners, and partners to exchange ideas
              on the most pressing issues in AI education, workforce development, and equitable technology access. As
              artificial intelligence reshapes our economy and society, we believe diverse voices and perspectives are
              needed more than ever.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              <Link href="/news">Read our news updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured & Sidebar Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 text-sm font-semibold rounded mb-3">
                    AFAI INSIGHTS
                  </span>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-200 mb-3">{featuredPost.excerpt}</p>
                  <p className="text-sm text-slate-300">By {featuredPost.author}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar Posts */}
          <div className="space-y-6">
            {sidebarPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <div className="border-b border-slate-200 pb-5">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-semibold rounded mb-2">
                    AFAI INSIGHTS
                  </span>
                  <span className="text-xs text-slate-500 ml-2">{post.date}</span>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 mt-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600">By {post.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">AFAI Insights blog posts</h2>

          {/* Search and Filters */}
          <div className="bg-slate-900 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              <Select value={themeFilter} onValueChange={setThemeFilter}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes</SelectItem>
                  <SelectItem value="ai-education">AI Education</SelectItem>
                  <SelectItem value="workforce">Workforce Development</SelectItem>
                  <SelectItem value="women">Women&apos;s Empowerment</SelectItem>
                  <SelectItem value="small-business">Small Business</SelectItem>
                  <SelectItem value="responsible-ai">Responsible AI</SelectItem>
                  <SelectItem value="policy">AI Policy & Leadership</SelectItem>
                  <SelectItem value="latino-talent">Latino Talent Pipeline</SelectItem>
                </SelectContent>
              </Select>
              <Select value={authorFilter} onValueChange={setAuthorFilter}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Authors</SelectItem>
                  <SelectItem value="santiago">Dr. María Isabel Santiago</SelectItem>
                  <SelectItem value="rodriguez">Carmen Rodriguez</SelectItem>
                  <SelectItem value="mitchell">James Mitchell</SelectItem>
                  <SelectItem value="hernandez">Luis Hernandez</SelectItem>
                  <SelectItem value="chen">Dr. Elena Chen</SelectItem>
                  <SelectItem value="ramirez">Sofia Ramirez</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Date published" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">Search</Button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-semibold rounded mb-2">
                    AFAI INSIGHTS
                  </span>
                  <span className="text-xs text-slate-500 ml-2">{post.date}</span>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-3 mt-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600">By {post.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
