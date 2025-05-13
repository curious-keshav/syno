/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
    AirVent,
    Fan,
    Lightbulb,
    Microwave,
    Monitor,
    Refrigerator,
    Tv,
    WashingMachine,
    LampDesk,
    Plug,
    Zap,
    BatteryFull,
    Thermometer,
    Cpu,
} from "lucide-react";

// Product names and icons
const products = [
    "LED Tube Light",
    "Ceiling Fan",
    "Air Conditioner",
    "Microwave Oven",
    "Refrigerator",
    "Smart TV",
    "Water Purifier",
    "Induction Cooktop",
    "Electric Kettle",
];

const productIcons = [
    Refrigerator,
    Lightbulb,
    Fan,
    Tv,
    AirVent,
    Microwave,
    Monitor,
    WashingMachine,
    LampDesk,
    Plug,
    Zap,
    BatteryFull,
    Thermometer,
    Cpu,
];

// Shuffle utility
const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const MarqueeItem = ({ text, bgColor, textColor, borderColor }) => (
    <div
        className={`shrink-0 min-w-0 whitespace-nowrap text-xs rounded-lg font-semibold px-3 py-1 shadow ${bgColor} ${textColor} border-2 ${borderColor}`}
    >
        {text}
    </div>
);


const MarqueeIcon = ({ Icon, bgColor, textColor, borderColor }) => (
    <div className={`mx-4 text-xl rounded-lg px-3 py-2 shadow ${bgColor} ${textColor} border-2 ${borderColor}`}>
        <Icon />
    </div>
);

const ProductMarquee = () => {
    const row1Items = shuffleArray([...products, ...products, ...products]);
    const row2Items = shuffleArray([...products, ...products, ...products]);
    const row3Items = shuffleArray([...products, ...products, ...products]);
    const row4Icons = shuffleArray([...productIcons, ...productIcons, ...productIcons]);
    const row5Icons = shuffleArray([...productIcons, ...productIcons, ...productIcons]);

    const rowColors = [
        ["bg-[#005aaa]/80", "text-white", "border-[#003f7d]"],
        ["bg-[#004a8c]/80", "text-white", "border-[#00345b]"],
        ["bg-[#003f7d]/80", "text-white", "border-[#002d5c]"],
        ["bg-[#003057]/80", "text-gray-100", "border-[#002246]"],
        ["bg-[#002c4a]/80", "text-gray-100", "border-[#001e36]"],
        ["bg-[#001f2b]/80", "text-gray-200", "border-[#001027]"],
    ];



    return (
        <section className="w-full  pb-16 bg-[#f4f7fb] dark:bg-gray-900 text-black dark:text-white transition-colors">
            <div className="max-w-5xl px-4 sm:px-6 mx-auto text-center w-full overflow-hidden space-y-4">

                <motion.div
                    className="flex  gap-x-4 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                >
                    {row1Items.map((item, i) => (
                        <MarqueeItem
                            key={i}
                            text={item}
                            bgColor={rowColors[0][0]}
                            textColor={rowColors[0][1]}
                            borderColor={rowColors[0][2]}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="flex  gap-x-4 items-center"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
                >
                    {row2Items.map((item, i) => (
                        <MarqueeItem
                            key={i}
                            text={item}
                            bgColor={rowColors[1][0]}
                            textColor={rowColors[1][1]}
                            borderColor={rowColors[1][2]}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="flex  gap-x-4 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
                >
                    {row3Items.map((item, i) => (
                        <MarqueeItem
                            key={i}
                            text={item}
                            bgColor={rowColors[2][0]}
                            textColor={rowColors[2][1]}
                            borderColor={rowColors[2][2]}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="flex  gap-x-8 items-center"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                >
                    {row4Icons.map((Icon, i) => (
                        <MarqueeIcon
                            key={i}
                            Icon={Icon}
                            bgColor={rowColors[3][0]}
                            textColor={rowColors[3][1]}
                            borderColor={rowColors[3][2]}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="flex  gap-x-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                >
                    {row5Icons.map((Icon, i) => (
                        <MarqueeIcon
                            key={i}
                            Icon={Icon}
                            bgColor={rowColors[4][0]}
                            textColor={rowColors[4][1]}
                            borderColor={rowColors[4][2]}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ProductMarquee;
