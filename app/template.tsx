"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // animasi jalan setiap ganti halaman
        initial={{ opacity: 0, y: 30 }} // mulai agak ke bawah dan transparan
        animate={{ opacity: 1, y: 0 }}   // fade in + naik ke posisi normal
        exit={{ opacity: 0, y: -30 }}    // saat keluar, fade out + naik sedikit
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
