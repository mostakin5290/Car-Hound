import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const ShopPage = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`w-full min-h-screen ${darkMode ? "text-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "text-gray-800 bg-gradient-to-br from-gray-50 to-blue-50"} px-4 py-12 flex flex-col items-center`}>
            {/* Heading Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400" : "bg-gradient-to-r from-blue-600 to-cyan-500"} `}>
                    🛍️ Our Shop is Coming Soon!
                </h1>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg max-w-2xl mx-auto`}>
                    We're working hard to bring you an awesome shopping experience with exclusive automotive products.
                </p>
            </motion.div>

            {/* Placeholder Product Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {[1, 2, 3].map((item) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: item * 0.1 }}
                        whileHover={{ y: -8, boxShadow: darkMode ? "0 10px 25px -5px rgba(56, 182, 255, 0.2)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className={`backdrop-blur-md rounded-2xl overflow-hidden shadow-lg ${darkMode ? "border border-gray-600/30 bg-gray-800/80" : "border border-gray-300 bg-white/90"}`}
                    >
                        <div className="p-6 flex flex-col items-center">
                            <div className={`w-32 h-32 rounded-full ${darkMode ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200"} mb-6 flex items-center justify-center`}>
                                <span className="text-4xl">🚗</span>
                            </div>
                            <h3 className={`text-xl font-semibold mb-3 text-center ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                                Premium Product {item}
                            </h3>
                            <p className={`text-sm text-center mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                Exclusive automotive accessory coming soon
                            </p>
                            <div className={`w-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} h-px my-3`}></div>
                            <div className={`font-medium ${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}`}>
                                Coming Soon
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-16 text-center backdrop-blur-md rounded-2xl p-6 ${darkMode ? "border border-gray-600/30 bg-gray-800/80" : "border border-gray-300 bg-white/90"} shadow-lg`}
            >
                <p className={`mb-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Want early access to our exclusive products?
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 shadow-md ${darkMode ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white" : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"}`}
                >
                    Notify Me When We Launch
                </motion.button>
            </motion.div>

            {/* Progress Indicator */}
            <div className="mt-12 w-full max-w-md">
                <div className={`mb-2 flex justify-between text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <span>Development Progress</span>
                    <span>75%</span>
                </div>
                <div className={`w-full rounded-full h-2.5 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className={`h-2.5 rounded-full ${darkMode ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" : "bg-gradient-to-r from-blue-600 to-cyan-500"}`}
                    ></motion.div>
                </div>
            </div>

            {/* Glowing dots decoration */}
            {darkMode && (
                <>
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 filter blur-md opacity-70"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-400 filter blur-md opacity-50"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-blue-400 filter blur-md opacity-60"></div>
                </>
            )}
        </div>
    );
};

export default ShopPage;