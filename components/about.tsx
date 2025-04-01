"use client";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12 reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 reveal text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a software developer with 5+ years of experience building
            production-grade apps using React, TypeScript, and Node.js. I've
            worked in banking, fintech, traffic management, and startups, and I
            focus on clean code, performance, and clear communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 stagger-animate">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-base py-1 px-3 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 dark:text-gray-200 dark:border-gray-600"
                  data-cursor-hover
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
