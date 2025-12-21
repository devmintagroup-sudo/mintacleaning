import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
         <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3500,
              style: { borderRadius: "12px" },
              error: {
                style: {
                  background: "#ef4444", // red-500
                  color: "#fff",
                },
              },
              success: {
                style: {
                  background: "#10b981", // emerald-500
                  color: "#0f172a",      // slate-900
                },
              },
            }}
          />
        {children}
      </body>
    </html>
  );
}
