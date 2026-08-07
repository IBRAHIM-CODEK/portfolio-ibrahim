"use client";

import React, { useState, useEffect } from "react";
import {
  EngineersTable,
  ProjectsTable,
  ExperienceTable,
  StackTable,
  ContactTable
} from "@/components/DatabaseTables";

export default function Home() {
  const [activeTable, setActiveTable] = useState("engineers");
  const [typingState, setTypingState] = useState<"idle" | "typing" | "done">("typing");
  const [displayedQuery, setDisplayedQuery] = useState("");

  const tables = [
    { id: "engineers", label: "engineers", desc: "(About Me)" },
    { id: "projects", label: "projects", desc: "(Portfolio)" },
    { id: "experience", label: "experience", desc: "(Resume)" },
    { id: "stack", label: "stack", desc: "(Skills)" },
    { id: "contact", label: "contact", desc: "(Links)" },
  ];

  useEffect(() => {
    setTypingState("typing");
    setDisplayedQuery("");
  }, [activeTable]);

  useEffect(() => {
    if (typingState === "typing") {
      let i = 0;
      const query = `> SELECT * FROM public.${activeTable};`;
      const interval = setInterval(() => {
        setDisplayedQuery(query.slice(0, i + 1));
        i++;
        if (i === query.length) {
          clearInterval(interval);
          setTypingState("done");
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [activeTable, typingState]);

  const renderTable = () => {
    switch (activeTable) {
      case "engineers": return <EngineersTable />;
      case "projects": return <ProjectsTable />;
      case "experience": return <ExperienceTable />;
      case "stack": return <StackTable />;
      case "contact": return <ContactTable />;
      default: return null;
    }
  };

  return (
    <main className="flex h-screen w-full overflow-hidden bg-bg-canvas text-ink-primary">
      {/* Sidebar - Object Explorer */}
      <aside className="w-[20%] min-w-[260px] max-w-[300px] h-full border-r-[1px] border-ink-primary flex flex-col">
        <div className="p-4 border-b-[1px] border-ink-primary">
          <h1 className="font-bold text-[14px] uppercase tracking-wide">
            ▼ portfolio_db
          </h1>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {tables.map((table) => {
            const isActive = activeTable === table.id;
            return (
              <button
                key={table.id}
                onClick={() => setActiveTable(table.id)}
                className={`flex items-center gap-3 text-left w-full px-2 py-1 transition-colors ${
                  isActive 
                    ? "bg-[#F3F3F3]" 
                    : "hover:underline"
                }`}
              >
                <span className={`font-medium ${isActive ? "text-ink-primary" : "text-ink-muted"}`}>≡</span>
                <span className={`font-medium ${isActive ? "text-ink-primary" : "text-ink-primary"}`}>
                  {table.label}
                </span>
                <span className="text-ink-muted text-[13px] ml-auto whitespace-nowrap">
                  {table.desc}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Canvas */}
      <section className="flex-1 h-full overflow-y-auto">
        <div className="max-w-[1000px] mx-auto w-full p-8 md:p-16 flex flex-col">
          
          {/* Query Console */}
          <div className="mb-8 min-h-[30px] flex items-center">
            {typingState !== "idle" && (
              <span className={`text-[14px] ${typingState === "done" ? "text-ink-primary" : "text-ink-muted"}`}>
                {displayedQuery}
                {typingState === "typing" && <span className="inline-block w-2 h-4 bg-ink-primary ml-1 cursor-blink align-middle"></span>}
              </span>
            )}
          </div>

          {/* Table Data Snap-in */}
          {typingState === "done" && (
            <div>
              {renderTable()}
              <div className="mt-4 text-[13px] text-ink-muted">
                (Query executed successfully in {Math.floor(Math.random() * 40) + 10}ms)
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
