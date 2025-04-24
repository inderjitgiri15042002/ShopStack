import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  console.log(cart);
  return (
    <div className="h-[100px]  px-8 flex items-center">
      <div className="flex mx-auto max-w-[1200px] justify-between items-center w-full">
        <NavLink to="/">
          <img src="logo1.png" alt="Logo" className="h-[70px] object-contain" />
        </NavLink>

        <div className="flex items-center space-x-6 text-black text-lg font-medium">
          <NavLink to="/">
            <p className="cursor-pointer hover:underline">Home</p>
          </NavLink>
          <NavLink to="/cart" className="relative">
            {/* Always show the badge, even if 0 */}
            <span
              className={`absolute -top-2 -right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md ${
                cart.length > 0 ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              {cart.length}
            </span>

            <FaCartPlus className="text-3xl cursor-pointer hover:text-blue-400 transition duration-200" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
