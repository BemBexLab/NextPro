import SlideUp from "@/components/animations/slideUp"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import RightArrow from "../../../../public/icons/rightArrow"

const PriceCardOne = ({ id, plan_name, isTag, price, link, services, additionalAdds, info }) => {
    return (
        <div className='mb-12.5 last:mb-0'>
            <SlideUp id={id}>
                <div className='bg-gray rounded-2.5xl xl:p-12.5 p-4'>
                    <div className='flex justify-between items-center'>
                        <h5 className='lg:text-4xl text-[26px] lg:leading-[140%] leading-[140%] font-extrabold text-muted-foreground'>{plan_name}</h5>
                        {isTag && <p className='bg-primary py-2.4 px-5 max-h-[33px] text-secondary-foreground rounded-full'>Value</p>}
                    </div>
                    <div className='flex items-start'>
                        <h2 className='xl:text-7.5xl md:text-5.5xl text-4.5xl font-extrabold text-muted-foreground leading-[120%]'>
                            <sup className='lg:text-4xl text-2xl 2xl:top-[-0.7em] top-[-0.3em]'>$</sup>{price}<span className='font-semibold lg:text-1xl text-base text-foreground'>/ month</span>
                        </h2>
                    </div>
                    <div className='flex sm:flex-row flex-col lg:justify-between xl:gap-7 gap-5 pt-7.5 max-w-'>
                        <div className='flex flex-col justify-between gap-4 order-1'>
                            <div className='sm:max-w-[258px]'>
                                <p className='font-semibold text-muted-foreground pb-2'>Ideal for:</p>
                                <p className='font-semibold'>{info}</p>
                            </div>
                            <div>
                                <Button asChild variant="outline" size={"lg"} className='max-h-[64px] group'>
                                    <Link href="/contact-us"> Purchase Plan <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75'><RightArrow /></span>  </Link>
                                </Button>
                            </div>
                        </div>
                        <div className='sm:order-1'>
                            <div>
                                <h5 className='font-semibold text-muted-foreground pb-2'>Services Included:</h5>
                                <ul className='flex flex-col gap-4'>
                                    {
                                        services.slice(0, 3).map(({ id, service }) => {
                                            return (
                                                <li key={id} className='flex items-center gap-2'>
                                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt="check icon" />
                                                    <span className='font-semibold lg:text-lg text-base'>{service}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='pt-10'>
                                <h5 className='font-semibold text-muted-foreground pb-2'>Additional Add-ons:</h5>
                                <ul className='flex flex-col gap-4'>
                                    {
                                        additionalAdds.map(({ id, additional }) => {
                                            return (
                                                <li key={id} className='flex items-center gap-2'>
                                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt="check icon" />
                                                    <span dangerouslySetInnerHTML={{ __html: additional }}></span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
export default PriceCardOne