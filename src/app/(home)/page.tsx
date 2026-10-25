"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});

const News = dynamic(() => import("./components/News"), {
  ssr: false,
});

const Navbar = dynamic(() => import("../../components/shared/Navbar"), {
  ssr: false,
});

const AboutUs = dynamic(() => import("./components/AboutUs"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <News />
      <Hero />
      <AboutUs />
    </>
  );
}
