// components/CameraIllustration.jsx
import { motion } from 'framer-motion';
import styles from './CameraIllustration.module.css';

export default function CameraIllustration() {
  return (
    <motion.svg
      className={styles.camera}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Camera Body */}
      <rect x="50" y="100" width="200" height="120" rx="10" stroke="#ffffffcc" strokeWidth="4" fill="none" />

      {/* Lens Outline */}
      <circle cx="150" cy="130" r="30" stroke="#ffffff" strokeWidth="3" fill="none" />

      {/* Flash */}
      <path d="M190 80L210 40H170L180 60L150 100L190 80Z" fill="#FFD700" />

      {/* Buttons */}
      {/* <circle cx="130" cy="180" r="8" fill="#aaa" /> */}
      <circle cx="130" cy="180" r="8" fill="#aaa" />
      <circle cx="180" cy="180" r="5" fill="#ccc" />

      {/* Lens Glow Effect */}
      <motion.circle
        className="lens-glow"
        cx="150"
        cy="150"
        r="40"
        fill="#6c63ff"
        opacity={0.1}
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}