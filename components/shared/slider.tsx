"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <Swiper
      className="shadow-custom h-[200px] w-full max-w-[630px] bg-white"
      // spaceBetween={30}
      // slidesPerView={1}
      // navigation
    >
      <SwiperSlide>
        <div className="flex h-full items-center gap-9 px-12 md:pl-[60px]">
          {/* Avatar Image */}
          <div className="relative hidden h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/images/testimonials/avatar.jpg"
              fill
              className="rounded-full object-cover"
              alt="Jane Doe testimonial avatar"
              quality={100}
            />
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p className="text-muted-foreground text-base">
              Exceeded expectations. On time, within budget, and top-quality work. Highly recommend!
            </p>
            <p className="text-primary font-semibold">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
