"use client";

import Link from "next/link";
import {RiPhoneFill, RiMailFill} from "react-icons/ri";

import {Button} from "@/components/ui/button";
import {Socials} from "@/components/shared/socials";
import {CONTACT_INFO} from "@/constants";

const ContactItem = ({
  icon: Icon,
  text,
  type,
}: {
  icon: React.ComponentType;
  text: string;
  type: "phone" | "email";
}) => (
  <div className="flex items-center gap-3">
    <Button
      variant="ghost"
      size="icon"
      className="bg-primary text-primary-foreground hover:bg-primary/90 size-8">
      <Icon />
    </Button>
    <p className="text-primary text-sm font-medium">
      {type === "phone" ? (
        <Link
          href={`tel:${text}`}
          className="hover:underline">
          {text}
        </Link>
      ) : (
        <Link
          href={`mailto:${text}`}
          className="hover:underline">
          {text}
        </Link>
      )}
    </p>
  </div>
);

export const Topbar = () => {
  return (
    <section
      className="flex min-h-[60px] w-full items-center justify-center bg-gradient-to-t from-[#ffc221] to-[#ffd76e] py-4 xl:min-h-16 xl:py-0"
      id="home">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="hidden items-center gap-6 xl:flex">
            <ContactItem
              icon={RiPhoneFill}
              text={CONTACT_INFO.phone}
              type="phone"
            />
            <ContactItem
              icon={RiMailFill}
              text={CONTACT_INFO.email}
              type="email"
            />
          </div>
          <Socials
            containerStyles="gap-2 mx-auto xl:m-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};
