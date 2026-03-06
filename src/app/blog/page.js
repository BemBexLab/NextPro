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
