import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaWhatsapp,
} from 'react-icons/fa6';

const PreNavBar = () => {
    return (
        <div className='w-screen flex justify-end py-4 z-40'>
            <div className="w-full ">
                <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 py-2 px-4 text-sm !text-white">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={24}  className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"/>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24}  className="text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"/>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <FaXTwitter size={24}  className="text-white hover:text-black dark:hover:text-gray-300 transition-colors"/>
                    </a>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24}  className="text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PreNavBar;
