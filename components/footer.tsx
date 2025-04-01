"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="mb-4 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Built by{" "}
              <span className="gradient-text font-bold">Daniel Marques</span> —
              © {currentYear}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-5 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex space-x-5 mb-4 md:mb-0 md:mr-8">
              <a
                href="https://github.com/dlmarques"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
                data-cursor-hover
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dlmarques"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                data-cursor-hover
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/dlmarquesdev"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
                data-cursor-hover
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors animated-underline"
                    data-cursor-hover
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors animated-underline"
                    data-cursor-hover
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors animated-underline"
                    data-cursor-hover
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors animated-underline"
                    data-cursor-hover
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
