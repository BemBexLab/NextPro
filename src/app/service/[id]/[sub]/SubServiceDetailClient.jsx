"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { getServiceById, getSubCategory } from "@/data/services";

const SubServiceDetailPage = ({ params }) => {
    const { id, sub } = params;
    const parent = getServiceById(id);
    const service = getSubCategory(id, sub);
    const [activeTab, setActiveTab] = useState(service?.tab?.steps?.[0]?.id || null);
    const [mobileOpenStep, setMobileOpenStep] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    if (!parent || !service) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold">Page not found</h2>
                <p className="mt-4">We couldn't find the page you're looking for.</p>
                <div className="mt-6">
                    <Link href="/service" className="text-[#072d7f] underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    const handleStepAccordion = (id) => {
        setMobileOpenStep(mobileOpenStep === id ? null : id);
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-white text-gray-900">
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                        <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                            {service.title}
                        </span>
                    </h1>
                    <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-white/90 text-base md:text-lg">
                        {service.hero?.paragraph || service.desc}
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-5">
                        <a href={`tel:+14704707520`} className="flex items-center gap-3 group" aria-label="Call us">
                            <div className="rounded-full bg-primary border-primary w-14 h-14 flex items-center justify-center animate-shake-pause group-hover:bg-primary/80 transition">
                                <div className="text-white flex items-center justify-center">
                                    <IoCall size={30} />
                                </div>
                            </div>
                            <span className="text-base font-semibold text-white group-hover:underline">
                                +1 (470) 470-7520
                            </span>
                        </a>

                        <Button asChild size="xl">
                            <Link className="text-foreground" href={'/contact-us'}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Paragraph */}
            <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                        {(service.introParagraphs || []).map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="w-full" style={{ aspectRatio: '1 / 1' }}>
                            {service.hero?.image ? (
                                <Image src={service.hero.image} alt={service.title} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gray-100" />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Section */}
            <section className="py-12 md:py-20 bg-[#F4F6FF]">
                <div className="max-w-[1350px] mx-auto px-[15px]">
                    <div className="flex flex-col items-center mb-12">
                        <span className="px-4 py-2 bg-white text-[#072d7f] font-semibold rounded-full text-sm">Our Strategy</span>
                        <h2 className="text-3xl md:text-4xl font-bold max-w-[800px] pt-4 text-center">
                            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">{service.tab?.title}</span>
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex flex-wrap justify-between gap-2 w-full mb-10">
                            {(service.tab?.steps || []).map(({ id, heading, tab_name }) => (
                                <button key={id} onClick={() => setActiveTab(id)} className={`flex items-start gap-2 px-3 py-4 rounded-[10px] basis-[30%] sm:basis-[22%] md:basis-[15%] grow h-auto whitespace-normal text-start font-semibold text-sm md:text-base transition-colors ${activeTab === id ? "bg-[#072d7f] text-white" : "bg-white text-[#072d7f]"}`}>
                                    <span className="text-inherit">{tab_name}</span>
                                </button>
                            ))}
                        </div>

                        {(service.tab?.steps || []).map(({ id, heading, description }) => (
                            activeTab === id && (
                                <div key={id} className="pt-6 md:pt-10">
                                    <div className="bg-white py-8 px-6 rounded-[30px] max-w-4xl mx-auto shadow-sm">
                                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-5">{heading}</h3>
                                        <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">{description}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <div className="block md:hidden pt-8">
                        {(service.tab?.steps || []).map(({ id, tab_name, heading, description }) => (
                            <div key={id} className="mb-4 rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200">
                                <button className="flex items-start w-full p-5 text-left focus:outline-none" onClick={() => handleStepAccordion(id)} aria-expanded={mobileOpenStep === id}>
                                    <span className="text-[#072d7f] mr-3 mt-1">●</span>
                                    <span className="font-semibold text-lg flex-1">{tab_name}</span>
                                    <svg className={`transform transition-transform duration-200 ml-2 mt-1 ${mobileOpenStep === id ? "rotate-180" : ""}`} width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {mobileOpenStep === id && (
                                    <div className="p-5 pt-0 border-t border-gray-200">
                                        <h3 className="text-xl font-bold mb-2">{heading}</h3>
                                        <p className="text-gray-700 py-3">{description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section (optional) */}
            {service.whyChoose && service.whyChoose.length > 0 && (
                <section className="py-12 md:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            className="text-center mb-12 md:mb-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.p
                                className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-sm md:text-base"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Why Choose
                            </motion.p>
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">Why Choose Our E-commerce SEO Agency?</span>
                            </motion.h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.whyChoose.map((item, idx) => (
                                <div key={idx} className="group bg-[#F4F6FF] p-6 rounded-[20px] border border-transparent shadow-lg hover:shadow-xl transition">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#072d7f]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17l-5-5" stroke="#072d7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#072d7f]">{item.title}</h3>
                                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs Section */}
            <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {(service.faqs || []).map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}>
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <svg className={`transform transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openFaq === index && (
                                <div className="p-5 pt-3 border-t border-gray-200 bg-white">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/contact-us" className="inline-block px-6 py-3 border-2 border-[#072d7f] text-[#072d7f] font-semibold rounded-lg hover:bg-[#072d7f] hover:text-white transition-colors">
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SubServiceDetailPage;
