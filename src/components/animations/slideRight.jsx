"use client"
import React from 'react'
import { motion } from "framer-motion"

const SlideRight = ({ children, id = 1 }) => {
    const slideRightVariants = {
        offscreen: {
            x: 80,
            opacity:0
        },
        onscreen: {
            x: 0,
            opacity:1,
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
            variants={slideRightVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideRight