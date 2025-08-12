import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-4 border-b mb-5 px-5 h-10 items-center ">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-4 text-sm font-medium">
        {links.map((links) => (
          <Link
            key={links.href}
            href={links.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
