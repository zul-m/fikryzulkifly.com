"use client";
import useScroll from "@/src/archive/hooks/use-scroll";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden"
          >
            <span className="rounded-lg h-7 w-7 bg-zinc-300" />
            <span className="flex text-xl font-bold">Logo</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-center w-8 h-8 text-center rounded-full bg-zinc-300">
            <span className="text-sm font-semibold">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
