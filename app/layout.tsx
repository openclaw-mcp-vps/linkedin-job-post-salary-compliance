import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryCheck — LinkedIn Job Post Salary Compliance",
  description: "Ensure your LinkedIn job posts comply with state salary transparency laws. Scan, validate, and get alerted for non-compliant postings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fbe113f-924b-4a3a-99a4-7d4cd18fdbba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
