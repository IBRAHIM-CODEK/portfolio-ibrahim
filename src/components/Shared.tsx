"use client";

import React from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F4F4F2]/80 border-b border-[#1C1C1A]/10">
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
        <a href="#" className="text-[20px] font-bold tracking-tight text-[#1C1C1A]">IM©</a>
        <nav className="hidden md:flex gap-8">
          <a href="#skills" className="text-[14px] uppercase tracking-wide font-medium text-[#1C1C1A] hover:opacity-60 transition-opacity focus-ring">Skills</a>
          <a href="#projects" className="text-[14px] uppercase tracking-wide font-medium text-[#1C1C1A] hover:opacity-60 transition-opacity focus-ring">Projects</a>
          <a href="#contact" className="text-[14px] uppercase tracking-wide font-medium text-[#1C1C1A] hover:opacity-60 transition-opacity focus-ring">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export const EditorialSection = ({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={`w-full max-w-[1400px] mx-auto px-6 py-20 lg:py-32 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
        <div className="md:col-span-3">
          <div className="sticky top-32 text-[12px] uppercase tracking-ultra-wide font-semibold opacity-60 text-[#1C1C1A]">
            {title}
          </div>
        </div>
        <div className="md:col-span-9 flex flex-col gap-12">
          {children}
        </div>
      </div>
    </section>
  );
};
