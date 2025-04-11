/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const UserPage = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`w-full min-h-screen ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50"} text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center px-4 py-12`}>
            {/* Icon and Heading */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-12"
            >
                <div className="relative">
                    <FaUserCircle className={`text-6xl ${darkMode ? "text-blue-400" : "text-blue-500"} mb-4`} />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                        className={`absolute inset-0 rounded-full border-2 ${darkMode ? "border-blue-300" : "border-blue-400"}`}
                    />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400" : "bg-gradient-to-r from-blue-600 to-cyan-500"}`}>
                    User Dashboard
                </h2>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mt-3 max-w-md text-center`}>
                    Personalized features and settings coming soon
                </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {["Profile", "Orders", "Wishlist"].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{
                            y: -5,
                            boxShadow: darkMode ? "0 10px 25px -5px rgba(56, 182, 255, 0.2)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        className={`backdrop-blur-md rounded-xl overflow-hidden shadow-lg ${darkMode ? "border border-gray-600/30 bg-gray-800/80" : "border border-gray-300 bg-white/90"} h-full`}>
                        <div className="p-6 flex flex-col items-center">
                            <div className={`w-20 h-20 rounded-full ${darkMode ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200"} mb-5 flex items-center justify-center`}>
                                {feature === "Profile" && <span className="text-3xl">👤</span>}
                                {feature === "Orders" && <span className="text-3xl">📦</span>}
                                {feature === "Wishlist" && <span className="text-3xl">❤️</span>}
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"} text-center`}>
                                {feature}
                            </h3>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}>
                                {feature === "Profile" && "Manage your personal information"}
                                {feature === "Orders" && "Track your purchases and history"}
                                {feature === "Wishlist" && "Save your favorite items"}
                            </p>
                            <div className={`mt-4 w-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} h-px`}></div>
                            <div className={`mt-4 text-sm font-medium ${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}`}>
                                Coming Soon
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Note */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-12 text-center backdrop-blur-md rounded-xl p-6 ${darkMode ? "border border-gray-600/30 bg-gray-800/80" : "border border-gray-300 bg-white/90"} shadow-lg max-w-2xl`}
            >
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    We're working hard to bring you a personalized experience.
                    <span className={`block mt-2 font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                        Stay tuned for exciting updates!
                    </span>
                </p>
            </motion.div>

            {/* Glowing dots decoration - Dark mode only */}
            {darkMode && (
                <>
                    <div className="fixed top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 filter blur-md opacity-70 animate-pulse"></div>
                    <div className="fixed bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-400 filter blur-md opacity-50 animate-pulse"></div>
                    <div className="fixed top-1/3 right-1/3 w-2 h-2 rounded-full bg-blue-400 filter blur-md opacity-60 animate-pulse"></div>
                </>
            )}
        </div>
    );
};

export default UserPage;