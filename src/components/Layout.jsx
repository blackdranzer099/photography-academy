// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

/**
 * Layout Component
 * - Shared layout wrapper for all pages
 * - Includes Navbar and <Outlet /> for nested routes
 */
export default function Layout() {
  return (
    <>
      {/* Navbar shown on every page */}
      <Navbar />

      {/* Main content area where routed components are rendered */}
      <main role="main" className={styles.layoutMain}>
        <Outlet />
      </main>
    </>
  );
}