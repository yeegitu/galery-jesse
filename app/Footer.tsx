"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen, FiPlay, FiSun, FiUser } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";

export default function Footer() {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "text-purple-600" : "text-gray-700");

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-inner py-3 z-50">
      <div className="flex justify-around sm:justify-center sm:gap-10">
        <Link href="/sport" className={`flex flex-col items-center transition ${isActive("/sport")}`}>
          <GiRunningShoe size={24} />
          <span className="text-xs mt-1">Sport</span>
        </Link>

        <Link href="/study" className={`flex flex-col items-center transition ${isActive("/study")}`}>
          <FiBookOpen size={24} />
          <span className="text-xs mt-1">Study</span>
        </Link>

        <Link href="/" className={`flex flex-col items-center transition ${isActive("/")}`}>
          <FiUser size={24} />
          <span className="text-xs mt-1">Me</span>
        </Link>

        <Link href="/random" className={`flex flex-col items-center transition ${isActive("/random")}`}>
          <FiPlay size={24} />
          <span className="text-xs mt-1">Random</span>
        </Link>

        <Link href="/holiday" className={`flex flex-col items-center transition ${isActive("/holiday")}`}>
          <FiSun size={24} />
          <span className="text-xs mt-1">Holiday</span>
        </Link>
      </div>
    </footer>
  );
}
