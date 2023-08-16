import "./globals.css";
import Navbar from "@/components/Navbar";
import { Abel } from "next/font/google";

export const metadata = {
  title: "JAD - My Portfolio Site",
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
      <body className={`bg-white text-[#0f0f0f] ", $ abel.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
