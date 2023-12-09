"use client";

import { motion, useAnimation } from "framer-motion";

export default function SlideUp({ words }: { words: string }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}>
      {words}
    </motion.div>
  );
}
