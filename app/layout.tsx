import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnoutRadar – Monitor Team Burnout Risk via Commit Patterns",
  description: "Analyzes Git commit patterns, PR review times, and code quality metrics to identify developers at risk of burnout. Built for engineering managers and HR teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ca33d213-7f97-4589-83f6-1f68a4acc160"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
