"use client";

import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      toast.error("Failed to initiate checkout.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <Navbar />
    <main className="min-h-screen p-8 bg-gray-50">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-[#2A254B] text-center">Checkout</h1>

      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item: any) => (
                <li key={item.id} className="flex justify-between py-2 border-b">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>£{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between font-semibold">
              <span>Total:</span>
              <span>
              £{cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-4 w-full bg-[#2A254B] text-white py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
        <div className="mt-6 flex justify-between font-semibold ">
      <span>Note : For Dummy Payments, Enter Card number <span className="text-red-600">  4242 4242 4242 4242</span></span>
      
        </div>
      </div>
      
    </main>
        <Footer />
    </>
  );
};

export default CheckoutPage;
