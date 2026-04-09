import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Salt Progressive Kitchen | Rajahmundry",
  description:
    "A Salt-specific restaurant experience for Rajahmundry with a refined black, salt-white, and stone-inspired visual identity.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-playfair": "Baskerville, 'Times New Roman', serif",
          "--font-cormorant": "Georgia, 'Times New Roman', serif",
          "--font-dm-sans": "'Segoe UI', Arial, sans-serif",
          fontFamily: "var(--font-dm-sans), sans-serif",
        } as CSSProperties
      }
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-[#f4efe7] text-[#090b0d]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
