import React from "react";
import "./ServicesScroll.css";

const ScrollComponent = () => {
    const items = [
        "Cooler",
        "Fan",
        "AC",
        "Washing Machine",
        "Refrigerator",
        "TV",
        "Electrical fitting materials",
        "Switch & accessories",
        "Switch & switchgears"
    ];


    return (
        <>
            <section className="content fluid">
                <h2>
                    <span aria-hidden="true">you can&nbsp;</span>
                    <span className="sr-only">you can ship things.</span>
                </h2>
                <ul aria-hidden="true" style={{ "--count": items.length }}>
                    {items.map((item, i) => (
                        <li key={i} style={{ "--i": i }}>{item}.</li>
                    ))}
                </ul>
            </section>

        </>
    );
};

export default ScrollComponent;
