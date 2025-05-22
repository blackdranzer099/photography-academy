// components/Splash.jsx
import { motion } from 'framer-motion';

export default function Splash({ onFinish }) {
  return (
    <motion.div
      className="splash"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => onFinish(true)}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        📸 PhotoAcademy
      </motion.h1>
    </motion.div>
  );
}