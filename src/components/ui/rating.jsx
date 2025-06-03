import { cn } from "@/lib/utils";
import React from "react";
import { IoStarHalf, IoStarSharp, IoStarOutline } from "react-icons/io5";

const Rating = ({ star, className }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <li key={index}>
                {star >= index + 1 ? (
                    <IoStarSharp className={cn(`text-[#F4C82A] text-3xl cursor-pointer ${className}`)} />
                ) : star >= number ? (
                    <IoStarHalf className={cn(`text-[#F4C82A] text-3xl cursor-pointer ${className}`)} />
                ) : (
                    <IoStarOutline className={cn(`text-[#F4C82A] text-3xl cursor-pointer ${className}`)} />
                )}
            </li>
        );
    });
    return <ul className={cn(`flex gap-1 ${className}`)}>{starRating}</ul>;
};

export default Rating;