import { Container } from "@/shared/ui/container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Painter } from "./painter";
import { PAINTERS } from "@/root/constants/painters";

export const Painters = () => {
  return (
    <section>
      <Container className="pt-10 max-md:pt-5 pb-20 max-md:pb-10">
        <h2 className="text-[10vw] font-bold mx-[-0.05em] pb-10 max-md:pb-5 leading-none block text-center">
          Наши художники
        </h2>
        <div className="flex flex-col gap-10">
          {PAINTERS.map(({ name, path }, index) => (
            <Painter path={path} name={name} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
