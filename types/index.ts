import {IconType} from "react-icons/lib";

export interface SocialLink {
  icon: IconType;
  path: string;
  name: string;
  ariaLabel: string;
}

export interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export interface NavLink {
  id: string;
  label: string;
  path: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}
