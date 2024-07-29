"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Atom } from ".";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  extraClass: string;
}

export default function Animated({ children, isVisible, extraClass }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={extraClass}
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -500 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
