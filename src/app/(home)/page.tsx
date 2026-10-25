import dynamic from "next/dynamic";
import { Suspense } from "react";

import NewsContainer from "./components/NewsContainer";
import VisiMision from "./components/VisiMision";
import Footer from "@/src/components/shared/Footer";

const Navbar = dynamic(() => import("../../components/shared/Navbar"));
const Hero = dynamic(() => import("./components/Hero"));
const AboutUs = dynamic(() => import("./components/AboutUs"));

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Navbar />
        <NewsContainer />
        <Hero />
        <AboutUs />
        <VisiMision />
        <Footer />
      </Suspense>
    </>
  );
}
