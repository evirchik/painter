"use client";
import { usePageTransition } from "@/features/transition-provider/transition-provider";
import { EX_LINKS } from "@/root/constants/ex-links";
import { Container } from "@/shared/ui/container";

export const Exhibitions = () => {
  const { navigateTo } = usePageTransition();
  return (
    <section id="exhibitions">
      <Container>
        <h2 className="text-[10vw] font-bold mx-[-0.05em] pb-10 max-md:pb-5 leading-none">
          Выставки
        </h2>
      </Container>

      {EX_LINKS.map(({ image, name, path }) => (
        <div
          key={name}
          onClick={(e) => {
            e.preventDefault();
            navigateTo(path);
          }}
          className="relative h-dvh overflow-hidden [clip-path:inset(0)] flex justify-center items-center"
        >
          <div
            className="fixed inset-0 w-full h-dvh bg-cover bg-center scale-[1.02]"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
          <span className="text-4xl text-white font-bold relative z-20 uppercase">
            {name}
          </span>
        </div>
      ))}
    </section>
  );
};
