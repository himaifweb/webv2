"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "cn"; // Sesuaikan path utils kamu

// Register plugin di LUAR komponen (top-level)
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const textref1 = useRef<HTMLHeadingElement>(null);
  const textref2 = useRef<HTMLHeadingElement>(null);
  const bottomSpace = 5000;

  useGSAP(
    () => {
      // 1. Buat timeline dengan ScrollTrigger terpusat di ref parent
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          end: `bottom+=${bottomSpace}px bottom`, // Jarak scroll (px) selama layar dikunci/di-pin
          pin: true, // Mengunci layar saat animasi berlangsung
          scrub: 1, // Animasi smooth menyusul gerakan scrollbar
        },
      });

      // 2. Jalankan animasi berurutan (Sequencing)
      tl.from(textref1.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }).from(
        textref2.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "+=0.3", // Beri sedikit jeda setelah paragraf pertama selesai
      );
    },
    { scope: ref },
  );

  return (
    <div className={cn("h-full")}>
      <div
        ref={ref}
        id="about-us"
        className={cn(
          "sm:px-30 text-xl sm:text-5xl h-screen w-full flex flex-col justify-center px-10",
        )}
      >
        <h2 ref={textref1} className={cn("font-bold sm:indent-20")}>
          &quot;Wadah resmi bagi mahasiswa Program Studi Informatika untuk
          <span className={cn("ms-3 underline decoration-primary")}>
            mengembangkan potensi diri
          </span>
          ,
          <span className={cn("ms-3 underline decoration-primary")}>
            meningkatkan kemampuan akademis
          </span>
          , dan
          <span className={cn("ms-3 underline decoration-destructive")}>
            menyalurkan aspirasi
          </span>
          ,
          <span className={cn("ms-3 underline decoration-destructive")}>
            bakat
          </span>
          ,
          <span className={cn("ms-3 underline decoration-destructive")}>
            minat
          </span>
          , serta
          <span className={cn("ms-3 underline decoration-destructive")}>
            kreativitas
          </span>
          .&quot;
        </h2>

        <h2 ref={textref2} className={cn("mt-15 font-bold sm:indent-20")}>
          &quot;Kami berkomitmen membentuk mahasiswa yang{" "}
          <span className={cn("underline decoration-primary")}>
            berkompeten
          </span>
          , <span className={cn("underline decoration-primary")}>kreatif</span>,
          dan{" "}
          <span className={cn("underline decoration-destructive")}>
            berintegritas
          </span>
          , menjadi jembatan antara mahasiswa dan civitas akademika UBSI,
          menciptakan lingkungan akademis yang dinamis dan berdampak.&quot;
        </h2>
      </div>
      <div className={cn(`h-[${bottomSpace}px]`)} />
    </div>
  );
}
