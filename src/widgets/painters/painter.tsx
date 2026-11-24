import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface IPainterProp {
  name: string;
  path: string;
}

export const Painter: React.FC<IPainterProp> = ({ name, path }) => {
  return (
    <Link
      href={path}
      className="py-5 border-y border-y-foreground w-full flex items-center group/painter relative"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0 group-hover/painter:h-full duration-500 bg-foreground"></div>
      <span className="text-6xl max-md:text-4xl relative z-20 mix-blend-difference text-background">
        {name}
      </span>
      <ArrowUpRight
        size={60}
        strokeWidth={1}
        className="ml-auto relative z-20 mix-blend-difference stroke-background"
      />
    </Link>
  );
};
