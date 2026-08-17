"use client";

import { Children, useId, useState } from "react";

export default function LoadMoreCards({
  children,
  initialCount = 12,
  increment = 8,
  buttonLabel = "Load More",
  gridClassName = "",
}) {
  const cards = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const gridId = useId();
  const hasMore = visibleCount < cards.length;

  return (
    <>
      <div id={gridId} className={gridClassName} aria-live="polite">
        {cards.map((card, index) => (
          <div
            key={card.key || index}
            className={index < visibleCount ? "contents" : "hidden"}
          >
            {card}
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            aria-controls={gridId}
            className="rounded-full bg-[#0b63b8] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#084f93] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2 sm:px-9 sm:text-base"
            onClick={() =>
              setVisibleCount((count) => Math.min(count + increment, cards.length))
            }
          >
            {buttonLabel}
          </button>
        </div>
      ) : null}
    </>
  );
}
