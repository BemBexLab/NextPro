import React from 'react'
import Link from 'next/link'
import FooterContact from './footerContact'
import SocialIcons from '@/components/ui/socialIcons'
import ImportanceLinks from './importanceLinks'
import TempLinks from './tempLinks'

const FooterFour = () => {
    const tempLinks = [
        // Example:
        {
            id: 1,
            title: "SEO Sub Services",
            links: [
                { id: 1, path: "/service/seo-services/local-seo-services/", label: "Local SEO Services" },
                { id: 2, path: "/service/seo-services/youtube-seo/", label: "YouTube SEO Services" },
                { id: 3, path: "/service/seo-services/bigcommerce-seo/", label: "BigCommerce SEO Services" },
                { id: 4, path: "/service/seo-services/woocommerce-seo/", label: "WooCommerce SEO Services" },
                { id: 5, path: "/service/seo-services/seo-content-writing/", label: "SEO Content Writing Services" },
                { id: 6, path: "/service/seo-services/hotel-seo/", label: "Hotel SEO Services" },
                { id: 7, path: "/service/seo-services/medical-seo/", label: "Medical SEO Services" },
                { id: 8, path: "/service/seo-services/seo-audit/", label: "SEO Audit Services" },
                { id: 9, path: "/service/seo-services/magento-seo/", label: "Magento SEO Services" },
                { id: 10, path: "/service/seo-services/automotive-seo/", label: "Automotive SEO Services" },
                { id: 11, path: "/service/seo-services/wordpress-seo/", label: "WordPress SEO Services" },
                { id: 12, path: "/service/seo-services/dental-seo/", label: "Dental SEO Services" },
                { id: 13, path: "/service/seo-services/ecommerce-seo/", label: "E-commerce SEO Services" },
                { id: 14, path: "/service/seo-services/shopify-seo/", label: "Shopify SEO Services" },
                { id: 15, path: "/service/seo-services/healthcare-seo/", label: "Healthcare SEO Services" },
                { id: 16, path: "/service/seo-services/b2b-seo/", label: "B2B SEO Services" },
                { id: 17, path: "/service/seo-services/enterprise-seo/", label: "Enterprise SEO Services" },
                { id: 18, path: "/service/seo-services/white-label-seo/", label: "White Label SEO Services" },
                { id: 19, path: "/service/seo-services/multilingual-seo/", label: "Multilingual SEO Services" },
                { id: 20, path: "/service/seo-services/boutique-seo/", label: "Boutique SEO Services" },
                { id: 21, path: "/service/seo-services/roofing-seo/", label: "Roofing SEO Services" },
                { id: 22, path: "/service/seo-services/outsource-seo/", label: "Outsource SEO Services" },
                { id: 23, path: "/service/seo-services/construction-seo/", label: "Construction SEO Services" },
            ]
        }
    ]

    return (
        <footer className='bg-primary rounded-tr-[30px] rounded-tl-[30px] pt-[200px] relative'>
            <div className='w-full h-full bg-no-repeat bg-contain bg-top absolute top-0 left-0 opacity-20' style={{ backgroundImage: `url(/images/background/services-bg1-1.webp)` }}>  </div>
            <div className='container relative z-2'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <FooterContact white_logo={false} bgColor={"bg-white"} color="text-white" />
                    <span className='inline-block bg-white h-[1px] w-full mb-12.5 mt-[45px]'></span>
                    <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                        <div>

                            {/* <h3 className='text-1xl font-semibold text-muted-foreground lg:pb-7.5 pb-3 text-white'>About</h3> */}

                            <p className='pb-[38px] text-sm text-white'>Web Founders USA - The No.1 Award-Winning Digital Marketing Agency in the USA. We Don’t Just Market - We Build Digital Empires.</p>
                            <SocialIcons color={"text-white"} hoverColor={"hover:text-white"} />
                        </div>
                        <div>
                            <ImportanceLinks color={"text-white"} linkHoverColor={"hover:text-white hover:underline"} />
                            <div className='mt-10'>
                                <TempLinks
                                    sections={tempLinks}
                                    color={"text-white"}
                                    linkHoverColor={"hover:text-white hover:underline"}
                                    scrollable={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-muted dark:bg-accent mt-[54px] relative z-10'>
                <div className='max-w-[1350px] mx-auto px-[15px] flex xl:flex-row flex-col justify-between items-center gap-3 py-7.5 text-white'>
                    <p>Designed and Developed By <Link href={""} className='text-primary-foreground font-medium relative hover-underline after:h-[1px]'>WebFounders USA</Link></p>
                    <div className='flex flex-col items-center gap-1 xl:items-end'>
                        <p>Copyright: © 2025. All Rights Reserved</p>
                        <Link
                            href="/sitemap.xml"
                            className='text-[10px] absolute font-normal uppercase tracking-[0.08em] text-white/45 transition-all duration-500 hover:text-white/70'
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterFour
