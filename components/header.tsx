"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function MobileMenu({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.nav
      className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-6 px-6 shadow-md fixed left-0 right-0 top-[60px] z-40"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col space-y-5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors text-lg py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Button
          asChild
          className="mt-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Link href="#contact">Let's Work Together</Link>
        </Button>
      </div>
    </motion.nav>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="#home"
          className="text-xl font-bold relative overflow-hidden group"
          data-cursor-hover
        >
          <span className="gradient-text">Daniel Marques</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>

        <motion.nav
          className="hidden md:flex items-center space-x-6"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors animated-underline"
                data-cursor-hover
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              className="relative overflow-hidden group"
              data-cursor-hover
            >
              <Link href="#contact">
                <span className="relative z-10">Let's Work Together</span>
                <span className="absolute inset-0 bg-white/20 dark:bg-black/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-cursor-hover
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </motion.header>
  );
}
