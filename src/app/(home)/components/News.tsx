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
        "w-full h-[calc(100vh-65px)] mt-16.25 overflow-hidden",
        "flex flex-col justify-start",
        "embla",
      )}
    >
      <div className={cn("relative")}>
        {/* Background Image Carousel */}
        <div
          className={cn(
            "relative w-full h-120 overflow-hidden",
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
                  // backgroundImage: `url("${item.thumbnail_url}")`,
                  backgroundImage: `url("${item.thumbnail_url}")`,
                }}
              />
            ))}
          </div>
          {/* Dark Overlay */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 h-[10%]",
              "z-0",
              "bg-linear-to-b from-transparent via-background via-100% to-background",
            )}
          />
        </div>
        {/* PROGRESS & PAGINATION */}
        <div
          className={cn(
            "absolute -bottom-20 w-full flex justify-center pb-5 z-2",
          )}
        >
          <div className={cn("w-fit px-3 rounded-full")}>
            {/* Progress Bar */}
            <div className={cn("mt-5 w-full flex justify-center")}>
              <div className="relative embla__progress w-50 h-3 border border-foreground rounded-full overflow-hidden">
                <div
                  className={cn("h-full bg-foreground absolute")}
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
        </div>
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "mt-10",
          "w-full",
          "flex flex-col justify-center",
          "mx-auto px-[5%] lg:px-[10%] py-10",
          "z-2",
        )}
      >
        <div className="text-center mx-auto max-w-400">
          {/* Title */}
          <h1
            className={cn(
              "text-foreground font-black text-[clamp(30px,3vw,100px)] leading-tight",
              "mb-2",
            )}
          >
            {currentItem?.title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "mb-5",
              "text-[clamp(13px,1.5vw,17px)] text-foreground/70 font-semibold text-balance",
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
              "w-full px-20 mt-4",
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
