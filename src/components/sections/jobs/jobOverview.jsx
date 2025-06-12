import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'

const JobOverview = ({ job }) => {
    // Scroll handler
    const handleApplyClick = () => {
        if (typeof window !== "undefined") {
            const form = document.getElementById("form");
            if (form) {
                form.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className='container'>
            <div className='bg-[rgba(46,77,254,0.05)] rounded-bl-[30px] rounded-br-[30px] lg:py-24 py-14'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div>
                        <Title size={"5xl"}>{job.position.position_name}</Title>
                        <div className='flex items-center gap-5'>
                            <Title size={"4xl"} className={"font-normal"}>{job.salary}</Title>
                            <span className='font-semibold text-1xl'>USD per year</span>
                        </div>
                    </div>
                    <div className='pt-8 flex justify-between items-center flex-wrap'>
                        <div className='flex sm:flex-row flex-col sm:items-center justify-between gap-5 md:max-w-[60%] w-full'>
                            <div>
                                <p className='font-semibold text-muted-foreground'>Experience</p>
                                <span>{job.experience}</span>
                            </div>
                            <div>
                                <p className='font-semibold text-muted-foreground'>Job Nature</p>
                                <span>{job.job_nature.nature}</span>
                            </div>
                            <div>
                                <p className='font-semibold text-muted-foreground'>Location</p>
                                <span>{job.location.location}</span>
                            </div>
                        </div>
                        <div className='md:max-w-[40%] w-full flex md:justify-end mt-7 md:mt-0'>
                            <Button onClick={handleApplyClick}>Apply now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOverview
