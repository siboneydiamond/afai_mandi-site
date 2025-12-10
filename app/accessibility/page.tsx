import Link from "next/link"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-5xl font-bold text-slate-900 text-balance">AFAI's commitment to accessibility</h1>
            <p className="text-lg leading-relaxed text-slate-800">
              At the American Foundation for Artificial Intelligence, we are committed to accessibility. We strive to
              make everything—from our systems and operations to our convenings and communications—as inclusive and
              accessible as possible. In alignment with our broader work on{" "}
              <Link href="/programs" className="underline hover:no-underline font-semibold">
                equitable access
              </Link>
              , we are actively working to assess and improve the accessibility and usability of our website.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Standards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold text-slate-900">Meeting the standards</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-8">
                We follow the web content accessibility guidelines (
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  WCAG
                </a>
                , Version 2.1 AA), a universal set of standards designed to make web content accessible to meet the
                needs of every individual, organization, and government. As we develop new pages and functionality, we
                consider the principles of accessible design and development at every stage of the process.
              </p>

              {/* Navigating Website */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Navigating our website</h3>
                <ul className="space-y-4">
                  {[
                    "Site visitors can change the size of the text on the screen.",
                    "The color contrast ratios, or the difference between the light and dark elements on the site, meet WCAG 2.1 AA standards for low vision and color vision deficiencies.",
                    '"Skip to content" links are present at the top of each page for keyboard and screen-reader users.',
                    "Text alternatives are included for visual and auditory information.",
                    "Most pages can be navigated using only a keyboard.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Playing Videos */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Playing videos</h3>
                <ul className="space-y-4">
                  {[
                    "All videos produced by AFAI since 2024 include captions and downloadable transcripts. For videos where visuals require additional understanding, we offer audio-described versions.",
                    "We are continuing to make videos produced prior to 2024 accessible.",
                    "Videos from third-party sources (those not produced by AFAI) may not have captions, accessible transcripts, or audio descriptions.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold text-slate-900">Charting our progress</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-8">
                Accessibility is not a single, static goal. Like many organizations with websites that have grown over
                time, we cannot guarantee all pages of our site are equally accessible at this time. Making updates and
                improvements to our site is an ongoing effort, and we are aware that some areas do not currently meet
                standards.
              </p>

              <h3 className="text-xl font-bold mb-6 text-slate-900">Content that does not yet meet WCAG standards:</h3>
              <ul className="space-y-4 mb-12">
                {[
                  "Some reports and PDFs are not formatted for screen readers.",
                  "Older videos may not have captions, accessible transcripts, or audio descriptions.",
                  "Older articles may not have alt text on images.",
                  "Some interactive elements may not render the correct reading order for screen readers and keyboard navigation.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-slate-700">
                    <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Third-Party Content */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold mb-3 text-slate-900">Third-Party Content</h4>
                <p className="text-slate-700">
                  At times, our site links to third-party content created and maintained by other people and
                  organizations. External links, embedded third-party content, and other components beyond our control
                  may or may not meet WCAG standards for accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">We welcome your feedback</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-8">
              We welcome your thoughts on the accessibility of our website. If you encounter accessibility barriers or
              have other suggestions about the usability of our site, please contact us.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 inline-block">
              <p className="text-sm text-slate-400 mb-2">Email us at</p>
              <a
                href="mailto:accessibility@AmericanFoundationforAI.org"
                className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                accessibility@AmericanFoundationforAI.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/contact"
                className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600">Contact Us</h3>
                <p className="text-slate-600">Get in touch with our team for questions or support</p>
              </Link>
              <Link
                href="/help"
                className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600">Help Center</h3>
                <p className="text-slate-600">Find answers to frequently asked questions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
