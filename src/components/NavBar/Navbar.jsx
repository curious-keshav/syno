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

const navItems = [
    { icon: <FaTachometerAlt />, label: 'About' },
    { icon: <FaAddressBook />, label: 'Products' },
    { icon: <FaClone />, label: 'Team' },
    { icon: <FaCalendarAlt />, label: 'Contact' },
];

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="w-full h-screen overflow-x-hidden bg-white dark:bg-gray-900 shadow-md z-50 rounded-t-3xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between box-border">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <img
                        alt="logo"
                        src="/logo/SYNO.png"
                        className="h-28 md:h-32 scale-150 w-auto object-contain ml-8 md:ml-0 dark:invert"
                    />
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6 min-w-0">
                    {navItems.map((item, i) => (
                        <li
                            key={item.label}
                            onClick={() => setActiveIndex(i)}
                            className={clsx(
                                'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                                {
                                    'bg-indigo-100 text-[#005aaa] dark:bg-[#005aaa] dark:text-white shadow':
                                        i === activeIndex,
                                    'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800':
                                        i !== activeIndex,
                                }
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-indigo-600 dark:text-yellow-300 transition dark:bg-[#005aaa]"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
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
                <ul className="flex flex-col px-4 sm:px-6 pb-4 space-y-2 md:hidden">
                    {navItems.map((item, i) => (
                        <li
                            key={item.label}
                            onClick={() => {
                                setActiveIndex(i);
                                setMenuOpen(false);
                            }}
                            className={clsx(
                                'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                                {
                                    'bg-indigo-100 text-[#005aaa] dark:bg-[#005aaa] dark:text-white shadow':
                                        i === activeIndex,
                                    'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800':
                                        i !== activeIndex,
                                }
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
