"use client"

import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Navbar />
      {/* Hero Section */}
      <div>
        <div className='hidden lg:block lg:bg-[url(/heroImage.png)] bg-cover bg-center lg:h-[704px] lg:w-[100vw] lg:py-[130px] lg:pl-[44vw] lg:pr-[180px] relative'>
          <div className='absolute  inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 '></div>
          <div className='relative z-10 bg-white pl-[53px] py-[47px] w-[830px] rounded-lg shadow-lg'>
            <h2 className='font-bold text-[34px] leading-[48px] text-[#22202E] mb-5 '>Luxury homeware for people who love timeless design quality</h2>
            <p className='font-medium text-[18px] leading-[27px] text-[#5B5676] mb-6'>Shop the new Spring 2022 collection today</p>
            <Link href="./products"><button className='py-4 px-8 flex gap-5 bg-[#2A254B] text-white hover:bg-white hover:text-[#2A254B] rounded-xl border border-[#2A254B] shadow-lg transition-all'>
              Click to see Products
            </button>
            </Link>
          </div>
        </div>
        <div className='lg:hidden w-screen '>
          <div className='w-screen mx-[23px] pr-[46px]  mt-[47px] mb-8 flex flex-col gap-8'>
            <h2 className='font-normal text-[24px] leading-[29.52px] text-[#22202E] '>Luxury homeware for people who love timeless design quality</h2>
            <p className='font-normal text-[16px] leading-[21.6px] text-[#5B5676]'>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
             <Link href="./products"><button className='w-full h-[56px] flex items-center justify-center gap-5  bg-[#2A254B] text-white hover:bg-white hover:text-[#2A254B] rounded-xl border border-[#2A254B]'>
              Click to see Products
            </button>
            </Link>
          </div>
          <Image src="/hero2.png" alt="Hero Image" width={390} height={304} className='w-screen'></Image>
        </div>
      </div>

      {/* Our Services */}
      <div className='px-[24px] py-[49px] lg:py-[80px] lg:px-[82px]'>
        <h4 className='lg:text-center font-normal lg:text-[24px] tex-[20px]  lg:leading-[33.6px] leading-7 text-[#2A254B]'>What makes our brand different</h4>

        <div className='mt-[36px] lg:mt-[57px] flex flex-col lg:flex-row lg:gap-[22px] gap-[26px]'>
          {/* Service Cards */}
          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] hover:shadow-lg transition-all'>
            <div className='flex flex-col gap-3'>
              <Image src="/different-1.svg" alt='Delivery' width={24} height={24} className="text-[#2A254B]" />
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-semibold'>Next day as standard</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Order before 3pm and get your order the next day as standard</p>
            </div>
          </div>

          <div className=' lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] hover:shadow-lg transition-all'>
            <div className='flex flex-col gap-3'>
              <Image src="/different-2.svg" alt='Checkmark--outline' width={24} height={24} />
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-semibold'>Made by true artisans</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Handmade crafted goods made with real passion and craftsmanship</p>
            </div>
          </div>

          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] hover:shadow-lg transition-all'>
            <div className='flex flex-col gap-3'>
              <Image src="/different-3.svg" alt='Purchase' width={24} height={24} />
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-semibold'>Unbeatable prices</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>For our materials and quality you wont find better prices anywhere</p>
            </div>
          </div>

          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] hover:shadow-lg transition-all'>
            <div className='flex flex-col gap-3'>
              <Image src="/different-4.svg" alt='Sprout' width={24} height={24} />
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-semibold'>Eco-friendly Materials</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>We use 100% recycled materials to ensure our footprint is more manageable</p>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className='w-full lg:w-screen pt-6 pb-7 px-6 '>
        <div className=' grid grid-cols-2 grid-rows-2 gap-[15px] lg:flex lg:gap-5  justify-center'>

          {/* Dynamically Link Products by Slug */}
          <Link href={`/productdesc/the-lucky-lamp`}><div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
            <Image src="home-product-4.svg" alt='List Card1' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] transition-transform duration-300 hover:scale-105'></Image>
            <h4 className='text-[20px] leading-7 font-normal'>The Lucky Lamp</h4>
            <p className='text-[18px] leading-7 font-normal'>£200</p>
          </div>
          </Link>

          <Link href={`/productdesc/rustic-vase-set`}><div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
            <Image src="home-product-2.svg" alt='List Card2' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] transition-transform duration-300 hover:scale-105'></Image>
            <h4 className='text-[20px] leading-7 font-normal'>Rustic Vase Set</h4>
            <p className='text-[18px] leading-7 font-normal'>£150</p>
          </div>
          </Link>

          <Link href={`/productdesc/the-dandy-chair`}><div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
            <Image src="home-product-8.svg" alt='List Card3' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] transition-transform duration-300 hover:scale-105'></Image>
            <h4 className='text-[20px] leading-7 font-normal'>The Dandy chair</h4>
            <p className='text-[18px] leading-7 font-normal'>£150</p>
          </div>
          </Link>

          <Link href={`/productdesc/timbercraft`}><div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
            <Image src="home-product-9.svg" alt='List Card4' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] transition-transform duration-300 hover:scale-105'></Image>
            <h4 className='text-[20px] leading-7 font-normal'>TimberCraft</h4>
            <p className='text-[18px] leading-7 font-normal'>£320</p>
          </div>
          </Link>

        </div>
        <div className=''>
        <Link href="/products"> <button className='py-4 w-[70vw] md:w-[20vw] mt-10 lg:px-8  mx-auto lg:mt-[48px] lg:mb-3 flex justify-center lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-[#2A254B] text-white hover:bg-white hover:text-[#2A254B] rounded-full border border-[#2A254B] '>
          View collection
        </button></Link>
        </div>
      </div>

      {/* fourth section */}
      <div className='px-8 py-6 lg:px-[80px] lg:py-[60px] flex flex-col lg:flex-row lg:gap-4 gap-6 justify-center'>
        <div className='lg:w-[643px] lg:h-[478px]  bg-[#2A254B] lg:pl-[64px] px-[22px] pt-[36px] lg:py-[64px] '>
          <div className='mb-[56px] lg:mb-[205px]'>
            <h4 className='font-normal lg:text-[32px] text-[20px] leading-7 lg:leading-[39.63px] text-white mb-5'>It started with a small idea</h4>
            <p className='font-normal lg:text-[18px] tex-[14px] leading-[21px] lg:leading-[24.3px] text-[white]'>A global brand with local beginnings, our story began in a small studio in South London in early 2014</p>
          </div>
          <Link href="/products"> <button className='py-4 px-[16px] mb-[30px]  lg:px-8 lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px]  text-[16px] leading-6 font-normal  bg-[#F9F9F926] text-white'>
            View collection
          </button></Link>
        </div>
        <Image src="/about.png" alt='Listing2' width={643} height={478} className='hidden lg:block'></Image>
        <Image src="/about.png" alt='Listing2' width={342} height={259} className='lg:hidden block w-[342px]'></Image>
      </div>

      {/* fifth section  */}
      <div className='bg-[url(/bg-hero-2.png)] bg-cover bg-center h-[373px] w-full lg:h-[444px] lg:w-full lg:pt-[97px] pt-[24px] '>
        <div className='w-[329px] lg:w-full ml-[24px] flex flex-col gap-5 lg:gap-[30px]  justify-center'>
          <h2 className='w-full lg:text-[32px] text-[24px] leading-[33.6px] lg:leading-[44.8px] lg:text-center font-normal text-white'>
            Join the club and get the benefits</h2>
          <p className='lg:text-[18px] text-[14px] leading-[21px] lg:leading-[27px] lg:text-center font-normal text-white pr-[48]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className='flex flex-col lg:flex-row lg:gap-[36px] text-white justify-center'>
            <div className='flex lg:gap-1 gap-2'>
              <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
              <p className='text-[16px] leading-6 text-center'>Exclusive offers</p>
            </div>
            <div className='flex lg:gap-1 gap-2'>
              <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
              <p className='text-[16px] leading-6 text-center'>Free events</p>
            </div>
            <div className='flex lg:gap-1 gap-2'>
              <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
              <p className='text-[16px] leading-6 text-center'>Large discounts</p>
            </div>
          </div>

        </div>

        <div className='flex lg:w-full justify-center mx-[24px] mt-[28px] lg:mt-10'>
          <div className='lg:w-[354px] h-[56px] w-[224px] bg-[#F9F9F9] '>
            <input type="text" placeholder='your@email.com' className='bg-transparent h-full w-full pl-[32px] text-black border-none ' />
          </div>
          <button type='submit' className='font-normal h-[56px] text-[16px] leading-6 py-4 lg:px-8 px-5 gap-[10px] bg-[#2A254B] text-white flex items-center justify-center'>Sign up</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
