import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[--dark-primary] text-white pt-10 sm:pt-16 pb-8 px-6 sm:px-16">
      {/* Footer Section */}
      <section className="grid grid-cols-2 gap-x-16 sm:grid-cols-4 lg:grid-cols-4 sm:gap-x-12 pb-12 border-b border-[--primary]">
        {/* Menu */}
        <div className="space-y-3">
          <h5 className="font-semibold text-lg">Menu</h5>
          <ul className="space-y-3">
            <li className="hover:text-[--highlight] cursor-pointer">New arrivals</li>
            <li className="hover:text-[--highlight] cursor-pointer">Best sellers</li>
            <li className="hover:text-[--highlight] cursor-pointer">Recently viewed</li>
            <li className="hover:text-[--highlight] cursor-pointer">Popular this week</li>
            <Link href="/products">
              <li className="hover:text-[--highlight] cursor-pointer">All products</li>
            </Link>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h5 className="font-semibold text-lg">Categories</h5>
          <ul className="space-y-3">
            <li className="hover:text-[--highlight] cursor-pointer">Crockery</li>
            <li className="hover:text-[--highlight] cursor-pointer">Furniture</li>
            <li className="hover:text-[--highlight] cursor-pointer">Homeware</li>
            <li className="hover:text-[--highlight] cursor-pointer">Plant pots</li>
            <li className="hover:text-[--highlight] cursor-pointer">Chairs</li>
            <li className="hover:text-[--highlight] cursor-pointer">Crockery</li>
          </ul>
        </div>

        {/* Our company */}
        <div className="space-y-3">
          <Link href="/">
            <h5 className="font-semibold text-lg">Our company</h5>
          </Link>
          <ul className="space-y-3">
            <Link href="/about">
              <li className="hover:text-[--highlight] cursor-pointer">About us</li>
            </Link>
            <li className="hover:text-[--highlight] cursor-pointer">Vacancies</li>
            <li className="hover:text-[--highlight] cursor-pointer">Contact us</li>
            <li className="hover:text-[--highlight] cursor-pointer">Privacy</li>
            <li className="hover:text-[--highlight] cursor-pointer">Returns policy</li>
          </ul>
        </div>

        {/* Mailing List */}
        <div className="space-y-4 col-span-2 lg:col-span-1">
          <h5 className="font-semibold text-lg">Join our mailing list</h5>
          <form className="sm:w-[627px] flex gap-x-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="py-4 px-6 sm:px-8 bg-[#ffffff26] text-black grow rounded-md focus:outline-none"
            />
            <button type="submit" className="btn btn-primary hover:bg-[#2A254B] hover:text-white">Sign up</button>
          </form>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="pt-6 flex sm:justify-between items-center justify-between">
        <div><p className="body-sm text-center sm:text-left">Copyright Muhammad Abdullah Khan 2024        .</p></div>

        <div className="flex gap-x-6 justify-center sm:justify-start">
          <Image
            src="/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
            className="max-sm:hidden hover:scale-110 transition-transform"
          />
          <Image
            src="/instagram.svg"
            alt="instagram"
            width={24}
            height={24}
            className=" max-sm:hidden hover:scale-110 transition-transform"
          />
          <Image
            src="/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
            className="max-sm:hidden hover:scale-110 transition-transform"
          />
          <Image
            src="/pinterest.svg"
            alt="pinterest"
            width={24}
            height={24}
            className="max-sm:hidden hover:scale-110 transition-transform"
          />
          <Image
            src="/skype.svg"
            alt="skype"
            width={24}
            height={24}
            className="max-sm:hidden hover:scale-110 transition-transform"
          />
          <Image
            src="/twitter.svg"
            alt="twitter"
            width={24}
            height={24}
            className="max-sm:hidden hover:scale-110 transition-transform"
          />
        </div>
      </section>
    </footer>
  );
}
