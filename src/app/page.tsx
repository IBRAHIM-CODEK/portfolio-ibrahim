"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  Section,
  SectionHeader,
  IconBadge,
  SkillChip,
  DotNav,
} from "@/components/Shared";

export const CTAButton = ({
  icon: Icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    className="flex items-center justify-center gap-2 px-6 py-3 bg-signal-amber text-ink-900 font-semibold text-[15px] rounded-[8px] hover:bg-[#DC9530] transition-colors focus-ring w-fit"
  >
    <Icon className="w-5 h-5" strokeWidth={2} />
    <span>{label}</span>
  </a>
);

export default function Home() {
  const schemaFields = [
    { key: "name", value: '"Ibrahim Muhammad"' },
    { key: "role", value: '"Software Engineer"' },
    { key: "location", value: '"Gujrat, Pakistan"' },
    {
      key: "stack",
      value:
        "[React.js, Next.js, Node.js, Express.js, PostgreSQL, Prisma, MongoDB, Mongoose]",
    },
  ];

  const sections = [
    "hero",
    "about",
    "stack",
    "project-1",
    "project-2",
    "project-3",
    "contact",
  ];

  return (
    <main className="flex min-h-screen flex-col bg-ink-900 w-full selection:bg-signal-amber selection:text-ink-900">
      <DotNav sections={sections} />

      {/* 1. HERO */}
      <Section
        bgTheme="ink"
        id="hero"
        index={0}
        className="bg-blueprint-grid min-h-screen justify-center"
      >
        <div className="relative w-full max-w-[800px] mx-auto mt-20 lg:mt-0">
          {/* Accent signature */}
          {/* <div className="absolute -top-12 lg:-top-16 -left-2 lg:-left-8 rotate-[-6deg] opacity-80 z-20 pointer-events-none">
            <span className="font-caveat font-[600] text-[56px] lg:text-[80px] text-text-muted-dark">
              Ibrahim
            </span>
          </div> */}

          <div className="font-mono text-[14px] md:text-[16px] lg:text-[18px] text-paper-100 leading-[2] md:leading-[2.5] relative z-10 w-full lg:w-fit">
            <div
              className="animate-field-stagger"
              style={{ animationDelay: "0ms" }}
            >
              <span className="text-signal-amber font-medium">person</span>{" "}
              {"{"}
            </div>
            {schemaFields.map((field, i) => (
              <div
                key={field.key}
                className="pl-6 md:pl-12 flex flex-col md:flex-row animate-field-stagger"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <span className="w-24 lg:w-32 text-paper-100 shrink-0">
                  {field.key}
                </span>
                <span className="text-paper-100 break-words">
                  {field.value}
                </span>
              </div>
            ))}
            <div
              className="pl-6 md:pl-12 flex flex-col md:flex-row md:items-center animate-field-stagger"
              style={{ animationDelay: `${(schemaFields.length + 1) * 80}ms` }}
            >
              <span className="w-24 lg:w-32 text-paper-100 shrink-0">
                status
              </span>
              <span className="flex items-center gap-2 text-paper-100">
                <span className="w-2 h-2 rounded-full bg-signal-amber animate-pulse-amber"></span>
                available
              </span>
            </div>
            <div
              className="animate-field-stagger"
              style={{ animationDelay: `${(schemaFields.length + 2) * 80}ms` }}
            >
              {"}"}
            </div>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-4 animate-field-stagger relative z-10"
            style={{ animationDelay: `${(schemaFields.length + 3) * 80}ms` }}
          >
            <CTAButton
              icon={Mail}
              label="Contact Me"
              href="mailto:im.7249000@gmail.com"
            />
            <IconBadge
              icon={FiGithub}
              label="Github"
              bgTheme="ink"
              href="https://github.com/Ibrahim-116"
            />
            <IconBadge
              icon={FiLinkedin}
              label="LinkedIn"
              bgTheme="ink"
              href="https://linkedin.com/in/Ibrahim-Muhammad"
            />
          </div>
        </div>
      </Section>

      {/* 2. ABOUT ME */}
      <Section bgTheme="paper" id="about" index={1}>
        <SectionHeader label="TABLE: about_me" />
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-[800px]">
            <h2 className="font-display font-[600] text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.5px] leading-[1.2] mb-8 text-paper-text">
              About Me
            </h2>
            <p className="font-sans font-normal text-[17px] leading-[1.6] text-text-muted-light mb-8">
              Software engineering graduate with hands-on full-stack experience
              across React, Next.js, MongoDB, PostgreSQL, and Prisma ORM.
              Skilled in designing REST APIs and database schemas, debugging
              application issues, and delivering fullstack features end-to-end.
              Seeking to architect scalable full-stack applications, drive
              engineering excellence and continue to learn and grow.
            </p>
            <div className="mb-10">
              <span className="inline-block bg-paper-50 border-[1px] border-line-blueprint/30 rounded-[4px] py-[6px] px-[12px] font-mono font-medium text-[12px] text-paper-text uppercase tracking-wide">
                BSSE (CGPA - 3.62), University of Gujrat — 2022-2026
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MY STACK */}
      <Section bgTheme="ink" id="stack" index={2}>
        <SectionHeader label="TABLE: tech_stack" />
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-display font-[600] text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.5px] leading-[1.2] mb-12 text-ink-text">
            My Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
            <div>
              <p className="font-mono font-medium text-[12px] uppercase text-text-muted-dark mb-4 tracking-[1.5px]">
                Languages
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <SkillChip label="JavaScript" />
                <SkillChip label="TypeScript" />
                <SkillChip label="SQL" />
              </div>
            </div>

            <div>
              <p className="font-mono font-medium text-[12px] uppercase text-text-muted-dark mb-4 tracking-[1.5px]">
                Frontend
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <SkillChip label="React.js" />
                <SkillChip label="Next.js" />
                <SkillChip label="HTML5" />
                <SkillChip label="CSS3" />
                <SkillChip label="Tailwind CSS" />
                <SkillChip label="MUI" />
              </div>
            </div>

            <div>
              <p className="font-mono font-medium text-[12px] uppercase text-text-muted-dark mb-4 tracking-[1.5px]">
                Backend
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <SkillChip label="Express.js" />
                <SkillChip label="Next.js API" />
                <SkillChip label="REST API" />
                <SkillChip label="Websockets" />
              </div>
            </div>

            <div>
              <p className="font-mono font-medium text-[12px] uppercase text-text-muted-dark mb-4 tracking-[1.5px]">
                Database & ORM
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <SkillChip label="PostgreSQL" />
                <SkillChip label="MongoDB" />
                <SkillChip label="Mongoose" />
                <SkillChip label="Prisma" />
              </div>
            </div>

            <div>
              <p className="font-mono font-medium text-[12px] uppercase text-text-muted-dark mb-4 tracking-[1.5px]">
                Tools
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <SkillChip label="Git" />
                <SkillChip label="GitHub" />
                <SkillChip label="Postman" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PROJECT 1 - PLANORA */}
      <Section bgTheme="paper" id="project-1" index={3}>
        <SectionHeader label="TABLE: planora" />
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full max-w-[850px] mx-auto">
            <h2 className="font-display font-[600] text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.5px] leading-[1.2] mb-4 text-paper-text">
              Planora
            </h2>
            <p className="font-sans font-medium text-[17px] text-paper-text mb-4">
              <i>
                An AI-powered project management platform featuring role-based
                accesscontrol (RBAC) and dynamic workload tracking
              </i>
            </p>

            <ul className="font-sans font-normal text-[15px] leading-[1.5] text-text-muted-light list-disc pl-5 flex flex-col gap-2">
              <li>
                Developed responsive dashboards and dynamic task boards to
                visualize workload distribution and streamline team
                collaboration.
              </li>
              <li>
                Architected full-stack workflows using Next.js, PostgreSQL, and
                Prisma ORM to seamlessly manage tasks, teams, and role-specific
                permissions
              </li>
            </ul>

            {/* Technical Dossier Footer */}
            <div className="mt-10 pt-8 border-t-[1px] border-line-blueprint/30 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="block font-mono text-[11px] text-text-muted-light uppercase tracking-[1.5px] mb-1.5">
                  Role
                </span>
                <span className="font-sans text-[15px] text-paper-text font-medium">
                  Full-stack developer (backend focus)
                </span>
              </div>

              <div>
                <span className="block font-mono text-[11px] text-text-muted-light uppercase tracking-[1.5px] mb-1.5">
                  Primary Tech
                </span>
                <span className="font-sans text-[15px] text-paper-text font-medium">
                  Next.js, Tailwind, Prisma
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. PROJECT 2 - GYM MANAGEMENT SYSTEM */}
      <Section bgTheme="ink" id="project-2" index={4}>
        <SectionHeader label="TABLE: form_factor" />
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full max-w-[850px] mx-auto">
            <h2 className="font-display font-[600] text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.5px] leading-[1.2] mb-4 text-ink-text">
              Form Factor
            </h2>
            <p className="font-sans font-medium text-[17px] text-ink-text mb-4">
              <i>
                A react-express gym managementsystem for managing
                members,check-ins, and equipment inventory.
              </i>
            </p>

            <ul className="font-sans font-normal text-[15px] leading-[1.5] text-text-muted-dark list-disc pl-5 flex flex-col gap-2">
              <li>
                Relational database schema using Prisma ORM and SQLite for
                members, schedules, and equipment
              </li>
              <li>
                Administrative features secured with JWT authentication and
                password hashing
              </li>
              <li>
                Inventory tracker for equipment status and maintenance logs
              </li>
              <li>
                Responsive dashboard built with React 19, Vite, and Tailwind CSS
              </li>
            </ul>

            {/* Technical Dossier Footer */}
            <div className="mt-10 pt-8 border-t-[1px] border-line-blueprint/30 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="block font-mono text-[11px] text-text-muted-dark uppercase tracking-[1.5px] mb-1.5">
                  Role
                </span>
                <span className="font-sans text-[15px] text-ink-text font-medium">
                  Full-stack Developer
                </span>
              </div>

              <div>
                <span className="block font-mono text-[11px] text-text-muted-dark uppercase tracking-[1.5px] mb-1.5">
                  Primary Tech
                </span>
                <span className="font-sans text-[15px] text-ink-text font-medium">
                  React, Express, SQLite
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. PROJECT 3 - INKWELL */}
      <Section bgTheme="paper" id="project-3" index={5}>
        <SectionHeader label="TABLE: inkwell" />
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full max-w-[850px] mx-auto">
            <h2 className="font-display font-[600] text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.5px] leading-[1.2] mb-4 text-paper-text">
              Inkwell
            </h2>
            <p className="font-sans font-medium text-[17px] text-paper-text mb-4">
              <i>
                Personalised Long-Form Writing Platform where users publish
                long-form articles.
              </i>
            </p>

            <ul className="font-sans font-normal text-[15px] leading-[1.5] text-text-muted-light list-disc pl-5 flex flex-col gap-2">
              <li>
                Created responsive UIs and robust backend using Next.js,
                PostgreSQL and Prisma ORM.
              </li>
              <li>
                Developed a rich text editor and real-time notifications system.
              </li>
            </ul>

            {/* Technical Dossier Footer */}
            <div className="mt-10 pt-8 border-t-[1px] border-line-blueprint/30 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="block font-mono text-[11px] text-text-muted-light uppercase tracking-[1.5px] mb-1.5">
                  Role
                </span>
                <span className="font-sans text-[15px] text-paper-text font-medium">
                  Full-stack Developer
                </span>
              </div>

              <div>
                <span className="block font-mono text-[11px] text-text-muted-light uppercase tracking-[1.5px] mb-1.5">
                  Primary Tech
                </span>
                <span className="font-sans text-[15px] text-paper-text font-medium">
                  Next.js, PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. LET'S WORK TOGETHER */}
      <Section bgTheme="ink" id="contact" index={6}>
        <SectionHeader label="TABLE: contact" />
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-[600px] mx-auto">
          <h2 className="font-display font-[600] text-[clamp(2.5rem,6vw,4rem)] tracking-[-1px] leading-[1.1] mb-6 text-ink-text">
            Let's build something structured.
          </h2>
          <p className="font-sans font-normal text-[17px] text-text-muted-dark mb-12">
            Available for new opportunities. Reach out if you're looking for a
            developer who treats front-end code with back-end rigor.
          </p>
          <div className="flex flex-wrap gap-[16px] justify-center items-center w-full">
            <CTAButton
              icon={Mail}
              label="Email Me"
              href="mailto:im.7249000@gmail.com"
            />
            <IconBadge
              icon={Phone}
              label="0310-7754767"
              bgTheme="ink"
              href="tel:03107754767"
            />
            <IconBadge
              icon={FiGithub}
              label="Github"
              bgTheme="ink"
              href="https://github.com/ibrahim-116"
            />
            <IconBadge
              icon={FiLinkedin}
              label="LinkedIn"
              bgTheme="ink"
              href="https://www.linkedin.com/in/ibrahim-muhammad-06211234a/"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
