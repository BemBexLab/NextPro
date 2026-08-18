import Logo2 from '@/components/ui/logo2'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const FooterContact = ({ bgColor, color, white_logo }) => {
    return (
        <div className='grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(160px,0.6fr)_minmax(0,2.4fr)] lg:gap-10'>
            <div className='w-full max-w-[150px] sm:max-w-[178px]'>
                {
                    white_logo ?
                        <Image src={"/images/logo-light2.webp"} width={500} height={200} alt='logo-white' className='h-auto w-full' />
                        :
                        <Logo2 />
                }
            </div>
            <div className='grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8'>
                <div className='flex min-w-0 items-center gap-3 sm:gap-4 xl:gap-6'>
                    <div className={cn(`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg sm:h-16 sm:w-16 xl:h-[75px] xl:w-[75px] ${bgColor}`)}>
                        <Image src={'/images/shapes/Frame 210.webp'} width={45} height={50} sizes='(min-width: 1280px) 45px, 36px' className='h-auto w-8 sm:w-9 xl:w-[45px]' alt='Location' />
                    </div>
                    <div className={cn(`min-w-0 break-words text-sm leading-relaxed sm:text-base ${color}`)}>
                        <p>3021 Peachtree Rd NW</p>
                        <p>Atlanta, GA 30305, USA </p>
                    </div>
                </div>
                <div className='flex min-w-0 items-center gap-3 sm:gap-4 xl:gap-6'>
                    <div className={cn(`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg sm:h-16 sm:w-16 xl:h-[75px] xl:w-[75px] ${bgColor}`)}>
                        <Image src={"/images/shapes/Frame 208.webp"} width={44} height={50} sizes='(min-width: 1280px) 44px, 36px' className='h-auto w-8 sm:w-9 xl:w-11' alt='Contact' />
                    </div>
                    <div className={cn(`min-w-0 break-words text-sm leading-relaxed sm:text-base ${color}`)}>
                        <p> <span className='font-semibold'>Email:</span> <Link href={"mailto:info@webfoundersusa.com"} className='relative break-all hover-underline after:h-[1px] after:bg-muted'> info@webfoundersusa.com</Link> </p>
                        <p> <span className='font-semibold'>Call us:</span> <Link href={"tel:+14704707392"} className='relative hover-underline after:h-[1px] after:bg-muted'>+1 470-470-7392</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContact
