"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Section = ({
  children,
  bgTheme,
  className = "",
  id = "",
  index = 1,
}: {
  children: React.ReactNode;
  bgTheme: "ink" | "paper";
  className?: string;
  id?: string;
  index?: number;
}) => {
  const [isVisible, setIsVisible] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-20% 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <section
      id={id}
      data-section={id}
      className={`relative w-full ${
        bgTheme === "ink"
          ? "bg-ink-900 text-ink-text"
          : "bg-paper-100 text-paper-text"
      } px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 flex flex-col ${className}`}
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-[1200px] w-full h-full flex flex-col flex-1 z-10 section-reveal ${
          index === 0 || isVisible ? "is-visible" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-between items-center w-full mb-8 lg:mb-16 border-b-[1px] border-line-blueprint/20 pb-4">
      <span className="font-mono font-medium text-[12px] uppercase tracking-[1.5px] text-line-blueprint">
        {label}
      </span>
    </div>
  );
};



export const IconBadge = ({
  icon: Icon,
  label,
  bgTheme,
  href,
}: {
  icon: any;
  label: string;
  bgTheme: "ink" | "paper";
  href?: string;
}) => {
  const isDark = bgTheme === "ink";
  const textColor = isDark ? "text-ink-text" : "text-paper-text";
  const bgColor = isDark ? "bg-ink-700" : "bg-paper-50";

  const Comp = href ? 'a' : 'div';

  return (
    <Comp
      href={href}
      className={`flex items-center gap-[12px] px-4 py-2 rounded-[8px] ${bgColor} border-[1px] border-line-blueprint/20 hover:border-signal-amber transition-colors focus-ring cursor-pointer group w-fit`}
    >
      <Icon
        className={`w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] ${textColor} group-hover:text-signal-amber transition-colors`}
        strokeWidth={1.5}
      />
      <span className={`font-mono font-medium text-[12px] uppercase ${textColor}`}>
        {label}
      </span>
    </Comp>
  );
};



export const SkillChip = ({
  label,
}: {
  label: string;
}) => {
  return (
    <div className="bg-transparent border-[1px] border-line-blueprint hover:border-signal-amber transition-colors rounded-[4px] py-[4px] px-[8px] inline-flex items-center justify-center whitespace-nowrap cursor-default">
      <span className="font-mono font-medium text-[12px] uppercase text-line-blueprint hover:text-signal-amber transition-colors">
        {label}
      </span>
    </div>
  );
};

export const DotNav = ({ sections }: { sections: string[] }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section with highest intersection ratio
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (highest first)
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const activeId = visibleEntries[0].target.id;
          setActiveSection(activeId);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => handleScroll(id)}
          aria-label={`Scroll to ${id}`}
          className="group flex items-center justify-center w-6 h-6 focus-ring rounded-full"
        >
          <div
            className={`w-2 h-2 rounded-full border-[1.5px] transition-colors duration-300 ${
              activeSection === id
                ? "bg-signal-amber border-signal-amber"
                : "bg-transparent border-line-blueprint group-hover:border-signal-amber"
            }`}
          />
        </button>
      ))}
    </div>
  );
};
