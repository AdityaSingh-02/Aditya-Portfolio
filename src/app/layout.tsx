import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Maven_Pro({ subsets: ["latin"], weight:'500' });

export const metadata: Metadata = {
  title: "AdityaSingh-02",
  description: "Aditya Singh02 Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex w-[100%] justify-center md:justify-end fixed backdrop-blur-lg">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
