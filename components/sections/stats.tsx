"use client";

import {useRef} from "react";
import CountUp from "react-countup";
import {motion, useInView} from "motion/react";

import {cn} from "@/lib/utils";
import {statistics} from "@/constants";

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef, {margin: "-20%", once: true});

  return (
    <section
      ref={sectionRef}
      className="bg-primary mt-16 w-full py-10 xl:mt-32">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center gap-12 text-white xl:flex-row xl:gap-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-1 flex-col items-center gap-2 text-center xl:text-left"
              initial={{opacity: 0, y: 20}}
              animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: index * 0.2}}>
              {/* Animated Counter */}
              <div
                className={cn(
                  "flex items-baseline justify-center text-5xl font-bold md:text-6xl lg:text-6xl xl:justify-start"
                )}>
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    delay={0.5}
                    useEasing
                  />
                )}
                <span className="text-4xl md:text-5xl lg:text-6xl">{stat.suffix}</span>
              </div>

              {/* Statistic Label */}
              <p className="max-w-[200px] text-base text-white/80 md:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
