"use client"

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function Cart() {
  // Define the initial cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      image: "/cart-1.svg",
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      quantity: 1,
      image: "/cart-2.svg",
    },
  ]);

  // Update quantity
  const updateQuantity = (id: number, action: "increment" | "decrement") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main>
        <section className="pt-9 sm:pt-16 pl-6 sm:pl-[188px] pr-6 sm:pr-[193px] bg-[--light-gray]">
          <h1 className="max-sm:text-[24px]">Your shopping cart</h1>

          <table className="mt-12 w-full">
            <thead className="max-sm:hidden">
              <tr className="border-b border-[--border-gray] pb-4 body-sm">
                <td>Product</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="sm:pt-5 border-b border-[--border-gray] pb-4">
                  <td>
                    <div className="flex gap-x-[21px] sm:items-center">
                      <img src={item.image} alt={item.name} />
                      <div className="space-y-2 max-sm:mt-[19px]">
                        <h4 className="text-[16px] leading-[20px]">{item.name}</h4>
                        <p className="text-sm w-[179px]">{item.description}</p>
                        <p>£{item.price}</p>
                        <div className="py-3 px-4 max-sm:visible flex items-center gap-x-8">
                          <span
                            className="text-[#2A254B] text-5xl cursor-pointer"
                            onClick={() => updateQuantity(item.id, "decrement")}
                          > 
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            className="text-[#2A254B] text-3xl cursor-pointer"
                            onClick={() => updateQuantity(item.id, "increment")}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                      <span
                        className="text-[--border-gray] cursor-pointer"
                        onClick={() => updateQuantity(item.id, "increment")}
                      >
                        +
                      </span>
                      <span>{item.quantity}</span>
                      <span
                        className="text-[--border-gray] cursor-pointer"
                        onClick={() => updateQuantity(item.id, "decrement")}
                      >
                        -
                      </span>
                    </div>
                  </td>

                  <td className="max-sm:hidden">£{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pt-7 pb-[55px] sm:pb-[48px] w-fit ml-auto">
            <div className="space-y-3">
              <div className="flex gap-x-4 items-center w-fit ml-auto">
                <h4 className="text-[--primary]">Subtotal</h4>
                <h3 className="text-[--dark-primary]">£{totalPrice}</h3>
              </div>
              <p className="max-sm:whitespace-nowrap max-sm:w-fit ml-auto text-sm text-[--primary]">
                Taxes and shipping are calculated at checkout
              </p>
            </div>
            <Link href="/checkout">
              <button
                type="submit"
                className="bg-[--dark-primary] max-sm:w-full block w-fit ml-auto text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]"
              >
                Go to checkout
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
