// src/components/CameraIllustration.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function CameraIllustration() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      {/* SVG Illustration */}
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
          rotate: 360,
          transition: { duration: 0.4 }
        }}
        onClick={() => setIsModalOpen(true)}
        role="button"
        aria-label="Click to focus camera lens"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsModalOpen(true);
          }
        }}
      >
        {/* Camera Body */}
        <rect x="50" y="100" width="200" height="120" rx="10" stroke="#ffffffcc" strokeWidth="4" fill="none" />

        {/* Lens Outline */}
        <circle cx="150" cy="130" r="30" stroke="#ffffff" strokeWidth="3" fill="none" />

        {/* Flash */}
        <path d="M190 80L210 40H170L180 60L150 100L190 80Z" fill="#FFD700" />

        {/* Buttons */}
        <circle cx="130" cy="180" r="8" fill="#aaa" />
        <circle cx="180" cy="180" r="5" fill="#ccc" />

        {/* Lens Glow Effect */}
        <motion.circle
          cx="150"
          cy="130"
          r="40"
          fill="#6c63ff"
          opacity={0.1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Tooltip Label */}
        <text
          x="150"
          y="250"
          textAnchor="middle"
          fontSize="14px"
          fill="#fff"
          opacity="0.6"
          pointerEvents="none"
        >
          Click to Focus
        </text>
      </motion.svg>

      {/* Modal Popup */}
      {isModalOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div style={{ textAlign: 'center' }}>
              <h3 id="modal-title">Focusing Lens</h3>
              <p>Zooming in on photography techniques...</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}