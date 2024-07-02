"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-1/4 bg-gray-800 p-4 text-gray-100">
      <h1>Sidebar</h1>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            className={`flex text-lg m-4 ${
              isActive && "bg-gray-300 text-black w-full ml-0 p-3 rounded-md"
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
