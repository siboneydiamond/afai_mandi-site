import Link from "next/link"
import { BookOpen, Clock, Star, Filter, ChevronDown } from "lucide-react"

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/learn" className="text-slate-400 hover:text-white">
              Learn
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/learn/business-administration" className="text-slate-400 hover:text-white">
              Business Administration
            </Link>
            <span className="text-slate-600">/</span>
            <span>Accounting</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">Accounting Courses</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Master the fundamentals of accounting, financial reporting, and business finance with AI-enhanced learning.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:border-slate-400">
              <Filter className="w-4 h-4" />
              Level
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:border-slate-400">
              Duration
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:border-slate-400">
              Type
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="ml-auto">
              <span className="text-slate-600">24 courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Course Card 1 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Financial Accounting Fundamentals</h3>
              <p className="text-slate-600 text-sm mb-4">
                Learn the basics of financial accounting, including balance sheets, income statements, and cash flow.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />8 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Beginner
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                </div>
                <span className="text-slate-500 text-sm">(2,341 reviews)</span>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Managerial Accounting</h3>
              <p className="text-slate-600 text-sm mb-4">
                Understand cost accounting, budgeting, and decision-making for business management.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />6 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Intermediate
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-slate-500 text-sm">(1,892 reviews)</span>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Tax Accounting and Preparation</h3>
              <p className="text-slate-600 text-sm mb-4">
                Master tax principles, compliance, and preparation for individuals and businesses.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Advanced
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
                <span className="text-slate-500 text-sm">(1,543 reviews)</span>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Auditing and Assurance Services</h3>
              <p className="text-slate-600 text-sm mb-4">
                Learn auditing principles, internal controls, and assurance services for compliance.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />8 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Advanced
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.6</span>
                </div>
                <span className="text-slate-500 text-sm">(987 reviews)</span>
              </div>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Accounting Software with AI</h3>
              <p className="text-slate-600 text-sm mb-4">
                Master QuickBooks, Xero, and AI-powered accounting tools for modern businesses.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />4 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Beginner
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                </div>
                <span className="text-slate-500 text-sm">(2,156 reviews)</span>
              </div>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/placeholder.svg?height=200&width=400" alt="Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-yellow-600 font-semibold mb-2">AFAI Business School</div>
              <h3 className="text-lg font-bold mb-2">Forensic Accounting</h3>
              <p className="text-slate-600 text-sm mb-4">
                Investigate financial fraud, analyze evidence, and support legal proceedings.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 weeks
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Advanced
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
                <span className="text-slate-500 text-sm">(743 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/learn/business-administration/finance"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200"
            >
              Finance
            </Link>
            <Link
              href="/learn/business-administration/business-analytics"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200"
            >
              Business Analytics
            </Link>
            <Link
              href="/learn/business-administration/corporate-finance"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200"
            >
              Corporate Finance
            </Link>
            <Link
              href="/learn/economics"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200"
            >
              Economics
            </Link>
          </div>
        </div>

        {/* Career Pathways */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Career Pathways in Accounting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Staff Accountant</h3>
              <p className="text-slate-600 mb-2">Manage financial records, prepare reports, and ensure compliance.</p>
              <p className="text-sm text-slate-500">Average Salary: $55,000 - $70,000</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Senior Accountant</h3>
              <p className="text-slate-600 mb-2">
                Oversee accounting operations, supervise staff, and manage complex transactions.
              </p>
              <p className="text-sm text-slate-500">Average Salary: $70,000 - $95,000</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">CPA (Certified Public Accountant)</h3>
              <p className="text-slate-600 mb-2">Provide expert accounting, auditing, and tax services to clients.</p>
              <p className="text-sm text-slate-500">Average Salary: $80,000 - $120,000</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Controller / CFO</h3>
              <p className="text-slate-600 mb-2">
                Lead financial strategy, oversee all accounting operations, and guide executive decisions.
              </p>
              <p className="text-sm text-slate-500">Average Salary: $100,000 - $200,000+</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Start Learning Accounting Today</h2>
          <p className="text-lg mb-8">
            Join thousands of learners building in-demand accounting skills with AI-enhanced education.
          </p>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  )
}
