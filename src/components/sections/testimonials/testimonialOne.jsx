"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-fade"
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { testimonialData } from '@/lib/fackData/testimonialData';
import CardOne from './cardOne';
import SlideUp from '@/components/animations/slideUp';


const TestimonialOne = () => {
    const pagination = {
        clickable: true,
        el: ".testimonial-pagination",
        renderBullet: function (index, className) {
            return `<span class='${className} w-2 h-2 bg-white opacity-60 rounded-full'></span>`;
        },
    };

    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Social Proof</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Client Success Stories: Our Social Proof of Digital Excellence</Title>
                    </div>
                </SlideUp>
                <SlideUp>
                    <div className='relative'>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={pagination}
                            loop={true}
                            // effect={"fade"}
                            grabCursor= {true}
                            modules={[Pagination, Navigation, EffectFade]}
                        >
                            {
                                testimonialData.slice(0, 3).map(({ id, name, position, rating, review, src }) => <SwiperSlide key={id}>
                                    <CardOne name={name} rating={rating} review={review} position={position} src={src} />
                                </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className='testimonial-pagination flex items-center gap-2 absolute bottom-16 left-20 z-10 [&_.swiper-pagination-bullet-active]:opacity-100'></div>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default TestimonialOne