import { cn } from '@/lib/utils'
import Link from 'next/link'

const ImportanceLinks = ({
    color,
    linkHoverColor,
    excludeGroups = [],
    excludeLinksByGroup = {},
}) => {
    const importanceLinks = [
        {
            id: 1,
            title: "Company",
            links: [
                { id: 1, path: "/contact-us", label: "Contact Us" },
                { id: 2, path: "/about-us", label: "About Us" },
                { id: 3, path: "/service", label: "Services" },
                { id: 4, path: "/portfolio", label: "Our Work" },
                // { id: 5, path: "/blog", label: "Blog" },
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
        // }
        {
            id: 3,
            title: "Social",
            links: [
                { id: 1, path: "https://x.com/webfounders_usa", label: "Twitter" },
                { id: 2, path: "https://www.instagram.com/webfoundersusa/", label: "Instagram" },
                { id: 3, path: "https://linkedin.com/", label: "LinkedIn" },
                { id: 4, path: "https://www.facebook.com/profile.php?id=61576716743578", label: "Facebook" },
            ]
        },
        {
            id: 4,
            title: "Other links",
            links: [
                { id: 1, path: "/terms", label: "Terms & Conditions" },
                { id: 2, path: "/privacy", label: "Privacy Policy" },
                { id: 3, path: "/service/seo-services/", label: "SEO Services" },
                { id: 4, path: "/blog/", label: "Blogs" },
            ]
        },
        {
            id: 5,
            title: "SEO links",
            links: [
                { id: 1, path: "/service/seo-services/local-seo-services/", label: "Local SEO Services" },
                { id: 2, path: "/service/seo-services/b2b-seo/", label: "B2B SEO Services" },
                { id: 3, path: "/service/seo-services/enterprise-seo/", label: "Enterprise SEO Services" },
                { id: 4, path: "/service/seo-services/woocommerce-seo/", label: "WooCommerce SEO Services" },
            ]
        },
    ]
    const visibleLinks = importanceLinks.filter(
        ({ title }) => !excludeGroups.includes(title),
    )

    return (
        <div
            className={`grid min-w-0 gap-y-8 ${
                excludeGroups.length
                    ? "grid-cols-[max-content_max-content] justify-end gap-x-4"
                    : "grid-cols-1 gap-x-5 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-x-6"
            }`}
        >
            {visibleLinks.map(({ id, links, title }) => {
                const excludedLinks = excludeLinksByGroup[title] || []
                const groupLinks = links.filter(({ label }) => !excludedLinks.includes(label))

                return (
                <div key={id} className='min-w-0'>
                    <h3 className={cn(`font-semibold text-1xl text-muted-foreground lg:pb-5 pb-3`, color)}>{title}</h3>
                    <ul>
                        {groupLinks.map(({ id: linkId, label, path }) => (
                            <li key={linkId} className='mt-2.5'>
                                {title === "Social" ? (
                                    <a
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            `break-words font-semibold hover:text-primary-foreground transition-all duration-500`,
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
                                            `break-words font-semibold hover:text-primary-foreground transition-all duration-500`,
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
                )
            })}
        </div>
    )
}

export default ImportanceLinks
