import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { blogData } from '@/lib/fackData/blogData'
import React from 'react'
import CardOne from './cardOne'
import SlideUp from '@/components/animations/slideUp'

const BlogOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Blog</Button>
                        <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">From Our Blog – Learn, Grow, & Succeed!</Title>
                    </div>
                </SlideUp>

                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
                    {
                        blogData.slice(0, 3).map(({ id, author, date, thumb, title, category }) => <CardOne key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogOne