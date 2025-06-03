"use client"
import React from 'react'
import { motion } from "framer-motion"

const SlideDown = ({ children, id }) => {
    const slideDownVariants = {
        offscreen: {
            y: -80,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.8,
                delay: (0.2 * id)
            }
        }
    };
    return (
        <motion.div
            variants={slideDownVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideDown