"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-4 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-4 text-sm font-medium">
        {links.map((links) => (
          <Link
            key={links.href}
            href={links.href}
            className={classNames({
              "text-zinc-900": links.href === currentPath,
              "text-zinc-500": links.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
