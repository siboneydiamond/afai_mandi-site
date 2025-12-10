import Link from "next/link"
import { Calendar, MapPin, Users, DollarSign, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const events: Record<string, any> = {
  "latinos-in-ai-summit-2025": {
    title: "2025 Latinos in AI Summit",
    type: "Conferences & Summits",
    date: "July 15-17, 2025",
    time: "9:00 AM - 6:00 PM EDT",
    location: "San Juan Convention Center",
    city: "San Juan, Puerto Rico",
    capacity: "500 attendees",
    cost: "Free for students, $150 general admission",
    image: "/placeholder.svg?height=500&width=1200",
    description:
      "The Latinos in AI Summit is the premier gathering of Latino AI professionals, researchers, students, and allies committed to advancing Latino representation and leadership in artificial intelligence.",
    fullDescription: `Join us for three transformative days in San Juan, Puerto Rico, as we celebrate Latino excellence in AI and chart the future of inclusive technology innovation.

This year's summit features:
- 50+ speakers from leading tech companies and research institutions
- Technical workshops on cutting-edge AI topics
- Career fair with 30+ employers actively recruiting Latino talent
- Networking sessions and community building activities
- Policy discussions on AI ethics and equity
- Student mentorship programs and scholarship opportunities`,
    schedule: [
      {
        day: "Day 1 - July 15",
        sessions: [
          { time: "9:00 AM", title: "Registration & Welcome Coffee" },
          { time: "10:00 AM", title: "Opening Keynote: The State of Latinos in AI" },
          { time: "11:30 AM", title: "Panel: Breaking Into AI Research" },
          { time: "1:00 PM", title: "Lunch & Networking" },
          { time: "2:30 PM", title: "Technical Workshops (Track A & B)" },
          { time: "5:00 PM", title: "Welcome Reception" },
        ],
      },
      {
        day: "Day 2 - July 16",
        sessions: [
          { time: "9:00 AM", title: "Breakfast & Morning Sessions" },
          { time: "10:00 AM", title: "Keynote: AI for Social Good" },
          { time: "11:30 AM", title: "Career Fair Opens" },
          { time: "1:00 PM", title: "Lunch Break" },
          { time: "2:30 PM", title: "Workshops: Applied AI Skills" },
          { time: "5:00 PM", title: "Poster Session & Demos" },
          { time: "7:00 PM", title: "Gala Dinner" },
        ],
      },
      {
        day: "Day 3 - July 17",
        sessions: [
          { time: "9:00 AM", title: "Breakfast Sessions" },
          { time: "10:00 AM", title: "Panel: The Future of AI Policy" },
          { time: "11:30 AM", title: "Mentor Matching & Networking" },
          { time: "1:00 PM", title: "Closing Lunch" },
          { time: "2:30 PM", title: "Closing Keynote & Awards" },
          { time: "4:00 PM", title: "Summit Concludes" },
        ],
      },
    ],
    speakers: [
      {
        name: "Dr. María Isabel Santiago",
        title: "Executive Director, AFAI",
        bio: "Leading AI education equity initiatives",
      },
      { name: "Dr. Carlos Mendoza", title: "AI Research Scientist, Tech Corp", bio: "Pioneering work in NLP" },
      { name: "Ana Rodriguez", title: "VP Engineering, Startup Inc", bio: "Building inclusive AI teams" },
    ],
    registration: {
      available: true,
      link: "/contact",
      deadline: "June 30, 2025",
    },
    past: false,
  },
  "ai-workforce-workshop-spring-2025": {
    title: "AI Workforce Transformation Workshop",
    type: "Workshops",
    date: "May 20, 2025",
    time: "10:00 AM - 4:00 PM EDT",
    location: "Virtual Event",
    city: "Online",
    capacity: "100 participants",
    cost: "Free",
    image: "/placeholder.svg?height=500&width=1200",
    description:
      "A hands-on workshop for HR leaders and workforce development professionals on implementing AI upskilling programs.",
    fullDescription: `Learn practical strategies for preparing your workforce for the AI era. This interactive virtual workshop covers everything from needs assessment to program implementation.

Workshop outcomes:
- Understand the current AI skills landscape
- Learn how to assess your organization's AI readiness
- Discover effective upskilling program models
- Get templates and tools for immediate implementation
- Network with peer HR and workforce development leaders`,
    schedule: [
      {
        day: "Workshop Day - May 20",
        sessions: [
          { time: "10:00 AM", title: "Welcome & Introductions" },
          { time: "10:30 AM", title: "The AI Skills Gap: Data & Trends" },
          { time: "11:30 AM", title: "Assessing Organizational Readiness" },
          { time: "12:30 PM", title: "Break" },
          { time: "1:00 PM", title: "Designing Effective Upskilling Programs" },
          { time: "2:30 PM", title: "Implementation Planning Workshop" },
          { time: "3:30 PM", title: "Q&A and Next Steps" },
        ],
      },
    ],
    speakers: [
      {
        name: "Lisa Thompson",
        title: "Workforce Development Director, AFAI",
        bio: "Expert in adult learning and technology training",
      },
    ],
    registration: {
      available: true,
      link: "/contact",
      deadline: "May 15, 2025",
    },
    past: false,
  },
  // Past event example
  "latinos-in-ai-summit-2024": {
    title: "2024 Latinos in AI Summit",
    type: "Conferences & Summits",
    date: "September 20-22, 2024",
    time: "9:00 AM - 6:00 PM EDT",
    location: "San Juan Convention Center",
    city: "San Juan, Puerto Rico",
    capacity: "350 attendees",
    cost: "Free for students, $125 general admission",
    image: "/placeholder.svg?height=500&width=1200",
    description:
      "Our inaugural summit brought together 350 participants from 15 countries to advance Latino representation in AI.",
    fullDescription: `The inaugural Latinos in AI Summit was a historic gathering that brought together the Latino AI community for the first time at this scale.

Highlights:
- 350 participants from 15 countries
- 40+ speakers and panelists
- 25+ technical workshops
- 20+ companies at career fair
- $500K in scholarships awarded
- Launch of the Latino AI Research Network`,
    schedule: [
      {
        day: "Recap",
        sessions: [
          { time: "", title: "Thank you to all 350 participants who made this event a success!" },
          { time: "", title: "View photos and session recordings on our YouTube channel" },
        ],
      },
    ],
    speakers: [],
    registration: {
      available: false,
      link: "",
      deadline: "",
    },
    past: true,
  },
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug]

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Event Not Found</h1>
          <Button asChild>
            <Link href="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-purple-800">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              href="/events"
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
            <span className="inline-block bg-yellow-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {event.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">{event.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Event</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{event.fullDescription}</p>
            </div>

            {/* Schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule</h2>
                <div className="space-y-6">
                  {event.schedule.map((day: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold text-blue-600 mb-4">{day.day}</h3>
                      <div className="space-y-3">
                        {day.sessions.map((session: any, sessionIdx: number) => (
                          <div key={sessionIdx} className="flex gap-4 pb-3 border-b border-slate-200 last:border-0">
                            {session.time && (
                              <div className="text-sm font-semibold text-slate-500 w-24 flex-shrink-0">
                                {session.time}
                              </div>
                            )}
                            <div className={session.time ? "" : "text-slate-600"}>{session.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Speakers</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-slate-900">{speaker.name}</h3>
                        <p className="text-sm text-slate-600">{speaker.title}</p>
                        <p className="text-sm text-slate-500 mt-1">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
              <h3 className="font-bold text-slate-900 mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">{event.date}</div>
                    <div className="text-sm text-slate-600">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">{event.location}</div>
                    <div className="text-sm text-slate-600">{event.city}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-900">{event.capacity}</div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-900">{event.cost}</div>
                </div>
              </div>

              {/* Registration */}
              {!event.past && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  {event.registration.available ? (
                    <>
                      <Button asChild className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 mb-2">
                        <Link href={event.registration.link}>
                          Register Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <p className="text-xs text-slate-500 text-center">
                        Registration closes {event.registration.deadline}
                      </p>
                    </>
                  ) : (
                    <div className="text-center text-slate-600">Registration closed</div>
                  )}
                </div>
              )}

              {event.past && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-4">This event has concluded</p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/events">View Upcoming Events</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Share Card */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Share This Event</h3>
              <p className="text-sm text-slate-600 mb-4">Help us spread the word about this event!</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(events).map((slug) => ({
    slug,
  }))
}
