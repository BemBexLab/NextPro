"use client"
import React, { useEffect, useState } from 'react'

const useMoveMentAnimation = () => {
    const [mousPositionX, setMousPositionX] = useState(0)
    const [mousPositionY, setMousPositionY] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", mouseMovement)
        return () => window.removeEventListener("mousemove", mouseMovement)
    }, [])

    const mouseMovement = (event) => {
        const cursorPointerX = event.clientX
        const cursorPointerY = event.clientY

        const halfScreenSizeX = window.screen.width / 2
        const halfScreenSizeY = window.screen.height / 2

        // ------ scroll hrozental
        if (halfScreenSizeX < cursorPointerX) {
            setMousPositionX(cursorPointerX / 60)
        }
        else {
            setMousPositionX(cursorPointerX / 60)
        }

        // ------ scroll vertical
        if (halfScreenSizeY < cursorPointerY) {
            setMousPositionY(cursorPointerY / 60)
        }
        else {
            setMousPositionY(cursorPointerY / 60)
        }
    }

    return [mousPositionX, mousPositionY]
}

export default useMoveMentAnimation