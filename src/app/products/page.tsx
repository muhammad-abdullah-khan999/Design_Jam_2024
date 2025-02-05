"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Import the sanity client
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners"; // Loading spinner
import Footer from "../../../components/Footer";

interface ProductCard {
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const productsPerPage = 12;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryQuery = `*[_type == "category"] { name, slug { current } }`;
        const categoryData = await client.fetch(categoryQuery);
        setCategories(categoryData.map((cat: any) => ({ name: cat.name, slug: cat.slug.current })));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryFilter = selectedCategory ? `&& category->slug.current == "${selectedCategory}"` : "";
        const query = `*[_type == "product" ${categoryFilter}] | order(_createdAt desc) {
          name,
          price,
          image { asset -> { _id, url } },
          slug { current },
          category-> { slug }
        }`;
        
        const data = await client.fetch(query);
        const formattedProducts = data.map((item: any) => ({
          name: item.name,
          price: item.price,
          image: item.image.asset.url,
          slug: item.slug.current,
          category: item.category?.slug.current || "",
        }));
        
        setProducts(formattedProducts);
        setTotalPages(Math.ceil(formattedProducts.length / productsPerPage));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  };

  return (
    <>
      <Navbar />
      
      {/* Category Filter */}
      <ul className="flex gap-x-11 sm:justify-center text-[#726E8D] max-sm:px-6 py-4 sm:py-5 bg-[--light-gray] *:w-max *:shrink-0 max-sm:overflow-x-auto">
        <li
          className={`cursor-pointer ${!selectedCategory ? "font-bold text-black" : ""}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Products
        </li>
        {categories.map((category) => (
          <li
            key={category.slug}
            className={`cursor-pointer ${selectedCategory === category.slug ? "font-bold text-black" : ""}`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>

      <main>
        {/* Hero Section */}
        <section
          className="h-[146px] sm:h-[209px] bg-cover bg-center sm:pl-20 pb-8 sm:pb-9 content-end text-white max-sm:text-center relative"
          style={{ backgroundImage: "url(/product-hero-bg.jpeg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <h1 className="z-10 text-3xl sm:text-4xl font-semibold">All Products</h1>
        </section>

        {/* Search Bar */}
        <section className="px-6 sm:px-6 py-5 sm:py-2 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-4 py-2 w-full sm:w-1/2 border border-[#2A254B] rounded-full focus:outline-none"
          />
        </section>

        {/* Products Grid */}
        <section className="px-6 sm:px-20 py-7 sm:pb-10 space-y-10 sm:space-y-12">
          {loading ? (
            <div className="flex justify-center items-center">
              <ClipLoader size={50} color="#2A254B" />
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-12">
              {paginateProducts().map((product) => (
                <div key={product.slug} className="relative group">
                  <div className="w-full h-[375px] overflow-hidden relative rounded-lg shadow-lg group-hover:shadow-xl transition duration-300 ease-in-out">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="transition duration-500 ease-in-out group-hover:scale-105 object-cover"
                    />
                  </div>
                  <h4 className="mt-6 font-semibold text-xl">{product.name}</h4>
                  <p className="body-lg mt-2">£{product.price}</p>
                  <Link href={`/productdesc/${product.slug}`}>
                    <button className="bg-[#2A254B] text-white mt-4 px-6 py-2 rounded-full transform transition-all duration-300 hover:bg-[#3d2a6e]">
                      View Description
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center text-xl text-gray-600">
              No products found.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
