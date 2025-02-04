"use client";

import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/cartSlice"; // Import actions
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TrashIcon } from "@heroicons/react/24/outline";


const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, action: "increment" | "decrement") => {
    try {
      dispatch(updateQuantity({ id, action }));
    } catch (error) {
      toast.error("Error updating quantity.");
    }
  };

  const handleRemoveFromCart = (id: number) => {
    try {
      dispatch(removeFromCart(id));
    } catch (error) {
      toast.error("Error removing item from cart.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-12">
        {/* Toast Notification Container */}
        <ToastContainer />

        <h1 className="text-3xl font-semibold text-[#2A254B] text-center">Your Shopping Cart</h1>

        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
          {cartItems.length > 0 ? (
            <table className="w-full table-auto sm:text-sm">
              <thead>
                <tr className="text-left text-gray-700 border-b pb-2">
                  <th className="py-2">Product</th>
                  <th className="py-2 text-center">Quantity</th>
                  <th className="py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item: any) => (
                  <tr key={item.id} className="border-b py-4">
                    <td className="py-4 flex flex-col sm:flex-row items-center gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-lg text-[#2A254B]">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                        <p className="font-semibold text-[#2A254B] mt-1">£{item.price}</p>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center space-x-4">
                        <button
                          onClick={() => handleQuantityChange(item.id, "decrement")}
                          className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, "increment")}
                          className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium text-[#2A254B]">£{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">Your cart is empty.</p>
              <Link href="/products">
                <button className="bg-[#2A254B] text-white py-2 px-6 mt-4 rounded-lg">
                  Go to Products
                </button>
              </Link>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4 text-right">
              <div className="text-lg font-semibold text-[#2A254B]">Subtotal: £{totalPrice.toFixed(2)}</div>
              <p className="text-gray-500 text-sm mt-1">Taxes and shipping calculated at checkout.</p>
              <div className="md:flex md:justify-between">
                <Link href="../products">
                  <button className="mt-4 w-full sm:w-auto bg-white text-[#2A254B] py-3 px-8 rounded-lg shadow-md hover:bg-gray-100">
                    Add more Products
                  </button>
                </Link>
                <Link href="/checkout">
                  <button className="mt-4 w-full sm:w-auto bg-[#2A254B] text-white py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90">
                    Go to Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
