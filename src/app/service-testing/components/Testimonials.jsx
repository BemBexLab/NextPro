"use client";

import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Great experience and saw our SEO soar with my impressions and getting more leads through ChatGPT now through search!",
      image: "/testimonials/stephen.jpg", // Replace with actual image path
      name: "Stephen",
      title: "Founder & CEO of Solar Business",
    },
    {
      quote:
        "Great experience. LocalMighty and the team helped our business grow online, and I truly appreciate their dedication and hard work. Thank you.",
      image: "/testimonials/dr-lloyd.jpg", // Replace with actual image path
      name: "Dr. Lloyd K",
      title: "Founder & CEO of Dental Clinic",
    },
    {
      quote:
        "Great experience. LocalMighty delivered creative SEO strategies, high-quality backlinks, and content that truly improved our rankings.",
      image: "/testimonials/robert.jpg", // Replace with actual image path
      name: "Robert P",
      title: "Marketing Director at Real Estate",
    },
    {
      quote:
        "LocalMighty helped us so much! We are grateful for their expertise and skills—truly thankful for their support!",
      image: "/testimonials/dr-berg.jpg", // Replace with actual image path
      name: "Dr Berg",
      title: "Founder & CEO of Dr. Berg",
    },
    {
      quote:
        "LocalMighty exceeded expectations! My new service-based website is climbing search rankings consistently.",
      image: "/testimonials/ryan.jpg", // Replace with actual image path
      name: "Ryan P",
      title: "Founder & CEO of Cleaning Business",
    },
    {
      quote:
        "The team was professional. They excelled in their work on my SEO and elevated my business to the first page of Google.",
      image: "/testimonials/nicole.jpg", // Replace with actual image path
      name: "Nicole",
      title: "Attorney & Founder of Law Firm",
    },
  ];

  // Auto-slide every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate which testimonials to show (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-medium text-[#0749A7]">
            Real Results. Real Voices. Real Growth.
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in"
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-center mb-6">
                  <svg
                    width="44"
                    height="40"
                    viewBox="0 0 44 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                      fill="#2563EB"
                    />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 text-base text-center leading-relaxed mb-8 min-h-[120px]">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-gray-900 text-xl font-bold mb-1">
                    {testimonial.name}
                  </h4>

                  {/* Title */}
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#0B5FCC] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
