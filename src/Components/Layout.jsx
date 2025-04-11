/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, FiHeart, FiMoon, FiSun, 
  FiMenu, FiX, FiSearch, FiUser,
  FiShoppingCart, FiSettings
} from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Nav link
  const navLinks = [
    { 
      to: "/", 
      icon: FiHome, 
      text: "Home", 
      activeClass: `${darkMode ? 'bg-blue-900/30' : 'bg-blue-100/70'} ${darkMode ? 'text-blue-300' : 'text-blue-600'}` 
    },
    { 
      to: "/wishlist", 
      icon: FiHeart, 
      text: "Wishlist", 
      activeClass: `${darkMode ? 'bg-pink-900/30' : 'bg-pink-100/70'} ${darkMode ? 'text-pink-300' : 'text-pink-600'}` 
    },
    { 
      to: "/shop", 
      icon: FiShoppingCart, 
      text: "Shop", 
      activeClass: `${darkMode ? 'bg-green-900/30' : 'bg-green-100/70'} ${darkMode ? 'text-green-300' : 'text-green-600'}` 
    }
  ];

  const mobileLinks = [
    ...navLinks,
    { to: "/account", icon: FiUser, text: "Account" },
    { to: "/settings", icon: FiSettings, text: "Settings" }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Top Navigation Bar */}
      <header className={`sticky top-0 z-30 backdrop-blur-md ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-sm transition-colors duration-200`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className={`text-xl font-bold bg-clip-text ${darkMode ? "text-transparent bg-gradient-to-r from-blue-400 to-cyan-400" : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"} transition-colors`}
            >
              Car Hound
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-3 py-2 rounded-lg backdrop-blur-md transition-all duration-200 ${
                  location.pathname === link.to
                    ? link.activeClass
                    : `${darkMode ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-700 hover:bg-gray-100/70"}`
                } ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"}`}
              >
                <link.icon className="mr-2" />
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full backdrop-blur-md ${darkMode ? "bg-gray-700/50 hover:bg-gray-700/70" : "bg-white/70 hover:bg-white/90"} ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"} transition-all duration-200`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="text-yellow-300 text-lg" />
              ) : (
                <FiMoon className="text-gray-700 text-lg" />
              )}
            </motion.button>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full backdrop-blur-md ${darkMode ? "bg-gray-700/50 hover:bg-gray-700/70" : "bg-white/70 hover:bg-white/90"} ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"} transition-all duration-200 md:hidden`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`} />
              ) : (
                <FiMenu className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`} />
              )}
            </motion.button>

            <Link 
              to="/account" 
              className={`hidden md:flex items-center p-2 rounded-full backdrop-blur-md ${darkMode ? "bg-gray-700/50 hover:bg-gray-700/70" : "bg-white/70 hover:bg-white/90"} ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"} transition-all duration-200`}
              aria-label="Account"
            >
              <FiUser className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`} />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className={`fixed inset-y-0 left-0 z-40 w-64 backdrop-blur-md ${darkMode ? "bg-gray-800/90" : "bg-white/90"} border-r ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} shadow-xl`}
            >
              <div className={`flex items-center justify-between p-4 border-b ${darkMode ? "border-gray-700/50" : "border-gray-200/50"}`}>
                <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Menu</h2>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded-full backdrop-blur-md ${darkMode ? "bg-gray-700/50 hover:bg-gray-700/70" : "bg-white/70 hover:bg-white/90"} ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"} transition-all duration-200`}
                  aria-label="Close menu"
                >
                  <FiX className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`} />
                </motion.button>
              </div>
              <nav className="p-4 space-y-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center p-3 rounded-lg backdrop-blur-md ${darkMode ? "hover:bg-gray-700/50" : "hover:bg-gray-100/70"} ${darkMode ? "border border-gray-700/30" : "border border-gray-200/30"} transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className={`mr-3 text-lg ${
                      link.to === "/wishlist" ? `${darkMode ? "text-pink-400" : "text-pink-500"}` :
                      link.to === "/shop" ? `${darkMode ? "text-green-400" : "text-green-500"}` :
                      link.to === "/account" ? `${darkMode ? "text-blue-400" : "text-blue-500"}` :
                      `${darkMode ? "text-gray-400" : "text-gray-500"}`
                    }`} />
                    <span className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{link.text}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-black transition-opacity duration-200"
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`backdrop-blur-md ${darkMode ? "bg-gray-800/80" : "bg-white/80"} border-t ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} transition-colors duration-200`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center group">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl mr-2 transition-transform"
                >
                  🚗
                </motion.span>
                <h2 className={`text-xl font-bold bg-clip-text ${darkMode ? "text-transparent bg-gradient-to-r from-blue-400 to-cyan-400" : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"} transition-colors`}>
                  Car Hound
                </h2>
              </Link>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"} transition-colors`}>
                Find your dream car with ease
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"} uppercase tracking-wider mb-4`}>
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.to}
                      to={link.to} 
                      className={`block ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-200`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"} uppercase tracking-wider mb-4`}>
                  Legal
                </h3>
                <div className="space-y-2">
                  <Link 
                    to="/privacy" 
                    className={`block ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-200`}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms" 
                    className={`block ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-200`}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"} uppercase tracking-wider mb-4`}>
                  Contact
                </h3>
                <div className="space-y-2">
                  <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} transition-colors`}>
                    m.mostakin5840@gmail.com
                  </p>
                  <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} transition-colors`}>
                    +91 xxxx xxxx xx
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} flex flex-col md:flex-row justify-between items-center`}>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm transition-colors`}>
              © {new Date().getFullYear()} Car Hound. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"} transition-colors duration-200`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;