import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halal Lab – Smart Payroll & Compliance for Modern Teams",
  description:
    "Halal Lab automates payroll with accuracy, speed, and compliance. Reduce manual work, avoid errors, and streamline employee payments with a simple, modern platform.",
  icons: {
    icon: "/images/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
