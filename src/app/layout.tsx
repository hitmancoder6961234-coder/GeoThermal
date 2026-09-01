import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEO\u25C9THERM | Geothermal Energy Solutions",
  description:
    "Explore geothermal heating and cooling, estimate project costs and discover the potential of ground-source energy.",
  keywords: [
    "geothermal",
    "geothermal energy",
    "ground source heat pump",
    "renewable energy",
    "heating cooling",
    "GEO\u25C9THERM",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u{1F30D}</text></svg>",
  },
  openGraph: {
    title: "GEO\u25C9THERM | Geothermal Energy Solutions",
    description:
      "Smart geothermal heating and cooling solutions designed around your building, your land and your energy needs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}