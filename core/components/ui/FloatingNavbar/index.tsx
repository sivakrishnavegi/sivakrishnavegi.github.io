"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRouter } from "next/navigation"; // Not needed for scrolling, but useful for other nav actions
import { FaWhatsapp } from "react-icons/fa"; // Importing the WhatsApp icon
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  // Smooth scrolling function
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-full max-w-full fixed z-[5000] top-0 left-0 mx-auto px-10 py-4 justify-center items-center space-x-6 bg-transparent backdrop-blur-md",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Subtle bottom border
        }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={idx}
            href={navItem.link}
            onClick={(e) => handleSmoothScroll(e, navItem.link.replace("#", ""))}
            className="relative flex items-center space-x-1 text-white hover:text-gray-300 text-sm dark:text-neutral-50 dark:hover:text-neutral-300"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </a>
        ))}
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+917696562188"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center space-x-1 text-white hover:text-green-400 text-lg"
        >
          <FaWhatsapp />
          <span className="hidden sm:block text-sm">WhatsApp</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
