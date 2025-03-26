"use client";

import React from "react";
import {Link as ScrollLink} from "react-scroll";
import {RiArrowRightUpLine} from "react-icons/ri";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {navLinks} from "@/constants";
import {NavLink} from "@/types";
import {NavMobile} from "@/components/nav-mobile";
import {Logo} from "@/components/shared/logo";

export const Header: React.FC = () => {
  return (
    <header
      className={cn(
        "bg-primary"
        //  "sticky top-0 z-50"
      )}>
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex w-full items-center justify-between">
          <Logo />

          {/* Desktop Navbar */}
          <nav className="hidden items-center gap-8 xl:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link: NavLink) => (
                <li
                  key={link.id}
                  className="after:mx-0.5 after:content-['/'] last:after:content-none">
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    offset={-64} // Offset for fixed header
                    className={cn(
                      "cursor-pointer text-sm font-medium tracking-[1.2px] text-white uppercase",
                      "hover:text-primary-foreground/80 transition-colors"
                    )}
                    activeClass="text-accent">
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              variant="outline"
              className={cn(
                "group text-primary bg-white hover:bg-white/90",
                "h-[54px] w-[210px] py-[5px] pr-[5px] pl-[10px]"
              )}>
              <span className="flex-1 text-sm font-bold tracking-[1.2px] uppercase">
                Get a quote
              </span>
              <span className="bg-primary group-hover:bg-primary/90 ml-2 flex size-10 items-center justify-center rounded-sm transition-colors">
                <RiArrowRightUpLine className="text-xl text-white transition-transform group-hover:rotate-45" />
              </span>
            </Button>
          </nav>

          {/* Mobile Navbar Placeholder */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};
