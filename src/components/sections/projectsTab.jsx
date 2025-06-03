"use client"
import { projectsData } from '@/lib/fackData/projectsData'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamCard from './teams/teamCard'

const ProjectsTab = () => {
    let category = ["All"]
    const [tab, setTab] = useState("All");
    const onTabChange = (value) => {
        setTab(value);
    }

    projectsData.map(({ categories }) => categories.filter((item) => {
        if (!category.includes(item)) {
            category.push(item)
        }
    }))

    const filterProjects = projectsData.filter(({ categories }) => categories.some((item) => tab === "All" ? projectsData : item === tab))
 

    return (
        <section className='lg:py-15 py-9 mt-20 sm:mt-0'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <Tabs onValueChange={onTabChange} defaultValue="All">
                    <TabsList className='flex flex-col items-center bg-transparent pb-12.5'>
                        <div className='flex flex-wrap md:gap-x-10 gap-x-4 gap-y-2 '>
                            {
                                category.map((item, index) => <TabsTrigger value={item} key={index} className='font-bold cursor-pointer text-center text-lg text-foreground data-[state=active]:text-muted-foreground data-[state=active]:shadow-none px-0 py-0'>{item}</TabsTrigger>)
                            }
                        </div>
                    </TabsList>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-10 sm:mt-0'>
                        {
                            filterProjects.map(({ id, info, src, title, link }) => <TeamCard key={id} position={info} name={title} src={src} link={link} />)
                        }
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default ProjectsTab