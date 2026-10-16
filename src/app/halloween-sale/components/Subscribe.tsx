import Title from "@/components/ui/title";
import Reveal from "./Reveal";
import SubscribePopupTrigger from "./SubscribePopupTrigger";

const Subscribe = () => {
  return (
    <section className="relative isolate py-12 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-[#F5F7FD]/85 via-[#F5F7FD]/45 to-transparent sm:h-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-[#F0F5FF] via-[#F0F5FF]/65 to-transparent sm:h-44"
      />

      <div className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/60 bg-white/50 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:p-12 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="relative mb-8 max-w-2xl lg:mb-0 lg:pr-8">
                <Title
                  size="5xl"
                  className="text-2xl font-extrabold leading-tight text-[#001F3F] sm:text-3xl lg:text-4xl dark:text-white"
                >
                  Ready for a <span className="text-red-500">Better Website?</span>
                </Title>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                  Schedule a 30-minute meeting to discuss your website design
                  and development goals with our team.
                </p>
              </div>

              <div className="relative flex flex-shrink-0 items-center justify-center lg:justify-end">
                <SubscribePopupTrigger />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Subscribe;
