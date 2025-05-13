import React from "react";
import footerLogo from "../../../public/logo/SYNO.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/about" },
    { title: "Products", link: "/#products" },
    { title: "Team", link: "/#team" },
    { title: "Contacts", link: "/#contact" },
];

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300 mb-4">
            <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-start gap-3">
                    <img
                        src={footerLogo}
                        alt="Logo"
                        className="w-20 h-20 scale-150 ml-4 object-contain dark:invert"
                    />
                    <p className="text-sm max-w-xs">
                        Transforming your digital experiences with clean design and powerful technology.
                    </p>
                    {/* Accent Lines */}
                    <div className="relative mt-2">
                        <div className="h-2 w-64 bg-blue-500 rounded-tr-xl"></div>
                        <div className="h-2 w-80 dark:bg-white bg-gray-800  rounded-tr-xl"></div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {FooterLinks.map((item) => (
                            <li key={item.title}>
                                <a
                                    href={item.link}
                                    className="hover:text-[#3b82f6] !text-[#3b82f6] transition-colors duration-200"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Connect Info */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Connect</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <FaLocationArrow className="text-primary" />
                            <span>Noida, Uttar Pradesh</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMobileAlt className="text-primary" />
                            <span>+91 123456789</span>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="flex gap-4 mt-4 text-xl text-primary">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin className="hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} SYNO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
