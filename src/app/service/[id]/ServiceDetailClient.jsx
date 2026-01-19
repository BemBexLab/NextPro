"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { getServiceById } from "@/data/services";


// Reusable small icons (kept inline to avoid extra imports)
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.23 1.664-4.781 4.919-4.92 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

const ServiceDetailPage = ({ params }) => {
    const { id } = params;
    const service = getServiceById(id);
    const [activeTab, setActiveTab] = useState(service?.tab?.steps?.[0]?.id || null);
    const [mobileOpenStep, setMobileOpenStep] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [clickedArrows, setClickedArrows] = useState([]);

    const handleArrowClick = (index, e) => {
        // Do not prevent default or stop propagation so Link navigation works.
        setClickedArrows((prev) => {
            if (prev.includes(index)) return prev;
            const next = [...prev, index];
            setTimeout(() => {
                setClickedArrows((innerPrev) => innerPrev.filter((i) => i !== index));
            }, 1200);
            return next;
        });
    };

    if (!service) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold">Service not found</h2>
                <p className="mt-4">We couldn't find the service you're looking for.</p>
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
            {/* Hero Section */}
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

            {/* Sub-categories Section (optional) */}
            {service.sub_categories && service.sub_categories.length > 0 && (
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
                                Services
                            </motion.p>
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
                                    Explore Related
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
                                    Services
                                </span>
                            </motion.h2>
                            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Dive deeper into specific offerings related to this service.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {service.sub_categories.map((sub, i) => (
                                <div
                                    key={sub.id}
                                    className="group relative rounded-[30px] bg-[#072d7f] p-6 md:p-8 flex flex-col justify-between border border-transparent transition-all duration-300 hover:border-[#072d7f] cursor-pointer"
                                >
                                    <Link href={`/service/${service.id}/${sub.id}`} className="relative z-20 block">
                                        <div>
                                            <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-[rgba(255,255,255,0.10)] transition-all duration-300 border border-transparent group-hover:border-[#DE2F04]">
                                                {/* If sub has an icon component, render it; otherwise fallback to parent icon */}
                                                {(() => {
                                                    const Icon = sub.icon || service.icon;
                                                    return Icon ? (
                                                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#f84318]" />
                                                    ) : (
                                                        <img src={sub.hero?.image || service.hero?.image} alt={sub.title} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                                                    );
                                                })()}
                                            </div>

                                            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
                                                <span className="bg-gradient-to-r from-[#ffb199] to-[white] text-transparent bg-clip-text">
                                                    {sub.title.split(" ")[0]}
                                                </span>{" "}
                                                {sub.title.split(" ").slice(1).join(" ")}
                                            </h3>

                                            <p className="text-white text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-4">
                                                {sub.desc || (sub.introParagraphs && sub.introParagraphs[0])}
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <div
                                                className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[20px] bg-white overflow-hidden cursor-pointer"
                                                onClick={(e) => handleArrowClick(i, e)}
                                                role="button"
                                                aria-label={`Open ${sub.title}`}
                                            >
                                                <div
                                                    className="relative z-10 text-[#072d7f] text-lg font-bold"
                                                    style={{
                                                        transform: clickedArrows.includes(i) ? "rotate(360deg)" : "rotate(0deg)",
                                                        transition: "transform 0.8s ease-in-out",
                                                    }}
                                                >
                                                    →
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
                            ) : service.icon ? (
                                (() => {
                                    const Icon = service.icon;
                                    return (
                                        <div className="w-full h-full flex items-center justify-center rounded-lg bg-gray-100">
                                            <Icon className="text-4xl text-[#072d7f]" />
                                        </div>
                                    );
                                })()
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
                            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">{service.tab.title}</span>
                        </h2>
                    </div>

                    {/* Desktop Tabs */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full mb-10">
                            {(service.tab.steps || []).map(({ id, heading, tab_name }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`flex items-center justify-center px-3 py-4 rounded-[10px] min-h-[56px] text-center font-semibold text-sm md:text-base transition-colors ${activeTab === id ? "bg-[#072d7f] text-white" : "bg-white text-[#072d7f]"}`}>
                                    <span className="text-inherit">{tab_name}</span>
                                </button>
                            ))}
                        </div>

                        {(service.tab.steps || []).map(({ id, heading, description }) => (
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

                    {/* Mobile Accordion */}
                    <div className="block md:hidden pt-8">
                        {(service.tab.steps || []).map(({ id, tab_name, heading, description }) => (
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

            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Trusted By Industry Leaders
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            We proudly partner with brands and platforms that demand excellence, transparency, and results.
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
                        {[
                            { src: "/brands/images__2_-removebg-preview.png", alt: "Trustpilot", width: 40, height: 40 },
                            { src: "/brands/images__1_-removebg-preview.png", alt: "BirdEye", width: 40, height: 40 },
                            { src: "/brands/images__2__1-removebg-preview.png", alt: "Feefo", width: 80, height: 80 },
                            { src: "/brands/images-1-removebg-preview.png", alt: "Yetpo", width: 40, height: 40 },
                            { src: "/brands/images-removebg-preview.png", alt: "Reviewsio", width: 40, height: 40 },
                            { src: "/brands/unnamed-removebg-preview.png", alt: "BazaarVoice", width: 40, height: 40 },
                        ].map(({ src, alt, width, height }) => (
                            <div
                                key={alt}
                                className="flex justify-center transition-all duration-300"
                            >
                                <img
                                    src={src}
                                    alt={alt}
                                    width={width}
                                    height={height}
                                    className="max-w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

export default ServiceDetailPage;
