// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaGraduationCap, FaUsers, FaBuilding } from 'react-icons/fa';
import styles from './Services.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

export default function Services() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const services = [
    {
      title: "Personal Coaching",
      description: "One-on-one mentorship tailored to your photography goals.",
      icon: <FaCamera />,
      modalText: "Work one-on-one with our expert photographers to improve technique, lighting, and storytelling."
    },
    {
      title: "Online Courses",
      description: "From basics to advanced techniques — learn at your own pace.",
      icon: <FaGraduationCap />,
      modalText: "Access curated video lessons, assignments, and feedback from professionals."
    },
    {
      title: "Wedding & Event Photography",
      description: "Capture your special moments with professional support.",
      icon: <FaUsers />,
      modalText: "We offer full event coverage with cinematic editing and post-processing."
    },
    {
      title: "Studio Sessions",
      description: "Book studio time for portrait, product, or creative shoots.",
      icon: <FaBuilding />,
      modalText: "Professional-grade lighting and equipment available for rent or booking."
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <>
      {/* Services Section */}
      <motion.div className={styles.services} initial="hidden" animate="visible">
        <motion.h1 className={styles.title} variants={itemVariants}>
          Our Services
        </motion.h1>

        <motion.div className={styles.cardGrid} variants={containerVariants}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={styles.serviceCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(service)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
      {modalOpen && selectedService && (
        <motion.div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Details for ${selectedService.title}`}
          >
            <button className={styles.modalClose} onClick={(e) => {
              e.stopPropagation();
              setModalOpen(false);
            }}>&times;</button>

            <div className={styles.modalIcon}>{selectedService.icon}</div>
            <h2 className={styles.modalTitle}>{selectedService.title}</h2>
            <p className={styles.modalDescription}>{selectedService.modalText}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.modalCTA}
              onClick={(e) => {
                e.stopPropagation();
                // Navigate or trigger booking form here
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}