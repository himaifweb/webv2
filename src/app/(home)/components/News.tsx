"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";
import { useNewsCarousel } from "@/src/app/(home)/hooks/useNewsCarousel";
import { PaginationProps } from "@/src/app/(home)/types/news";

export const Pagination: React.FC<PaginationProps> = ({
  activePage,
  onClick,
}) => {
  return (
    <span
      className={cn(
        "w-4 h-4",
        "rounded-full",
        "transition-all cursor-pointer",
        activePage ? "bg-white" : "border border-white hover:bg-white",
      )}
      onClick={onClick}
    />
  );
};

const News: React.FC = () => {
  const { sectionRef, emblaRef, page, progress, data, loading, scrollTo } =
    useNewsCarousel({ delay: 5000 });

  if (loading || !data || data.length === 0) {
    return null;
  }

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
          "bg-linear-to-b from-transparent via-black/80 via-30% to-black backdrop-blur-sm",
        )}
      />

      {/* Content Container */}
      <div
        className={cn(
          "w-full",
          "z-3",
          "flex flex-col",
          "mx-auto px-[5%] lg:px-[10%] py-10",
        )}
      >
        <div className="text-start max-w-250">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2",
              "px-5 py-2 lg:mb-2 mb-4",
              "border border-solid border-white/50 rounded-full",
              "bg-black/20",
              "text-[clamp(8px,1vw,12px)] font-bold text-white tracking-[0.13em] uppercase",
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
              "text-white font-black text-[clamp(30px,3vw,60px)] leading-tight",
              "mb-2",
            )}
          >
            {currentItem?.title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "mb-5",
              "text-[clamp(13px,1.5vw,15px)] text-white/70 font-semibold leading-relaxed",
            )}
          >
            {currentItem?.news?.description}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              if (currentItem?.news?.cta_url) {
                window.location.href = currentItem.news.cta_url;
              }
            }}
            className={cn(
              "w-full px-7 py-3",
              "sm:w-auto",
              "inline-flex items-center justify-center gap-2",
              "text-sm font-semibold text-white",
              "rounded-full border-none cursor-pointer",
              "bg-blue-600",
            )}
          >
            Lihat Detail <ArrowRight size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className={cn("mt-5 w-full flex justify-center")}>
          <div className="relative embla__progress w-50 h-3 border border-white rounded-full overflow-hidden">
            <div
              className={cn("h-full bg-white absolute")}
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
    </section>
  );
};

export default News;
