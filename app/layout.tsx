import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Footer"; // Client Component
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerja",
  description: "Website koleksi foto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-500 text-gray-900 flex flex-col min-h-screen`}>
        {/* Tambahkan padding-bottom agar konten tidak tertutup footer */}
        <main className="flex-1 p-4 pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
