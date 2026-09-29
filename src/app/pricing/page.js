import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import PageTitle from '@/components/sections/pageTitle'
import PriceOne from '@/components/sections/pricing/priceOne'
import PriceThree from '@/components/sections/pricing/priceThree'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import { withEnUsHreflang } from "@/lib/metadata";

export const metadata = withEnUsHreflang({
    title: "Pricing - Web Founders USA",
    description: "Explore Web Founders USA pricing plans for SEO, web design, and digital marketing services designed to deliver value and results",
    
    keywords: [
    "pricing",
  ],
    
    alternates: {
    canonical: "https://www.webfoundersusa.com/pricing",
  },
});

const Pricing = () => {
    return (
        <main className="relative z-10 isolate overflow-x-clip">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#ffdce8]/45 blur-3xl" />
                <div className="absolute -right-36 top-0 h-[28rem] w-[28rem] rounded-full bg-[#dfe5ff]/65 blur-3xl" />
                <div className="absolute left-[12%] top-[18rem] h-24 w-24 rounded-full border border-[#d8e3f5]/70" />
                <div className="absolute right-[8%] top-[32rem] h-44 w-44 rounded-full border border-[#e5dff7]/80" />
                <div className="absolute -right-20 top-16 h-56 w-[32rem] rotate-[-24deg] rounded-[4rem] bg-[#e7ecff]/55" />
                <div className="absolute -left-24 top-[34rem] h-48 w-[26rem] rotate-[18deg] rounded-[4rem] bg-[#ffe8ef]/55" />
                <div className="absolute right-[18%] top-[12rem] h-32 w-32 rotate-45 rounded-[2rem] border border-[#dce5f4]/80 bg-white/25" />
                <div className="absolute bottom-[26rem] left-[6%] h-28 w-28 rotate-[18deg] rounded-[2rem] border border-[#e8dff2]/75 bg-white/30" />
                <div className="absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rounded-full border border-dashed border-[#d9e4f2]/80" />
                <div className="absolute right-[22%] top-[5rem] h-32 w-32 rounded-full bg-[#dceaff]/35 blur-2xl" />
                <div className="absolute bottom-56 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#eee7ff]/50 blur-3xl" />
                <div className="absolute left-[3%] top-[30rem] h-44 w-72 rotate-[-16deg] rounded-[64%_36%_58%_42%/42%_58%_38%_62%] bg-gradient-to-br from-[#dbeaff]/60 to-[#f4e8ff]/35 blur-sm" />
                <div className="absolute right-[4%] top-[48rem] h-52 w-80 rotate-[21deg] rounded-[42%_58%_35%_65%/62%_38%_62%_38%] bg-gradient-to-tr from-[#ffe2eb]/45 to-[#e5eaff]/55 blur-md" />
                <div className="absolute left-[18%] top-[52rem] h-20 w-64 rotate-[13deg] rounded-full bg-[#d9e9ff]/40 blur-xl" />
                <div className="absolute right-[28%] top-[22rem] h-28 w-52 rotate-[-28deg] rounded-[999px_999px_40px_40px] border-2 border-[#d9e5f5]/70" />
                <div className="absolute left-[7%] top-[12rem] h-40 w-24 rotate-[28deg] rounded-[55%_45%_70%_30%/35%_60%_40%_65%] border border-[#f0dfea]/80 bg-white/20" />
                <div className="absolute right-[11%] top-[68rem] h-36 w-36 rotate-[-20deg] rounded-[60%_40%_45%_55%/55%_45%_60%_40%] border-[3px] border-[#dfe7f5]/75 border-r-transparent" />
                <div className="absolute left-[38%] top-[8rem] h-2 w-2 rounded-full bg-[#e5002d]/35 shadow-[24px_18px_0_#c8d9f0,48px_-8px_0_#e8bfd0,72px_14px_0_#c8d9f0]" />
                <div className="absolute right-[34%] top-[39rem] h-3 w-3 rounded-full bg-[#12376f]/20 shadow-[18px_12px_0_#e5c9d8,42px_-10px_0_#c7d9ef,64px_18px_0_#e5c9d8]" />
                <div className="absolute left-[15%] top-[74rem] h-12 w-12 rotate-45 border border-[#d9e4f3]/80" />
                <div className="absolute right-[7%] top-[18rem] h-px w-28 rotate-[28deg] bg-gradient-to-r from-transparent via-[#c9d9ee] to-transparent" />
                <div className="absolute left-[28%] top-[66rem] h-px w-36 rotate-[-18deg] bg-gradient-to-r from-transparent via-[#e2cbdc] to-transparent" />
                <div className="absolute inset-x-0 top-0 h-[30rem] opacity-40 [background-image:radial-gradient(#b7c9e2_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-x-0 top-0 h-[46rem] opacity-30 [background-image:linear-gradient(rgba(180,198,224,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(180,198,224,0.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            </div>

            <div className="relative z-10">
                {/* <PageTitle pageName={"Pricing Plan"} breadcrumbLink={"Pricing Plan"} /> */}
                <PriceThree/>
                {/* <PriceOne/>
                <FaqTwo/> */}
                <SubscribeTwo/>
                <ContactFormTwo />
            </div>
        </main>
    )
}

export default Pricing
