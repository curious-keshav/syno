import { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaTachometerAlt,
    FaAddressBook,
    FaClone,
    FaCalendarAlt,
    FaSun,
    FaMoon,
} from 'react-icons/fa';
import clsx from 'clsx';
import { useTheme } from '../../context/ThemeContext';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
    { icon: <FaTachometerAlt />, label: 'About', to: 'about-section' },
    { icon: <FaAddressBook />, label: 'Products', to: 'products-section' },
    { icon: <FaClone />, label: 'Team', to: 'team-section' },
    { icon: <FaCalendarAlt />, label: 'Contact', to: 'contact-section' },
];

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="w-full z-50 overflow-hidden bg-[#f4f7fb] dark:bg-gray-900 shadow-md rounded-t-3xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img
                        alt="logo"
                        src="/logo/SYNO.png"
                        className="h-24 md:h-28 scale-150 w-auto object-contain ml-8 md:ml-0 dark:invert"
                    />
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item, i) => (
                        <li key={item.label}>
                            <ScrollLink
                                to={item.to}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                spy={true}
                                onSetActive={() => setActiveIndex(i)}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer',
                                    {
                                        'bg-[#005aaa] text-[#f4f6f8] hover:bg-[#004b88]  dark:bg-[#005aaa] dark:text-white shadow-md':
                                            i === activeIndex,
                                        'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800':
                                            i !== activeIndex,
                                    }
                                )}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Theme & Menu Toggle */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-[#005aaa] dark:text-yellow-300 transition dark:bg-[#005aaa] p-2 rounded-full"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-[#005aaa] dark:text-white transition"
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="flex flex-col px-4 sm:px-6 pb-4 pt-2 space-y-2 md:hidden">
                    {navItems.map((item, i) => (
                        <li key={item.label}>
                            <ScrollLink
                                to={item.to}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                spy={true}
                                onSetActive={() => setActiveIndex(i)}
                                onClick={() => setMenuOpen(false)}
                                className={clsx(
                                    'flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer',
                                    {
                                        'bg-white text-[#005aaa] dark:bg-[#005aaa] dark:text-white shadow-md':
                                            i === activeIndex,
                                        'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800':
                                            i !== activeIndex,
                                    }
                                )}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
