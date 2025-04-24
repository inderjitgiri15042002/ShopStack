import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[80vh] w-full flex flex-col md:flex-row gap-6 p-6">
      {cart.length > 0 ? (
        <>
          {/* Cart Items Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Summary
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-medium">Total Amount:</span> $
              {totalAmount.toFixed(2)}
            </p>
            <button
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 
              text-white px-6 py-3 rounded-lg font-semibold 
              hover:from-purple-600 hover:to-indigo-500 
              shadow-md hover:shadow-lg 
              transition duration-300 ease-in-out"
            >
              Checkout Now
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-center mt-20">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">
            🛒 Your Cart is Empty!
          </h1>
          <NavLink to="/">
            <button
              className="bg-gradient-to-r from-green-500 to-emerald-600 
              text-white px-6 py-3 rounded-full font-medium 
              hover:from-emerald-600 hover:to-green-500 
              shadow-md hover:shadow-lg 
              transition duration-300 ease-in-out"
            >
              SHOP NOW
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
