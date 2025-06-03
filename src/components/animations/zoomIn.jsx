"use client"
import React from 'react'
import { motion } from "framer-motion"

const ZoomIn = ({ children, id = 1 }) => {
    const zoomInVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.8,
                delay: (id === 1 ? 0 : 0.1 * id)
            }
        }
    };
    return (
        <motion.div
            variants={zoomInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default ZoomIn