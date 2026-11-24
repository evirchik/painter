"use client";
import { NAVIGATION_LINKS } from "@/root/constants/navigation-links";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";


export const Header = () => {
  return (
    <header>
      <Container className="py-5 flex justify-between items-center max-md:flex-row-reverse">
        <ul className="flex gap-10 max-md:hidden">
          {NAVIGATION_LINKS.map(({ name, path }) => (
            <li key={path} className="">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
        <Link href={"tel:+79991481612"}>+7 999 148 16 12</Link>
      </Container>
    </header>
  );
};
