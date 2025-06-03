"use client"
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ duration = 1000, finalWidth, title }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (inView) {
                setWidth((prevWidth) => {
                    if (prevWidth < finalWidth) {
                        return prevWidth + 1;
                    } else {
                        clearInterval(animationInterval);
                        return finalWidth;
                    }
                });
            }
        }, duration / finalWidth);

        return () => clearInterval(animationInterval);
    }, [duration, finalWidth, inView]);


    return (
        <div>
            <div>
                <div className='pt-7.5'>
                    <p className='flex justify-between pb-4'>
                        <span className='font-bold text-muted-foreground'>{title}</span>
                    </p>
                    <div className='bg-accent w-full h-[15px] rounded-sm  relative' ref={ref}>
                        <span className='bg-primary h-full block rounded-tl-sm rounded-bl-sm' style={{ width: `${width}%` }}></span>
                        {width == 0 ? "" : <span className={`font-bold text-muted-foreground absolute -top-11`} style={{ left: `${width - 6}%` }}>{finalWidth}%</span>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProgressBar
