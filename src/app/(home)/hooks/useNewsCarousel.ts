import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { supabase } from "@/src/lib/supabase";
import { ActivityNewsItem } from "@/src/app/(home)/types/news";

interface UseNewsCarouselOptions {
  delay?: number;
}

export const useNewsCarousel = ({
  delay = 5000,
}: UseNewsCarouselOptions = {}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [page, setPage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [data, setData] = useState<ActivityNewsItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPage(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const getData = useCallback(async () => {
    setLoading(true);
    const { data: fetchResult, error } = await supabase
      .from("activities")
      .select(
        `
        title,
        description,
        thumbnail_url,
        location_type,
        location_detail,
        registration_link,
        news (
          description,
          cta_url
        )
      `,
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error) {
      setData([]);
    } else {
      setData((fetchResult as unknown as ActivityNewsItem[]) || []);
    }
    setLoading(false);
  }, []);

  // Intersection Observer untuk Lazy Fetching
  useEffect(() => {
    // const section = sectionRef.current;
    // if (!section || !("IntersectionObserver" in window)) {
    //   getData();
    //   return;
    // }
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     if (entries.some((entry) => entry.isIntersecting)) {
    //       getData();
    //       observer.disconnect();
    //     }
    //   },
    //   { rootMargin: "600px 0px" },
    // );
    // observer.observe(section);
    // return () => observer.disconnect();

    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, [getData]);

  // Sync Embla events & Progress bar calculation
  useEffect(() => {
    if (!emblaApi) return;

    // Menghindari cascading render dengan mendaftarkan handler event terlebih dahulu
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Sync initial state secara asinkron agar tidak memicu eksekusi setState langsung saat render phase effect
    const initFrame = requestAnimationFrame(() => {
      onSelect();
    });

    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) {
      return () => {
        cancelAnimationFrame(initFrame);
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    }

    let animationFrameId: number;

    const updateProgress = () => {
      const timeUntilNext = autoplay.timeUntilNext();
      if (timeUntilNext !== null) {
        const percentage = Math.max(
          0,
          Math.min(100, ((delay - timeUntilNext) / delay) * 100),
        );
        setProgress(percentage);
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(initFrame);
      cancelAnimationFrame(animationFrameId);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
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

  return {
    sectionRef,
    emblaRef,
    page,
    progress,
    data,
    loading,
    scrollTo,
  };
};
