"use client"

import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/cartSlice"; // Import actions
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce((total :any, item : any) => total + item.price * item.quantity, 0);

  return (
    <>
    <Navbar />
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-12">
      <h1 className="text-3xl font-semibold text-[#2A254B] text-center">Your Shopping Cart</h1>

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
              {cartItems.map((item : any) => (
                <tr key={item.id} className="border-b py-4">
                  <td className="py-4 flex items-center gap-4">
                    <img src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                    <div>
                      <h4 className="font-medium text-lg text-[#2A254B]">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <p className="font-semibold text-[#2A254B] mt-1">£{item.price}</p>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, action: "decrement" }))}
                        className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, action: "increment" }))}
                        className="w-8 h-8 flex items-center justify-center border rounded-full text-[#2A254B] hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-right font-medium text-[#2A254B]">£{item.price * item.quantity}</td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center py-10">Your cart is empty.</p>
        )}

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
};

export default CartPage;
