"use client";
import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollCircle = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / scrollableHeight) * 100;
            setScrollPercentage(scrollPercentage);
            setShowBackToTop(scrollPosition > 350);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            onClick={scrollToTop}
            className={`${showBackToTop ? "block" : "hidden"} fixed bottom-5 right-5 z-20 bg-background rounded-full cursor-pointer shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}
        >
            <svg
                className="w-9 h-9"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
                stroke="#2E4DFE"
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: "307.919, 307.919",
                        strokeDashoffset: 307.919 - (scrollPercentage * 307.919) / 100,
                    }}
                ></path>
            </svg>
            <span className="text-muted-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <GoArrowUp className="text-2xl" />
            </span>
        </div>
    );
};

export default ScrollCircle;
