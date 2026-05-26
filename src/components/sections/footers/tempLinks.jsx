import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const TempLinks = ({ sections = [], color, linkHoverColor, scrollable = false }) => {
    if (!sections.length) return null

    return (
        <div className='grid md:grid-cols-4 grid-cols-2'>
            {sections.map(({ id, title, links = [] }) => (
                <div key={id} className='mt-7.5 lg:mt-0'>
                    <h3 className={cn(`font-semibold text-1xl text-muted-foreground lg:pb-5 pb-3`, color)}>{title}</h3>
                    <ul
                        className={cn(
                            scrollable && `max-h-[150px] overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.35)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/35`
                        )}
                    >
                        {links.map(({ id: linkId, label, path, external }) => (
                            <li key={linkId} className='mt-2.5'>
                                {external ? (
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

export default TempLinks
