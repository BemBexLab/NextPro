import React from 'react'
import BlogArtical from '@/components/sections/blogs/blogArtical'
import PageTitle from '@/components/sections/pageTitle'

export const metadata = {
    title: "WebFoundersUSA",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const BlogSingle = () => {
    return (
        <main>
            <PageTitle
                pageName={"Blog"}
                breadcrumbLink={"Blog"}
                breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}
            />

            <BlogArtical sidebarShow={true} thumb={'/images/blog/blog-post1-10.png'} />
        </main>
    )
}

export default BlogSingle