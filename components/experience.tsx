"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "IT People Innovation",
      location: "Lisbon",
      period: "July 2023 — Present",
      responsibilities: [
        {
          title: "Software Catalog Development:",
          points: [
            "Integral to the frontend development of our cutting-edge service catalog, I focus on creating intuitive user interfaces that empower users to seamlessly edit, view, and manage company services, including frontend and backend projects, repositories, and APIs.",
            "Implementing microfrontends architecture to improve scalability and maintainability, integrating multiple apps to complement the catalog (e.g. AI features).",
            "Leveraging React expertise, I collaborate closely with backend teams, ensuring seamless integration of frontend functionalities with backend processes.",
            "While I primarily handle front-end development, my contributions facilitate the automation of repetitive tasks through streamlined processes. For instance, initiating a frontend project triggers an automatic sequence, orchestrated by backend systems, expediting project setup and deployment.",
          ],
        },
        {
          title: "Framework Development:",
          points: [
            "Leading the frontend development efforts for our React framework, I contribute to establishing a robust foundation for standardized project configurations, encompassing authentication, communication protocols, form handling, and more.",
            "By championing best practices in frontend development, I ensure our framework remains adaptable and scalable, supporting the evolving needs of our development teams.",
            "Collaborating closely with cross-functional teams, I contribute to continuous enhancements and refinements to the framework, driving innovation and efficiency across our projects.",
          ],
        },
      ],
      skills: [
        "React",
        "Microfrontends",
        "Framework Development",
        "UI/UX",
        "Cross-functional Collaboration",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Devoteam",
      location: "Lisbon",
      period: "May 2022 — July 2023",
      responsibilities: [
        {
          title: "",
          points: [
            "I rebooted the web application from scratch, led the redevelopment of a web application legacy component in React into Angular, and cooperated very closely with another front-end developer. As part of this role, I had to design and implement reusable components based on Figma designs that would guarantee consistency and a responsive user interface.",
            "Focused on performance and responsiveness, with great emphasis placed on web performance optimization through responsive design, extensive research, and tests for a better user experience across all devices and browsers.",
            "The WebSockets' real-time features suggest that this is an integrated real-time CCTV monitoring in WebSockets, which enables the Application to turn the variable message traffic signs on the highway on and off.",
            "Reviewing of Code and Cross-Browser Compatibility: actively participated in the review of code to ensure high quality of code and provided cross-browser compatibility.",
            "Stakeholder Demos and Collaboration: Regularly presented demos to leadership, featuring new features and improvements, and aligning the efforts of development with business goals.",
            "It managed version control and debugging processes, hence making the development workflow smooth with timely project delivery.",
          ],
        },
      ],
      skills: [
        "React",
        "Angular",
        "WebSockets",
        "Responsive Design",
        "Code Review",
        "Stakeholder Collaboration",
      ],
    },
    {
      title: "Software Engineer",
      company: "Freelancing",
      location: "",
      period: "August 2019 — January 2022",
      responsibilities: [
        {
          title: "",
          points: [
            "Developed full-stack web apps, using MERN stack",
            "PSD's and Figma files to code",
            "Code review",
            "Bug fixing",
            "UX/UI",
            "Web performance and security",
            "Testing and debugging",
            "Implemented multiple architectures",
            "Create and manage databases",
            "CI/CD",
          ],
        },
      ],
      skills: [
        "MERN Stack",
        "Full-stack Development",
        "UX/UI",
        "Web Performance",
        "CI/CD",
        "Database Management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My journey as a frontend engineer, building innovative solutions and
            driving digital transformation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 last:mb-0 reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative pl-0 md:pl-8 before:hidden md:before:block before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/30 dark:before:bg-primary/20">
                <div className="hidden md:flex absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title} at {exp.company}
                      {exp.location && (
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          ({exp.location})
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex}>
                        {resp.title && (
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            {resp.title}
                          </h4>
                        )}
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          {resp.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex">
                              <span className="mr-2 text-primary">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-primary dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
