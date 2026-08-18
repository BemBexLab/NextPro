import { Button } from "../ui/button";
import Title from "../ui/title";

import Document from "../../../public/icons/document";
import Shield from "../../../public/icons/shield";
import Discount from "../../../public/icons/discount";
import Buy from "../../../public/icons/buy";
import SlideLeft from "../animations/slideLeft";
import SlideUp from "../animations/slideUp";

const ourItems = [
  {
    id: 1,
    title: "Client-Centric Approach",
    icon: <Document />,
    desc: "We prioritize our clients' needs, delivering tailored solutions for tangible results.",
  },
  {
    id: 2,
    title: "Innovation and Excellence",
    icon: <Shield height="36" width="36" />,
    desc: "We stay ahead of the curve by exploring the latest technologies, making sure our clients succeed in today’s digital world.",
  },
  {
    id: 3,
    title: "Collaborative Partnership",
    icon: <Discount height="36" width="36" />,
    desc: "We team up with our clients, staying transparent and communicative every step of the way to build real trust.",
  },
  {
    id: 4,
    title: "Social Responsibility",
    icon: <Buy height="36" width="36" />,
    desc: "We build websites with purpose by following ethical practices, supporting sustainability, and contributing to positive change in technology and local communities.",
  },
];

const missionItemsCarouselClassName =
  "flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 pt-1 [scrollbar-width:none] sm:gap-6 lg:grid lg:grid-cols-2 lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden";
const missionItemSlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

function MissionCard({ id, icon, title, desc }) {
  return (
    <div className={missionItemSlideClassName}>
      <SlideUp id={id}>
        <article className="h-full min-w-0">
          <div
            className={`icon mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(162,46,254,0.10)] p-4 text-purple sm:mb-6 sm:h-[76px] sm:w-[76px] sm:p-5 lg:h-[85px] lg:w-[85px] lg:p-[22px] ${
              id === 2
                ? "!bg-[#5a55791a] !text-[#5A5579]"
                : id === 3
                  ? "!bg-[#9a2e791a] !text-[#FE2E79]"
                  : id === 4
                    ? "!bg-[#009f961a] !text-[#009F96]"
                    : ""
            }`}
            aria-hidden="true"
          >
            {icon}
          </div>

          <h3 className="relative break-words text-lg font-extrabold leading-snug text-muted-foreground hover-underline after:h-px after:bg-muted sm:text-xl">
            {title}
          </h3>
          <p className="pt-3 text-sm leading-relaxed text-muted-foreground sm:pt-4 sm:text-base lg:pt-5">
            {desc}
          </p>
        </article>
      </SlideUp>
    </div>
  );
}

const Mission = () => {
  return (
    <section className="w-full overflow-hidden py-10 sm:py-12 lg:py-15">
      <div className="mx-auto w-[92%] max-w-[1350px]">
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] xl:gap-16">
          <div className="min-w-0 lg:max-w-[620px]">
            <SlideLeft>
              <div className="pb-5 sm:pb-7 lg:pb-10">
                <Button variant="secondary">Mission</Button>
                <Title size="5xl" className="pt-4 sm:pt-6">
                  Our Mission
                </Title>
              </div>

              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:space-y-6 sm:text-base sm:leading-7 lg:space-y-7">
                <p className="font-semibold">
                  At Web Founders USA, our mission is to help businesses thrive
                  in the digital age through tailored, high-impact marketing and
                  web solutions.
                </p>
                <p>
                  We combine strategic thinking with creative execution and
                  cutting-edge technology to build user-friendly websites,
                  generate qualified leads, and increase conversions for small
                  businesses, startups, and growing brands.
                </p>
                <p>
                  Rooted in transparency, integrity, and continuous improvement,
                  we strive to be more than just a service provider—we’re a
                  trusted growth partner invested in your long-term success.
                </p>
              </div>
            </SlideLeft>
          </div>

          <div className="min-w-0">
            <div className={`${missionItemsCarouselClassName} lg:gap-x-6 lg:gap-y-[72px] xl:gap-x-8`}>
              {ourItems.map(({ desc, icon, id, title }) => (
                <MissionCard
                  key={id}
                  id={id}
                  desc={desc}
                  title={title}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
