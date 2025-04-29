import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LoadingSpinner from "../LoadingSpinner";
import CarCard from "../CarCard";
import FilterBar from "../FilterBar";
import carData from "../../data/cars";
import { useDarkMode } from "../../context/DarkModeContext";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const { darkMode } = useDarkMode();
  const [filters, setFilters] = useState({ brand: "", fuel: "", search: "" });
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCars(carData);
      setLoading(false);
    }, 5);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      let filtered = carData.filter((car) => {
        return (
          car.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          (filters.brand === "" || car.brand === filters.brand) &&
          (filters.fuel === "" || car.fuel === filters.fuel)
        );
      });

      if (sortOrder === "low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "high") {
        filtered.sort((a, b) => b.price - a.price);
      }

      setCars(filtered);
      setCurrentPage(1);
    };
    handleFilter();
  }, [filters, sortOrder]);

  const totalPages = Math.ceil(cars.length / carsPerPage);
  const currentCars = cars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  // Calculate visible page numbers
  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900/95" : "bg-gray-50/95"}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold mb-8 text-center bg-clip-text ${darkMode
            ? "text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
            : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
          }`}
      >
        Car Marketplace
      </motion.h1>

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {currentCars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl overflow-hidden ${darkMode
                  ? "bg-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-lg shadow-blue-900/10"
                  : "bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-lg shadow-blue-500/10"
                }`}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <div
            className={`flex items-center gap-1 p-2 rounded-full backdrop-blur-md ${darkMode
                ? "bg-gray-800/60 border border-gray-700/50 shadow-lg shadow-blue-900/10"
                : "bg-white/60 border border-gray-200/50 shadow-lg shadow-blue-500/10"
              }`}
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full flex items-center justify-center transition-all ${currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : darkMode
                    ? "hover:bg-gray-700/50 text-gray-300"
                    : "hover:bg-gray-300/50 text-gray-700"
                }`}
            >
              <FiChevronLeft className="text-lg" />
            </button>

            {/* First Page */}
            {currentPage > 3 && totalPages > 5 && (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode
                      ? "hover:bg-gray-700/50 text-gray-300"
                      : "hover:bg-gray-300/50 text-gray-700"
                    }`}
                >
                  1
                </button>
                <span className="px-1">...</span>
              </>
            )}

            {/* Visible Page Numbers */}
            {getVisiblePages().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === page
                    ? darkMode
                      ? "bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-blue-500/30"
                      : "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-blue-500/30"
                    : `${darkMode
                      ? "hover:bg-gray-700/50 text-gray-300"
                      : "hover:bg-gray-300/50 text-gray-700"
                    }`
                  } shadow-md`}
              >
                {page}
              </button>
            ))}

            {/* Last Page */}
            {currentPage < totalPages - 2 && totalPages > 5 && (
              <>
                <span className="px-1">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode
                      ? "hover:bg-gray-700/50 text-gray-300"
                      : "hover:bg-gray-300/50 text-gray-700"
                    }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : darkMode
                    ? "hover:bg-gray-700/50 text-gray-300"
                    : "hover:bg-gray-300/50 text-gray-700"
                }`}
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;