"use client";

import {RiArrowRightUpLine} from "react-icons/ri";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      className={cn("relative h-[70vh] min-h-[500px]", "bg-hero bg-cover bg-center bg-no-repeat")}>
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-black/50 to-black/70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto flex h-full items-center px-4">
        <div
          className={cn(
            "z-20 mx-auto flex max-w-[608px] flex-col items-center text-center text-white",
            "xl:mx-0 xl:items-start xl:text-left"
          )}>
          <h1 className="h1 mb-4 text-white">
            <span className="text-accent">Building</span> robust, lasting solutions
          </h1>
          <p className="mb-9">
            From initial concept to final completion, we meticulously optimize every detail for
            strength and longevity, crafting solutions that instill confidence and endure over time.
          </p>

          {/* Button */}
          <Button
            variant="outline"
            className={cn(
              "group bg-accent text-primary hover:bg-accent/90",
              "h-[54px] w-[210px] py-[5px] pr-[5px] pl-[10px]",
              "flex items-center justify-between overflow-hidden"
            )}>
            <span className="flex-1 text-sm font-bold tracking-[1.2px] uppercase">
              See our work
            </span>
            <span className="bg-primary group-hover:bg-primary/90 flex size-10 items-center justify-center transition-colors">
              <RiArrowRightUpLine className="text-xl text-white transition-transform group-hover:rotate-45" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
