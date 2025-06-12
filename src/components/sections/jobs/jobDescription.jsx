'use client'

import React, { useState, useRef } from 'react'
import JobOverview from './jobOverview'
import Benefits from './benefits'
import Title from '@/components/ui/title'
import SlideUp from '@/components/animations/slideUp'

const JobDescription = ({ job }) => {
    // State for modal
    const [showModal, setShowModal] = useState(false)
    const formRef = useRef(null)

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
        setTimeout(() => {
            setShowModal(false)
            if (typeof window !== "undefined") window.location.reload()
        }, 2000)
    }

    return (
        <section className='lg:pb-15 pb-9'>
            <JobOverview job={job} />
            <div className='max-w-[1350px] mx-auto px-[15px] pt-15'>
                <div className='grid lg:grid-cols-[auto_420px] grid-cols-1 gap-x-8 gap-y-14 justify-between items-start'>
                    <div className='lg:max-w-[745px]'>
                        <SlideUp>
                            <div>
                                <Title size={"4xl"}>Job Summary</Title>
                                <p className='pt-5 lg:pt-7.5'>{job.summary}</p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className='pt-8 lg:pt-12.5'>
                                <Title size={"4xl"}>Responsibilities</Title>
                                <ul className='pt-5 lg:pt-7.5 flex flex-col gap-[15px]'>
                                    {job.responsibilities.map((item, idx) => (
                                        <List key={idx}>{item}</List>
                                    ))}
                                </ul>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className='pt-8 lg:pt-12.5'>
                                <Title size={"4xl"}>Qualifications</Title>
                                <ul className='pt-5 lg:pt-7.5 flex flex-col gap-[15px]'>
                                    {job.qualifications.map((item, idx) => (
                                        <List key={idx}>{item}</List>
                                    ))}
                                </ul>
                            </div>
                        </SlideUp>
                        {/* Job Form from scratch */}
                        <SlideUp>
                            <div id="form" className='mt-16'>
                                <Title size="4xl" className="mb-4">Apply for this Position</Title>
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-accent"
                                    encType="multipart/form-data"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-semibold mb-1">First Name</label>
                                            <input name="firstName" required className="w-full border rounded-lg px-3 py-2" type="text" placeholder="Enter your first name" />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">Last Name</label>
                                            <input name="lastName" required className="w-full border rounded-lg px-3 py-2" type="text" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-semibold mb-1">Qualification</label>
                                            <input name="qualification" required className="w-full border rounded-lg px-3 py-2" type="text" placeholder="Your highest qualification" />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">Experience</label>
                                            <input name="experience" required className="w-full border rounded-lg px-3 py-2" type="text" placeholder="e.g. 2 years" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-semibold mb-1">Position</label>
                                        <input name="position" required className="w-full border rounded-lg px-3 py-2" type="text" value={job.position.position_name} readOnly />
                                    </div>
                                    <div>
                                        <label className="block font-semibold mb-1">Cover Letter</label>
                                        <textarea name="letter" required className="w-full border rounded-lg px-3 py-2 min-h-[100px]" placeholder="Write a short cover letter..." />
                                    </div>
                                    <div>
                                        <label className="block font-semibold mb-1">Attach CV</label>
                                        <input name="cv" required className="w-full border rounded-lg px-3 py-2" type="file" accept=".pdf,.doc,.docx" />
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition">
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </SlideUp>
                        {/* Modal - from scratch */}
                        {showModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                                <div className="bg-white rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center max-w-[90vw]">
                                    <svg className="mb-4" width={48} height={48} fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" fill="#22c55e" opacity="0.15"/>
                                        <path d="M8 12.5l2.5 2.5 5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="text-2xl font-semibold mb-2 text-green-600">Submitted Successfully!</div>
                                    <div className="text-gray-500 text-center mb-2">Your application has been received. We'll contact you soon.</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Benefits />
                </div>
            </div>
        </section>
    )
}

export default JobDescription

const List = ({ children }) => (
    <li className='relative after:absolute after:-left-3 after:top-[11.5px] after:w-1 after:h-1 after:bg-foreground after:rounded-full ml-3'>
        {children}
    </li>
)
