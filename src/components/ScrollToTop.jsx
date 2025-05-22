// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}