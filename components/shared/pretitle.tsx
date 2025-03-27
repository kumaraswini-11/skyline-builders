import {cn} from "@/lib/utils";

interface PretitleProps {
  text: string;
  center?: boolean;
}

export const Pretitle = ({text, center}: PretitleProps) => {
  return (
    <div className={cn("mb-4 flex items-center gap-3", center && "justify-center")}>
      <div className="bg-accent size-2" />
      <span className="font-dmSans tracking-[1.2px] uppercase">{text}</span>
      <div className="bg-accent size-2" />
    </div>
  );
};
