import "./globals.css";
import Nav from "@/components/nav";
import { Abel } from "next/font/google";
import { Providers } from "./providers";

export const metadata = {
  title: "JAD - Portfolio Site",
  description: "Web developer",
};

const abel = Abel({
  weight: ["400"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${abel.className}`}>
        <Providers>
          <main>
            <Nav />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
