/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';

const OurJourney = () => {

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
        <section className=" relative w-full  bg-[#f4f9ff] dark:bg-gray-900 text-black dark:text-white transition-colors">
            <div className=" hidden md:block absolute -rotate-90 uppercase top-1/2 -left-16  text-5xl font-extrabold tracking-wider text-gray-700 ">Our Journey</div>

            <div className="container mx-auto max-w-5xl px-6 sm:px-8  bg-[#f4f9ff] dark:bg-gray-900">

                {/* Company Timeline */}
                <div className="relative max-w-5xl mx-auto mt-20">
                    <h2 className=" block lg:hidden text-3xl sm:text-4xl font-bold mb-12 text-center">
                        Our Journey
                    </h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-600 z-0"></div>

                        {/* Timeline Content */}
                        <div className="space-y-14 z-10">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 w-5 h-5 rounded-full z-10 shadow-lg border-4 border-white dark:border-gray-900" />

                                    {/* Content Box */}
                                    <div
                                        className={`bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 w-full sm:w-[45%] ${index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'}`}
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
    )
}

export default OurJourney
