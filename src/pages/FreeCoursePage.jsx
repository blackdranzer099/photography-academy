// src/pages/FreeCoursePage.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function FreeCoursePage() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const videos = [
    {
      title: "Introduction to Photography",
      desc: "Learn how to hold your camera, set exposure, and take your first photo.",
      videoId: "abc123"
    },
    {
      title: "Understanding Light",
      desc: "Master natural light, studio lighting, and shadows.",
      videoId: "def456"
    },
    {
      title: "Composition Basics",
      desc: "Rule of thirds, leading lines, symmetry and more.",
      videoId: "ghi789"
    }
  ];

  return (
    <motion.section
      className="py-12 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Free Photography Workshops</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.desc}</p>

              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/ ${video.videoId}`}
                  allowFullScreen
                  title={video.title}
                  className="w-full h-48 rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 w-full">
                Watch Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}