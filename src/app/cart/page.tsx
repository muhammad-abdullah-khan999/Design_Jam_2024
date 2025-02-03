"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Graystone Vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/cart-1.svg",
    },
    {
      id: 2,
      name: "Basic White Vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      quantity: 1,
      image: "/cart-2.svg",
    },
  ]);

  // Update Quantity
  const updateQuantity = (id: number, action: "increment" | "decrement") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-12">
        <h1 className="text-3xl font-semibold text-[#2A254B] text-center">Your Shopping Cart</h1>

        {/* Cart Items */}
        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
          {cartItems.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-700 border-b pb-2">
                  <th className="py-2">Product</th>
                  <th className="py-2 text-center">Quantity</th>
                  <th className="py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b py-4">
                    <td className="py-4 flex items-center gap-4">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                      <div>
                        <h4 className="font-medium text-lg text-[#2A254B]">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                        <p className="font-semibold text-[#2A254B] mt-1">£{item.price}</p>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, "decrement")}
                          className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, "increment")}
                          className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium text-[#2A254B]">£{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600 text-center py-10">Your cart is empty.</p>
          )}

          {/* Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="mt-6 text-right">
              <div className="text-lg font-semibold text-[#2A254B]">Subtotal: £{totalPrice}</div>
              <p className="text-gray-500 text-sm mt-1">Taxes and shipping calculated at checkout.</p>
              <Link href="/checkout">
                <button className="mt-4 w-full sm:w-auto bg-[#2A254B] text-white py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90">
                  Go to Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
