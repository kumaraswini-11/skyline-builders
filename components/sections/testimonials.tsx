"use client";

import {RiArrowRightUpLine} from "react-icons/ri";

import {cn} from "@/lib/utils";
import {Button} from "../ui/button";
import Image from "next/image";
import {Slider} from "../shared/slider";
import {Pretitle} from "../shared/pretitle";

export const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="conatainer mx-auto">
        <div className="relative flex flex-col xl:flex-row">
          {/* Text */}
          <Pretitle text="Testimonials" />
          <div className="mb-12 max-w-[484px] flex-1 xl:mb-0 xl:pt-[54px]">
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their experiance of working with
              us. see how we`&apos;`have helped them bring their drems to live with expert
              craftmanship.
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
                Work with us
              </span>
              <span className="bg-primary group-hover:bg-primary/90 flex size-10 items-center justify-center transition-colors">
                <RiArrowRightUpLine className="text-xl text-white transition-transform group-hover:rotate-45" />
              </span>
            </Button>
          </div>

          {/* image & slider */}
          <div className="flex flex-1 flex-col xl:flex-row xl:justify-end">
            <div className="xl::w-[570px] xll:h-[580px] relative hidden xl:flex">
              <Image
                src="/assets/images/testimonials/img.jpg"
                fill
                alt=""
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative max-w-max bg-pink-300 xl:absolute xl:right-[160px] xl:bottom-0">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
