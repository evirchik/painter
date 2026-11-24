"use client";
import { NAVIGATION_LINKS } from "@/root/constants/navigation-links";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="md:hidden w-8 flex flex-col gap-2"
        onClick={() => setOpen(true)}
      >
        <div className="w-1/3 h-px bg-foreground"></div>
        <div className="w-2/3 h-px bg-foreground"></div>
        <div className="w-full h-px bg-foreground"></div>
      </div>
      {open && (
        <div className="fixed md:hidden top-0 left-0 w-full h-full z-20">
          <div
            className="w-full h-full bg-foreground/50"
            onClick={() => setOpen(false)}
          />
          <div className="p-5 flex justify-between absolute top-0 right-0 h-full w-2/3 bg-background z-20">
            <ul className="flex flex-col gap-2 md:hidden text-foreground">
              {NAVIGATION_LINKS.map(({ name, path }) => (
                <li key={path} onClick={() => setOpen(false)}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
            <XIcon strokeWidth={1} onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
