import Image from "next/image";
import Reveal from "./Reveal";
import Title from "@/components/ui/title";
import ServiceContent from "./ServiceContent";

const Services = () => (
  <section
    className="relative isolate overflow-hidden bg-[#F0F4FF] py-[clamp(3.5rem,7vw,6rem)]"
    id="services"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
      style={{
        backgroundImage: "url('/Halloween Assets Task/image 32.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
      }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-[#FAFBFE] via-[#F4F7FF] to-[#F0F4FF] sm:h-44"
    />
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[4%] top-[12%] z-[2] hidden aspect-square w-14 object-contain xl:block"
    >
      <source
        src="/Halloween%20Assets%20Task/1410a77dbdbf4ee483534ac4aa49f71f.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[7%] top-[18%] z-[2] hidden aspect-square w-20 object-contain xl:block"
    >
      <source
        src="/Halloween%20Assets%20Task/9d2a0d7d5ed44130b2a453ee2dfa04da.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[17%] top-[36%] z-[2] aspect-square w-12 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/312ec26c904a4d91a5fb546c91856e21.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[25%] top-[43%] z-[2] aspect-square w-24 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/c6bc03dac70d41609ce1e767aa622d17.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[72%] top-[70%] z-[2] aspect-square w-16 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/9d2a0d7d5ed44130b2a453ee2dfa04da.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[14%] top-[62%] z-[2] aspect-square w-20 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/312ec26c904a4d91a5fb546c91856e21.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[43%] top-[84%] z-[2] aspect-square w-14 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/c6bc03dac70d41609ce1e767aa622d17.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[48%] top-[36%] z-[2] aspect-square w-14 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/1410a77dbdbf4ee483534ac4aa49f71f.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[37%] top-[52%] z-[2] aspect-square w-16 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/9d2a0d7d5ed44130b2a453ee2dfa04da.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[31%] top-[67%] z-[2] aspect-square w-12 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/312ec26c904a4d91a5fb546c91856e21.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[6%] top-[82%] z-[2] aspect-square w-20 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/c6bc03dac70d41609ce1e767aa622d17.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[49%] top-[34%] z-[2] aspect-square w-16 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/1410a77dbdbf4ee483534ac4aa49f71f.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[59%] top-[45%] z-[2] aspect-square w-12 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/9d2a0d7d5ed44130b2a453ee2dfa04da.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute right-[28%] top-[74%] z-[2] aspect-square w-14 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/312ec26c904a4d91a5fb546c91856e21.webm"
        type="video/webm"
      />
    </video>
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      className="pointer-events-none absolute left-[8%] top-[88%] z-[2] aspect-square w-16 object-contain"
    >
      <source
        src="/Halloween%20Assets%20Task/c6bc03dac70d41609ce1e767aa622d17.webm"
        type="video/webm"
      />
    </video>
    <Image
      src="/Halloween Assets Task/image 25.webp"
      alt=""
      aria-hidden="true"
      width={1014}
      height={566}
      sizes="(max-width: 639px) 224px, (max-width: 767px) 320px, (max-width: 1023px) 384px, (max-width: 1279px) 460px, 520px"
      className="pointer-events-none absolute bottom-0 left-0 z-0 w-56 object-contain object-bottom sm:w-80 md:w-96 lg:w-[460px] xl:w-[520px]"
    />
    <Image
      src="/Halloween Assets Task/image 16.webp"
      alt=""
      aria-hidden="true"
      width={1210}
      height={866}
      sizes="(max-width: 639px) 224px, (max-width: 767px) 320px, (max-width: 1023px) 384px, (max-width: 1279px) 460px, 520px"
      className="pointer-events-none absolute bottom-0 right-0 z-0 w-56 object-contain object-bottom sm:w-80 md:w-96 lg:w-[460px] xl:w-[520px]"
    />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-9 text-center lg:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#BF0B30] sm:text-sm">
            Our Services
          </p>
          <Title
            size="5xl"
            className="mx-auto max-w-[52rem] text-center leading-tight dark:text-white"
          >
            Website Design &amp; Development, Built Around Your Business
          </Title>
        </div>
      </Reveal>

      <ServiceContent />
    </div>
  </section>
);

export default Services;
