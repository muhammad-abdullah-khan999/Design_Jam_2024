"use client";

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import the sanity client
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { ClipLoader } from "react-spinners"; // Add a loading spinner

interface ProductCard {
  name: string;
  price: number;
  image: string;
  slug: string; // Using slug as unique identifier
}

export default function Home() {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const [totalPages, setTotalPages] = useState<number>(1); // Track total pages
  const productsPerPage = 12; // Products per page

  // Fetch products from Sanity CMS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) {
          name,
          price,
          image {
            asset -> {
              _id,
              url
            }
          },
          slug {
            current
          }
        }`;

        const data = await client.fetch(query);
        const formattedProducts = data.map((item: any) => ({
          name: item.name,
          price: item.price,
          image: item.image.asset.url,
          slug: item.slug.current, // Add slug
        }));

        setProducts(formattedProducts);
        setTotalPages(Math.ceil(formattedProducts.length / productsPerPage)); // Calculate total pages
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchProducts();
  }, []);

  // Handle image loading state
  const handleImageLoad = () => {
    setLoading(false); // Image loaded, set loading to false
  };

  // Get products for the current page
  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="h-[146px] sm:h-[209px] bg-cover bg-center sm:pl-20 pb-8 sm:pb-9 content-end text-white max-sm:text-center relative" style={{ backgroundImage: "url(/product-hero-bg.jpeg)" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div> {/* Gradient overlay */}
          <h1 className="z-10 text-3xl sm:text-4xl font-semibold">All products</h1>
          <button className="z-10 absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#2A254B] text-white py-2 px-6 rounded-full text-sm">Shop Now</button>
        </section>

        {/* Categories */}
        <section className="px-6 sm:px-6 py-5 sm:py-2 flex justify-between items-center">
          {/* Category and Filter Section */}
        </section>

        {/* Products */}
        <section className="px-6 sm:px-20 py-7 sm:pb-10 space-y-10 sm:space-y-12">
          {loading ? (
            <div className="flex justify-center items-center">
              <ClipLoader size={50} color="#2A254B" loading={loading} /> {/* Spinner during loading */}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-12">
              {paginateProducts().map((product: ProductCard) => (
                <div key={product.slug} className="relative group">
                  {/* Image and Product Details */}
                  <div className="w-full h-[375px] overflow-hidden relative rounded-lg shadow-lg group-hover:shadow-xl transition duration-300 ease-in-out">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover" // Applying object-fit
                      onLoadingComplete={handleImageLoad} // Handle image load event
                      className="transition duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-6 font-semibold text-xl">{product.name}</h4>
                  <p className="body-lg mt-2">£{product.price}</p>
                  <button className="bg-[#2A254B] text-white mt-4 px-6 py-2 rounded-full transform transition-all duration-300 hover:bg-[#3d2a6e]">
                  <a href={`/productdesc/${product.slug}`}>View Description</a> {/* Link to product page */}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#2A254B] text-white rounded-sm disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="body-lg">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#2A254B] text-white rounded-sm disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Avion</h3>
              <p className="text-sm text-gray-300">
                21 New York Street
                <br />
                New York City
                <br />
                United States of America
                <br />
                432 34
              </p>
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
                <li>Crockery</li>
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
    </>
  );
}
