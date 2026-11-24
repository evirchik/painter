"use client";
import { Container } from "@/shared/ui/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const About = () => {
  return (
    <section className="pt-10 max-md:pt-5 pb-20 max-md:pb-10" id="about">
      <Container>
        <p className="max-md:text-3xl text-[5vw] uppercase leading-[1.15] box">
          Картинная галерея располагается в императорском дворце и является
          одним из старейших музеев мира.
        </p>

        <div className="mt-10 max-md:mt-5 flex items-end justify-between w-full border-t border-t-black/10 pt-10 max-md:pt-5 max-md:flex-col max-md:items-center max-md:gap-5">
          <p className="max-w-xl max-md:text-xs text-black/50">
            Начало коллекциям галереи было положено в 1864 году. В настоящее
            время это галерея широкого профиля.
          </p>

          <Link
            href={"http://vk.ru"}
            className="relative w-fit group/buy overflow-hidden flex items-center gap-2"
          >
            Посетить гелерею
            <ArrowRight size={16} strokeWidth={1.5} />
            <div className="w-full h-px bg-foreground absolute bottom-0 -left-full group-hover/buy:left-0 duration-500" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
