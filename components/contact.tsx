"use client";

import type React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 relative bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let's Build Something Awesome Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Reach out if you have a project in mind or want to collaborate.
          </p>

          <div>
            <motion.div
              className="flex flex-col justify-center items-center bg-primary/5 dark:bg-primary/10 p-5 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-5 sm:mb-6 animate-float">
                <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 sm:mb-4 dark:text-white">
                Email Me Directly
              </h3>
              <a
                href="mailto:daniel.marquesedigital@gmail.com"
                className="text-primary hover:text-primary/80 font-medium text-lg hover:underline transition-colors"
                data-cursor-hover
              >
                daniel.marquesedigital@gmail.com
              </a>
              <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-300 text-center">
                I typically respond within 24 hours during weekdays.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
