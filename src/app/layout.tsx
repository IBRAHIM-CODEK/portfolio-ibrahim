import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Muhammad - Software Engineer Portfolio",
  description: "Database GUI - Software Engineer Portfolio of Ibrahim Muhammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cause:wght@100..900&family=Changa+One:ital@0;1&family=Diplomata&family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Jomhuria&family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-canvas text-ink-primary" style={{ fontFamily: "'Google Sans Code', monospace" }}>
        {children}
      </body>
    </html>
  );
}
