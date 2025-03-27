import {RiFacebookFill, RiYoutubeFill, RiTwitterXFill, RiInstagramFill} from "react-icons/ri";
import {PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill} from "react-icons/pi";

import {NavLink, Service, SocialLink, Statistic} from "@/types";

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

export const services: Service[] = [
  {
    name: "Construction",
    icon: PiWallFill,
    title: "Expert Construction Services",
    description:
      "We specialize in high-quality construction, ensuring structural integrity and durability. From custom homes to commercial buildings, we bring innovation and precision to every project.",
    serviceList: [
      "Custom Home Construction",
      "Structural Engineering",
      "Site Preparation & Grading",
      "Concrete & Masonry Work",
      "Framing & Roofing",
      "Interior & Exterior Finishing",
    ],
    images: [
      {url: "/assets/images/services/thumb-1.jpg"},
      {url: "/assets/images/services/thumb-2.jpg"},
    ],
  },
  {
    name: "Renovation",
    icon: PiPaintRollerFill,
    title: "Premium Renovation Services",
    description:
      "Transforming residential and commercial spaces with modern, functional, and high-quality renovations. From kitchen makeovers to full-scale remodeling, we enhance value and aesthetics.",
    serviceList: [
      "Kitchen & Bathroom Remodeling",
      "Basement Finishing",
      "Luxury Flooring Installation",
      "Energy-Efficient Upgrades",
      "Custom Carpentry & Woodwork",
      "Professional Painting Services",
    ],
    images: [
      {url: "/assets/images/services/thumb-3.jpg"},
      {url: "/assets/images/services/thumb-4.jpg"},
    ],
  },
  {
    name: "Restoration",
    icon: PiWrenchFill,
    title: "Reliable Restoration Services",
    description:
      "Restoring properties to their original condition after damage. Our team specializes in fire, water, and mold damage restoration, ensuring safety and structural integrity.",
    serviceList: [
      "Historic Property Restoration",
      "Water Damage Repair",
      "Fire & Smoke Damage Restoration",
      "Structural Repairs",
      "Mold Inspection & Removal",
      "Roof & Exterior Restoration",
    ],
    images: [
      {url: "/assets/images/services/thumb-4.jpg"},
      {url: "/assets/images/services/thumb-5.jpg"},
    ],
  },
  {
    name: "Consulting",
    icon: PiUserGearFill,
    title: "Expert Construction Consulting",
    description:
      "Offering professional guidance in construction management, project planning, budgeting, and compliance to ensure successful and cost-effective projects.",
    serviceList: [
      "Project Planning & Strategy",
      "Budget Estimation & Cost Analysis",
      "Construction Site Management",
      "Permit & Code Compliance",
      "Sustainable Building Solutions",
      "Safety & Risk Management",
    ],
    images: [
      {url: "/assets/images/services/thumb-1.jpg"},
      {url: "/assets/images/services/thumb-3.jpg"},
    ],
  },
] as const;

export const WorkData = [
  {
    img: "/assets/images/work/restoration.jpg",
    name: "Restoration",
    description: "High-quality restoration services ensuring durability and elegance.",
    href: "#",
  },
  {
    img: "/assets/images/work/construction.jpg",
    name: "Construction",
    description: "Expert construction services tailored to your needs.",
    href: "#",
  },
  {
    img: "/assets/images/work/renovation.jpg",
    name: "Renovation",
    description: "Transforming spaces with modern and sustainable solutions.",
    href: "#",
  },
  {
    img: "/assets/images/work/consulting.jpg",
    name: "Consulting",
    description: "Providing professional insights to optimize your projects.",
    href: "#",
  },
] as const;

export const CONTACT_INFO = {
  phone: "+1 (555) 000-0000",
  email: "email@gmail.com",
};
