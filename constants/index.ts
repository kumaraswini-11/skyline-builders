import {RiFacebookFill, RiYoutubeFill, RiTwitterXFill, RiInstagramFill} from "react-icons/ri";

import {NavLink, SocialLink, Statistic} from "@/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: RiFacebookFill,
    path: "https://facebook.com",
    name: "Facebook",
    ariaLabel: "Visit our Facebook page",
  },
  {
    icon: RiYoutubeFill,
    path: "https://youtube.com",
    name: "YouTube",
    ariaLabel: "Visit our YouTube channel",
  },
  {
    icon: RiTwitterXFill,
    path: "https://twitter.com",
    name: "Twitter",
    ariaLabel: "Visit our Twitter profile",
  },
  {
    icon: RiInstagramFill,
    path: "https://instagram.com",
    name: "Instagram",
    ariaLabel: "Visit our Instagram profile",
  },
] as const;

export const navLinks: NavLink[] = [
  {
    id: "home",
    label: "Home",
    path: "home",
  },
  {
    id: "about",
    label: "About",
    path: "about",
  },
  {
    id: "services",
    label: "Services",
    path: "services",
  },
  {
    id: "projects",
    label: "Projects",
    path: "projects",
  },
  {
    id: "contact",
    label: "Contact",
    path: "contact",
  },
] as const;

export const statistics: Statistic[] = [
  {value: 99, suffix: "%", label: "Client Satisfaction"},
  {value: 800, suffix: "+", label: "Successful Projects"},
  {value: 32, suffix: "k", label: "Happy Clients"},
  {value: 26, suffix: "+", label: "Years of Experience"},
] as const;

export const CONTACT_INFO = {
  phone: "+1 (555) 000-0000",
  email: "email@gmail.com",
};
