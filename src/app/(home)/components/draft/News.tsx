"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "cn";
import { useNewsCarousel } from "@/src/app/(home)/hooks/useNewsCarousel";
import { NewsSectionProps, PaginationProps } from "@/src/app/(home)/types/news";
import { Button } from "@/src/components/ui/button";

export function Pagination({ activePage, onClick }: PaginationProps) {
  return (
    <span
      className={cn(
        "w-4 h-4",
        "rounded-full",
        "transition-all cursor-pointer",
        activePage
          ? "bg-foreground"
          : "border border-foreground hover:bg-foreground",
      )}
      onClick={onClick}
    />
  );
}

export default function News({ data = [] }: NewsSectionProps) {
  // Use the custom hook to manage the carousel state
  const { sectionRef, emblaRef, page, progress, scrollTo } = useNewsCarousel({
    delay: 5000,
  });

  const currentItem = data[page];

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full h-[calc(100vh-65px)] mt-16.25 overflow-hidden",
        "flex items-end justify-start",
        "embla",
      )}
    >
      {/* Background Image Carousel */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-[80%] overflow-hidden",
          "z-0",
          "embla__viewport",
        )}
        ref={emblaRef}
      >
        <div className={cn("flex w-full h-full embla__container")}>
          {data.map((item, i) => (
            <div
              key={i}
              className={cn(
                "w-full h-full flex-none",
                "bg-contain bg-center",
                "embla__slide",
              )}
              style={{
                backgroundImage: `url("${item.thumbnail_url}")`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-[45%]",
          "z-1",
          "bg-linear-to-b from-transparent via-background/80 via-30% to-background backdrop-blur-xl",
        )}
      />

      <div className={cn("absolute z-10 top-120 inset-x-0")}>
        {/* Progress Bar */}
        <div className={cn("mt-5 w-full flex justify-center")}>
          <div className="embla__progress w-50 h-3 border border-foreground rounded-full overflow-hidden">
            <div
              className={cn("h-full bg-foreground")}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          className={cn(
            "mt-3",
            "w-full",
            "inline-flex justify-center gap-2",
            "z-3",
          )}
        >
          {data.map((_, i) => (
            <Pagination
              key={i}
              activePage={page === i}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "w-full",
          "z-3",
          "flex flex-col",
          "mx-auto px-[5%] lg:px-[10%] py-20",
        )}
      >
        <div className="text-start max-w-250">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2",
              "px-5 py-2 lg:mb-2 mb-2",
              "border border-solid border-foreground/50 rounded-full",
              "bg-foreground",
              "text-[clamp(8px,1vw,12px)] font-bold text-background tracking-[0.13em] uppercase",
            )}
          >
            <span
              className={cn(
                "inline-block w-1.5 h-1.5",
                "rounded-full",
                "bg-emerald-400",
              )}
            />
            Berita Terbaru
          </div>

          {/* Title */}
          <h1
            className={cn(
              "text-foreground font-black text-[clamp(30px,3vw,60px)] leading-tight",
            )}
          >
            {currentItem?.title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-[clamp(13px,1.5vw,15px)] text-foreground/70 font-semibold leading-tight",
            )}
          >
            {currentItem?.news?.description}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => {
              if (currentItem?.news?.cta_url) {
                window.location.href = currentItem.news.cta_url;
              }
            }}
            className={cn(
              "w-full px-10 mt-4",
              "sm:w-auto",
              "inline-flex items-center justify-center gap-2",
              "text-sm font-bold text-background",
              "rounded-full border border-background cursor-pointer",
              "bg-primary",
              "hover:bg-foreground",
            )}
          >
            Lihat Detail <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
