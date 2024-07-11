import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen `}>
        <div className="flex h-full ">
          <div className="flex flex-col flex-1 ">
            <div className="flex-1 overflow-auto   ">{children}</div>
            <div className="mb-5">
              <BottomBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
