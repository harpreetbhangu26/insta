"use client";
import { Ban, Clapperboard, Home, Search, SquarePlus } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
    icon: Home,
  },
  {
    name: "search",
    href: "/search",
    icon: Search,
  },
  {
    name: "nothing",
    href: "/empty",
    icon: Ban,
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row bg-red-500 p-4 ">
      <div className=" flex flex-row justify-end gap-7 w-full">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.name}>
              <div
                className={`w-20 h-10 rounded-md  flex items-center justify-center ${
                  isActive ? " bg-red-300" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
