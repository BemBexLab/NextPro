"use client"
import { useEffect, useState } from 'react'

const useMoveMentAnimation = () => {
    const [mousPositionX, setMousPositionX] = useState(0)
    const [mousPositionY, setMousPositionY] = useState(0)

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
        const finePointer = window.matchMedia("(pointer: fine)")

        if (prefersReducedMotion.matches || !finePointer.matches) {
            return undefined
        }

        let frameId = null

        const mouseMovement = (event) => {
            if (frameId) {
                return
            }

            frameId = window.requestAnimationFrame(() => {
                frameId = null
                setMousPositionX(event.clientX / 60)
                setMousPositionY(event.clientY / 60)
            })
        }

        window.addEventListener("mousemove", mouseMovement, { passive: true })

        return () => {
            window.removeEventListener("mousemove", mouseMovement)
            if (frameId) {
                window.cancelAnimationFrame(frameId)
            }
        }
    }, [])

    return [mousPositionX, mousPositionY]
}

export default useMoveMentAnimation
