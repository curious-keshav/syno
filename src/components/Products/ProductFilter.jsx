import React from 'react';

const categories = ["Tubelight", "Fan", "AC", "Fridge", "Microwave"];

const ProductFilter = ({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
    // priceRange,
    setPriceRange
}) => {
    return (
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-lg space-y-4 border border-gray-200 dark:border-[#333]">
            <input
                type="text"
                placeholder="Search by product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white"
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Category</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white"
                >
                    <option value="">All</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Sort by Price</label>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white"
                >
                    <option value="">None</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    {/* Price Range (₹{priceRange[0]} - ₹{priceRange[1]}) */}
                    Price Range
                </label>
                <input
                    type="range"
                    min={0}
                    max={100000}
                    value={10000}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full mt-2"
                />
            </div>
        </div>
    );
};

export default ProductFilter;
