import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Api",
  description: "YouTube videos without ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1905574218549333"
        ></meta>
        ;
      </Head>
      <body className={`${inter.className} h-screen `}>
        <div className="flex flex-col h-full">
          <div className=" sticky">
            <Navbar />
          </div>

          <div className="flex-1 overflow-auto   ">{children}</div>
        </div>
      </body>
    </html>
  );
}
