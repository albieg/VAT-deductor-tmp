import { AnimatePresence, motion } from "framer-motion";

export const SlideRightAnimation = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
    </AnimatePresence>
  );
}