"use client";

import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    name: "Matt Dixon",
    date: "2 weeks ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Great experience with Web Founders USA. They built our auto repair website and helped us get more calls. The site looks professional and is easy to use. Highly recommend!",
    rating: 3.5,
  },
  {
    name: "Maria Sanchez",
    date: "1 month ago",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    text: "They did an amazing job on our used car dealership website. We started getting more online inquiries within a few weeks. The team was friendly and easy to work with.",
    rating: 4,
  },
  {
    name: "Derrick Coleman",
    date: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Solid work and good communication. They improved our Google Business profile and helped our shop show up in local searches. We've definitely seen more customers since then.",
    rating: 3,
  },
  {
    name: "Taylor Reed",
    date: "4 months ago",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Web Founders USA redesigned our auto detailing website and it looks clean and modern. We're getting more bookings now. The whole process was smooth and stress free.",
    rating: 4,
  },
  {
    name: "Ethan Parker",
    date: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Very happy with the results. They helped us with local SEO and fixed our Google profile. We're seeing more traffic and calls now. Good team and easy to work with.",
    rating: 3.5,
  },
  {
    name: "Olivia Bennett",
    date: "6 months ago",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    text: "The team at Web Founders USA really understood our goals. They created a clean website for our auto service center and helped us rank higher on Google. Great service!",
    rating: 4,
  },
  {
    name: "Ryan Foster",
    date: "7 months ago",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=128&h=128&q=80",
    text: "They were professional and delivered everything on time. Our car lot website looks great and we've seen an increase in online leads. Would work with them again.",
    rating: 3,
  },
  {
    name: "Brianna Wells",
    date: "8 months ago",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=128&h=128&q=80",
    text: "We've worked with a few companies before, but Web Founders USA has been the best. They're knowledgeable and actually care about getting results for your business.",
    rating: 3.5,
  },
  {
    name: "Brandon Lewis",
    date: "3 weeks ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Great team to work with. They built our auto repair website and helped us show up on Google. We’ve seen more calls and new customers since the launch. Definitely recommend.",
    rating: 5,
  },
  {
    name: "Alyssa Grant",
    date: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Very happy with the results. They improved our Google Business profile and our shop is getting more traffic. Communication was easy and they explained everything clearly.",
    rating: 4.5,
  },
  {
    name: "Tyler Morgan",
    date: "1 month ago",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    text: "They did a good job with our dealership website. Clean design, fast loading and mobile friendly. We’ve already noticed an increase in inquiries. Professional and easy to work with.",
    rating: 4,
  },
  {
    name: "Danielle Carter",
    date: "4 months ago",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Amazing experience! They helped us with our car dealership SEO and we’re getting way more leads now. Super responsive and always helpful. Highly recommend if you want real results.",
    rating: 5,
  },
  {
    name: "James Miller",
    date: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=128&h=128&q=80",
    text: "They redesigned our auto detailing website and it looks great. The process was smooth and the team was really helpful. We’ve seen a steady increase in bookings.",
    rating: 4.5,
  },
  {
    name: "Rachel Kim",
    date: "6 months ago",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Web Founders USA helped us rank higher on Google for our auto service shop. We get more calls and online appointments now. Great service and honest team.",
    rating: 5,
  },
  {
    name: "Kevin Roberts",
    date: "7 months ago",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Solid experience. They handled our website and local SEO. We’ve already seen more visibility and customer requests. Would definitely work with them again.",
    rating: 4,
  },
  {
    name: "Miguel Santos",
    date: "9 months ago",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Really happy with the work. They built a clean, professional website for our used car lot and helped improve our Google rankings. Good communication and great support.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    date: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Web Founders USA did an amazing job with our dealership website. They understood our goals, improved our local SEO, and we're getting way more leads and calls now. Highly recommend their team!",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    date: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Great experience working with Web Founders USA. They redesigned our auto repair shop website and helped us rank higher on Google. The team is professional, responsive and delivers real results.",
    rating: 4.5,
  },
  {
    name: "Ryan Mitchell",
    date: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    text: "We've seen a big increase in customer inquiries since working with Web Founders USA. Their SEO strategy and website design for our auto detailing business has been a game changer!",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    date: "6 months ago",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Very professional team. They built our car dealership website exactly how we wanted and also handled our Google Business SEO. We're getting more traffic and high-quality leads. Great service!",
    rating: 4.5,
  },
  {
    name: "Jason Keller",
    date: "7 months ago",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Web Founders USA exceeded our expectations. They built a clean, modern website for our used car lot and helped us rank in our local area. Excellent communication and results!",
    rating: 5,
  },
  {
    name: "Nicole Brooks",
    date: "8 months ago",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Our auto service center has seen a huge improvement in online visibility since working with Web Founders USA. They are knowledgeable, easy to work with, and truly care about the success of your business.",
    rating: 4.5,
  },
  {
    name: "David Carter",
    date: "9 months ago",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Solid experience overall. They helped us with website development and local SEO for our automotive business. We've noticed a steady increase in calls and appointment bookings.",
    rating: 4.5,
  },
  {
    name: "Emily Johnson",
    date: "10 months ago",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=128&h=128&q=80",
    text: "Highly recommend Web Founders USA! They redesigned our auto dealership website, optimized our Google Business profile, and we're now getting consistent leads every week. Amazing team and support!",
    rating: 5,
  },
];

