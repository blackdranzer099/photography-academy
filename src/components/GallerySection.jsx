// src/components/GallerySection.jsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GallerySection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    const items = ref.current?.querySelectorAll('.gallery-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const images = [
    "https://source.unsplash.com/random/800x600?photography ",
    "https://source.unsplash.com/random/801x600?portrait ",
    "https://source.unsplash.com/random/802x600?nature ",
    "https://source.unsplash.com/random/803x600?studio ",
    "https://source.unsplash.com/random/804x600?fashion ",
    "https://source.unsplash.com/random/805x600?blackandwhite "
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Student Work</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="gallery-item opacity-0 transform translate-y-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt={`Student work ${i + 1}`}
                className="rounded-lg shadow-md w-full h-auto"
                loading="lazy"
                decoding="async"
                width="auto"
                height="auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}