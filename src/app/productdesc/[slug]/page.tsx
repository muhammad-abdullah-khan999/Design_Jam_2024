import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    "image": image.asset->url,
    "currentSlug": slug.current,
    description,
    features,
    "height": dimensions.height,
    "depth": dimensions.depth,
    "width": dimensions.width,
  }`;

  return await client.fetch(query, { slug });
}

async function getRecommendedProducts(currentSlug: string) {
  const query = `*[_type == "product" && slug.current != $currentSlug] | order(_createdAt desc) [0...4] {
    _id,
    name,
    price,
    "image": image.asset->url,
    "slug": slug.current
  }`;

  return await client.fetch(query, { currentSlug });
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const recommendedProducts = await getRecommendedProducts(params.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#2A254B] text-white text-center py-3 px-4 text-sm relative">
        <p>Free delivery on all orders over £50 with code easter checkout</p>
        <button className="absolute right-4 top-3 text-white">&times;</button>
      </div>

      {/* Navigation */}
      <nav className="border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Avion
          </Link>
          <div className="flex space-x-6">
            <Link href="/plant-pots" className="text-gray-600">Plant pots</Link>
            <Link href="/ceramics" className="text-gray-600">Ceramics</Link>
            <Link href="/tables" className="text-gray-600">Tables</Link>
            <Link href="/chairs" className="text-gray-600">Chairs</Link>
            <Link href="/crockery" className="text-gray-600">Crockery</Link>
            <Link href="/tableware" className="text-gray-600">Tableware</Link>
            <Link href="/cutlery" className="text-gray-600">Cutlery</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 py-12 px-6">
        <div className="flex justify-center">
          <Image
            src={data.image}
            alt="Product Image"
            width={600}
            height={600}
            className="w-full md:h-[600px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-light">{data.name}</h1>
          <p className="text-2xl text-[#2A254B]">£{data.price}</p>

          <div className="space-y-4">
            <h2 className="font-medium">Description</h2>
            <p className="text-gray-600">{data.description}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>{data.features[0]}</li>
              <li>{data.features[1]}</li>
              <li>{data.features[2]}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-medium">Dimensions</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-600">Height</p>
                <p>{data.height}</p>
              </div>
              <div>
                <p className="text-gray-600">Width</p>
                <p>{data.width}</p>
              </div>
              <div>
                <p className="text-gray-600">Depth</p>
                <p>{data.depth}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded-full">Add to cart</button>
          </div>
        </div>
      </div>

      {/* You might also like */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl mb-8">You might also like</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {recommendedProducts.map((product: any) => (
            <Link key={product._id} href={`/productdesc/${product.slug}`} className="space-y-2">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={305}
                height={375}
                className="w-full h-[250px] object-cover"
              />
              <h3 className="font-medium">{product.name}</h3>
              <p>£{product.price}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products">
            <button className="border border-[#2A254B] text-[#2A254B] px-6 py-2 rounded-full">
              View collection
            </button>
          </Link>
        </div>
      </div>

      {/* Brand Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl text-center mb-12">What makes our brand different</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[{ title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
              { title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
              { title: "Unbeatable prices", description: "For our materials and quality you won't find better prices anywhere" },
              { title: "Recycled packaging", description: "We use 100% recycled packaging to ensure our footprint is manageable" }]
              .map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
          </p>
          <div className="flex gap-4 justify-center">
            <input type="email" placeholder="your@email.com" className="border rounded px-4 py-2 w-64" />
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded-full">Sign up</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Avion</h3>
              <p className="text-sm text-gray-300">21 New York Street<br />New York City<br />United States of America<br />432 34</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Menu</h3>
              <ul className="space-y-2 text-gray-300">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Our company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-300">Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
