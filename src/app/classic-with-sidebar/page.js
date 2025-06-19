import React from 'react'
import CardOne from '@/components/sections/blogs/cardOne'
import PageTitle from '@/components/sections/pageTitle'
import { blogData } from '@/lib/fackData/blogData'
import Link from 'next/link'

export const metadata = {
    title: "WebFounders USA",
    description: "WebFounder USA is a leading web development company that provides custom web development services to businesses of all sizes. We are a team of experienced web developers who are dedicated to providing the best possible web development services to our clients.",
};

const Blog2 = () => {
    return (
        <main>
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    {/* Optional: <PageTitle title="Our Blog" /> */}
                    <div className='grid grid-cols-1'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5'>
                            {blogData.map(({ id, author, date, thumb, title, category }) => (
                                <Link key={id} href={`/blog-dynamic/${id}`} className="block h-full">
                                    <CardOne
                                        id={id}
                                        title={title}
                                        thumb={thumb}
                                        author={author}
                                        date={date}
                                        category={category}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog2
