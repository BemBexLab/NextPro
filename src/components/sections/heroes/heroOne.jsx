"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import UserList from '@/components/ui/userList'
import Input from '@/components/ui/input'
import useMoveMentAnimation from '@/hooks/useMoveMentAnimation'
import Title from '@/components/ui/title'
import useParticlesAnimation from '@/hooks/useParticlesAnimation'

const userList = [
  {
    id: 1,
    name: "",
    src: "/images/banner/join-manimg1-1.png"
  },
  {
    id: 2,
    name: "",
    src: "/images/banner/join-manimg1-2.png"
  },
  {
    id: 3,
    name: "",
    src: "/images/banner/join-manimg1-3.png"
  },
  {
    id: 4,
    name: "",
    src: "/images/banner/join-manimg1-4.png"
  },


]

const HeroOne = () => {
  const [mousPositionX, mousPositionY] = useMoveMentAnimation()
  useParticlesAnimation()


  return (
    <section className='bg-background-linear relative pt-4 lg:mb-15 mb-9'>
      <div className='container'>
        <div className='grid xl:grid-cols-[46%_53%] lg:grid-cols-[50%_auto] grid-cols-1 justify-between items-center'>
          {/* ------- left side start */}
          <div className='max-w-[690px] relative pt-6 pb-9 lg:pt-0 lg:pb-0'>
            <div className='relative inline-block mb-2.5'>
              <h5 className='sm:px-10 px-5 sm:text-lg text-base py-3.5 font-bold leading-[120%] bg-accent rounded-lg text-primary-foreground  inline-block'>Hi there, Welcome to NextMarketing  </h5>
              <Image src={"/images/shapes/welcome-icon1-1.png"} width={58} height={58} alt='walcome' className='absolute -right-7 -top-7 rotate-[21deg]' />
            </div>
            <Title size={'7.5xl'}> Redefining Excellence in Digital Marketing </Title>

            <p className='mt-[23px] font-semibold'>Driving Conversions in the Digital Landscape — Our Expertise Ensures Your Brand Not Only Gets Noticed but Leaves a Lasting Impression</p>
            <div className='mt-[19px] pt-[15px] flex items-center gap-2'>
              <div className='basis-[60%] md:basis-auto'>
                <UserList userList={userList} />
              </div>
              <div className='basis-[35%] md:basis-auto'>
                <h6 className='font-semibold text-muted-foreground'>Join with thousands</h6>
              </div>
            </div>
            <form>
              <div className='flex sm:flex-row flex-col sm:items-center gap-[11px] pt-[33px]'>
                <Input type={"email"} placeholder={"e.g. mail@example.com"} className={"border-2 sm:min-w-[364px] min-w-[300px] "} />
                <div>
                  <Button size="lg">Get started Free</Button>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-[15px]'>
                <Image src={"/images/shapes/info-icon1-1.svg"} width={20} height={20} alt='infoicon' />
                <p className='text-sm '>By submitting your email, you agree to our <Link href={""} className='text-primary-foreground underline'>Terms of Service</Link> and <Link href={""} className='text-primary-foreground underline'>Privacy Policy</Link> .</p>
              </div>
            </form>
          </div>
          {/* ------- left side End */}

          <div className='w-full h-full relative flex justify-end'>
            <div className='sm:block hidden'>
              <div className='absolute  top-[147px] -left-8' style={{ transform: `translate(-${mousPositionX}px, -${mousPositionY}px)` }}>
                <Image src={"/images/shapes/balance-graph1-1.png"} width={360} height={169} alt='balance-graph' className={``} />
                <Image src={"/images/shapes/telegram1-1.png"} alt='telegram1' width={70} height={70} className='absolute -top-10 right-2.5' />
              </div>
              <div className='absolute z-[1] xl:bottom-[202px] bottom-25 xl:right-[161px] right-25' style={{ transform: `translate(${mousPositionX}px, ${mousPositionY}px)` }}>
                <Image src={"/images/shapes/chart-graph1-1.png"} width={260} height={98} alt='chart-graph' />
                <Image src={"/images/shapes/picture1-1.png"} alt='telegram1' width={70} height={70} className='absolute -top-10 -left-9' />
              </div>
              <Image src={"/images/shapes/mail1-1.png"} width={81} height={81} alt='chart-graph' className='absolute z-[1] bottom-[64px] left-0 xl:block hidden' style={{ transform: `translate(-${mousPositionX}px, -${mousPositionY}px)` }} />
            </div>
            {/* --------- particle  animation start */}
            <div className='xl:block hidden'>
              <div className='w-[21px] h-[21px] bg-purple rounded-[5px] rotate-[28deg] absolute z-[1] right-0 particle section-hero__right__square1'></div>
              <div className='w-[21px] h-[21px] bg-green rounded-[5px] rotate-[28deg] absolute z-[1] left-[38%] particle section-hero__right__square2'></div>
              <div className='w-[21px] h-[21px] bg-yellow-400 rounded-[5px] rotate-[28deg] absolute z-[1] left-0 particle section-hero__right__square3'></div>
            </div>
            {/* --------- particle  animation end */}
            <Image src={"/images/banner/wondered1-1.png"} priority={true} width={709} height={833} sizes='(max-width:768px) 50vw, 100vw' style={{width:"100%"}} alt='hero-background' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOne