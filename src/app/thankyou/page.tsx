"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const ThankYouPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/products'); // Navigate to products page
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Thank You for Shopping!</h2>
        <p className="text-lg text-gray-500 mt-4">
          We appreciate your purchase! Your order is being processed, and you will receive a confirmation email shortly.
        </p>
        
        <div className="mt-8">
          <button
            onClick={handleGoBack}
            className="bg-[#2A254B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#544997] transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
    <div className='md:mt-[30vh]'><Footer /></div>
    </>
  );
};

export default ThankYouPage;
