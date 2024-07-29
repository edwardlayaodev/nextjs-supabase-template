"use client";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Interface for Animated properties.
 * @param {children} React.ReactNode - The Child Element, content of the animated container.
 * @param {isVisible} boolean - The state in which the children should be rendered, this triggers animate presence when false, which makes the animation finish first before unmounting.
 * @param {extraClass} string - Extra classes for the animated container.
 */
interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  extraClass: string;
}

/**
 * Animated component for handling animations onMount and onDestroy.
 * @param {Props} props - The props for the Animated component.
 * @returns
 */
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
