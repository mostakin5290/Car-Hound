/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHeart, FiShare2, FiShoppingCart } from "react-icons/fi";
import carData from "../data/cars";
import { useDarkMode } from "../context/DarkModeContext";

const CarDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();
    const [car, setCar] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const selected = carData.find(c => c.id === parseInt(id));
            setCar(selected);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [id]);

    useEffect(() => {
        if (car) {
            const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
            setIsInWishlist(saved.some(item => item.id === car.id));
        }
    }, [car]);

    const toggleWishlist = () => {
        const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (isInWishlist) {
            const updated = saved.filter(item => item.id !== car.id);
            localStorage.setItem("wishlist", JSON.stringify(updated));
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...saved, car]));
        }
        setIsInWishlist(!isInWishlist);
    };

    const shareCar = () => {
        if (navigator.share) {
            navigator.share({
                title: `${car.name} - ${car.brand}`,
                text: `Check out this ${car.name} for ₹ ${car.price.toLocaleString()}`,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (isLoading) {
        return (
            <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900/95' : 'bg-gray-50/95'}`}>
                <div className="flex flex-col items-center">
                    <div className={`h-12 w-12 rounded-full ${darkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'} mb-4 animate-pulse`}></div>
                    <div className={`h-4 w-32 rounded ${darkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'} animate-pulse`}></div>
                </div>
            </div>
        );
    }

    if (!car) {
        return (
            <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900/95' : 'bg-gray-50/95'}`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-8 rounded-xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/60 border border-gray-200/50'} shadow-lg`}
                >
                    <h2 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Car not found</h2>
                    <button 
                        onClick={() => navigate(-1)}
                        className={`mt-4 px-4 py-2 rounded-full flex items-center backdrop-blur-md transition-all ${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                        } hover:scale-[1.02] shadow-md`}
                    >
                        <FiArrowLeft className="mr-2" /> Go Back
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900/95 to-blue-900/20' : 'bg-gradient-to-br from-gray-50/95 to-blue-50/20'}`}
        >
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header with back button */}
                <div className="flex justify-between items-center mb-6">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(-1)}
                        className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            darkMode 
                                ? 'bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/50'
                                : 'bg-white/60 hover:bg-white/80 border border-gray-200/50'
                        } shadow-md`}
                    >
                        <FiArrowLeft className={`text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`} />
                    </motion.button>
                    <div className="flex gap-3">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleWishlist}
                            className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                darkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/50'
                                    : 'bg-white/60 hover:bg-white/80 border border-gray-200/50'
                            } shadow-md`}
                            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            <FiHeart className={`text-xl ${
                                isInWishlist 
                                    ? (darkMode ? 'text-pink-400 fill-pink-400' : 'text-pink-600 fill-pink-600') 
                                    : (darkMode ? 'text-gray-400' : 'text-gray-600')
                            }`} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={shareCar}
                            className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                darkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/50'
                                    : 'bg-white/60 hover:bg-white/80 border border-gray-200/50'
                            } shadow-md`}
                            aria-label="Share this car"
                        >
                            <FiShare2 className={`text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        </motion.button>
                    </div>
                </div>

                {/* Car Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-xl mb-8 group relative"
                >
                    <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* Car Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/60 border border-gray-200/50'} shadow-lg`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <h1 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {car.name}
                        </h1>
                        <span className={`text-xl font-bold ${
                            darkMode 
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'
                        }`}>
                            ₹ {car.price.toLocaleString()}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            { label: 'Brand', value: car.brand },
                            { label: 'Fuel Type', value: car.fuel },
                            { label: 'Seats', value: car.seats },
                            { label: 'Year', value: car.year }
                        ].map((item, index) => (
                            <div key={index} className="backdrop-blur-md rounded-lg p-3 border ${
                                darkMode 
                                    ? 'bg-gray-800/30 border-gray-700/50' 
                                    : 'bg-white/50 border-gray-200/50'
                            }">
                                <p className={`text-xs uppercase tracking-wider ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>{item.label}</p>
                                <p className={`font-medium ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 py-3 rounded-xl font-medium backdrop-blur-md transition-all ${
                                darkMode 
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                            } shadow-md`}
                        >
                            Contact Seller
                        </motion.button>
                        <Link to='/shop'>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-3 rounded-xl backdrop-blur-md transition-all ${
                                    darkMode 
                                        ? 'bg-gray-700/50 hover:bg-gray-700/60 border border-gray-700/50'
                                        : 'bg-white/60 hover:bg-white/80 border border-gray-200/50'
                                } shadow-md`}
                                aria-label="Add to cart">
                                <FiShoppingCart className={`text-xl ${
                                    darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`} />
                            </motion.button>
                        </Link>
                        
                    </div>
                </motion.div>

                {/* Features Section */}
                {car.features && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`mt-6 p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/60 border border-gray-200/50'} shadow-lg`}
                    >
                        <h2 className={`text-xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}>Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {car.features.map((feature, index) => (
                                <div key={index} className="flex items-center backdrop-blur-md rounded-lg p-3 border ${
                                    darkMode 
                                        ? 'bg-gray-800/30 border-gray-700/50' 
                                        : 'bg-white/50 border-gray-200/50'
                                }">
                                    <span className={`mr-3 ${
                                        darkMode ? 'text-blue-400' : 'text-blue-600'
                                    }`}>✓</span>
                                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Description Section */}
                {car.description && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`mt-6 p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/60 border border-gray-200/50'} shadow-lg`}
                    >
                        <h2 className={`text-xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}>Description</h2>
                        <p className={`leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {car.description}
                        </p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default CarDetail;