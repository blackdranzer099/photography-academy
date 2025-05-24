// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Add Link for routing

// Components
import styles from './Home.module.css';
import CameraIllustration from '../components/CameraIllustration';
import Features from '../components/Features';
import GallerySection from '../components/GallerySection';
import Testimonials from '../components/Testimonials';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Glow */}
        <div className={styles.backgroundGlow}></div>

        {/* Hero Content */}
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            Master the Art of <span>Photography</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Learn from industry pros. From basics to pro techniques.
          </motion.p>

          {/* Buttons */}
          <motion.div className={styles.buttons} variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnPrimary}`}
              aria-label="Start Free Course"
            >
              <Link to="/free-course" className={styles.linkStyle}>
                Start Free Course
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnSecondary}`}
              aria-label="See Our Courses"
            >
              <Link to="/courses" className={styles.linkStyle}>
                See Our Courses
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Camera Illustration */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          style={{ zIndex: 2 }}
        >
          <CameraIllustration />
        </motion.div>
      </motion.section>

      {/* Scroll-Reveal Sections Below Hero */}
      <Features />
      <GallerySection />
      <Testimonials />

      {/* Floating CTA Button */}
      <FloatingCTA />
    </>
  );
}