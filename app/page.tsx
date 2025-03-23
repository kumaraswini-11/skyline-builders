"use client";

import {useEffect, useState} from "react";

import {Topbar} from "@/components/sections/topbar";
import {Header} from "@/components/sections/header";
import {Hero} from "@/components/sections/hero";
import {About} from "@/components/sections/about";
import {Stats} from "@/components/sections/stats";
import {Services} from "@/components/sections/services";
import {Work} from "@/components/sections/work";
import {Testimonials} from "@/components/sections/testimonials";
import {Faq} from "@/components/sections/faq";
import {Contact} from "@/components/sections/contact";
import {Footer} from "@/components/sections/footer";
import {cn} from "@/lib/utils";

export default function Home() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.addEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <div>
      <Topbar />

      {/* Static Header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* Animated Header */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-transform duration-500",
          headerActive ? "translate-y-0" : "-translate-y-full"
        )}>
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
