import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../root/styles/globals.css";

import TransitionProvider from "@/features/transition-provider/transition-provider";
import ReactLenis from "lenis/react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Картинная галерея",
  description: "Картинная галерея города калининград",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ReactLenis
          root
          options={{
            lerp: 0.3,
            duration: 2,
            smoothWheel: true,
          }}
        >
        <TransitionProvider>{children}</TransitionProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
