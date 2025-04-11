/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";

const CarCard = ({ car }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(saved.some((item) => item.id === car.id));
  }, [car.id]);

  const addToWishlist = () => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isInWishlist) {
      const updated = saved.filter((item) => item.id !== car.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setIsInWishlist(false);
    } else {
      localStorage.setItem("wishlist", JSON.stringify([...saved, car]));
      setIsInWishlist(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-md border ${
        darkMode
          ? "bg-gray-800/40 border-gray-700/50 shadow-lg shadow-blue-900/10"
          : "bg-white/60 border-gray-200/50 shadow-lg shadow-blue-500/10"
      } transition-all duration-300 hover:shadow-xl`}
    >
      {/* Wishlist button */}
      <button
        onClick={addToWishlist}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
          darkMode
            ? "bg-gray-900/70 hover:bg-gray-800/80 border border-gray-700/50"
            : "bg-white/80 hover:bg-white border border-gray-200/50"
        } ${
          isInWishlist
            ? darkMode
              ? "text-pink-400 shadow-pink-900/30"
              : "text-pink-600 shadow-pink-500/30"
            : darkMode
            ? "text-gray-400 hover:text-pink-400"
            : "text-gray-500 hover:text-pink-500"
        } hover:scale-110 shadow-md`}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FiHeart
          className={`text-lg ${isInWishlist ? "fill-current" : ""}`}
        />
      </button>

      {/* Car Image */}
      <div className="relative h-48 w-full overflow-hidden group">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Car Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h2
            className={`text-lg font-bold truncate ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {car.name}
          </h2>
          <span
            className={`px-2 py-1 rounded-full text-xs backdrop-blur-md ${
              darkMode
                ? "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                : "bg-white/70 text-gray-700 border border-gray-300/50"
            }`}
          >
            {car.year}
          </span>
        </div>

        <p
          className={`text-sm mb-3 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {car.brand} • {car.fuel} • {car.seats} seats
        </p>

        <div className="flex items-center justify-between mt-4">
          <span
            className={`text-xl font-bold ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
            }`}
          >
            ₹ {car.price.toLocaleString()}
          </span>

          <div className="flex space-x-2">
            <Link
              to={`/car/${car.id}`}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                darkMode
                  ? "bg-gray-700/60 hover:bg-gray-600/80 border border-gray-600/50 text-white"
                  : "bg-white/80 hover:bg-white border border-gray-300/50 text-gray-700"
              } hover:scale-110 shadow-md`}
              aria-label="View details">
              <FiEye />
            </Link>
            <Link to="/shop">
                <button className={`p-2 rounded-full backdrop-blur-md transition-all ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border border-cyan-500/30"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border border-cyan-400/30"
                  } text-white hover:scale-110 shadow-md`}
                  aria-label="Add to cart">
                  <FiShoppingCart />
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Status indicator for wishlist add/remove */}
      {isInWishlist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`absolute bottom-0 left-0 right-0 py-2 text-center text-xs font-medium backdrop-blur-md ${
            darkMode
              ? "bg-gradient-to-r from-pink-900/70 to-rose-900/70 text-pink-200 border-t border-pink-800/50"
              : "bg-gradient-to-r from-pink-100/90 to-rose-100/90 text-pink-800 border-t border-pink-300/50"
          }`}
        >
          In your wishlist
        </motion.div>
      )}
    </motion.div>
  );
};

export default CarCard;