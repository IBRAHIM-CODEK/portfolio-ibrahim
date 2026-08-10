"use client";

import React, { useState } from "react";
import { Header, EditorialSection } from "@/components/Shared";

const ProjectAccordion = ({
  title,
  category,
  description,
  tech,
  link,
}: {
  title: string;
  category: string;
  description: React.ReactNode;
  tech: string;
  link: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#1C1C1A]/20 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-10 lg:py-16 focus-ring outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h3 className="text-[32px] md:text-[4.5vw] leading-[1] tracking-ultra-tight font-medium transition-all duration-300 flex items-center gap-4 lg:gap-8">
            {title}
            <svg
              className={`w-8 h-8 md:w-12 md:h-12 transition-all duration-300 ${isOpen ? "rotate-180 opacity-100" : "opacity-20 group-hover:opacity-100 group-hover:translate-y-1"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </h3>
          <span className="text-[14px] uppercase tracking-wide opacity-60 font-medium">
            {category}
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-10 lg:pb-16" : "max-h-0 opacity-0 pb-0"}`}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1">
            <div className="text-[18px] leading-[1.5] tracking-tight max-w-[650px] mb-6">
              {description}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] uppercase tracking-wide font-bold hover:opacity-60 transition-opacity border-b-2 border-[#1C1C1A] pb-1 focus-ring"
            >
              View Repository
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="md:w-1/3">
            <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-2">
              Tech Stack
            </span>
            <span className="text-[16px] font-medium leading-[1.6]">
              {tech}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col w-full pt-24">
        {/* HERO */}
        <section className="w-full max-w-[1400px] mx-auto px-6 py-20 lg:py-32 flex items-center min-h-[70vh]">
          <h1 className="text-[8vw] md:text-[5vw] leading-[1.1] tracking-ultra-tight font-medium max-w-[90%]">
            Hi, I'm Ibrahim Muhammad. I build{" "}
            <span className="inline-flex items-center justify-center align-middle mx-2 md:mx-4 w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] bg-[#1C1C1A] text-[#F4F4F2] rounded-full">
              <svg
                className="w-1/2 h-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </span>{" "}
            robust web platforms & full-stack experiences that look{" "}
            <span className="inline-flex items-center justify-center align-middle mx-2 md:mx-4 w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] bg-[#1C1C1A] text-[#F4F4F2] rounded-full">
              <svg
                className="w-1/2 h-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>{" "}
            sharp and run fast.
          </h1>
        </section>

        {/* SKILLS */}
        <EditorialSection id="skills" title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            <div>
              <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-4 border-b border-[#1C1C1A]/20 pb-2">
                Frontend
              </span>
              <ul className="flex flex-col gap-2 text-[16px] font-medium">
                <li>React.js</li>
                <li>Next.js</li>
                <li>HTML / CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-4 border-b border-[#1C1C1A]/20 pb-2">
                Backend
              </span>
              <ul className="flex flex-col gap-2 text-[16px] font-medium">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Next.js API Routes</li>
                <li>REST API Design</li>
                <li>Websocket</li>
              </ul>
            </div>
            <div>
              <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-4 border-b border-[#1C1C1A]/20 pb-2">
                Database & ORM
              </span>
              <ul className="flex flex-col gap-2 text-[16px] font-medium">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
            <div>
              <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-4 border-b border-[#1C1C1A]/20 pb-2">
                Languages
              </span>
              <ul className="flex flex-col gap-2 text-[16px] font-medium">
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <span className="block text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 mb-4 border-b border-[#1C1C1A]/20 pb-2">
                Tools & Other
              </span>
              <ul className="flex flex-col gap-2 text-[16px] font-medium">
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </EditorialSection>

        {/* PROJECTS */}
        <EditorialSection id="projects" title="Projects">
          <div className="flex flex-col border-t border-[#1C1C1A]/20 mt-8">
            <ProjectAccordion
              title="Planora"
              category="Full-stack / Next.js"
              description={
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-[18px]">
                    An AI-powered project management platform featuring
                    role-based access control (RBAC) and dynamic workload
                    tracking.
                  </span>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-[16px] opacity-90">
                    <li>
                      Architected full-stack workflows using Next.js,
                      PostgreSQL, and Prisma ORM to seamlessly manage tasks,
                      teams, and role-specific permissions.
                    </li>
                    <li>
                      Developed responsive dashboards and dynamic task boards to
                      visualize workload distribution and streamline team
                      collaboration.
                    </li>
                  </ul>
                </div>
              }
              tech="Next.js, PostgreSQL, Prisma ORM"
              link="https://github.com/ibrahim-116/Planora/tree/new-repo"
            />

            <ProjectAccordion
              title="Form Factor"
              category="REST API / React"
              description={
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-[18px]">
                    A react-express gym management system for managing members,
                    check-ins, and equipment inventory.
                  </span>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-[16px] opacity-90">
                    <li>
                      Designed a database schema to track members, schedules,
                      and equipment.
                    </li>
                    <li>
                      Implemented JWT authentication with password hashing to
                      secure admin features.
                    </li>
                  </ul>
                </div>
              }
              tech="React, Express, SQLite, Node.js"
              link="https://github.com/ibrahim-116/next-js-gym-management-system"
            />

            <ProjectAccordion
              title="Inkwell"
              category="Monolith / PostgreSQL"
              description={
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-[18px]">
                    Personalised Long-Form Writing Platform where users publish
                    long-form articles.
                  </span>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-[16px] opacity-90">
                    <li>
                      Created responsive UIs and robust backend using Next.js,
                      PostgreSQL and Prisma ORM.
                    </li>
                    <li>
                      Developed a rich text editor and real-time notifications
                      system.
                    </li>
                  </ul>
                </div>
              }
              tech="Next.js (Fullstack), PostgreSQL, Prisma ORM"
              link="https://github.com/Ibrahim-116/inkwell"
            />
          </div>
        </EditorialSection>

        {/* CONTACT */}
        <EditorialSection
          id="contact"
          title="Get in Touch"
          className="min-h-[50vh] flex flex-col justify-center pb-32"
        >
          <a
            href="mailto:im.7249000@gmail.com"
            className="block w-fit group focus-ring"
          >
            <h2 className="text-[6vw] md:text-[5vw] leading-[1] tracking-ultra-tight font-medium group-hover:italic transition-all duration-300 flex items-center gap-4 md:gap-8">
              Send an Email
              <svg
                className="w-10 h-10 md:w-16 md:h-16 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </h2>
          </a>
          <div className="mt-12 flex gap-8">
            <a
              href="https://github.com/ibrahim-116"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] uppercase tracking-wide font-medium hover:opacity-60 transition-opacity focus-ring"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-muhammad-06211234a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] uppercase tracking-wide font-medium hover:opacity-60 transition-opacity focus-ring"
            >
              LinkedIn
            </a>
          </div>
        </EditorialSection>
      </main>
    </>
  );
}
