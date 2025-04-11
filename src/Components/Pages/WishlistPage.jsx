/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiTrash2, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

const WishlistPage = () => {
const [wishlist, setWishlist] = useState([]);
const { darkMode } = useDarkMode();

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
}, []);

const removeCar = (id) => {
    const updated = wishlist.filter((car) => car.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlist(updated);
};

return (
    <div
    className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900/95" : "bg-gray-50/95"
    }`} >
    <div className="container mx-auto px-4 py-8">
        <div className="flex mb-8 items-center">
        <Link
            to="/"
            aria-label="Go back"
            className={`mr-4 p-2 rounded-full transition-all backdrop-blur-sm 
            ${
                darkMode
                ? "hover:bg-gray-800/60 bg-gray-800/30 border border-gray-700/50"
                : "hover:bg-gray-200/60 bg-white/30 border border-gray-200/50"
            }`} >
            <FiChevronLeft
            className={`text-2xl ${
                darkMode ? "text-gray-300" : "text-gray-700"
            }`} />
        </Link>
        <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex text-3xl font-bold bg-clip-text items-center 
            ${
                darkMode
                ? "text-transparent bg-gradient-to-r from-pink-400 to-rose-400"
                : "text-transparent bg-gradient-to-r from-pink-500 to-rose-500"
            }`} >
            <FiHeart
            className={`mr-3 ${darkMode ? "text-pink-400" : "text-pink-500"}`}
            />{" "}
            My Wishlist
        </motion.h1>
        </div>

        {wishlist.length === 0 ? (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`max-w-md py-16 mx-auto text-center rounded-xl shadow-lg backdrop-blur-md 
            ${
                darkMode
                ? "shadow-pink-900/10 bg-gray-800/40 border border-gray-700/50 text-gray-300"
                : "shadow-pink-500/10 bg-white/60 border border-gray-200/50 text-gray-600"
            }`} >
            <FiHeart
            className={`mx-auto mb-4 text-5xl 
                ${
                darkMode
                    ? "text-pink-400 drop-shadow-[0_2px_4px_rgba(244,114,182,0.3)]"
                    : "text-pink-500 drop-shadow-[0_2px_4px_rgba(236,72,153,0.2)]"
                }`} />
            <p className="mb-6 text-xl">Your wishlist is empty</p>
            <Link
            to="/"
            className={`inline-flex px-6 py-3 text-white font-medium rounded-full transition-all shadow-lg items-center hover:scale-[1.02] 
                ${
                darkMode
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 hover:shadow-pink-900/30"
                    : "bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-pink-500/30"
                }`} >
            Browse Cars
            </Link>
        </motion.div>
        ) : (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((car) => (
                <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className={`overflow-hidden rounded-2xl backdrop-blur-md 
                    ${darkMode
                        ? "bg-gray-800/40 border border-gray-700/50 shadow-lg shadow-pink-900/10"
                        : "bg-white/60 border border-gray-200/50 shadow-lg shadow-pink-500/10" }`}>
                <div className="h-48 relative group">
                    <img src={car.image} alt={car.name} loading="lazy"
                    className="object-cover h-full w-full transition-transform group-hover:scale-105 duration-500"/>
                    <button onClick={() => removeCar(car.id)}
                    aria-label={`Remove ${car.name} from wishlist`}
                    className={`p-2 rounded-full transition-all shadow-md absolute top-3 right-3 backdrop-blur-md hover:scale-110 
                        ${ darkMode
                            ? "bg-gray-900/70 hover:bg-gray-800/80 border border-gray-700/50"
                            : "bg-white/80 hover:bg-white border border-gray-200/50"
                        }`}
                    >
                    <FiTrash2
                        className={`${
                        darkMode ? "text-pink-400" : "text-pink-600"
                        }`}
                    />
                    </button>
                </div>
                <div className="p-5">
                    <h2
                    className={`mb-1 text-lg font-semibold line-clamp-1 ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                    >
                    {car.name}
                    </h2>
                    <p
                    className={`mb-3 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                    >
                    {car.brand} • {car.fuel} • {car.seats} seats
                    </p>
                    <div className="flex justify-between items-center">
                    <span
                        className={`text-xl font-bold 
                        ${
                            darkMode
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                        }`}
                    >
                        ₹ {car.price.toLocaleString()}
                    </span>
                    <span
                        className={`px-3 py-1 text-sm rounded-full backdrop-blur-md 
                        ${
                            darkMode
                            ? "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                            : "bg-white/70 text-gray-700 border border-gray-300/50"
                        }`}
                    >
                        {car.year}
                    </span>
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </AnimatePresence>
        )}
    </div>
    </div>
);
};

export default WishlistPage;
