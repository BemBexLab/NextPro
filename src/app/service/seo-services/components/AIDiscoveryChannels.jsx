import Image from "next/image";

function getVisiblePlatforms(platforms) {
  if (!Array.isArray(platforms)) {
    return [];
  }

  return platforms.reduce((items, platform) => {
    if (typeof platform === "string" && platform.trim()) {
      items.push({ src: platform, alt: "" });
      return items;
    }

    if (!platform || typeof platform !== "object") {
      return items;
    }

    const src = platform.src || platform.logo;

    if (!src) {
      return items;
    }

    items.push({
      id: platform.id,
      src,
      alt: platform.alt || platform.name || "",
      width: platform.width,
      height: platform.height,
      sizes: platform.sizes,
    });

    return items;
  }, []);
}

function PlatformGrid({ platforms }) {
  if (!platforms.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
      {platforms.map((platform, index) => (
        <div
          key={platform.id || platform.src || index}
          className="flex min-h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-lg sm:min-h-[140px] sm:p-6"
        >
          <Image
            src={platform.src}
            alt={platform.alt}
            width={platform.width || 160}
            height={platform.height || 64}
            sizes={
              platform.sizes ||
              "(min-width: 1024px) 160px, (min-width: 768px) 30vw, 45vw"
            }
            className="h-auto max-h-16 w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function AIDiscoveryChannels({
  eyebrow = null,
  title = null,
  description = null,
  strategies = null,
  platforms = null,
  footnote = null,
} = {}) {
  const visibleStrategies = (Array.isArray(strategies) ? strategies : []).filter(
    (strategy) => strategy && (strategy.title || strategy.description),
  );
  const visiblePlatforms = getVisiblePlatforms(platforms);
  const hasHeader = Boolean(eyebrow || title || description);

  if (
    !hasHeader &&
    !visibleStrategies.length &&
    !visiblePlatforms.length &&
    !footnote
  ) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 pb-20">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        {hasHeader ? (
          <header
            className={`mx-auto max-w-5xl text-center ${
              visibleStrategies.length || visiblePlatforms.length
                ? "mb-10"
                : ""
            }`}
          >
            {eyebrow ? (
              <div className="mb-3 text-sm font-medium text-gray-600 sm:mb-4 sm:text-base lg:text-lg">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <h2 className="text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}

            {description ? (
              <div className="mx-auto mt-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {description}
              </div>
            ) : null}
          </header>
        ) : null}

        {visibleStrategies.length ? (
          <div className={visiblePlatforms.length ? "mb-12 sm:mb-16" : ""}>
            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
              aria-label="Search optimization strategies"
            >
              {visibleStrategies.map((strategy, index) => (
                <article
                  key={strategy.id || strategy.title || index}
                  className="group flex min-h-[250px] min-w-[85%] snap-center flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[65%] sm:p-8 lg:min-w-0"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#0749A7] text-lg font-semibold text-white">
                    {strategy.number || String(index + 1).padStart(2, "0")}
                  </div>

                  {strategy.title ? (
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#0749A7] sm:text-3xl">
                      {strategy.title}
                    </h3>
                  ) : null}

                  {strategy.description ? (
                    <div className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {strategy.description}
                    </div>
                  ) : null}

                  <div className="mt-auto pt-6">
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#0749A7] to-[#38bdf8] transition-all duration-300 group-hover:w-24" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <PlatformGrid platforms={visiblePlatforms} />

        {footnote ? (
          <p className="mt-6 text-center text-sm leading-relaxed text-gray-600 sm:mt-8 sm:text-base lg:mt-10 lg:text-lg">
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
