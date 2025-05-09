import React, { useState } from 'react';
import ProductListing from './ProductListing';
import ProductFilter from './ProductFilter';
import ProductLanding from './ProductLanding';

const ProductMain = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100000]);

    return (
        <div className="min-h-screen   transition-all duration-300">
            <ProductLanding />

            <div className='flex flex-col gap-4'>
                <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 dark:bg-gray-900 py-12 px-6 sm:px-10 lg:px-24">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 h-fit rounded-2xl shadow-md">
                        <ProductFilter
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                        />
                        
                    </aside>
                    

                    {/* Product Listing */}
                    <main className="w-full lg:w-3/4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-xl">
                        <ProductListing
                            searchTerm={searchTerm}
                            selectedCategory={selectedCategory}
                            sortOrder={sortOrder}
                            priceRange={priceRange}
                        />
                    </main>
                </div>

            </div>

        </div>
    );
};

export default ProductMain;
