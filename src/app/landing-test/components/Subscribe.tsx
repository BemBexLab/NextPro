import Title from "@/components/ui/title";
import SlideUp from "@/components/animations/slideUp";

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
        <SlideUp>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/60 bg-white/50 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:p-12 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="relative mb-8 max-w-2xl lg:mb-0 lg:pr-8">
                <Title
                  size="5xl"
                  className="text-2xl font-extrabold leading-tight text-[#001F3F] sm:text-3xl lg:text-4xl dark:text-white"
                >
                  Ready to Transform <span className="text-red-500">Your Digital Presence?</span>
                </Title>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                  Schedule a 30-minute meeting with our experts to propel your
                  online success.
                </p>
              </div>

              <div className="relative flex flex-shrink-0 items-center justify-center lg:justify-end">
                <a
                  href="#request-audit"
                  className="group flex min-h-12 min-w-[260px] max-w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#BF0B30] bg-[#BF0B30] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#BF0B30] sm:min-w-[280px] sm:px-8 sm:py-4"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Subscribe;
