"use client";

import {useState} from "react";
import Image from "next/image";
import {RiArrowRightUpLine} from "react-icons/ri";

import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {cn} from "@/lib/utils";
import {Pretitle} from "../shared/pretitle";
import {Button} from "../ui/button";
import {services} from "@/constants";

export const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0]?.name);

  return (
    <section
      id="services"
      className="py-16 xl:pt-32">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-[540px] text-center">
          <Pretitle
            text="Our Services"
            center
          />
          <h2 className="h2 mb-3">Our Construction Solutions</h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            From planning to execution, we deliver <strong>tailored construction solutions</strong>{" "}
            with a focus on quality, efficiency, and sustainability.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs
          defaultValue={services[0]?.name}
          onValueChange={setActiveTab}
          className="flex w-full flex-col gap-[30px] xl:flex-row">
          {/* Sidebar Tabs List */}
          <TabsList className="grid h-full w-full grid-cols-1 gap-[30px] rounded-none bg-transparent p-0 md:grid-cols-2 xl:w-[345px] xl:grid-cols-1">
            {services.map(service => (
              <TabsTrigger
                key={service.name}
                value={service.name}
                className={cn(
                  "shadow-custom relative flex h-[100px] w-full items-center rounded-none p-0 outline-none"
                )}>
                <div
                  className={cn(
                    "absolute left-0 flex h-[100px] w-[100px] items-center justify-center",
                    activeTab === service.name ? "bg-primary text-white" : "bg-accent text-primary"
                  )}>
                  <service.icon className="text-4xl" />
                </div>
                <div className="font-dmSans ml-16 w-[100px] text-base font-semibold tracking-[0.6px] uppercase">
                  {service.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content Area */}
          <div className="shadow-custom h-[490px] flex-1 bg-white p-[30px]">
            {services.map(service => (
              <TabsContent
                key={service.name}
                value={service.name}
                className="m-0">
                <div className="flex flex-col gap-[30px] md:flex-row">
                  {/* Images Section */}
                  <div className="flex gap-5 md:flex-col xl:gap-[30px]">
                    {service.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-[140px] w-[140px] xl:h-[200px] xl:w-[200px]">
                        <Image
                          src={image.url}
                          fill
                          alt={`${service.name} example ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="h3 mb-6">{service.title}</h3>
                    <p className="mb-10">{service.description}</p>
                    <ul className="mb-12 grid grid-cols-2 gap-4">
                      {service.serviceList.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4">
                          <div className="bg-accent size-1.5" />
                          <span className="text-primary font-medium capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Button */}
                    <Button
                      variant="outline"
                      className={cn(
                        "group bg-accent text-primary hover:bg-accent/90",
                        "h-[54px] w-[210px] py-[5px] pr-[5px] pl-[10px]",
                        "flex items-center justify-between overflow-hidden"
                      )}>
                      <span className="flex-1 text-sm font-bold tracking-[1.2px] uppercase">
                        Read more
                      </span>
                      <span className="bg-primary group-hover:bg-primary/90 flex size-10 items-center justify-center transition-colors">
                        <RiArrowRightUpLine className="text-xl text-white transition-transform group-hover:rotate-45" />
                      </span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
