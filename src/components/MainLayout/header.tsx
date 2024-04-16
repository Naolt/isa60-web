/* eslint-disable @next/next/no-img-element */
"use client";

import { IconMenu, IconMenu2, IconMenuDeep } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-col justify-center lg:flex-row py-3 px-4 lg:px-32  items-center">
      <div className="flex justify-between w-full  items-center lg:hidden">
        <Link href={"/"} className="cursor-pointer">
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-52 h-16 cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <IconMenu2
            onClick={toggleDropdownMenu}
            className="cursor-pointer hover:text-primary"
          />
        </div>
      </div>
      <img
        src="/assets/logo.jpg"
        alt="Logo"
        className="w-52 h-16 hidden lg:block"
      />
      <div className="hidden lg:flex flex-row items-start gap-4 py:0  w-full justify-center ">
        <Nav label="Home" url="/" />
        <Nav label="About us" url="/about" />
        <Nav label="Gallery" url="/gallery" />
        <Nav label="Contact us" url="/contact" />
      </div>
      {isDropdownMenuOpen && (
        <div className="flex flex-col items-center gap-8 py-8 lg:flex-row lg:items-start lg:gap-4 lg:py:0  w-full justify-center ">
          <Nav label="Home" url="/" />
          <Nav label="About us" url="/about" />
          <Nav label="Gallery" url="/gallery" />
          <Nav label="Contact us" url="/contact" />
        </div>
      )}
      <div className="hidden lg:flex gap-2 items-center ">
        <Link href={"contact"}>
          <Button>Contact</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

function Nav({ label, url }: { label: string; url: string }) {
  const currentPage = usePathname();
  const isActive = currentPage === url;

  return (
    <Link
      href={url}
      className={`font-medium ${
        isActive && "text-primary underline underline-offset-4"
      }`}
    >
      {label}
    </Link>
  );
}
