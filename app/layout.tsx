import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Invisible Food & Beverages",
    template: "%s | Invisible Food & Beverages",
  },
  description: "Certified grains, spices, lentils, tea, and coffee supplied for global food and beverage buyers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
