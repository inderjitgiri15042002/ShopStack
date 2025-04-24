import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../components/redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from Cart");
  };

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:border-x-slate-600">
      <img
        src={post.image}
        alt={post.title}
        className="h-40 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-2 text-center">{post.category}</p>
      <p className="font-bold mb-2">${post.price}</p>
      <p className="text-sm text-gray-700 line-clamp-3 mb-2">
        {post.description}
      </p>
      <div className="text-yellow-500 text-sm">
        ⭐ {post.rating.rate} ({post.rating.count})
      </div>

      {cart.some((p) => p.id === post.id) ? (
        <button
          onClick={removeFromCart}
          className="mt-4 px-6 py-2 rounded-full text-white font-semibold 
               bg-gradient-to-r from-red-400 to-rose-500 
               hover:from-rose-500 hover:to-red-400 
               hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          🗑️ Remove Item
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="mt-4 px-6 py-2 rounded-full text-white font-semibold 
               bg-gradient-to-r from-green-400 to-emerald-500 
               hover:from-emerald-500 hover:to-green-400 
               hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          ➕ Add Item
        </button>
      )}
    </div>
  );
};

export default Product;
