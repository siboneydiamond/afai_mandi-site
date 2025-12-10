export default function MicroMastersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">MicroMasters® Programs</h1>
            <p className="text-2xl text-slate-300 mb-8">
              Advance your career with graduate-level learning from AFAI. Earn a credential recognized by employers and
              gain a pathway to master's degree programs.
            </p>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Available Programs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="/micromasters/ai-workforce-transformation"
            className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <h3 className="text-2xl font-bold mb-2">AI & Workforce</h3>
                <p className="text-blue-100">Transformation</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  MicroMasters®
                </span>
                <span className="text-sm text-slate-500">3 courses</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                AI & Workforce Transformation
              </h3>
              <p className="text-slate-600 mb-4">
                Master AI fundamentals, implementation strategies, and change management to lead workforce
                transformation initiatives.
              </p>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>6 months</span>
                <span>2-4 hrs/week</span>
              </div>
            </div>
          </a>

          {/* More programs can be added here */}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which program is right for you?</h2>
          <p className="text-xl text-slate-600 mb-8">Explore our full course catalog or speak with an advisor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/learn"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse All Courses
            </a>
            <a
              href="/help"
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
