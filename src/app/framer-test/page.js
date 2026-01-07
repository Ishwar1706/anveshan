"use client";

import { motion } from "framer-motion";

export default function FramerTestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg shadow-lg bg-white"
      >
        <h1 className="text-xl font-semibold">Framer Motion import OK</h1>
      </motion.div>
    </div>
  );
}
