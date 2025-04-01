"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dlmarques from "../assets/dlmarques.png";
import {
  Atom,
  Database,
  DatabaseZap,
  FileCode2,
  GitBranch,
  Layers,
  Server,
  ServerCog,
  Wind,
} from "lucide-react";

const techs = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "file-type" },
  { name: "Next.js", icon: "server" },
  { name: "Tailwind CSS", icon: "wind" },
  { name: "Node.js", icon: "server" },
  { name: "Express", icon: "server-cog" },
  { name: "PostgreSQL", icon: "database" },
  { name: "GraphQL", icon: "git-branch" },
  { name: "Redux", icon: "layers" },
  { name: "React Query", icon: "database-zap" },
];

function getTechIcon(icon: string) {
  switch (icon) {
    case "react":
      return <Atom />;
    case "file-type":
      return <FileCode2 />;
    case "server":
      return <Server />;
    case "wind":
      return <Wind />;
    case "server-cog":
      return <ServerCog />;
    case "database":
      return <Database />;
    case "git-branch":
      return <GitBranch />;
    case "layers":
      return <Layers />;
    case "database-zap":
      return <DatabaseZap />;
    default:
      return null;
  }
}
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 md:pt-28 lg:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 reveal"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Frontend Engineer specialized in{" "}
              <span className="gradient-text">React, TypeScript</span> &
              scalable web apps.
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build landing pages, admin dashboards, fix React bugs, and
              integrate APIs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden w-full sm:w-auto"
                data-cursor-hover
              >
                <Link href="#contact">
                  <span className="relative z-10">Let's Work Together</span>
                  <span className="absolute inset-0 bg-white/20 dark:bg-black/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <Link href="#projects">
                  <span className="relative z-10 transition-colors duration-300">
                    View Projects
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 md:pl-6 lg:pl-10 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden">
              <div className="absolute inset-0 blob bg-gradient-to-br from-primary/20 via-amber-400/20 to-orange-400/20 dark:from-primary/30 dark:via-amber-400/30 dark:to-orange-400/30 animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={dlmarques}
                  alt="Daniel Marques - Frontend Engineer"
                  width={400}
                  height={400}
                  className="object-contain w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-2xl transform transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <motion.div
              className="absolute -top-10 right-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full hidden md:block"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-0 w-12 h-12 bg-amber-400/20 dark:bg-amber-400/30 rounded-full hidden md:block"
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-16 py-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {techs.map((tech, index) => (
            <div key={index} className="mx-8 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {getTechIcon(tech.icon)}
              </div>
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
          {techs.map((tech, index) => (
            <div
              key={`repeat-${index}`}
              className="mx-8 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {getTechIcon(tech.icon)}
              </div>
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
