export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8 text-slate-400">
            <span>Home</span> <span className="mx-2">›</span> <span>Learn</span>
          </nav>

          <h1 className="text-5xl font-bold mb-6">Find AI courses by topic</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Upskill for your current role or reskill for a new one with AFAI's AI-powered courses. Explore by subject to
            find the right course for your goals and start learning on your schedule.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors">
            Explore all topics
          </button>
        </div>
      </section>

      {/* Why AFAI Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why millions of learners choose AFAI</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Self-paced learning</h3>
              <p className="text-slate-600">
                Many of AFAI's top online courses are self-paced, allowing you to schedule your education around work
                and family.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Programs for every goal</h3>
              <p className="text-slate-600">
                AFAI offers a wide range of online courses and programs designed to help you build the AI skills you
                need to achieve your professional goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Leading experts and institutions</h3>
              <p className="text-slate-600">
                AFAI partners with top institutions and industry leaders to bring you world-class online learning
                opportunities focused on AI and digital skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Career advancement</h3>
              <p className="text-slate-600">
                Designed with your career in mind, AFAI programs provide expert instruction and teach practical,
                job-ready AI skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Subjects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Trending subjects learners are studying in 2025</h2>
          <p className="text-slate-600 mb-12">
            Unsure which online courses to take first? Explore the trending subjects popular with learners in 2025.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              "Artificial Intelligence",
              "Business Administration",
              "Computer Programming",
              "Data Science",
              "Design",
              "Economics",
              "Law",
              "Math",
            ].map((subject) => (
              <div
                key={subject}
                className="bg-slate-50 hover:bg-slate-100 p-6 rounded-lg cursor-pointer transition-colors"
              >
                <h3 className="font-bold text-lg">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Trending courses in 2025</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "AI Fundamentals",
                institution: "AFAI Academy",
                type: "Course",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Business AI Applications",
                institution: "AFAI Business School",
                type: "Professional Certificate",
                courses: "6 Courses",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Python for AI",
                institution: "AFAI Tech Institute",
                type: "Professional Certificate",
                courses: "4 Courses",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "AI for Small Business",
                institution: "AFAI Entrepreneurship Center",
                type: "Professional Certificate",
                courses: "5 Courses",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{course.institution}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">{course.type}</span>
                    {course.courses && <span className="text-xs text-slate-600">{course.courses}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-slate-600 hover:text-slate-900 font-semibold underline">Show More</button>
          </div>
        </div>
      </section>

      {/* Courses by Topic */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">AFAI courses and programs by topic</h2>
          <p className="text-slate-600 mb-12">
            We've organized the best online courses by subject to help you find the right educational opportunity for
            personal fulfillment and professional success.
          </p>

          {/* Business Administration */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Business Administration</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "accounting",
                "agile",
                "agile project management",
                "bookkeeping",
                "business analysis",
                "business analytics",
                "business communications",
                "business development",
                "business law",
                "business model",
                "business plan",
                "business skills",
                "business strategy",
                "change management",
                "communications",
                "competitive strategy",
                "customer relationship management",
                "digital marketing",
                "ecommerce",
                "entrepreneurship",
                "excel",
                "finance",
                "financial accounting",
                "financial management",
                "hospitality",
                "hospitality management",
                "human resources",
                "innovation",
                "international business",
                "leadership",
                "management",
                "marketing",
                "mba courses",
                "negotiations",
                "operations",
                "operations management",
                "organizational behavior",
                "problem solving",
                "procurement",
                "product management",
                "project management",
                "risk management",
                "sales",
                "scrum",
                "strategic management",
                "strategy",
                "supply chain management",
                "teamwork",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Business Communication */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Business Communication</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "branding",
                "business communications",
                "career development",
                "communications",
                "content marketing",
                "copywriting",
                "corporate culture",
                "critical thinking skills",
                "customer insights",
                "decision making",
                "digital leadership",
                "digital marketing",
                "enterprise sales",
                "growth marketing",
                "interview",
                "journalism",
                "leadership",
                "marketing",
                "marketing management",
                "marketing strategy",
                "negotiations",
                "networking events",
                "organizational behavior",
                "problem solving",
                "professional development",
                "professional skills",
                "professional writing",
                "public speaking",
                "remote work",
                "sales",
                "social media",
                "storytelling",
                "strategic thinking",
                "teamwork",
                "time management",
                "workplace communication",
                "writing",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Computer Programming */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Computer Programming</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "algorithms",
                "android development",
                "api",
                "artificial intelligence",
                "automation",
                "back-end development",
                "blockchain",
                "c programming",
                "cloud computing",
                "coding",
                "computer science",
                "cybersecurity",
                "data structures",
                "database",
                "devops",
                "front-end development",
                "full-stack development",
                "game development",
                "git",
                "html",
                "java",
                "javascript",
                "linux",
                "machine learning",
                "mobile development",
                "node.js",
                "object-oriented programming",
                "python",
                "react",
                "software development",
                "software engineering",
                "sql",
                "typescript",
                "web development",
                "web design",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Economics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Economics</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "behavioral economics",
                "business economics",
                "development economics",
                "econometrics",
                "economic development",
                "economic policy",
                "financial economics",
                "game theory",
                "global economy",
                "health economics",
                "international economics",
                "macroeconomics",
                "microeconomics",
                "monetary policy",
                "political economy",
                "public economics",
                "quantitative economics",
                "statistics",
                "sustainable development",
                "trade",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Design</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "3d design",
                "adobe illustrator",
                "adobe photoshop",
                "animation",
                "branding",
                "cad",
                "color theory",
                "creative thinking",
                "design thinking",
                "digital design",
                "figma",
                "graphic design",
                "industrial design",
                "interaction design",
                "interior design",
                "logo design",
                "product design",
                "prototyping",
                "typography",
                "ui design",
                "user experience",
                "ux design",
                "ux research",
                "visual design",
                "web design",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Law */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Law</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "administrative law",
                "business law",
                "constitutional law",
                "contract law",
                "corporate law",
                "criminal justice",
                "criminal law",
                "cybersecurity law",
                "employment law",
                "environmental law",
                "family law",
                "health law",
                "human rights",
                "intellectual property",
                "international law",
                "legal studies",
                "legal writing",
                "media law",
                "patent law",
                "privacy law",
                "property law",
                "regulatory compliance",
                "tax law",
                "trademark law",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Math */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Math</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "algebra",
                "applied mathematics",
                "calculus",
                "data analysis",
                "differential equations",
                "discrete mathematics",
                "geometry",
                "linear algebra",
                "logic",
                "mathematical modeling",
                "number theory",
                "probability",
                "quantitative methods",
                "statistics",
                "trigonometry",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>

          {/* Social Science */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Social Science</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "anthropology",
                "archaeology",
                "civic engagement",
                "community development",
                "criminal justice",
                "cultural studies",
                "demography",
                "education",
                "geography",
                "global studies",
                "history",
                "human behavior",
                "international relations",
                "linguistics",
                "political science",
                "psychology",
                "public health",
                "public policy",
                "social justice",
                "social work",
                "sociology",
                "urban planning",
                "world history",
              ]
                .map((topic) => (
                  <a
                    key={topic}
                    href={`/learn/${topic.replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  >
                    {topic}
                  </a>
                ))
                .reduce((prev, curr) => [prev, " | ", curr] as any)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
