import React from 'react'
import CardOne from '@/components/sections/blogs/cardOne'
import PageTitle from '@/components/sections/pageTitle'
// Local blog data (title, image, and link URL)
const blogData = [
    {
        id: 1,
        title: 'Top 5 U.S.A Digital Marketing Agencies in 2026',
        thumb: '/blogs/4.webp',
        author: 'Web Founders USA',
        date: 'Feb 20, 2026',
        category: 'Industry',
        url: '/blog/top-usa-digital-marketing-agencies-in-2026'
    },
    {
        id: 2,
        title: 'How to Choose a Digital Marketing Agency (Complete 2026 Guide)',
        thumb: '/blogs/6.webp',
        author: 'Web Founders USA',
        date: 'Feb 18, 2026',
        category: 'Guides',
        url: '/blog/how-to-choose-digital-marketing-agency'
    },
    {
        id: 3,
        title: 'Is Digital Marketing a Good Career?',
        thumb: '/blogs/1.webp',
        author: 'Web Founders USA',
        date: 'Feb 15, 2026',
        category: 'Social Media',
        url: '/blog/is-digital-marketing-a-good-career'
    },
    {
        id: 4,
        title: 'Why Businesses Struggle With SEO in 2026 And How Professional SEO Services Fix Rankings',
        thumb: '/blogs/blog-4-1.webp',
        author: 'Web Founders USA',
        date: 'Feb 15, 2026',
        category: 'Social Media',
        url: '/blog/why-businesses-struggle-with-seo-in-2026'
    },
    {
        id: 5,
        title: 'The Biggest Social Media Marketing Mistakes in 2026',
        thumb: '/blogs/blog 5.webp',
        author: 'Web Founders USA',
        date: 'Jan 6, 2026',
        category: 'Social Media',
        url: '/blog/the-biggest-social-media-marketing-mistakes-in-2026'
    },
    {
        id: 6,
        title: 'Best SEO Services in USA for 2026 Scalable SEO Optimization & Growth Solutions',
        thumb: '/blogs/blog 6.webp',
        author: 'Web Founders USA',
        date: 'Jan 6, 2026',
        category: 'Social Media',
        url: '/blog/best-seo-services-in-usa-for-2026'
    },
    {
        id: 7,
        title: "2026's Most Trusted SEO Consulting & Optimization Services in the USA",
        thumb: '/blogs/blog 7.webp',
        author: 'Web Founders USA',
        date: 'Jan 6, 2026',
        category: 'Social Media',
        url: '/blog/2026-most-trusted-seo-consulting-optimization-services/'
    },
    {
        id: 8,
        title: "How Local SEO Helps For Dentists Get More Patients in 2026",
        thumb: '/blogs/BLOG 8/blog 8.webp',
        author: 'Web Founders USA',
        date: 'Jan 10, 2026',
        category: 'Social Media',
        url: '/blog/how-local-seo-helps-for-dentists-get-more-patients-in-2026/'
    },
    {
        id: 9,
        title: "Advanced SEO Services USA 2026 – Professional SEO Strategies for Long-Term Success",
        thumb: '/blogs/blog 9.webp',
        author: 'Web Founders USA',
        date: 'Mar 18, 2026',
        category: 'SEO',
        url: '/blog/advanced-seo-services-usa-2026'
    },
    {
        id: 10,
        title: "Professional Content Writing Services in USA (2026) – Built for Rankings & Conversions",
        thumb: '/blogs/blog 10.webp',
        author: 'Web Founders USA',
        date: 'Mar 18, 2026',
        category: 'SEO',
        url: '/blog/ecommerce-and-white-label-seo-services-in-usa-2026'
    },
    {
        id: 11,
        title: "Ecommerce & White Label SEO Services in USA (2026) – Built for Brands That Want to Dominate",
        thumb: '/blogs/blog 11.webp',
        author: 'Web Founders USA',
        date: 'Mar 18, 2026',
        category: 'SEO',
        url: '/blog/professional-content-writing-services-in-usa-2026'
    },
    {
        id: 12,
        title: "Premium Content Writing Services USA 2026 Built for Authority & Long-Term Growth",
        thumb: '/blogs/blog 12.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'SEO',
        url: '/blog/premium-content-writing-services-usa-2026'
    },
    {
        id: 13,
        title: "Advanced Content Writing Services USA (2026) – Strategy, SEO & Results Combined",
        thumb: '/blogs/blog 13.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'Content Writing',
        url: '/blog/advanced-content-writing-services-usa-2026'
    },
    {
        id: 14,
        title: "Pay Per Click Advertising Services in USA (2026) – Maximize ROI with Smart PPC",
        thumb: '/blogs/blog 14.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'PPC',
        url: '/blog/pay-per-click-advertising-services-in-usa-2026'
    },
    {
        id: 15,
        title: "Advanced Pay Per Click (PPC) Services USA Scalable Ad Strategies for 2026",
        thumb: '/blogs/blog 15.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'PPC',
        url: '/blog/advanced-pay-per-click-ppc-services-usa-scalable-ad-strategies-for-2026'
    },
    {
        id: 16,
        title: "Advanced Conversion Optimization Services USA – Data-Driven CRO for 2026",
        thumb: '/blogs/blog 16.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'Conversion Optimization',
        url: '/blog/advanced-conversion-optimization-services-usa-data-driven-cro-for-2026'
    },
    {
        id: 17,
        title: "Top Conversion Optimization Mistakes in 2026 Insights by Web Founders USA",
        thumb: '/blogs/blog 17.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'Conversion Optimization',
        url: '/blog/top-conversion-optimization-mistakes-in-2026-insights-by-web-founders-usa'
    },
    {
        id: 18,
        title: "Conversion Optimization Services USA 2026 Boost Conversions, Not Just Visits",
        thumb: '/blogs/blog 18.webp',
        author: 'Web Founders USA',
        date: 'Mar 20, 2026',
        category: 'Conversion Optimization',
        url: '/blog/conversion-optimization-services-usa-2026'
    },
]
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "Blog  - Web Founders USA",
    description: "Read the Web Founders USA blog for expert insights, tips, and strategies on SEO, web design, and digital marketing growth.",

    robots: {
        index: true,
        follow: true
    }
};

const Blog2 = () => {
    return (
        <main>
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    {/* Optional: <PageTitle title="Our Blog" /> */}
                    <div className='grid grid-cols-1'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5'>
                            {blogData.map(({ id, author, date, thumb, title, category, url }) => (
                                <CardOne
                                    key={id}
                                    id={id}
                                    title={title}
                                    thumb={thumb}
                                    author={author}
                                    date={date}
                                    category={category}
                                    url={url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ContactFormTwo /> */}
        </main>
    )
}

export default Blog2
