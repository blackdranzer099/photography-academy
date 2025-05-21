import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>📷 PhotoAcademy</div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
}
