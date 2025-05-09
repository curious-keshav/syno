import React, { useState, useEffect, useRef } from "react";

const carouselDetails = [
    {
        title: "3D Interior Visualization",
        description:
            "Experience high-quality 3D renders to visualize your space before execution.",
        buttonName: "View Portfolio",
    },
    {
        title: "Video Walkthrough",
        description:
            "Take an immersive video tour of your designed interiors before implementation.",
        buttonName: "Book Consultation",
    },
    {
        title: "Budget-Friendly Designs",
        description:
            "Get elegant and functional interior designs customized to fit your budget.",
        buttonName: "Get Quote",
    },
];

const RotatingCards = ({ autoRotateInterval = 5000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);

    const startAutoRotate = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % carouselDetails.length);
        }, autoRotateInterval);
    };

    const stopAutoRotate = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoRotate();
        return stopAutoRotate;
    }, [autoRotateInterval]);

    const handlePrevious = () => {
        setActiveIndex(
            (prev) => (prev - 1 + carouselDetails.length) % carouselDetails.length
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % carouselDetails.length);
    };

    const getCardPosition = (index) => {
        const position =
            (index - activeIndex + carouselDetails.length) % carouselDetails.length;
        if (position === 0) return "center";
        if (position === 1) return "right";
        if (position === carouselDetails.length - 1) return "left";
        return "hidden";
    };

    const handleButtonClick = (buttonName) => {
        if (buttonName === "View Portfolio") {
            window.location.href = "/work";
        } else {
            window.location.href = "/contact";
        }
    };

    return (
        <section
            id="services"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
        >

            <h2 className="text-3xl text-center mb- md:text-4xl font-bold  font-poppins text-white dark:text-white ">
                Services
            </h2>
            <div
                className="relative w-full h-[400px] md:h-[300px] flex items-center justify-center overflow-hidden max-w-6xl mx-auto"
                ref={containerRef}
                onMouseEnter={stopAutoRotate}
                onMouseLeave={startAutoRotate}
            >
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    aria-label="Previous card"
                    className="absolute left-4 z-30 bg-white/90 dark:bg-gray-700 dark:text-white hover:bg-white dark:hover:bg-gray-600 p-2 rounded-full shadow-md text-xl"
                >
                    ◀
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next card"
                    className="absolute right-4 z-30 bg-white/90 dark:bg-gray-700 dark:text-white hover:bg-white dark:hover:bg-gray-600 p-2 rounded-full shadow-md text-xl"
                >
                    ▶
                </button>

                {/* Cards */}
                {carouselDetails.map((card, index) => {
                    const position = getCardPosition(index);
                    const baseClasses =
                        "absolute transition-all duration-700 ease-in-out transform w-[85vw] sm:w-[60vw] md:w-[37vw] h-[15rem]";
                    let positionClasses = "";

                    if (position === "center") {
                        positionClasses =
                            "z-20 scale-100 opacity-100 blur-0 translate-x-0 rotate-0";
                    } else if (position === "right") {
                        positionClasses =
                            "z-10 scale-90 opacity-70 blur-sm translate-x-24 rotate-6 md:translate-x-12";
                    } else if (position === "left") {
                        positionClasses =
                            "z-10 scale-90 opacity-70 blur-sm -translate-x-24 -rotate-6 md:-translate-x-12";
                    } else {
                        positionClasses = "opacity-0 scale-75 pointer-events-none";
                    }

                    return (
                        <div
                            key={index}
                            className={`${baseClasses} ${positionClasses}`}
                            aria-hidden={position !== "center"}
                        >
                            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl shadow-xl border transition-colors duration-300">
                                <h2 className="text-center font-bold text-2xl md:text-xl font-poppins dark:text-white">
                                    {card.title}
                                </h2>
                                <p className="text-center text-gray-700 dark:text-gray-300 text-lg md:text-base font-poppins mt-4 mb-6">
                                    {card.description}
                                </p>
                                <button
                                    onClick={() => handleButtonClick(card.buttonName)}
                                    className="bg-black text-white hover:bg-white hover:text-black hover:border-black border mt-auto py-2 px-4 rounded-lg text-base font-semibold transition-all duration-300"
                                >
                                    {card.buttonName}
                                </button>
                            </div>
                        </div>
                    );

                })}
            </div>
        </section>
    );
};

export default RotatingCards;
