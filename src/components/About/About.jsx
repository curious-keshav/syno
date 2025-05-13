/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import OurJourney from './OurJourney';

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
        <section className=" relative w-full py-12 md:py-24 bg-[#f4f9ff] dark:bg-gray-900 text-black dark:text-white transition-colors">
            {/* <div className=" hidden md:block absolute -rotate-90 uppercase top-1/2 -left-16  text-5xl font-extrabold tracking-wider text-gray-700 ">Our Journey</div> */}

            <div className="container mx-auto max-w-5xl px-6 sm:px-8 bg-[#f4f9ff] dark:bg-gray-900">
                {/* Hero Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
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
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 hover:border-[#005aaa] hover:shadow-[#005aaa]/20 hover:shadow-lg transition-all duration-300 "
                        >
                            <p className="text-xl font-semibold text-blue-600">{item.value}</p>
                            <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
            <OurJourney />
        </section>
    );
};

export default About;
