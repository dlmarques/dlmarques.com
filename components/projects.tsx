"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const sectionRef = useRef(null);

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            Showcasing my best work and technical expertise.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                data-cursor-hover
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl sm:text-2xl dark:text-white line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="py-2 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.techs.map((tech, techIndex) => (
                          <Badge
                            key={`${project.id}-tech-${techIndex}`}
                            variant="secondary"
                            className="hover:bg-primary hover:text-white transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-3 pt-2">
                      {project.links.map((link, linkIndex) =>
                        linkIndex === 0 ? (
                          <Button
                            key={`${project.id}-link-${linkIndex}`}
                            asChild
                            className="relative overflow-hidden group flex-1 min-w-[120px]"
                          >
                            <Link href={link.url} target="_blank">
                              <span className="relative z-10">
                                {link.title}
                              </span>
                              <span className="absolute inset-0 bg-white/20 dark:bg-black/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            key={`${project.id}-link-${linkIndex}`}
                            asChild
                            variant="outline"
                            className="group flex-1 min-w-[120px]"
                          >
                            <Link href={link.url} target="_blank">
                              <span className="relative z-10 transition-colors duration-300">
                                {link.title}
                              </span>
                              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                          </Button>
                        )
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
