import Highlight from '@/components/ui/highlight'
import ProgressBar from '@/components/ui/progressBar'
import SocialIcons from '@/components/ui/socialIcons'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'
import TeamCard from './teamCard'
import { projectsData } from '@/lib/fackData/projectsData'
import SlideUp from '@/components/animations/slideUp'
import { cn } from '@/lib/utils'

const TeamPersonalCard = ({ isDetails }) => {
    // isDetails props come from team and team details page
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[520px_auto] lg:grid-cols-[500px_auto] grid-cols-1 items-start justify-between xl:gap-20 gap-10'>
                    <div className={cn(`${isDetails ? "" : "lg:sticky top-[var(--header-height)] transition-all duration-300"}`)}>
                        <SlideUp>
                            <Image src={"/images/resource/team-details-card.png"} style={{ width: "100%" }} width={486} height={630} alt='team-details-card' />
                        </SlideUp>
                        {
                            isDetails ? "" :
                                <SlideUp>
                                    <div className='lg:pt-[54px] pt-8'>
                                        <div>
                                            <Title size={"4xl"}>Jennifer Smith</Title>
                                            <p className='text-1xl font-semibold'>Founder & CEO</p>
                                        </div>
                                        <div className='lg:pt-10 pt-5 pb-6'>
                                            <p className='lg:text-lg text-base'><span className='font-semibold'>Email:</span> <a href='mailto:"jennifer@example.com"' className='multiline-hover'>jennifer@example.com</a></p>
                                            <p className='lg:text-lg text-base'><span className='font-semibold'>LinkedIn:</span> <a href='https://www.linkedin.com/' className='multiline-hover'>linkedin.com/in/jennifersmith</a> </p>
                                            <p className='lg:text-lg text-base'><span className='font-semibold'>Twitter:</span> <a href='https://www.twitter.com/' className='multiline-hover'>@jennifersmith</a> </p>
                                            <p className='lg:text-lg text-base'><span className='font-semibold'>Phone:</span> <a href='tel:5551234567' className='multiline-hover'>(555) 123-4567</a> </p>
                                        </div>
                                        <SocialIcons />
                                    </div>
                                </SlideUp>
                        }
                    </div>
                    <div className='lg:pt-10 pt-3'>
                        <SlideUp>
                            <Title size={"5xl"} className={"font-normal"}>Meet Our CEO <Highlight><span className='font-extrabold'>Jennifer Smith</span> </Highlight> </Title>
                            <div>
                                <p className='lg:pt-15 pt-7'>
                                    Jennifer Smith is a seasoned executive with over 15 years of experience in the digital marketing industry. As the founder and CEO of [Your Agency Name], Jennifer has led the company to become a trusted partner for businesses seeking innovative digital solutions.
                                </p>
                                <p className='pt-5'>With a passion for driving results and a commitment to delivering exceptional client service, Jennifer oversees the strategic direction of the agency and leads a team of talented professionals.</p>
                            </div>
                        </SlideUp>
                        {
                            isDetails &&
                            <SlideUp>
                                <div className='pt-10'>
                                    <Image src={'/images/shapes/signature.png'} width={240} height={64} alt='Jennifer' />
                                    <h5 className='font-semibold text-muted-foreground text-1xl pt-1'>Jennifer Smith</h5>
                                    <p className='lg:text-lg text-base'><span className='font-semibold'>Email:</span> <a href='mailto:"jennifer@example.com"' className='multiline-hover'>jennifer@example.com</a></p>
                                    <p className='lg:text-lg text-base'><span className='font-semibold'>LinkedIn:</span> <a href='https://www.linkedin.com/' className='multiline-hover'>linkedin.com/in/jennifersmith</a> </p>
                                </div>
                            </SlideUp>
                        }
                        {
                            isDetails ? "" :
                                <div>
                                    <div className='lg:pt-15 pt-10'>
                                        <SlideUp>
                                            <div>
                                                <Title size={"4xl"}>Achievements:</Title>
                                                <ul className='lg:pt-10 pt-6 flex flex-col gap-4'>
                                                    <li className='font-semibold flex items-center gap-5'>
                                                        <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check' />
                                                        <span>"Digital Marketing Innovator of the Year" by Marketing Association</span>
                                                    </li>
                                                    <li className='font-semibold flex items-center gap-5'>
                                                        <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check' />
                                                        <span>Led Next to achieve a 200% increase in revenue first year of operations</span>
                                                    </li>
                                                    <li className='font-semibold flex items-center gap-5'>
                                                        <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check' />
                                                        <span>Recognized as a Top 50 Digital Marketing Influencer by Marketing Magazine</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </SlideUp>
                                        <SlideUp>
                                            <div className='lg:pt-[70px] pt-10'>
                                                <Title size={"4xl"}>Expertise:</Title>
                                                <div>
                                                    <ProgressBar finalWidth={80} title={"Search Engine Optimization"} />
                                                    <ProgressBar finalWidth={62} title={"Social Media Marketing"} />
                                                    <ProgressBar finalWidth={92} title={"Content Strategy"} />
                                                    <ProgressBar finalWidth={98} title={"Leadership and Team Management"} />
                                                </div>
                                            </div>
                                        </SlideUp>
                                        <SlideUp>
                                            <div className='lg:pt-[70px] pt-10'>
                                                <Title size={"4xl"}>Testimonials:</Title>
                                                <p className='lg:pt-7.5 pt-4'>"Jennifer's strategic vision and leadership have been instrumental in driving our digital marketing initiatives forward. Her dedication to delivering results and commitment to client satisfaction make her a valuable asset to any team."
                                                    - John Doe, Client</p>
                                            </div>
                                        </SlideUp>
                                        <div className='lg:pt-[70px] pt-10'>
                                            <Title size={"4xl"}>Featured Projects:</Title>
                                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-7.5'>
                                                {
                                                    projectsData.slice(0, 2).map(({ id, info, src, title, link }) => <TeamCard key={id} id={id} position={info} name={title} src={src} link={link} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamPersonalCard