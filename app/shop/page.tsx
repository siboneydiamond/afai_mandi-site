import { ShoppingCart, Shirt, Ban as Bag, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AFAI Shop</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Support our mission by purchasing official AFAI merchandise and digital resources. All proceeds fund AI
            education, workforce training, and community programs in underserved regions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Apparel */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">AFAI Branded Apparel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Shirt className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">AFAI T-Shirt</h3>
                  <p className="text-gray-600 mb-4">Multiple colors available</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$25</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Shirt className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">AFAI Hoodie</h3>
                  <p className="text-gray-600 mb-4">"AI for Everyone"</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$45</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Shirt className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">AFAI Polo Shirt</h3>
                  <p className="text-gray-600 mb-4">Professional style</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$35</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Shirt className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">AFAI Hat</h3>
                  <p className="text-gray-600 mb-4">Adjustable fit</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$20</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Accessories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Bag className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Tote Bag</h3>
                  <p className="text-gray-600 mb-4">Durable canvas</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$15</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Notebook</h3>
                  <p className="text-gray-600 mb-4">100 pages</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$12</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <FileText className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Laptop Stickers</h3>
                  <p className="text-gray-600 mb-4">Pack of 5</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">$8</p>
                  <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Digital Products</h2>
            <p className="text-gray-600 mb-8">Instant download • No shipping required</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Responsible AI Handbook</h3>
                <p className="text-gray-700 mb-6">Premium Edition • 150+ pages</p>
                <p className="text-3xl font-bold text-blue-600 mb-6">$29</p>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Download Now</Button>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">AI Literacy Classroom Toolkit</h3>
                <p className="text-gray-700 mb-6">Extended Version • Lesson plans & activities</p>
                <p className="text-3xl font-bold text-yellow-600 mb-6">$39</p>
                <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Download Now</Button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Small Business AI Pack</h3>
                <p className="text-gray-700 mb-6">Bonus templates & tools</p>
                <p className="text-3xl font-bold text-green-600 mb-6">$24</p>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">Download Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How Your Purchase Helps</h2>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            Every purchase directly supports AI education for students, workforce mobility for workers, small business
            digital modernization, community innovation labs, and women's empowerment programs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "AI education for students",
              "Workforce mobility for workers",
              "Small business digital modernization",
              "Community innovation labs",
              "Women's empowerment programs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/30 p-4 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-gray-900 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
