import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RevealSection({ children, className = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
