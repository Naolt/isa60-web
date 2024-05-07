"use client";
import { IconChevronCompactUp, IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-5 right-5 bg-primary border border-white text-white px-4 py-4 rounded-full cursor-pointer z-50"
        onClick={scrollToTop}
      >
        <IconChevronUp className="text-white" />
      </div>
    )
  );
};

export default BackToTop;
