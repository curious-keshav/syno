/* eslint-disable no-unused-vars */
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Home = () => {
  return (
    <div className="bg-[#f4f7fb] text-gray-900 dark:bg-gray-900 dark:text-[#f4f6f8] py-20 px-4 sm:px-8">
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Gradient Background Effects */}
        <div className="absolute inset-0 z-0 opacity-90" />
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#005aaa] opacity-20 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#005aaa] opacity-20 blur-[100px] rounded-full z-0" />

        {/* Left Content */}
        <motion.div
          className="relative z-10 space-y-6 text-center md:text-left px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-md"
            custom={0}
            variants={fadeUp}
          >
            Power Up with{' '}
            <span className="text-[#005aaa] drop-shadow-[0_2px_6px_rgba(0,90,170,0.6)]">Next-Gen Tech</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
            custom={0.2}
            variants={fadeUp}
          >
            From smart appliances to industrial automation, we engineer cutting-edge solutions to electrify your lifestyle and scale your business.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start"
            custom={0.4}
            variants={fadeUp}
          >
            <Link to="/products">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#005aaa] text-[#f4f6f8] hover:bg-[#004b88] px-6 py-3 text-base sm:text-lg rounded-xl shadow-lg flex items-center gap-2 transition-transform duration-200"
              >
                Explore our Products <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative z-10 px-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden border-2 border-[#005aaa] shadow-xl hover:shadow-[#005aaa]/30 transition-all duration-500">
            <img
              src="./homeLanding.png"
              alt="Modern Setup"
              className="w-full h-auto max-h-[450px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mt-24 mx-auto justify-center flex flex-col items-center w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: 'High-Performance Products',
              desc: 'Carefully selected tech and appliances that combine durability, innovation, and style.',
            },
            {
              title: 'Top Brands You Trust',
              desc: 'We partner with globally recognized manufacturers to ensure premium quality.',
            },
            {
              title: 'Speedy, Secure Delivery',
              desc: 'Fast, reliable shipping that ensures your products arrive safely and on time.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-[#005aaa] dark:border-gray-700 hover:border-[#005aaa] hover:shadow-[#005aaa]/20 hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
