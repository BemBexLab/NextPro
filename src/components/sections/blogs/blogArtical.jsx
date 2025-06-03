import React from 'react'
import Title from '../../ui/title'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from '../sideBar'
import QuoteIcon from '../../../../public/icons/quoteIcon'
import NextPrevPost from './nextPrevPost'
import Tags from './tags'
import Author from './author'
import Comments from './comments'
import LeveRelpy from './leveRelpy'
import { blogData } from '@/lib/fackData/blogData'
import CardOne from './cardOne'

const BlogArtical = ({ sidebarShow }) => {
    return (
        <section className='lg:py-15 py-9'>
            <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
                <div className={`grid  ${sidebarShow ? "xl:grid-cols-[33%_66%] lg:grid-cols-[40%_60%] grid-cols-1" : "grid-cols-1"} gap-12.5`}>
                    {
                        sidebarShow &&
                        <div className=''>
                            <SideBar blog={true} search={true} />
                        </div>
                    }
                    <div>
                        <div>
                            <Title size={"5xl"} className={"lg:text-5xl md:text-4.5xl text-3xl "}>New Study: Instagram Reels Outperform TikTok & Facebook Videos.</Title>
                            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                                <div className='flex sm:flex-row flex-col sm:items-center sm:gap-7 gap-3 mt-2.5'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/images/blog/posts-author-img1-1.png"} alt='author' width={38} height={38} className='rounded-full' />
                                        <Link href={"#"} className='text-base font-semibold hover:text-primary-foreground transition-all duration-500'>Eleanor Pena</Link>
                                    </div>
                                    <Link href={"#"} className='text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full hover:text-primary-foreground transition-all duration-500 ml-4 sm:ml-0'>Social Media Marketing</Link>
                                    <p className='text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full ml-4 sm:ml-0'>25 Feb 2024</p>
                                </div>
                                <p className='text-base font-semibold relative mt-3 lg:mt-0'>5 min read</p>
                            </div>
                        </div>
                        <div className='lg:pt-12.5 pt-6'>
                            {
                                sidebarShow ?
                                    <Image src={'/images/blog/blog-post1-10.png'} width={872} height={472} alt='thumb' className='rounded-[30px]' />
                                    :
                                    <Image src={'/images/blog/blog-single-feature1-1.jpg'} width={1320} height={568} alt='thumb' className='rounded-[30px]' />
                            }
                        </div>
                        <div>
                            <div className='max-w-[1080px] mx-auto lg:pt-12.5 pt-6 lg:px-12.5'>
                                <p>In the ever-evolving landscape of social media, platforms constantly vie for users' attention. Instagram, known for its innovation in visual content, recently introduced a new feature called Reels, aiming to compete with popular short-form video platforms like TikTok. A new study sheds light on how Instagram Reels stack up against TikTok and Facebook videos, revealing surprising insights into user engagement and content performance.</p>
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"4xl"}>Key Findings:</Title>
                                    <p className='pt-[15px]'>The study, conducted by Next Agency in collaboration with industry experts, analyzed thousands of videos across Instagram Reels, TikTok, and Facebook to understand user behavior and content trends. Here are the key findings:</p>
                                </div>
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}> <span>1.</span> Higher Engagement on Instagram Reels:</Title>
                                    <p className='pt-[15px]'>Contrary to expectations, the study found that Instagram Reels outperformed both TikTok and Facebook videos in terms of user engagement. Reels garnered higher average likes, comments, and shares, indicating a strong preference among users for this new format.</p>
                                </div>
                            </div>
                            <div className='lg:py-12.5 py-6'>
                                <blockquote className='bg-[rgba(46,77,254,0.05)] lg:rounded-[30px] rounded-2.5xl'>
                                    <div className='max-w-[1080px] mx-auto lg:p-12.5 p-5 relative'>
                                        <span className='absolute left-10 top-3'><QuoteIcon /></span>
                                        <i className='md:text-1xl text-xl font-medium text-muted-foreground'>Success in the digital age hinges on adaptation and innovation. Our study sheds light on the transformative power of Instagram Reels, paving of the way for brands to thrive in the dynamic landscape of social media.</i>
                                        <p className='text-primary-foreground pt-4 font-bold'>- Elon Musk</p>
                                    </div>
                                </blockquote>
                            </div>

                            <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0'>
                                <div className='lg:pb-12.5 pb-6'>
                                    <Title size={"2xl"}> <span>2.</span> Quality Over Quantity</Title>
                                    <p className='pt-[15px]'>While TikTok boasts a larger user base and a plethora of content, Instagram Reels' success lies in its emphasis on quality over quantity. The study revealed that Reels with polished production value and compelling storytelling consistently performed better than hastily produced TikTok videos.</p>
                                </div>
                                <div>
                                    <Title size={"2xl"}> <span>3.</span>Audience Demographics</Title>
                                    <p className='pt-[15px]'>Interestingly, the study also uncovered differences in audience demographics across the platforms. While TikTok remains popular among Gen Z and younger audiences, Instagram Reels attracted a broader demographic range, including Millennials and older age groups. This suggests that Reels may have a wider appeal beyond just the younger demographic.</p>
                                </div>
                            </div>


                            <div className='flex sm:flex-row flex-col justify-between gap-7.5 lg:pt-12.5 pt-6'>
                                <div className='w-full'>
                                    <Image src={'/images/blog/single-post1-1.jpg'} width={424} height={475} style={{ width: '100%' }} alt='inner-img-1' className='rounded-[30px] w-full' />
                                </div>
                                <div className='w-full'>
                                    <Image src={'/images/blog/single-post1-2.jpg'} width={424} height={475} style={{ width: '100%' }} alt='inner-img-2' className='rounded-[30px]' />
                                </div>
                            </div>

                            <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"4xl"}>Implications for Marketers:</Title>
                                    <p className='pt-[15px]'>The study, conducted by Next Agency in collaboration with industry experts, analyzed thousands of videos across Instagram Reels, TikTok, and Facebook to understand user behavior and content trends. Here are the key findings:</p>
                                    <ol className='list-decimal list-inside pt-[15px] ml-5'>
                                        <li>Diversify Your Content Strategy</li>
                                        <li>Focus on Quality and Creativity</li>
                                        <li>Know Your Audience</li>
                                        <li>Platform-Specific Content Strategies</li>
                                        <li>Investment in Influencer Marketing</li>
                                        <li>Adaptation of Advertising Strategies</li>
                                        <li>Opportunities for User-Generated Content (UGC)</li>
                                        <li>Continuous Monitoring and Optimization</li>
                                        <li>Integration with Overall Marketing Strategy</li>
                                        <li>Emphasis on Creativity and Authenticity</li>
                                    </ol>
                                </div>
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"4xl"}>Conclusion:</Title>
                                    <p className='pt-[15px]'>The emergence of Instagram Reels as a formidable competitor to TikTok and Facebook videos underscores the dynamic nature of social media. As brands and marketers navigate this rapidly evolving landscape, insights from studies like this provide valuable guidance for optimizing content strategy and driving engagement on social platforms. By embracing the power of short-form video content and leveraging platforms like Instagram Reels, brands can connect with their audience in new and meaningful ways, driving brand awareness, engagement, and ultimately, business growth.</p>
                                </div>
                            </div>
                            <div className='lg:pt-12.5 pt-6'>
                                <Tags />
                                <NextPrevPost />
                            </div>
                            <hr className='lg:my-12.5 my-8 text-[#B0C2E2]' />
                            <Author />
                            <div className='lg:pt-12.5 pt-6'>
                                <Title size={"4xl"}>Recent Posts</Title>
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-7.5 pt-6'>
                                    {blogData.slice(0, 2).map(({author, category, date, id, thumb, title})=> <CardOne key={id} author={author} category={category} date={date} thumb={thumb} title={title} />)}
                                </div>
                            </div>
                            <Comments />
                            <hr className='lg:mt-12.5 mt-6 lg:pb-15 pb-6 text-[#B0C2E2]' />
                            <LeveRelpy />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlogArtical