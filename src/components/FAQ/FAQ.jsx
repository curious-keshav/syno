import React, { useState } from 'react';
import { faqs } from '../../data/FAQ';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            <div className="max-w-5xl container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Find answers to common questions about our platform
                    </p>
                </div>
                <div className=" mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="ml-2 text-xl">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900  ">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
