"use client";

import React, { useState, useEffect } from "react";

const ERDGraph = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="w-full h-full relative font-mono text-[10px] sm:text-[11px] overflow-hidden rounded-[4px] border-[1px] border-line-blueprint/30 bg-ink-900/50 p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      
      {/* Node 1 */}
      <div className={`absolute top-[10%] left-[10%] border-[1px] ${isHovered ? 'border-signal-amber text-signal-amber shadow-[0_0_10px_rgba(159,211,184,0.3)]' : 'border-line-blueprint text-line-blueprint'} bg-ink-900 px-3 py-2 rounded-[4px] z-10 transition-all duration-300`}>
        <div className="font-bold border-b-[1px] border-inherit pb-1 mb-1">users</div>
        <div>id (PK)</div>
        <div>email</div>
      </div>

      {/* Node 2 */}
      <div className={`absolute top-[50%] left-[45%] border-[1px] ${isHovered ? 'border-signal-amber text-signal-amber shadow-[0_0_10px_rgba(159,211,184,0.3)]' : 'border-line-blueprint text-line-blueprint'} bg-ink-900 px-3 py-2 rounded-[4px] z-10 transition-all duration-300 delay-75`}>
        <div className="font-bold border-b-[1px] border-inherit pb-1 mb-1">tasks</div>
        <div>id (PK)</div>
        <div>user_id (FK)</div>
      </div>

      {/* Connection Lines using CSS */}
      <div className={`absolute top-[20%] left-[25%] w-[25%] h-[35%] border-b-[1.5px] border-l-[1.5px] border-dashed rounded-bl-[8px] transition-colors duration-300 ${isHovered ? 'border-signal-amber' : 'border-line-blueprint'}`}></div>
    </div>
  );
};

const TerminalLog = ({ isHovered }: { isHovered: boolean }) => {
  const [logs, setLogs] = useState<string[]>(["> initialize gym_db..."]);

  useEffect(() => {
    if (!isHovered) return;
    
    const queries = [
      "SELECT * FROM members WHERE status = 'active';",
      "UPDATE inventory SET status = 'maintenance';",
      "INSERT INTO check_ins VALUES (105, NOW());",
      "DELETE FROM schedules WHERE class_id = 9;",
      "SELECT count(*) FROM classes;"
    ];

    let count = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, `> ${queries[count % queries.length]}`];
        return next.length > 5 ? next.slice(next.length - 5) : next;
      });
      count++;
    }, 600);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full h-full bg-ink-900 border-[1px] border-line-blueprint/30 rounded-[4px] p-4 font-mono text-[10px] sm:text-[11px] text-signal-amber overflow-hidden flex flex-col justify-end text-left relative">
      <div className="absolute top-3 left-3 flex gap-1.5">
        <div className="w-2 h-2 rounded-full border-[1px] border-line-blueprint"></div>
        <div className="w-2 h-2 rounded-full border-[1px] border-line-blueprint"></div>
        <div className="w-2 h-2 rounded-full border-[1px] border-line-blueprint"></div>
      </div>
      <div className="mt-6 flex-1 flex flex-col justify-end">
        {logs.map((log, i) => (
          <div key={i} className="mb-1.5 opacity-80 truncate">{log}</div>
        ))}
        <div className="animate-pulse-amber">_</div>
      </div>
    </div>
  );
};

const JSONExplorer = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="w-full h-full bg-ink-900 border-[1px] border-line-blueprint/30 rounded-[4px] p-4 sm:p-6 font-mono text-[10px] sm:text-[11px] text-paper-100 overflow-hidden text-left relative">
      <div className="text-line-blueprint mb-4 pb-2 border-b-[1px] border-line-blueprint/30 inline-block">GET /api/articles/latest</div>
      <div className="mt-2 transition-all duration-300">
        <span className="text-signal-amber">{"{"}</span>
        <div className="pl-4 sm:pl-6 border-l-[1px] border-dashed border-line-blueprint/30 ml-1.5 my-1">
          <div className="mb-1.5"><span className="text-text-muted-dark">"id":</span> "art_01",</div>
          <div className="mb-1.5"><span className="text-text-muted-dark">"title":</span> "Schema Aesthetics",</div>
          <div>
            <span className="text-text-muted-dark">"content":</span> {isHovered ? "{" : "{ ... }"}
            <div className={`pl-4 sm:pl-6 overflow-hidden transition-all duration-300 border-l-[1px] border-dashed border-line-blueprint/30 ml-1.5 my-1 ${isHovered ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0 my-0 border-transparent'}`}>
                <div className="mb-1.5"><span className="text-text-muted-dark">"blocks":</span> [54 items],</div>
                <div className="mb-1.5"><span className="text-text-muted-dark">"author":</span> "Ibrahim",</div>
                <div className="mb-1.5"><span className="text-text-muted-dark">"published":</span> true</div>
            </div>
            {isHovered && "}"}
          </div>
        </div>
        <span className="text-signal-amber">{"}"}</span>
      </div>
    </div>
  );
};

export const DynamicProjectVisualizer = ({ 
  projectId,
  bgTheme 
}: { 
  projectId: "planora" | "gym" | "inkwell";
  bgTheme: "ink" | "paper";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = bgTheme === "ink";
  const bgColor = isDark ? "bg-ink-700" : "bg-paper-50";

  return (
    <div 
      className={`group relative rounded-[8px] p-[16px] w-full lg:max-w-[560px] aspect-[16/10] mx-auto lg:mx-0 flex-shrink-0 ${bgColor} border-[1px] transition-colors duration-300 ${isHovered ? 'border-signal-amber' : 'border-line-blueprint'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projectId === "planora" && <ERDGraph isHovered={isHovered} />}
      {projectId === "gym" && <TerminalLog isHovered={isHovered} />}
      {projectId === "inkwell" && <JSONExplorer isHovered={isHovered} />}
    </div>
  );
};
