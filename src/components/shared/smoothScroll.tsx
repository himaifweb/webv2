"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1. Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2, // Durasi inersia scroll (default 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function smooth
      touchMultiplier: 2,
    });

    // 2. Hubungkan Lenis dengan GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Tambahkan ticker GSAP agar animasi frame-rate sinkron sempurna
    const updateGsap = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0); // Matikan lag smoothing agar tidak ada stuttering

    // Cleanup saat unmount
    return () => {
      gsap.ticker.remove(updateGsap);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
