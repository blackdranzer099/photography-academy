// FloatingCTA.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className={`${styles.floatingBtn} ${isVisible ? 'visible' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <a
        href="/gallery"
        className={`${styles.ctaLink} ${styles.pulse}`}
        aria-label="Explore our student photo gallery"
      >
        Explore Gallery
      </a>
    </motion.div>
  );
}