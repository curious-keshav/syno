/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Founded', value: 'Oct 6, 2021' },
        { label: 'Industry', value: 'Consumer Electronics' },
        { label: 'Capital', value: '₹10,00,000' },
        { label: 'Directors', value: '2' },
    ];

    const timeline = [
        {
            year: '2021',
            title: 'Incorporation',
            desc: 'Syno Electrotec India Pvt. Ltd. was established with a vision to innovate in the electrical and electronics space.',
        },
        {
            year: '2022',
            title: 'Growth Phase',
            desc: 'Built foundational partnerships, and expanded our wholesale operations across Bihar.',
        },
        {
            year: '2023',
            title: 'Product Expansion',
            desc: 'Added new categories in electronics and refined our B2B operations.',
        },
        {
            year: '2024',
            title: 'Innovation & Tech',
            desc: 'Leveraging tech to create sustainable and scalable consumer electronics solutions.',
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            <div className=" max-w-5xl container mx-auto  md:px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-8">
                {/* Hero Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        About Us
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                        Pioneering innovation in the electrical and electronics sector to empower India’s tech future.
                    </p>
                </motion.div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
                    {stats.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
                        >
                            <p className="text-2xl font-bold">{item.value}</p>
                            <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Company Timeline */}
                {/* Company Timeline */}
                <div className="max-w-5xl mx-auto mt-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        Our Journey
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1 sm:left-1/2 transform sm:-translate-x-1/2 h-full border-l-4 border-blue-600"></div>

                        <div className="space-y-14">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-blue-600 w-5 h-5 rounded-full z-10 shadow-lg border-4 border-white dark:border-gray-900" />

                                    {/* Content Box */}
                                    <div
                                        className={`bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 w-full sm:w-[45%] ${index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'
                                            }`}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                                            {item.year} — {item.title}
                                        </h3>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;
