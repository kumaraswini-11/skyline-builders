"use client";

import Image from "next/image";
import {RiArrowRightUpLine} from "react-icons/ri";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Pretitle} from "../shared/pretitle";

export const About = () => {
  return (
    <section
      className="pt-16 xl:pt-32"
      id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-16">
          {/* Text */}
          <div className="flex-1">
            <div className="mx-auto max-w-2xl xl:mx-0">
              <Pretitle text="About us" />
              <h2
                className={cn(
                  "h2 mb-6"
                  // "tracking-tight"
                )}>
                Focused on Excellence In Every Project
              </h2>
              <p className="text-muted-foreground mb-11 text-base leading-relaxed md:text-lg">
                Our unwavering commitment to excellence drives every project we undertake. From
                concept to completion, we meticulously craft solutions that embody quality,
                precision, and innovation.
              </p>
              <div className="mb-10 flex flex-col items-start gap-2 xl:items-end">
                <Image
                  src="/assets/images/about/signature.svg"
                  width={154}
                  height={38}
                  alt="Signature of Company CEO"
                  className="object-contain"
                />
                <p className="text-muted-foreground text-sm">Company CEO</p>
              </div>
              {/* Button */}
              <Button
                variant="outline"
                className={cn(
                  "group bg-accent text-primary hover:bg-accent/90",
                  "h-[54px] w-[210px] py-[5px] pr-[5px] pl-[10px]",
                  "flex items-center justify-between overflow-hidden"
                )}>
                <span className="flex-1 text-sm font-bold tracking-[1.2px] uppercase">
                  Contact us
                </span>
                <span className="bg-primary group-hover:bg-primary/90 flex size-10 items-center justify-center transition-colors">
                  <RiArrowRightUpLine className="text-xl text-white transition-transform group-hover:rotate-45" />
                </span>
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-1 justify-center xl:justify-end">
            <div className="relative aspect-[444/492] w-full max-w-[444px]">
              <div className="bg-accent absolute -top-4 -left-4 -z-10 hidden h-full w-full rounded-md xl:block" />
              <Image
                src="/assets/images/about/img.jpg"
                fill
                alt="Team working on a project"
                className="rounded-md object-cover"
                sizes="(max-width: 1280px) 100vw, 544px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
