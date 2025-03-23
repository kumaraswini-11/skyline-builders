"use client";

import {useState} from "react";
import {Link as ScrollLink} from "react-scroll";
import {RiMenu3Fill} from "react-icons/ri";

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Logo} from "@/components/shared/logo";
import {cn} from "@/lib/utils";
import {Socials} from "@/components/shared/socials";
import {navLinks} from "@/constants";
import {NavLink} from "@/types";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}>
      <SheetTrigger
        asChild
        className="flex cursor-pointer items-center justify-center text-3xl text-white"
        onClick={() => setIsOpen(true)}>
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent
        className="bg-primary w-[min(320px,80vw)] border-none text-white"
        side="right">
        <div className="flex h-full flex-col items-center pt-8 pb-12">
          <SheetHeader className="mb-12">
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <p className="sr-only">Mobile Navigation Menu</p>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link: NavLink) => (
                <li
                  key={link.id}
                  className="text-sm font-medium tracking-[1.2px] text-white uppercase">
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    // offset={-64} // Offset for fixed header
                    className={cn("cursor-pointer transition-colors hover:text-white/80")}
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <footer className="mt-8">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="text-white text-xl hover:text-white/80 transition-colors"
            />
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
};
