// src/components/Navbar.jsx
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on outside click
  const handleClickOutside = useCallback(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    if (!navbar?.contains(document.activeElement) && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen, styles.navbar]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // Toggle body class for styling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    // Reset overflow on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>📷 PhotoAcademy</div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setMenuOpen(false);
            }}
            tabIndex="0"
            role="link"
            aria-current={window.location.pathname === link.path ? 'page' : undefined}
            className={window.location.pathname === link.path ? styles.active : ''}
          >
            {link.name}
          </Link>
        ))}
      </div>

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
  );
}