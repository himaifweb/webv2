"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";

const Hero = () => {
  return (
    /* Classes: section layout and positioning */
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden flex items-center justify-center",
      )}
    >
      {/* Background: image layer */}
      <div
        className={cn("absolute inset-0 bg-cover bg-center bg-fixed z-0")}
        style={{
          // Style category: background image
          backgroundImage: "url('images/Hero.jpg')",
        }}
      />

      {/* Background: overlay layer */}
      <div
        className={cn("absolute inset-0 z-1")}
        style={{
          // Style category: overlay gradient
          background:
            "linear-gradient(135deg, rgba(5,15,45,0.88) 0%, rgba(10,30,80,0.72) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Classes: content layout and typography */}
      <div className={cn("relative z-3 text-center px-6 max-w-175 w-full")}>
        {/* Badge: classes for inline layout and spacing; styles for appearance and typography */}
        <div
          className={cn("inline-flex items-center gap-2 rounded-full mb-4")}
          style={{
            // Style category: badge appearance and typography
            background: "rgba(255,255,255,0.07)",
            border: "0.5px solid rgba(255,255,255,0.18)",
            padding: "6px 18px",
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
          }}
        >
          <span
            className={cn("rounded-full shrink-0")}
            style={{
              // Style category: badge indicator
              width: "6px",
              height: "6px",
              background: "#34d399",
              display: "inline-block",
            }}
          />
          Universitas Bina Sarana Informatika
        </div>

        {/* Title: classes for text color and weight; styles for responsive typography */}
        <h1
          className={cn("text-white font-black block")}
          style={{
            // Style category: title typography and spacing
            fontSize: "clamp(64px, 13vw, 130px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: "0.4rem",
          }}
        >
          HIMAIF
        </h1>

        {/* Classes: desktop layout and spacing */}
        <div
          className={cn(
            "hidden sm:flex items-center justify-center gap-3 mb-5",
          )}
        >
          <div
            style={{
              // Style category: divider
              height: "1px",
              width: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <span
            style={{
              // Style category: organization-name typography
              fontSize: "11px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Himpunan Mahasiswa Informatika · UBSI
          </span>
          <div
            style={{
              // Style category: divider
              height: "1px",
              width: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
        </div>

        {/* Classes: mobile layout and spacing; styles: organization-name typography */}
        <p
          className={cn("flex sm:hidden justify-center mb-5")}
          style={{
            // Style category: organization-name typography
            fontSize: "11px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Himpunan Mahasiswa Informatika · UBSI
        </p>

        {/* Classes: description spacing; styles: description typography and width */}
        <p
          className={cn("mx-auto mb-7")}
          style={{
            // Style category: description typography and width
            fontSize: "clamp(13px, 1.6vw, 15px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            maxWidth: "520px",
          }}
        >
          Wadah resmi mahasiswa Informatika UBSI untuk mengembangkan potensi,
          kompetensi akademik, kreativitas, integritas, dan aspirasi.
        </p>

        {/* Classes: CTA layout and responsive direction */}
        <div className={cn("flex flex-col sm:flex-row gap-3 justify-center")}>
          <Link
            href="/pendaftaran"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white border-none cursor-pointer w-full sm:w-auto",
            )}
            style={{
              // Style category: primary button appearance
              background: "#2563eb",
              padding: "13px 28px",
              fontSize: "14px",
            }}
          >
            Gabung HIMAIF <ArrowRight size={16} />
          </Link>

          <button
            onClick={() => {
              const element = document.getElementById("tentangkami");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "rounded-full font-medium cursor-pointer w-full sm:w-auto",
            )}
            style={{
              // Style category: secondary button appearance
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.8)",
              border: "0.5px solid rgba(255,255,255,0.2)",
              padding: "13px 28px",
              fontSize: "14px",
            }}
          >
            Tentang Kami
          </button>
        </div>
      </div>

      {/* Classes: scroll hint positioning and layout */}
      <div
        className={cn("absolute z-3 flex flex-col items-center gap-1.5")}
        style={{
          // Style category: scroll hint positioning
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            // Style category: scroll indicator
            width: "1px",
            height: "36px",
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))",
          }}
        />
        <span
          style={{
            // Style category: scroll label typography
            fontSize: "10px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.28)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
