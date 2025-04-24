import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "./redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex gap-4 border rounded-lg shadow-md p-4 items-center hover:shadow-lg transition duration-300 mb-4">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-md font-bold text-green-600">${item.price}</p>

          {/* Delete Icon */}
          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 transition duration-200 text-xl"
            title="Remove Item"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
