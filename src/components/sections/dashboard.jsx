import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Paper from '../../../public/icons/paper'
import Setting from '../../../public/icons/setting'
import PlayIcon from '../ui/playIcon'
import SlideUp from '../animations/slideUp'
import SlideLeft from '../animations/slideLeft'
import SlideRight from '../animations/slideRight'

const Dashboard = () => {
    return (
        <section className='lg:py-15 py-9 overflow-x-hidden'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Dashboard</Button>
                        <Title size={"5xl"} className="max-w-[898px] pt-6 text-center">World-Class Technology Powering Our Campaigns</Title>
                    </div>
                </SlideUp>
                <div className='pt-12.5 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[calc(100%-276px)] after:bg-accent after:rounded-[30px] after:z-[-1]'>
                    <div className='shadow-[0px_4px_46.9px_0px_rgba(9,25,40,0.1)] rounded-[30px] max-w-[1160px] mx-auto relative'>
                        <SlideUp>
                            <Image src={"/images/resource/dashboard1-1.png"} width={1160} height={686} alt="dashboard1" className='rounded-[30px]' />
                            <PlayIcon playOne={true} />
                        </SlideUp>
                    </div>
                    <div className='pt-[46px] flex lg:flex-row flex-col justify-between max-w-[1160px] mx-auto pb-12.5 px-3 lg:px-0'>
                        <SlideRight id={3}>
                            <Card icon={<Paper />} title={"Built-in automation"} desc={"Receive comprehensive reports detailing the impact of our efforts and gain valuable insights."} />
                        </SlideRight>
                        <SlideRight id={5}>
                            <Card icon={<Setting />} title={"Automatic workflows"} desc={"Receive comprehensive reports detailing the impact of our efforts and gain valuable insights."} />
                        </SlideRight>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard


// --------------- Card
const Card = ({ icon, title, desc }) => {
    return (
        <div className='flex items-center lg:gap-7 gap-4 pt-7 lg:pt-0'>
            <div className='lg:min-w-[85px] lg:min-h-[85px] min-w-16 min-h-16 w-16 h-16 lg:w-auto lg:h-auto rounded-full p-5 bg-primary flex justify-center items-center text-white'>
                {icon}
            </div>
            <div className='max-w-[450px]'>
                <Title size={"2xl"}>
                    <Link href={"#"} className='relative hover-underline after:bg-muted after:h-[1px] after:bottom-[1px]'>{title}</Link>
                </Title>
                <p>{desc}</p>
            </div>
        </div>
    )
}