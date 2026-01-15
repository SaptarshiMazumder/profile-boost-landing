"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

type ReviewImage = {
  src: string;
  alt: string;
};

export function ReviewCarousel(props: { images: ReviewImage[] }) {
  const images = props.images;
  const [idx, setIdx] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartY, setDragStartY] = useState<number | null>(null);

  const safeIdx = useMemo(() => {
    if (images.length === 0) return 0;
    return ((idx % images.length) + images.length) % images.length;
  }, [idx, images.length]);

  const goPrev = useCallback(() => {
    setIdx((i) => i - 1);
  }, []);

  const goNext = useCallback(() => {
    setIdx((i) => i + 1);
  }, []);

  const current = images[safeIdx];

  if (!current) return null;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only react to primary pointer (finger/mouse). Keep it lightweight.
    if (e.isPrimary === false) return;
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null || dragStartY === null) return;

    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;

    // If the gesture is mostly vertical, treat it as scroll.
    if (Math.abs(dy) > Math.abs(dx)) {
      setDragStartX(null);
      setDragStartY(null);
      return;
    }

    // Horizontal swipe threshold
    const SWIPE_PX = 45;
    if (dx <= -SWIPE_PX) goNext();
    if (dx >= SWIPE_PX) goPrev();

    setDragStartX(null);
    setDragStartY(null);
  };

  const onPointerCancel = () => {
    setDragStartX(null);
    setDragStartY(null);
  };

  return (
    <div>
      <div
        className="relative aspect-4/3 w-full"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 768px) 92vw, 800px"
          className="object-contain"
          priority
        />
      </div>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="hidden items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
          aria-label="Previous review"
        >
          ←
        </button>

        <div
          className="flex flex-1 items-center justify-center gap-2"
          aria-label="Review slides"
        >
          {images.map((_, i) => {
            const active = i === safeIdx;
            return (
              <button
                key={i}
                type="button"
                className={`h-2.5 w-2.5 rounded-full transition ${
                  active
                    ? "bg-pink-600 shadow-[0_0_0_6px_rgba(236,72,153,0.12)]"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${i + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => setIdx(i)}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="hidden items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
          aria-label="Next review"
        >
          →
        </button>
      </div>
    </div>
  );
}

