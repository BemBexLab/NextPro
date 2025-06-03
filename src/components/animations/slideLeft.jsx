"use client"
import React from 'react'
import { motion } from "framer-motion"

const SlideLeft = ({ children, id }) => {
    const slideLeftVariants = {
        offscreen: {
            x: -80,
            opacity:0
        },
        onscreen: {
            x: 0,
            opacity:1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.8
            }
        }
    };
    return (
        <motion.div
            variants={slideLeftVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideLeft