import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
