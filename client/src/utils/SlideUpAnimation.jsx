import { motion } from "framer-motion";

export const SlideUpAnimation = ({children}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                y: { type: "spring", stiffness: 90, damping: 16 },
                opacity: { duration: 0.1 }
            }}
        >
            {children}
        </motion.div>
    )
}