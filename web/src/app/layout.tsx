import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinly — Health records shouldn't live in drawers",
  description:
    "One app to store, organize, and understand every medical record for every member of your family. Upload a report, and AI does the rest.",
  openGraph: {
    title: "Kinly — Health records shouldn't live in drawers",
    description:
      "One app to store, organize, and understand every medical record for every member of your family.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
