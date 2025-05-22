// Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

// Example using React Icons (you can replace with Heroicons or any icon set)
import { FaChalkboardTeacher, FaLaptopCode, FaCameraRetro, FaPhotoVideo } from 'react-icons/fi';

const features = [
  {
    title: "Live Mentorship",
    desc: "Learn directly from award-winning photographers.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Hands-on Learning",
    desc: "Real-world assignments to sharpen your skills.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Camera Mastery",
    desc: "From DSLR to mirrorless — learn all major camera systems.",
    icon: <FaCameraRetro />,
  },
  {
    title: "Post-Processing",
    desc: "Master Lightroom & Photoshop like a pro.",
    icon: <FaPhotoVideo />,
  },
];

export default function Features() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedFeature, setSelectedFeature] = React.useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <>
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.container}>
          <h2 id="features-title" className={styles.title}>Why Choose Us?</h2>
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={styles.card}
                variants={itemVariants}
                tabIndex="0"
                role="region"
                aria-labelledby={`feature-title-${i}`}
                onClick={() => openModal(feature)}
              >
                <div className={styles.icon}>{feature.icon}</div>
                <h3 id={`feature-title-${i}`} className={styles.cardTitle}>
                  {feature.title}
                </h3>
                <p className={styles.cardDescription} data-tooltip={feature.desc}>
                  {feature.desc.substring(0, 60)}...
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
            <h3>{selectedFeature?.title}</h3>
            <p>{selectedFeature?.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}