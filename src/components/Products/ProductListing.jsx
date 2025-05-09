import React, { useState, useMemo } from 'react';
import { DUMMY_PRODUCTS } from '../../data/dummyProducts';

const itemsPerPage = 6;

const ProductListing = ({ searchTerm, selectedCategory, sortOrder, priceRange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleImageError = (e) => {
        e.currentTarget.src = "https://m.media-amazon.com/images/I/51dDvq55G3L._SX522_.jpg";
    };

    const filteredProducts = useMemo(() => {
        let filtered = DUMMY_PRODUCTS.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory) {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        filtered = filtered.filter(
            p => p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [searchTerm, selectedCategory, sortOrder, priceRange]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const closeModal = () => setSelectedProduct(null);
    const openModal = (product) => setSelectedProduct(product);

    return (
        <div className="w-full">
            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProduct.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProduct.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-800 dark:text-white">
                                ₹{selectedProduct.price}
                            </span>
                            <span className="text-yellow-500 font-medium">★ {selectedProduct.rating}</span>
                        </div>
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 text-xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedItems.map((product) => (
                    <div
                        key={product.productId}
                        className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700 p-5 flex flex-col"
                    >
                        <img
                            src={product.image}
                            onError={handleImageError}
                            alt={product.title}
                            className="w-full h-44 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">{product.category}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{product.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                            <span className="text-yellow-500 font-medium">★ {product.rating}</span>
                        </div>
                        <button
                            onClick={() => openModal(product)}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center items-center gap-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Previous
                </button>
                <span className="text-gray-800 dark:text-white font-semibold text-lg">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductListing;
