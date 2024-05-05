"use client";

import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if the user is scrolling up or down
      if (currentScrollPos < prevScrollPos) {
        // Scrolling up, show the header
        document
          ?.getElementById("header")
          ?.classList.remove("translate-y-[-88px]");
      } else {
        // Scrolling down, hide the header
        if (currentScrollPos > 88)
          document
            ?.getElementById("header")
            ?.classList.add("translate-y-[-88px]");
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="flex flex-col justify-center lg:flex-row py-3 px-4 lg:px-32  items-center fixed top-0 left-0 w-full  z-50 bg-gray-50 transition-all ease-in duration-300"
      id="header"
    >
      <div className="flex justify-between w-full  items-center lg:hidden">
        <Link href={"/"} className="relative w-52 h-16">
          <Image src="/assets/logo.jpg" alt="Logo" fill />
        </Link>
        <div className="flex items-center gap-4">
          <IconMenu2
            onClick={toggleDropdownMenu}
            className="cursor-pointer hover:text-primary"
          />
        </div>
      </div>
      <Link href={"/"} className="relative w-72 h-16 hidden lg:block">
        <Image
          src="/assets/logo.jpg"
          alt="Logo"
          fill
          objectFit="cover"
          className="w-full h-full"
        />
      </Link>
      <div className="hidden lg:flex flex-row items-start gap-4 py:0  w-full justify-center ">
        <Nav label="Home" url="/" />
        <Nav label="About us" url="/about" />
        <Nav label="Our program" url="/program" />
        <Nav label="Gallery" url="/gallery" />
        <Nav label="Contact us" url="/contact" />
      </div>
      {isDropdownMenuOpen && (
        <div className=" flex lg:hidden flex-col items-center gap-8 py-8 lg:flex-row lg:items-start lg:gap-4 lg:py:0  w-full justify-center ">
          <Nav label="Home" url="/" />
          <Nav label="About us" url="/about" />
          <Nav label="Our program" url="/program" />
          <Nav label="Gallery" url="/gallery" />
          <Nav label="Contact us" url="/contact" />
          <Link href={"get_involved"}>
            <Button>Get Involved</Button>
          </Link>
        </div>
      )}
      <div className="hidden lg:flex gap-2 items-center ">
        <Link href={"get_involved"}>
          <Button>Get Involved</Button>
        </Link>
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
      className={`font-medium hover:text-primary transition-colors duration-75 ease-in-out ${
        isActive && "text-primary underline underline-offset-4"
      }`}
    >
      {label}
    </Link>
  );
}
