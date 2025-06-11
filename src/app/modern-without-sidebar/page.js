import React from 'react'
import CardTwo from '@/components/sections/blogs/cardTwo'
import PageTitle from '@/components/sections/pageTitle'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "WebFoundersUSA",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const BlogGrid = () => {
    return (
        <main>
            <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} />
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12.5 justify-between'>
                        {
                            blogData.map(({ id, author, date, thumb, title, category }) => <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogGrid