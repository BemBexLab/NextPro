"use client"
import React from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import CardTwo from './cardTwo'
import { testimonialData } from '@/lib/fackData/testimonialData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideUp from '@/components/animations/slideUp';

const TestimonialTwo = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        centerPadding: "0px",
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        onInit: (e) => { console.log(e) },
        afterChange: (e) => { console.log(e) }
    };

    return (
        <section className='lg:pt-15 pt-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Social Proof</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Client Success Stories: Our Social Proof of Digital Excellence</Title>
                    </div>
                </SlideUp>
                <SlideUp>
                    <div>
                        <Slider {...settings}>
                            {
                                testimonialData.slice(0, 5).map(({ id, name, position, rating, review, src }) =>
                                    <CardTwo key={id} name={name} rating={rating} review={review} position={position} src={src} />
                                )
                            }
                        </Slider>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default TestimonialTwo


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`bg-accent w-9 h-9 rounded-full flex justify-center items-center z-10 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-500 hover:bg-primary hover:text-white`} >
            <FaAngleRight className="w-5 h-5 " />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`bg-accent w-9 h-9 rounded-full flex justify-center items-center z-10 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-500 hover:bg-primary hover:text-white`} >
            <FaAngleLeft className="w-5 h-5 " />
        </div>
    );
}



