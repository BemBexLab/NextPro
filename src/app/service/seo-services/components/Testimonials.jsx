import Image from "next/image";

const testimonialsCarouselClassName =
  "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pt-1 [scrollbar-width:none] sm:gap-6 lg:grid lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden";
const testimonialSlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

const testimonials = [
  {
    quote:
      "We doubled qualified leads in three months after the Web Founders USA SEO sprint — organic traffic grew 132% and our contact form conversions tripled.",
    image: "/service-testing/testimonials/17719507759cb7.webp",
    name: "Stephen Ramos",
    title: "Founder & CEO, SunBright Solar",
  },
  {
    quote:
      "Local-first SEO and Google Business optimization brought a steady stream of new patients. Online bookings increased 45% and phone calls are up 60%.",
    image: "/service-testing/testimonials/17719509296cd5.webp",
    name: "Dr. Lloyd Kim",
    title: "Founder & CEO, SmileWorks Dental",
  },
  {
    quote:
      "Their content and link strategy moved us onto page one for several competitive terms. We closed 8 new listings attributed directly to organic leads.",
    image: "/service-testing/testimonials/Frame66.webp",
    name: "Robert Patel",
    title: "Marketing Director, BlueRock Realty",
  },
  {
    quote:
      "The local SEO program made a measurable difference — more foot traffic, better visibility on Maps, and a clear uplift in patient referrals.",
    image: "/service-testing/testimonials/Frame661.webp",
    name: "Dr. Ingrid Berg",
    title: "Founder & CEO, Berg Clinic",
  },
  {
    quote:
      "After GMB optimization and local keyword work our weekly inbound calls grew 80% and booking rate improved. Highly recommend for service businesses.",
    image: "/service-testing/testimonials/review3.webp",
    name: "Ryan Parker",
    title: "Founder & CEO, SparkClean Services",
  },
  {
    quote:
      "Focused SEO and onboarding content helped our law practice appear for the right searches — quality consultations increased and client acquisition costs dropped.",
    image: "/service-testing/testimonials/17719507759cb7.webp",
    name: "Nicole Alvarez",
    title: "Managing Partner, Sterling Law",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="44"
      height="40"
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
        fill="#2563EB"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-medium text-[#0749A7] sm:text-4xl lg:text-5xl">
            Real Results. Real Voices. Real Growth.
          </h2>
        </div>

        <div
          className={`${testimonialsCarouselClassName} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.name}-${testimonial.title}`}
              className={testimonialSlideClassName}
            >
              <article className="flex h-full min-w-0 flex-col rounded-2xl bg-white p-5 shadow-lg sm:p-6 lg:p-8">
                <div className="mb-6 flex items-center justify-center">
                  <QuoteIcon />
                </div>

                <p className="mb-8 min-h-[120px] text-center text-base leading-relaxed text-gray-600">
                  {testimonial.quote}
                </p>

                <div className="mt-auto flex flex-col items-center text-center">
                  <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      sizes="80px"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