const StarRating = ({ rating, size = "text-4xl" }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return <FaStar key={star} className={`${size} text-amber-500`} />;
        } else if (star <= rating) {
          return (
            <FaStarHalfAlt key={star} className={`${size} text-amber-500`} />
          );
        } else {
          return <FaStar key={star} className={`${size} text-gray-300`} />;
        }
      })}
    </div>
  );
};

const Testimonials2 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full border-[20px] border-blue-200/30" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full border-[15px] border-blue-200/20" />
      <div className="absolute top-[50px] right-[100px] w-[120px] h-[120px] rounded-full bg-red-200/15" />
      <div className="absolute bottom-[100px] left-[100px] w-[200px] h-[200px] rounded-full bg-blue-100/40" />

      <div className="relative z-10 grid w-full max-w-9xl grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        {/* Left Side - Rating Card (WIDER) */}
        <div className="w-full">
          <div className="bg-white shadow-xl rounded-lg px-10 sm:px-14 py-5 sm:py-8 relative flex h-full w-full flex-col justify-center overflow-hidden">
            {/* Top Right Dot Grid */}
            <div className="absolute top-6 right-6 grid grid-cols-4 gap-1.5">
              {[...Array(16)].map((_, i) => (
                <div
                  key={`tr-${i}`}
                  className="w-2 h-2 rounded-full bg-blue-200/60"
                />
              ))}
            </div>

            {/* Bottom Left Dot Grid */}
            <div className="absolute bottom-6 left-6 grid grid-cols-4 gap-1.5">
              {[...Array(16)].map((_, i) => (
                <div
                  key={`bl-${i}`}
                  className="w-2 h-2 rounded-full bg-blue-200/60"
                />
              ))}
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Web Founders {""}
              <span className="text-red-600">USA</span>
            </h2>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-6xl font-bold text-slate-900 leading-none">
                4.8
              </span>
              <StarRating rating={4.8} size="text-4xl" />
            </div>

            <p className="text-xl text-slate-500 mb-2">
              Based on <span className="font-bold text-red-500">625</span>{" "}
              reviews
            </p>

            <p className="text-xl text-slate-500 mb-10">
              powered by{" "}
              <span className="font-semibold text-xl">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </p>

            <Link href={"/"}>
              <button className="flex items-center justify-center gap-4 bg-blue-900 text-white rounded-full py-2 px-4 max-w-full font-semibold text-lg hover:bg-blue-500 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <FcGoogle className="text-xl" />
                </div>
                Review us on Google
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Testimonials */}
        <div
          className="w-full min-w-0 overflow-hidden"
          aria-label="Client testimonials carousel"
        >
          <div className="testimonial-carousel-track flex h-full w-[1200%]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex h-full w-1/2 shrink-0">
                {Array.from(
                  { length: Math.ceil(testimonials.length / 4) },
                  (_, pageIndex) =>
                    testimonials.slice(pageIndex * 4, pageIndex * 4 + 4),
                ).map((page, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="grid h-full w-1/6 shrink-0 grid-cols-2 grid-rows-2 gap-3 pr-3"
                    >
                      {page.map((testimonial) => (
                        <article
                          key={`${copy}-${testimonial.name}`}
                          className="min-h-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_2px_8px_rgba(15,23,42,0.08)] sm:p-4"
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <img
                              src={testimonial.image}
                              alt=""
                              loading="lazy"
                              className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm sm:h-12 sm:w-12"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-bold leading-tight text-[#174b91] sm:text-base">
                                {testimonial.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                {testimonial.date}
                              </p>
                            </div>
                            <FcGoogle
                              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                              aria-label="Google"
                            />
                          </div>
                          <StarRating
                            rating={testimonial.rating}
                            size="text-xl"
                          />
                          <p className="mt-1 line-clamp-5 text-sm leading-[1.25] text-slate-700 sm:text-base">
                            {testimonial.text}
                          </p>
                        </article>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes testimonial-slide-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .testimonial-carousel-track {
          animation: testimonial-slide-right 32s linear infinite;
        }
        .testimonial-carousel-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-carousel-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials2;
