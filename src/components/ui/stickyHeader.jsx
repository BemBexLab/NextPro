"use client"
import React, { useEffect } from 'react'

const StickyHeader = ({ children, top = '0px' }) => {

    useEffect(() => {
        const top_header = document.getElementById('top-header');
        const header = document.getElementById('header');
        const header_container = document.getElementById('header-container');

        if (!header || !header_container) {
            return undefined;
        }

        const root = document.documentElement;
        let prevScrollpos = window.scrollY;
        let ticking = false;
        let headerHeight = 0;
        let topHeaderHeight = 0;

        const measure = () => {
            headerHeight = header_container.offsetHeight;
            topHeaderHeight = top_header ? top_header.offsetHeight : 0;
        };

        const setPinnedState = (isPinned) => {
            if (isPinned) {
                header.classList.add("header-pinned");
                header.style.top = top_header ? `-${topHeaderHeight}px` : top;
                root.style.setProperty(
                    '--header-height',
                    `${Math.max(headerHeight - topHeaderHeight, 0)}px`
                );
                return;
            }

            header.classList.remove("header-pinned");
            header.style.top = `-${headerHeight}px`;
            root.style.setProperty('--header-height', '0px');
        };

        measure();

        if (prevScrollpos > headerHeight) {
            setPinnedState(true);
        } else {
            setPinnedState(false);
        }

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(() => {
                const currentScrollPos = window.scrollY;
                const shouldPin =
                    prevScrollpos > currentScrollPos && currentScrollPos > headerHeight;

                setPinnedState(shouldPin);
                prevScrollpos = currentScrollPos;
                ticking = false;
            });
        };

        const resizeObserver = new ResizeObserver(() => {
            measure();
            handleScroll();
        });

        resizeObserver.observe(header_container);
        if (top_header) {
            resizeObserver.observe(top_header);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', measure, { passive: true });

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', measure);
        };
    }, [top]);


    return (
        <>
            {children}
        </>
    )
}

export default StickyHeader
