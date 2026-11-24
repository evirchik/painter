"use client";
import { Container } from "@/shared/ui/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { publicAsset } from "@/root/constants/assets";

export const Hero = () => {
  return (
    <section>
      <Container>
        <h1 className="uppercase font-bold block w-full my-10 text-justify [text-align-last:justify] text-[10vw] leading-none mx-[-0.05em] max-md:my-5">
          Картинная галерея
        </h1>
        <Link
          href={"http://vk.ru"}
          className="relative w-fit group/buy overflow-hidden flex items-center gap-2 cursor-pointer"
        >
          Купить билет
          <ArrowRight size={16} strokeWidth={1.5} />
          <div className="w-full h-px bg-foreground absolute bottom-0 -left-full group-hover/buy:left-0 duration-500" />
        </Link>
        <div
          className="w-full h-[80vh] bg-foreground/10 mt-10 max-md:mt-5 bg-center bg-cover"
          style={{
            backgroundImage: `url('${publicAsset("/image/hero.png")}')`,
          }}
        ></div>
      </Container>
    </section>
  );
};
