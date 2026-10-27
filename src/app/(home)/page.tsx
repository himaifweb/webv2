import dynamic from "next/dynamic";
import { Suspense } from "react";

import NewsContainer from "./components/NewsContainer";
import VisiMision from "./components/VisiMision";
import Footer from "@/src/components/shared/Footer";
import AboutUsv2 from "./components/AboutUs";

const Navbar = dynamic(() => import("../../components/shared/Navbar"));
const Hero = dynamic(() => import("./components/draft/Hero"));
const Herov2 = dynamic(() => import("./components/Hero"));
const AboutUs = dynamic(() => import("./components/draft/AboutUs"));

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Navbar />
        <NewsContainer />
        <Herov2 />
        <AboutUsv2 />
        <Hero />
        <AboutUs />
        <VisiMision />
        <Footer />
      </Suspense>
    </>
  );
}
