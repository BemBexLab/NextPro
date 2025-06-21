import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const ImportanceLinks = ({ color, linkHoverColor }) => {
    const importanceLinks = [
        {
            id: 1,
            title: "Company",
            links: [
                { id: 1, path: "/contact-us", label: "Contact Us" },
                { id: 2, path: "/about-us", label: "About Us" },
                { id: 3, path: "/service-details", label: "Services" },
                { id: 4, path: "/portfolio", label: "Our Work" },
                { id: 5, path: "/classic-with-sidebar", label: "Blog" },
            ]
        },
        // {
        //     id: 2,
        //     title: "Resources",
        //     links: [
        //         { id: 1, path: "/blog", label: "Blog" },
        //         { id: 2, path: "#", label: "Help Center" },
        //         { id: 3, path: "#", label: "Support" },
        //         { id: 4, path: "#", label: "Tutorial" },
        //     ]
        // },
        {
            id: 3,
            title: "Social",
            links: [
                { id: 1, path: "https://x.com/", label: "Twitter" },
                { id: 2, path: "https://www.instagram.com/webfoundersusa/", label: "Instagram" },
                { id: 3, path: "https://linkedin.com/", label: "LinkedIn" },
                { id: 4, path: "https://www.facebook.com/profile.php?id=61576716743578", label: "Facebook" },
            ]
        },
        {
            id: 5,
            title: "Other links",
            links: [
                { id: 1, path: "/terms", label: "Terms" },
                { id: 2, path: "/privacy", label: "Privacy" },
            ]
        },
    ]
    return (
        <div className='grid md:grid-cols-4 grid-cols-2'>
            {importanceLinks.map(({ id, links, title }) => (
                <div key={id} className='mt-7.5 lg:mt-0'>
                    <h3 className={cn(`font-semibold text-1xl text-muted-foreground lg:pb-5 pb-3`, color)}>{title}</h3>
                    <ul>
                        {links.map(({ id: linkId, label, path }) => (
                            <li key={linkId} className='mt-2.5'>
                                {title === "Social" ? (
                                    <a
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            `font-semibold hover:text-primary-foreground transition-all duration-500`,
                                            color,
                                            linkHoverColor
                                        )}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <Link
                                        href={path}
                                        className={cn(
                                            `font-semibold hover:text-primary-foreground transition-all duration-500`,
                                            color,
                                            linkHoverColor
                                        )}
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ImportanceLinks
