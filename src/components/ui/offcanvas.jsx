"use client"
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React, { createContext, useContext, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const DataContext = createContext({});

const OffcanvasOverlay = ({ children, className }) => {
    const [active, setActive] = useContext(DataContext)

    return (
        <div data-state={active} onClick={() => setActive("closed")} className={cn(`bg-black/15 h-full fixed z-50 right-0 top-0 transition-all duration-200 ease w-full data-[state=closed]:invisible data-[state=open]:visible`, className)}></div>
    )
}

const OffcanvasContent = ({ children, className, side }) => {
    const [active] = useContext(DataContext)

    const offcanvasVariants = cva(
        "fixed z-[999] transition-all duration-500 h-auto shadow-md bg-background max-w-md max-h-min rounded-[30px]",
        {
            variants: {
                side: {
                    top: "top-7.5",
                    bottom: "",
                    right: "data-[state=closed]:right-[-150%] data-[state=open]:right-0",
                    left: "data-[state=closed]:left-[-150%] data-[state=open]:left-0"
                }
            },
            defaultVariants: {
                side: "right",
            },
        }
    )

    return (
        <div data-state={active} className={cn(offcanvasVariants({ side }), className)}>
            {children}
        </div>
    )
}


const OffcanvasClose = ({children, className}) => {
    const [, setActive] = useContext(DataContext)
    return (
        <div onClick={() => setActive("closed")} className={cn(`absolute right-4 top-4 text-muted-foreground font-bold text-4xl cursor-pointer`, className)}>
            <MdClose />
        </div>
    )
}

const OffcanvasTrigger = ({ children, className, ...props }) => {
    const [, setActive] = useContext(DataContext)

    return (
        <div onClick={() => setActive("open")} {...props}>
            {children ? children : <BiMenuAltRight className={cn("text-5xl text-muted-foreground cursor-pointer", className)} />}
        </div>
    )
}


const Offcanvas = ({ children }) => {
    const [active, setActive] = useState("closed")
    return (
         <DataContext.Provider value={[active, setActive]}>
            {children}
        </DataContext.Provider>
    )
}

// export default OffcanvasTwo

export { Offcanvas, OffcanvasOverlay, OffcanvasTrigger, OffcanvasContent, OffcanvasClose }