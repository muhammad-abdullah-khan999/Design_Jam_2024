import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Access cart items from the Redux store
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="px-6 sm:px-7 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image src="/avion-logo.png" alt="Avion Logo" width={65} height={30} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-x-12 items-center">
          <ul className="flex gap-x-8 text-[#726E8D]">
            <li>
              <Link href="/products" className="hover:text-black transition duration-300 ease-in-out">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition duration-300 ease-in-out">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black transition duration-300 ease-in-out">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-black transition duration-300 ease-in-out">
                Blog
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-x-4 relative">
            <button aria-label="Search" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src="/nav-search.svg" alt="Search" width={16} height={16} />
            </button>

            {/* Cart Icon */}
            <Link href="/cart" aria-label="Cart" className="relative">
              <Image src="/nav-cart.svg" alt="Cart" width={16} height={16} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-end justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button aria-label="User Profile" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src="/nav-user.svg" alt="User Profile" width={16} height={16} />
            </button>
          </div>
        </div>

         {/* Cart Icon */}
         <button className="sm:hidden"><Link href="/cart" aria-label="Cart" className="relative">
              <Image src="/nav-cart.svg" alt="Cart" width={20} height={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-end justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
          aria-label="Toggle menu"
        >
          <Image src="/nav-hamburger.svg" alt="Menu" width={24} height={24} />
        </button>
       
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col gap-4 px-6">
            <li>
              <Link href="/products" className="block py-2 text-[#726E8D] hover:text-black">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 text-[#726E8D] hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 text-[#726E8D] hover:text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 text-[#726E8D] hover:text-black">
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex justify-between gap-6 mt-4 px-6">
            <button aria-label="Search" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src="/nav-search.svg" alt="Search" width={20} height={20} />
            </button>

            

            <button aria-label="User Profile" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src="/nav-user.svg" alt="User Profile" width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
