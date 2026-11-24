import { CONTACT_LINKS } from "@/root/constants/contact-links";
import { NAVIGATION_LINKS } from "@/root/constants/navigation-links";
import { Container } from "@/shared/ui/container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-10 max-md:py-5" id="contacts">
      <Container className="flex justify-between max-md:flex-col gap-10">
        <ul className="flex items-start gap-20 max-md:justify-between">
          <li>
            <span className="font-bold text-2xl">Сайт</span>
            <ol className="mt-5 flex flex-col gap-2 opacity-50">
              {NAVIGATION_LINKS.map(({ name, path }) => (
                <li key={path}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ol>
          </li>
          <li>
            <span className="font-bold text-2xl">Контакты</span>
            <ol className="mt-5 flex flex-col gap-2 opacity-50">
              {CONTACT_LINKS.map(({ name, path }) => (
                <li key={path}>
                  <Link href={path} target="_blank" rel="noopener noreferrer">
                    {name}
                  </Link>
                </li>
              ))}
              <li>г. Москва, ул. Тверская, д. 1</li>
            </ol>
          </li>
        </ul>
        <p className="block max-w-2xl">
          Картинная галерея — пространство искусства, истории и вдохновения.
          Здесь встречаются разные эпохи, художественные направления и взгляды
          на мир. Мы сохраняем культурное наследие, знакомим посетителей с
          произведениями искусства и создаём пространство для новых открытий.
        </p>
      </Container>
    </footer>
  );
};
