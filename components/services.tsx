"use client";

import { Code, LayoutDashboard, Bug, Webhook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Landing Page Development",
      description:
        "Modern, responsive pages optimized for conversion. Includes clean React + Tailwind code, SEO, and forms.",
      price: "From 150€",
      icon: Code,
      color: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      title: "Admin Dashboard Development",
      description:
        "Custom dashboards with authentication, CRUD operations, and Postgres integration.",
      price: "From 500€",
      icon: LayoutDashboard,
      color: "bg-amber-500/10 dark:bg-amber-500/20",
      iconColor: "text-amber-500 dark:text-amber-400",
    },
    {
      title: "Frontend Bug Fixing",
      description:
        "Fix any React/Next.js bug fast. Same-day delivery for common issues.",
      price: "From 30€",
      icon: Bug,
      color: "bg-red-500/10 dark:bg-red-500/20",
      iconColor: "text-red-500 dark:text-red-400",
    },
    {
      title: "API Integration",
      description:
        "Integrate external APIs or build Express/Postgres endpoints.",
      price: "From 100€",
      icon: Webhook,
      color: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-500 dark:text-green-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
      className="py-16 bg-gray-50 dark:bg-gray-800/50 diagonal-top diagonal-bottom"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Specialized services tailored to your project needs with a focus on
            quality and performance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 stagger-animate"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="h-full flex flex-col group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
                data-cursor-hover
              >
                <CardHeader className="pb-2">
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2">
                  <CardDescription className="text-base dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                  <p className="font-medium text-lg mt-3 dark:text-gray-200">
                    {service.price}
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <a href="#contact">
                    <Button className="w-full relative overflow-hidden group">
                      <span className="relative z-10">Get a Quote</span>
                      <span className="absolute inset-0 bg-white/20 dark:bg-black/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
