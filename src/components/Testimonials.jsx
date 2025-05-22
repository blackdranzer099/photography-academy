// components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonials.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    accessibility: true,
    draggable: true,
    pauseOnHover: true,
    appendDots: dots => (
      <div className={styles.slickDots}>
        <ul>{dots}</ul>
      </div>
    )
  };

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Travel Photographer",
      quote: "PhotoAcademy gave me the confidence to shoot professionally. The mentorship is world-class!"
    },
    {
      name: "James T.",
      role: "Portrait Enthusiast",
      quote: "The post-processing module alone was worth every penny. I'm editing like a pro now."
    },
    {
      name: "Lina R.",
      role: "Student",
      quote: "So much better than my university photography course. Practical, fast-paced, and fun!"
    }
  ];

  return (
    <section className={styles.testimonialsSection} aria-label="Student Testimonials">
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Students Say</h2>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.card}>
                  <p className={styles.quote}>"{t.quote}"</p>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

// Custom Arrow Components
function PrevArrow({ className, onClick }) {
  return (
    <button
      type="button"
      className={`${className} ${styles.slickArrow} ${styles.slickPrev}`}
      onClick={onClick}
      aria-label="Previous testimonial"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

function NextArrow({ className, onClick }) {
  return (
    <button
      type="button"
      className={`${className} ${styles.slickArrow} ${styles.slickNext}`}
      onClick={onClick}
      aria-label="Next testimonial"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}