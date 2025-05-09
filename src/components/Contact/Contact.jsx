import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import contactUs from "../../../public/graphics/contact-us.svg";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 "
        >
            <div className=" hidden md:block absolute -rotate-90 uppercase top-1/2 -left-16  text-5xl font-extrabold tracking-wider text-gray-700 ">Contact Us</div>
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">

                <img alt="contact-us" src={contactUs} className="object-contain" />

                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 space-y-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Message submitted!");
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="What's this about?"
                                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                placeholder="Type your message here..."
                                rows={5}
                                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                required
                            />
                        </div>

                        <div className="col-span-1 sm:col-span-2 text-center">
                            <button
                                type="submit"
                                className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
