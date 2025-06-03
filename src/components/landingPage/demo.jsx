import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/ui/title'
import SlideUp from '../animations/slideUp'


const demoList = [
    {
        id: 1,
        path: "/home-1",
        lable: "Home-1",
        src: '/images/demos/demo-1.png'
    },
    {
        id: 2,
        path: "/home-2",
        lable: "Home-2",
        src: '/images/demos/demo-2.png'
    },
    {
        id: 3,
        path: "/home-3",
        lable: "Home3",
        src: '/images/demos/demo-3.png'
    },
    {
        id: 4,
        path: "/home-4",
        lable: "Home-4",
        src: '/images/demos/demo-4.png'
    },
    {
        id: 5,
        path: "/home-5",
        lable: "Home-5",
        src: '/images/demos/demo-5.png'
    },
    {
        id: 6,
        path: "home-6",
        lable: "Home-6",
        src: '/images/demos/demo-6.png'
    },
    {
        id: 7,
        path: "home-7",
        lable: "Home-7",
        src: '/images/demos/demo-7.jpg'
    },
    {
        id: 8,
        path: "#",
        lable: "Coming Soon",
        src: '/images/demos/demo-upcoming.png'
    },
]
const Demo = () => {
    return (
        <section id='demo' className='py-[60px] max-w-[1350px] mx-auto px-[15px]'>
            <div>
                <h2 className='lg:text-[300px] md:text-[230px] sm:text-[180px] text-[140px] leading-none font-extrabold text-center md:-mb-25 -mb-16 linear-text'>07+</h2>
            </div>
            <Title size={"6xl"} className={"max-w-[916px] text-center mx-auto"}> Next's Homepage Designs for Your Perfect Start</Title>
            <div className='mt-20'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5'>
                    {demoList.map(({ id, src, path, lable }) => <Card key={id} id={id} src={src} path={path} demo_name={lable} />)}
                </div>
            </div>
        </section>
    )
}

export default Demo


const Card = ({ id, path, src, demo_name }) => {
    return (
        <SlideUp id={id}>
            <div className='bg-[#2E4DFE0D] pt-10 pb-16 px-4 rounded-3xl relative transition-all duration-500 hover:-translate-y-3'>
                <div className='flex gap-2 absolute top-5'>
                    <span className='block w-[9px] h-[9px] bg-[#C0C0C0] rounded-full'></span>
                    <span className='block w-[9px] h-[9px] bg-[#C0C0C0] rounded-full'></span>
                    <span className='block w-[9px] h-[9px] bg-[#C0C0C0] rounded-full'></span>
                </div>
                <div className='relative overflow-x-hidden rounded-2xl max-w-[390px] h-[445px]'>
                    <Link href={path} target='_blank'> <Image src={src} alt={demo_name} fill className='rounded-2xl' /></Link>
                </div>
                <Link href={path} target='_blank' className='text-1xl font-extrabold text-muted-foreground text-center absolute bottom-[22px] left-1/2 -translate-x-1/2 hover:text-primary-foreground transition-all duration-500'>{demo_name}</Link>
            </div>
        </SlideUp>
    )
}