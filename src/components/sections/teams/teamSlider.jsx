"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';

import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackData/teamData'
import TeamCard from './teamCard'

const TeamSlider = () => {
    const pagination = {
        clickable: true,
        el: ".team-pagination",
        renderBullet: function (index, className) {
            return `<span class='${className} w-2 h-2 bg-muted rounded-full'></span>`;
        },
    };
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Team Carousel</Button>
                        <Title size={"5xl"} className="pt-6 max-w-[872px] text-center">Team Carousel: The Driving Force Behind Our Team </Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-20 pt-10 relative'>
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        spaceBetween={30}
                        // slidesPerView={3}
                        breakpoints={{
                            100:{
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            997: {
                                slidesPerView: 3,
                            },
                        }}

                        slidesPerGroup={2}
                        pagination={pagination}
                        loop={true}
                        effect={"fade"}
                        modules={[Pagination, Navigation, Autoplay]}
                    >
                        {teamData.map(({ id, name, position, src }) => {
                            return <SwiperSlide> <TeamCard key={id} id={id} name={name} position={position} src={src} bgColor={"bg-[rgba(0,31,63,0.35)]"} link={"/team-details"} /> </SwiperSlide>
                        })}
                    </Swiper>
                    <div className='team-pagination flex items-center gap-2 absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 [&_.swiper-pagination-bullet-active]:bg-primary'></div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider