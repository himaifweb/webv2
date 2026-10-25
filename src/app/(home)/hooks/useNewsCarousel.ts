import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { UseNewsCarouselOptions } from "../types/news";

export const useNewsCarousel = ({
  delay = 5000,
}: UseNewsCarouselOptions = {}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [page, setPage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (emblaApi) setPage(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Listen event perubahan slide Embla
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    queueMicrotask(() => {
      onSelect();
    });

    const autoplay = emblaApi.plugins().autoplay;
    let frameId: number;

    if (autoplay) {
      const updateProgress = () => {
        const remaining = autoplay.timeUntilNext();
        if (remaining !== null) {
          const pct = ((delay - remaining) / delay) * 100;
          setProgress(Math.min(100, Math.max(0, pct)));
        }
        frameId = requestAnimationFrame(updateProgress);
      };

      frameId = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, delay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      emblaApi.plugins().autoplay?.reset();
    },
    [emblaApi],
  );

  return { sectionRef, emblaRef, page, progress, scrollTo };
};
