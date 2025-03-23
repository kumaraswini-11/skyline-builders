import Link from "next/link";

import {SOCIAL_LINKS} from "@/constants";
import {cn} from "@/lib/utils";
import {SocialsProps} from "@/types";
import {Button} from "@/components/ui/button";

export const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
  return (
    <nav className={cn("flex items-center", containerStyles)}>
      {SOCIAL_LINKS.map(social => (
        <Button
          key={social.name}
          variant="link"
          size="icon"
          asChild
          className={cn("text-primary hover:text-primary/80 transition-colors", iconStyles)}>
          <Link
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}>
            <social.icon className="size-5" />
          </Link>
        </Button>
      ))}
    </nav>
  );
};
