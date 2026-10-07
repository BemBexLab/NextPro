import Link from "next/link";
import Image from "next/image";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { servicesDataTwo } from "@/lib/fackData/servicesDataTwo";

const servicesCarouselClassName =
  "flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 pt-1 [scrollbar-width:none] sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:py-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden";
const serviceSlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

const Services = () => {
  return (
    <section className="relative isolate bg-[#FAFBFE] pt-8 pb-2 overflow-x-hidden" id="services">
      <div className="relative mx-auto max-w-[1350px] px-[15px]">
        <div className="relative z-10">
          <SlideUp>
            <div className="flex flex-col items-center">
              <Button variant="secondary">Our Services</Button>
              <Title size={"5xl"} className="max-w-[869px] pt-2 text-center">
                A Complete Ecosystem for Design, Development & <span className="text-red-500">Digital Marketing</span>
              </Title>
            </div>
          </SlideUp>
          <div className="relative pt-2 lg:pt-7.5">
            <Image
              src="/Halloween Assets Task/image 14.png"
              width={240}
              height={240}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 z-20 hidden h-48 w-48 object-contain sm:block lg:h-64 lg:w-64"
            />
            <SlideUp>
              <div
                className={`${servicesCarouselClassName}
                    [&>*:nth-child(2)_.icon]:bg-[#32A5521A] [&>*:nth-child(2)_.icon]:text-green 
                    [&>*:nth-child(3)_.icon]:bg-[#A22EFE1A] [&>*:nth-child(3)_.icon]:text-purple 
                    [&>*:nth-child(4)_.icon]:bg-[#5A55791A] [&>*:nth-child(4)_.icon]:text-[#5A5579]
                    [&>*:nth-child(5)_.icon]:bg-[#FF00001A] [&>*:nth-child(5)_.icon]:text-[#FF0000]
                    [&>*:nth-child(6)_.icon]:bg-[#00A3FF1A] [&>*:nth-child(6)_.icon]:text-[#00A3FF]
                    [&>*:nth-child(7)_.icon]:bg-[#FF00991A] [&>*:nth-child(7)_.icon]:text-[#FF0099]
                    [&>*:nth-child(8)_.icon]:bg-[#009F961A] [&>*:nth-child(8)_.icon]:text-[#009F96]
                    `}
              >
                {servicesDataTwo.map(({ id, icon_1, service_name, link }) => {
                  return (
                    <Link
                      href={link}
                      key={id}
                      className={`${serviceSlideClassName} group flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/55 p-6 text-center shadow-[0_8px_32px_rgba(31,38,135,0.08)] ring-1 ring-white/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/90 hover:bg-white/75 hover:shadow-[0_16px_40px_rgba(31,38,135,0.14)] lg:p-8`}
                    >
                      <div className="md:w-[85px] md:h-[85px] w-16 h-16 md:p-6 p-4 rounded-full flex justify-center items-center mb-6 bg-[rgba(46,77,254,0.10)] icon">
                        <span className="transition-all duration-500 group-hover:scale-90">
                          {icon_1}
                        </span>
                      </div>
                      <span className="text-xl font-extrabold text-muted-foreground text-center leading-[140%] multiline-hover">
                        {service_name}
                      </span>
                      {/* <p className='service-description-scroll pt-3 h-[20rem] overflow-y-auto pr-2 text-center'>
                                                {description}
                                            </p> */}
                    </Link>
                  );
                })}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/Halloween Assets Task/image 15.webp"
          width={960}
          height={1600}
          alt=""
          className="absolute bottom-0 left-0 h-auto w-32 object-contain sm:w-48 lg:w-64"
        />
        <Image
          src="/Halloween Assets Task/image 16.webp"
          width={1210}
          height={866}
          alt=""
          className="absolute bottom-0 right-0 h-auto w-40 object-contain sm:w-56 lg:w-80"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[4%] top-[18%] h-10 w-10 rotate-[-12deg] object-contain opacity-70 sm:h-12 sm:w-12"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[24%] top-[57%] h-12 w-12 scale-x-[-1] rotate-[15deg] object-contain opacity-45 sm:h-16 sm:w-16"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[8%] top-[50%] h-10 w-10 -rotate-6 object-contain opacity-50 sm:h-12 sm:w-12"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[26%] bottom-[8%] h-14 w-14 rotate-12 object-contain opacity-40 sm:h-20 sm:w-20"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[7%] bottom-[10%] h-12 w-12 -rotate-12 scale-x-[-1] object-contain opacity-50 sm:h-14 sm:w-14"
        />
      </div>
    </section>
  );
};

export default Services;
