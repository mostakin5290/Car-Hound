/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiSearch } from "react-icons/fi";
import carData from "../data/cars";
import { useDarkMode } from "../context/DarkModeContext";

const FilterBar = ({ filters, setFilters, onFilter, setSortOrder, sortOrder }) => {
    const [isExpanded, setIsExpanded] = useState(false); 
    const { darkMode } = useDarkMode(); 
    const brands = [...new Set(carData.map((car) => car.brand))];
    const fuelTypes = [...new Set(carData.map((car) => car.fuel))];

    const handleSortChange = (e) => setSortOrder(e.target.value);

    const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false;

    const containerStyle = darkMode
        ? "bg-white/10 backdrop-blur-lg border border-white/20"
        : "bg-white/60 backdrop-blur-md border border-gray-200";

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`sticky top-0 z-10 shadow-lg rounded-2xl p-4 mb-6 ${containerStyle}`}
        >
            <div className="flex flex-col gap-4">

                {/* Mobile Header */}
                <div className="flex justify-between items-center md:hidden">
                    <h3 className={`font-semibold flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
                        <FiFilter className="mr-2" /> Filters
                    </h3>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`p-2 rounded-full ${darkMode ? "bg-white/20 text-white" : "bg-gray-200 text-gray-900"}`}
                    >
                        <FiFilter />
                    </button>
                </div>

                {/* Filter */}
                <motion.div
                    animate={isExpanded || !isMobile ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 },
                    }}
                    className="overflow-hidden flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <FiSearch className={`absolute left-3 top-3 ${darkMode ? "text-gray-300" : "text-gray-500"}`} />
                        <input
                            type="text"
                            placeholder="Search cars..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            className={`pl-10 w-full p-2 rounded-xl border shadow-sm ${darkMode
                                ? "bg-white/10 text-white border-white/20 placeholder:text-gray-300"
                                : "bg-white text-gray-800 border-gray-300 placeholder:text-gray-500"
                                }`}
                        />
                    </div>

                    {/* Brand Dropdown */}
                    <select
                        value={filters.brand}
                        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                        className={`p-2 rounded-xl border w-full md:w-auto ${darkMode ? "bg-black/30 text-white border-white/20" : "bg-white/50 text-gray-800 border-gray-300"
                            }`}
                    >
                        <option value="">All Brands</option>
                        {brands.map((brand) => (
                            <option key={brand} value={brand} className={`${darkMode ? "bg-black/50 text-white border-white/20" : "bg-white/50 text-gray-800 border-gray-300"
                            }`} >{brand}</option>
                        ))}
                    </select>

                    {/* Fuel Type Dropdown */}
                    <select
                        value={filters.fuel}
                        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                        className={`p-2 rounded-xl border w-full md:w-auto ${darkMode ? "bg-black/30 text-white border-white/20" : "bg-white/50 text-gray-800 border-gray-300"
                        }`}
                    >
                        <option value="">All Fuel Types</option>
                        {fuelTypes.map((fuel) => (
                            <option key={fuel} value={fuel} className={`${darkMode ? "bg-black/50 text-white border-white/20" : "bg-white/50 text-gray-800 border-gray-300"
                            }`}>{fuel}</option>
                        ))}
                    </select>

                    {/* Sort Order Dropdown */}
                    <select
                        value={sortOrder}
                        onChange={handleSortChange}
                        className={`p-2 rounded-xl border w-full md:w-auto ${darkMode ? "bg-black/50 text-white border-white/20" : "bg-white/50 text-gray-800 border-gray-300"
                        }`}>
                        <option value="">Sort By</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </motion.div>

                {/* Action Buttons (Apply & Reset) */}
                <div className="flex flex-wrap gap-3 justify-between items-center">
                    <div className="flex gap-3">
                        {/* Apply Filters Button */}
                        <button
                            onClick={onFilter}
                            className="px-5 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 flex items-center">
                            <FiFilter className="mr-2" /> Apply Filters
                        </button>

                        {/* Reset Button */}
                        <button
                            onClick={() => {
                                setFilters({ brand: "", fuel: "", search: "" });
                                setSortOrder("");
                            }}
                            className={`px-5 py-2 rounded-xl border ${darkMode
                                ? "border-white/20 text-white hover:bg-white/10"
                                : "border-gray-300 text-gray-800 hover:bg-gray-100"
                                }`}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FilterBar;
