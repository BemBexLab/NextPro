import React, { useEffect } from 'react'

const useParticlesAnimation = () => {
    useEffect(() => {
        if (window.innerWidth >= 1280) {
            const squares = [
                ".section-hero__right__square1",
                ".section-hero__right__square2",
                ".section-hero__right__square3"
            ];

            squares.forEach(animateDiv);

            function makeNewPosition() {
                var h = window.innerHeight - 50;
                var nh = Math.floor(Math.random() * h);
                return nh;
            }

            function animateDiv(myclass) {
                const element = document.querySelector(myclass);
                if (!element) return;

                var newq = makeNewPosition();
                var currentTop = parseInt(element.style.top) || 0;
                var delta = newq - currentTop;
                var duration = 5000;
                var startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = timestamp - startTime;
                    var percentage = Math.min(progress / duration, 1);
                    element.style.top = currentTop + delta * percentage + 'px';
                    if (percentage < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        animateDiv(myclass);
                    }
                }

                window.requestAnimationFrame(step);
            }
        }
    }, []);
}

export default useParticlesAnimation