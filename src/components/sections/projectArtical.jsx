import React from 'react'
import Title from '../ui/title'
import Image from 'next/image'

const ProjectArtical = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <Title size={"5xl"} className={"max-w-[759px] text-center mx-auto"}>Boosting Online Visibility for XYZ Furniture Co.</Title>
                <div className='pt-12.5'>
                    <div className='grid lg:grid-cols-[66%_33%] grid-cols-1 items-start gap-12.5'>
                        <article>
                            <Image src={"/images/resource/portfolio-feature1-1.jpg"} width={872} height={451} className='rounded-[30px]' alt='project background ' />
                            <div className='pt-20'>
                                <Title size={"4xl"}>Client Overview:</Title>
                                <p className='pt-2.5'>XYZ Furniture Co. is a leading manufacturer and retailer of high-quality furniture products with a strong presence in the offline market. Despite their success offline, they were struggling to gain traction online and wanted to increase their visibility and sales through digital channels. </p>
                            </div>
                            <div className='pt-12.5'>
                                <Title size={"4xl"}>Challenge:</Title>
                                <p className='pt-2.5'>XYZ Furniture Co. faced several challenges in the digital space, including:</p>
                                <ol className='pt-6 flex flex-col gap-1'>
                                    <li>
                                        <b className='text-muted-foreground'>1.</b> <b className='text-muted-foreground'>Low online visibility:</b> Their website was not ranking well on search engines, making it difficult for potential customers to find them online.
                                    </li>
                                    <li>
                                        <b className='text-muted-foreground'>2.</b> <b className='text-muted-foreground'>Limited online presence</b> They lacked a cohesive digital marketing strategy and were not leveraging social media or content marketing to reach their target audience.</li>
                                    <li>
                                        <b className='text-muted-foreground'>3.</b> <b className='text-muted-foreground'>Poor website performance:</b> Their website was outdated and not optimized for user experience, leading to high bounce rates and low conversion rates.</li>
                                </ol>
                            </div>
                            <div className='pt-12.5'>
                                <Title size={"4xl"}>Solution:</Title>
                                <p className='pt-2.5'>To address these challenges, our team at [Your Agency Name] implemented a comprehensive digital marketing strategy tailored to XYZ Furniture Co.'s goals and target audience. The key components of the solution included:</p>
                                <ol className='pt-6 flex flex-col gap-1'>
                                    <li>
                                        <b className='text-muted-foreground'>1.</b> <b className='text-muted-foreground'>Search Engine Optimization (SEO):</b>  We conducted extensive keyword research and optimized XYZ Furniture Co.'s website for relevant search terms, improving its visibility on search engine results pages (SERPs).
                                    </li>
                                    <li>
                                        <b className='text-muted-foreground'>2.</b> <b className='text-muted-foreground'>Content Marketing:</b> We developed a content strategy focused on creating high-quality, informative blog posts and articles related to home décor, furniture trends, and interior design tips to attract and engage their target audience.
                                    </li>
                                    <li>
                                        <b className='text-muted-foreground'>3.</b> <b className='text-muted-foreground'>Social Media Marketing:</b> We launched and managed social media profiles for XYZ Furniture Co. on platforms like Facebook, Instagram, and Pinterest, sharing visually appealing content and engaging with their audience to build brand awareness and drive website traffic.
                                    </li>
                                    <li>
                                        <b className='text-muted-foreground'>4.</b> <b className='text-muted-foreground'>Website Redesign: </b> We redesigned XYZ Furniture Co.'s website to improve its aesthetics, usability, and functionality. The new website featured a modern design, intuitive navigation, and optimized product pages to enhance the user experience and encourage conversions.
                                    </li>
                                </ol>
                            </div>
                            <div className='pt-12.5'>
                                <Title size={"4xl"}>Results:</Title>
                                <p className='pt-2.5'>The implementation of our digital marketing strategy yielded impressive results for XYZ Furniture Co:</p>
                                <ul className='pt-6 flex flex-col gap-1 list-disc list-inside marker:text-muted-foreground'>
                                    <li>
                                        <b className='-ml-2'>Significant Increase in Website Traffic:</b>Within the first six months of implementing the strategy, XYZ Furniture Co. experienced a 150% increase in website traffic.
                                    </li>
                                    <li>
                                        <b className='-ml-2'>Improved Search Engine Rankings:</b>  Our SEO efforts resulted in XYZ Furniture Co.'s website ranking on the first page of Google for several high-value keywords related to their products and industry.
                                    </li>
                                    <li>
                                        <b className='-ml-2'>Enhanced Brand Visibility: </b>Through social media marketing and content marketing efforts, XYZ Furniture Co. significantly expanded its online presence and gained a loyal following on social media platforms.
                                    </li>
                                    <li>
                                        <b className='-ml-2'>Increased Sales and Conversions:</b>The combination of improved website performance and targeted digital marketing efforts led to a 200% increase in online sales and conversions for XYZ Furniture Co.
                                    </li>
                                </ul>
                            </div>
                            <div className='pt-12.5'>
                                <Title size={"4xl"}>Conclusion:</Title>
                                <p className='pt-2.5'>By partnering with [Your Agency Name] and implementing a comprehensive digital marketing strategy, XYZ Furniture Co. was able to overcome their online visibility challenges and achieve remarkable results. The success of this case study demonstrates the power of digital marketing in driving business growth and increasing brand awareness in today's competitive landscape.</p>
                            </div>
                        </article>
                        <aside className='rounded-[30px] p-7.5 border border-accent sticky top-[var(--header-height)] transition-all duration-300'>
                            <ul className='flex flex-col gap-6 max-w-[360px]'>
                                <li>
                                    <b className='text-muted-foreground'>Client: </b>
                                    <p>XYZ Furniture Co.</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Industry:  </b>
                                    <p>Furniture Manufacturing and Retail</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Project Duration: </b>
                                    <p>6 months</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Services Provided:</b>
                                    <p>Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Website Redesign</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Key Objectives: </b>
                                    <p>Increase online visibility, drive website traffic, improve search engine rankings, boost online sales and conversions.</p>
                                </li>
                                <li>
                                    <b className='text-muted-foreground'>Results Achieved: </b>
                                    <p>150% increase in website traffic, First-page Google rankings for high-value keywords,200% increase in online sales and conversions</p>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectArtical