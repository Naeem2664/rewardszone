import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Link } from "@/link/Link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rewards Zone",
  description: "Rewards Zone is exclusive platform for Rewards members",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
export function Navbar() {
  const smartLink=Link

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">Rewards Zone 1</div>
      <a
        href={smartLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
      >
        🎁 Claim Now
      </a>
    </nav>
  );
}

// components/Footer.jsx or .tsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Rewards Zone 1. All rights reserved.</p>
    </footer>
  );
}