import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { createClient } from "next-sanity";
import ProductsList from "../../../components/ProductsList";

const client = createClient({
  projectId: "nv6ah801",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

// Fetch products from Sanity
async function getProducts() {
  return await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      price,
      "image": image.asset->url
    }`
  );
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="h-[180px] sm:h-[250px] bg-cover bg-center flex items-center justify-center text-white text-center bg-opacity-50"
          style={{ backgroundImage: "url(/product-hero-bg.jpeg)" }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
            Explore Our Products
          </h1>
        </section>

        {/* Categories Section */}
        <section className="px-6 sm:px-10 py-5 sm:py-6 flex justify-between items-center">
          <ul className="flex gap-x-4 sm:gap-x-6">
            <li className="text-sm sm:text-base font-semibold py-2 cursor-pointer">
              Category
            </li>
            <li className="text-sm sm:text-base font-semibold py-2 cursor-pointer">
              Product Type
            </li>
          </ul>
        </section>

        {/* Products Section */}
        <section className="px-6 sm:px-10 py-7 sm:pb-10 space-y-12">
          <ProductsList products={products} />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
