"use client";

import Image from "next/image";
import Link from "next/link";
import {RiCheckboxCircleFill, RiArrowRightUpLine} from "react-icons/ri";

import {Pretitle} from "../shared/pretitle";
import {cn} from "@/lib/utils";
import {WorkData} from "@/constants";

export const Work = () => {
  return (
    <section
      className="pt-16 xl:pt-32"
      id="Projects"
      aria-labelledby="projects-title">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="mx-auto max-w-[540px] xl:mb-20">
          <Pretitle
            text="Our Work"
            center
          />
          <h2
            id="projects-title"
            className="h2 mb-3">
            Discover Our Projects
          </h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            Providing expert services designed to deliver quality and innovation in every project we
            undertake.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {WorkData.map((project, index) => (
            <div
              key={index}
              className="group relative flex h-[492px] w-full flex-1 justify-center overflow-hidden">
              {/* Image */}
              <Image
                src={project.img}
                fill
                className="object-center"
                alt={`${project.name} project image`}
                quality={100}
              />

              {/* Project Info Box */}
              <div
                className={cn(
                  "bg-primary absolute bottom-4 flex h-[84px] w-[90%] items-center justify-between text-white",
                  "transition-all duration-500 md:translate-y-[108px] md:group-hover:translate-y-0"
                )}
                role="group"
                aria-labelledby={`project-${index}-name`}>
                <div className="pl-8">
                  {/* Project Title */}
                  <h3
                    id={`project-${index}-name`}
                    className="font-dmSans font-semibold tracking-[1px] text-white uppercase">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill aria-hidden="true" />
                    <p>{project.description}</p>
                  </div>
                </div>

                {/* Project Link */}
                <Link
                  href={project.href}
                  className={cn(
                    "bg-accent text-primary absolute right-3 flex h-[44px] w-[44px] items-center justify-center text-2xl xl:w-[60px]"
                  )}
                  aria-label={`Learn more about ${project.name}`}>
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
