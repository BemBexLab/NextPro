import React from 'react'
import BlogArtical from '@/components/sections/blogs/blogArtical'
import PageTitle from '@/components/sections/pageTitle'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};
  
const BLogSIngle2 = () => {
    return (
        <main>
            {/* <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}  /> */}
            <BlogArtical sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2