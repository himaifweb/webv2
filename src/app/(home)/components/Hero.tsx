"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('images/Hero.jpg')" }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,15,45,0.88) 0%, rgba(10,30,80,0.72) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-3 text-center px-6 max-w-175 w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full mb-4"
          style={{
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
            className="rounded-full shrink-0"
            style={{
              width: "6px",
              height: "6px",
              background: "#34d399",
              display: "inline-block",
            }}
          />
          Universitas Bina Sarana Informatika
        </div>

        {/* Title */}
        <h1
          className="text-white font-black block"
          style={{
            fontSize: "clamp(64px, 13vw, 130px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: "0.4rem",
          }}
        >
          HIMAIF
        </h1>

        {/* Divider + org name — desktop */}
        <div className="hidden sm:flex items-center justify-center gap-3 mb-5">
          <div
            style={{
              height: "1px",
              width: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <span
            style={{
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
              height: "1px",
              width: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
        </div>

        {/* Org name — mobile only */}
        <p
          className="flex sm:hidden justify-center mb-5"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Himpunan Mahasiswa Informatika · UBSI
        </p>

        {/* Description */}
        <p
          className="mx-auto mb-7"
          style={{
            fontSize: "clamp(13px, 1.6vw, 15px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            maxWidth: "520px",
          }}
        >
          Wadah resmi mahasiswa Informatika UBSI untuk mengembangkan potensi,
          kompetensi akademik, kreativitas, integritas, dan aspirasi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pendaftaran"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white border-none cursor-pointer w-full sm:w-auto"
            style={{
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
            className="rounded-full font-medium cursor-pointer w-full sm:w-auto"
            style={{
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

      {/* Scroll hint */}
      <div
        className="absolute z-3 flex flex-col items-center gap-1.5"
        style={{
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "36px",
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))",
          }}
        />
        <span
          style={{
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
