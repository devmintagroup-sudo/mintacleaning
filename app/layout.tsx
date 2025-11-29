import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minta Cleaning | Professional Facility Services",
  description:
    "Professional residential and commercial cleaning across Australia – offices, hospitality, warehouses, builders clean, medical centres, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
