import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav
      className="flex space-x-6 border-b mb-6 px-5 h-14 items-center"
      style={{ marginBottom: "10px" }}
    >
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6 list-none">
        {links.map((links) => (
          <Link
            style={{ marginRight: "25px" }}
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
