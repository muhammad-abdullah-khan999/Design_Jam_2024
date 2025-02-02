import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#2A254B] text-white py-2 px-4 text-center text-sm">
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>

      {/* Navigation */}
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Avion
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/plant-pots" className="text-gray-600 hover:text-gray-900">
              Plant pots
            </Link>
            <Link href="/ceramics" className="text-gray-600 hover:text-gray-900">
              Ceramics
            </Link>
            <Link href="/tables" className="text-gray-600 hover:text-gray-900">
              Tables
            </Link>
            <Link href="/chairs" className="text-gray-600 hover:text-gray-900">
              Chairs
            </Link>
            <Link href="/crockery" className="text-gray-600 hover:text-gray-900">
              Crockery
            </Link>
            <Link href="/tableware" className="text-gray-600 hover:text-gray-900">
              Tableware
            </Link>
            <Link href="/cutlery" className="text-gray-600 hover:text-gray-900">
              Cutlery
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </nav>
      </header>

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/productListing-3YfUkwVhDJ1mdwrMhlODhIHCGwAkY1.png"
              alt="The Dandy Chair"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-normal mb-2">The Dandy Chair</h1>
              <p className="text-2xl">£250</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-medium">Description</h2>
              <p className="text-gray-600">
                A timeless design, with premium materials features as one of our most popular and iconic pieces. The
                dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium material</li>
                <li>• Handmade upholstery</li>
                <li>• Quality timeless classic</li>
              </ul>
            </div>

            <div>
              <h2 className="font-medium mb-4">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-600">Height</p>
                  <p>110cm</p>
                </div>
                <div>
                  <p className="text-gray-600">Width</p>
                  <p>75cm</p>
                </div>
                <div>
                  <p className="text-gray-600">Depth</p>
                  <p>50cm</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button className="p-2 hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4">1</span>
                <button className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="bg-[#2A254B] hover:bg-[#2A254B]/90">Add to cart</Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="text-2xl mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "The Dandy chair", price: "£250", image: "/placeholder.svg" },
              { name: "Rustic Vase Set", price: "£155", image: "/placeholder.svg" },
              { name: "The Silky Vase", price: "£125", image: "/placeholder.svg" },
              { name: "The Lucy Lamp", price: "£399", image: "/placeholder.svg" },
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#2A254B] text-[#2A254B]">
              View collection
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="mt-24">
          <h2 className="text-2xl text-center mb-12">What makes our brand different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Next day as standard",
                description: "Order before 3pm and get your order the next day as standard",
              },
              {
                title: "Made by true artisans",
                description: "Handmade crafted goods made with real passion and craftmanship",
              },
              {
                title: "Unbeatable prices",
                description: "For our materials and quality you won't find better prices anywhere",
              },
              {
                title: "Recycled packaging",
                description: "We use 100% recycled packaging to ensure our footprint is manageable",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="font-medium mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-24 text-center">
          <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input type="email" placeholder="your@email.com" className="flex-1" />
            <Button className="bg-[#2A254B] hover:bg-[#2A254B]/90">Sign up</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Our company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-4">Avion</h2>
              <p className="mb-2">21 New York Street</p>
              <p className="mb-2">New York City</p>
              <p>United States of America</p>
              <p className="mt-4">432 34</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p>Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

