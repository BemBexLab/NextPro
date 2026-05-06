"use client"
import React, { useEffect } from 'react'

const CustomCursor = () => {
    useEffect(() => {
        const infoElement = document.getElementById('info');
        if (!infoElement || typeof window === "undefined") {
            return undefined
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
        const finePointer = window.matchMedia("(pointer: fine)")

        if (prefersReducedMotion.matches || !finePointer.matches) {
            return undefined
        }

        let frameId = null
        let nextX = 0
        let nextY = 0

        const render = () => {
            frameId = null
            infoElement.style.transform = `translate3d(calc(${nextX}px - 50%), calc(${nextY}px - 50%), 0)`
        }

        const handleMouseMove = (event) => {
            nextX = event.clientX
            nextY = event.clientY

            if (!frameId) {
                frameId = window.requestAnimationFrame(render)
            }
        }

        window.addEventListener("mousemove", handleMouseMove, { passive: true })

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            if (frameId) {
                window.cancelAnimationFrame(frameId)
            }
        }
    }, [])
    return (
        <div id='info' className='fixed pointer-events-none left-0 top-0 translate-[calc(-50% + 5px), -50%] z-50 lg:block hidden'>
            <div className="w-[22px] h-[22px] rounded-full border border-primary transition-all duration-100 ease-out after:absolute after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:opacity-5 after:m-auto after:flex after:items-center after:justify-center after:transition-all after:rounded-full after:animate-custom-cussor "></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-5 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all z-50"></div>
        </div>
    )
}

export default CustomCursor
