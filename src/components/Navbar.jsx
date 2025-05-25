// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';
import RegisterForm from './RegisterForm'; // Make sure this exists
import logoImage from '../assets/sateesh.jpg'; // Correct path to image

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal state for Book Demo
  const location = useLocation();

  // Close mobile menu on outside click
  const handleClickOutside = () => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    if (!navbar?.contains(document.activeElement) && menuOpen) {
      setMenuOpen(false);
    }
  };

  // Add event listener for outside click
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Toggle body class for styling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Logo with Image */}
        <Link to="/" className={styles.logo}>
          <img
            src={logoImage}
            alt="Sateesh Velduti Academy"
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setMenuOpen(false);
                }}
                tabIndex="0"
                role="link"
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={location.pathname === link.path ? styles.active : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Book Demo Button - Desktop Only */}
          <li className={styles.ctaContainer}>
            <button
              className={styles.ctaButton}
              onClick={() => setModalOpen(true)}
              aria-label="Book a demo session"
            >
              Book Demo
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Icon (for mobile) */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setMenuOpen(!menuOpen);
            }
          }}
          role="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          tabIndex="0"
        >
          <span className={styles.visuallyHidden}>
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <div className={`${styles.bar} ${menuOpen ? styles.animateBar1 : ''}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.animateBar2 : ''}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.animateBar3 : ''}`} />
        </div>
      </nav>

      {/* Modal Form */}
      {modalOpen && <RegisterForm onClose={() => setModalOpen(false)} />}
    </>
  );
}