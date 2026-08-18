import Image from "next/image";

const storiesCarouselClassName =
  "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pt-1 [scrollbar-width:none] sm:gap-6 lg:grid lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden";
const storySlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

function StoryImage({ image, title, priority = false }) {
  const imageData = typeof image === "string" ? { src: image } : image;

  if (!imageData?.src) {
    return null;
  }

  return (
    <Image
      src={imageData.src}
      alt={imageData.alt || title || ""}
      fill
      priority={imageData.priority ?? priority}
      sizes={
        imageData.sizes ||
        "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 92vw"
      }
      className={
        imageData.className ||
        "object-cover transition-transform duration-300 group-hover:scale-105"
      }
    />
  );
}

export default function SuccessStories({
  eyebrow = null,
  title = null,
  description = null,
  stories = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1400px]",
  gridClassName = "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
} = {}) {
  const visibleStories = (Array.isArray(stories) ? stories : []).filter(
    (story) => story && (story.image || story.title || story.description),
  );
  const hasHeader = Boolean(eyebrow || title || description);

  if (!hasHeader && !visibleStories.length) {
    return null;
  }

  return (
    <section className={`w-full bg-gray-50 py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className={containerClassName}>
        {hasHeader ? (
          <div
            className={`mx-auto max-w-7xl text-center ${
              visibleStories.length ? "mb-8 sm:mb-12 lg:mb-16" : ""
            }`}
          >
            {eyebrow ? (
              <div className="mb-3 text-sm font-medium leading-relaxed text-gray-600 sm:text-base lg:mb-4 lg:text-lg">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <h2 className="text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}

            {description ? (
              <div className="mx-auto mt-4 max-w-5xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {description}
              </div>
            ) : null}
          </div>
        ) : null}

        {visibleStories.length ? (
          <div className={`${storiesCarouselClassName} ${gridClassName}`}>
            {visibleStories.map((story, index) => {
              const hasImage = Boolean(
                typeof story.image === "string" ? story.image : story.image?.src,
              );

              return (
                <div
                  key={`${story.id || story.title || "story"}-${index}`}
                  className={storySlideClassName}
                >
                  <article
                    className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl lg:hover:-translate-y-1 ${story.className || ""}`}
                  >
                    {hasImage ? (
                      <div className="relative h-44 w-full overflow-hidden sm:h-48 lg:h-52">
                        <StoryImage
                          image={story.image}
                          title={story.title}
                          priority={index === 0}
                        />
                        {story.description ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/35 to-black/5 px-4 text-center sm:px-5">
                            <div className="text-sm leading-relaxed text-white sm:text-base lg:text-lg">
                              {story.description}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : story.description ? (
                      <div className="flex min-h-44 items-center justify-center bg-[#0749A7] px-5 py-8 text-center text-sm leading-relaxed text-white sm:min-h-48 sm:text-base lg:min-h-52 lg:text-lg">
                        {story.description}
                      </div>
                    ) : null}

                    {story.title ? (
                      <div className="flex flex-1 items-start bg-white p-5 sm:p-6">
                        <h3 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                          {story.title}
                        </h3>
                      </div>
                    ) : null}
                  </article>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
