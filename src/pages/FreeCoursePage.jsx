// src/pages/FreeCoursePage.jsx
import React from 'react';
import { motion } from 'framer-motion';

import styles from './FreeCoursePage.module.css';

export default function FreeCoursePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const courses = [
    {
      title: "Introduction to Photography",
      description: "Learn how to hold your camera, set exposure, and take your first photo.",
      videoId: "abc123", // Replace with real YouTube ID
    },
    {
      title: "Understanding Light",
      description: "Master natural light, studio lighting, and shadows.",
      videoId: "def456",
    },
    {
      title: "Composition Basics",
      description: "Rule of thirds, leading lines, symmetry and more.",
      videoId: "ghi789",
    },
  ];

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-10">Free Photography Workshops</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div key={i} className={styles.card} variants={itemVariants}>
            {/* Optional: Video Preview */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/ ${course.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={course.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.75rem 0.75rem 0 0'
                }}
              ></iframe>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDescription}>{course.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}