import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link'
import { cn } from '@/lib/utils';

const SocialIcons = ({color, prantBorder, hoverColor}) => {
    return (
        <ul className={`flex items-center gap-5 ${color}`}>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`)}>
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61576716743578"} aria-label="facebook"><FaFacebook/></Link>
            </li>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`)}>
                <Link target="_blank" href={"https://twitter.com/?lang=en"} aria-label="twitter"><FaXTwitter /></Link>
            </li>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`)}>
                <Link target="_blank" href={"https://www.instagram.com/webfoundersusa/"} aria-label="instagram"><FaInstagram /></Link>
            </li>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`)}>
                <Link target="_blank" href={"https://bd.linkedin.com/"} aria-label="linkedin"><FaLinkedin /></Link>
            </li>
        </ul>
    )
}

export default SocialIcons