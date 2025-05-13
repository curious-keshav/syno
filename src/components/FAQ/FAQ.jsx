/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/FAQ';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            <div className="max-w-5xl container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Find answers to common questions about our platform.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition">
                            <button
                                className="w-full flex gap-2 justify-between items-center text-left px-6 py-4 font-medium text-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <motion.span
                                    initial={false}
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl font-bold transform transition-transform"
                                >
                                    +
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { height: 'auto', opacity: 1 },
                                            collapsed: { height: 0, opacity: 0 }
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="px-6 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 overflow-hidden"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;