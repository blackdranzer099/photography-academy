// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Component
import Layout from './components/Layout';

// ScrollToTop Component
import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded Page Components
const Home = React.lazy(() => import('./pages/Home'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FreeCoursePage = React.lazy(() => import('./pages/FreeCoursePage'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#6c63ff',
      fontSize: '1.5rem'
    }}>
      Loading...
    </div>
  );
}

// Error boundary for lazy loading
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Something went wrong.</h2>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default function App() {
  return (
    <Router>
      {/* Main wrapper */}
      <div style={{ paddingTop: '80px' }}>

        {/* Scroll to top helper */}
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="gallery"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <Gallery />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="services"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <Services />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="about"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <About />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="contact"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <Contact />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            
            {/* New route for Free Course Page */}
            <Route
              path="free-course"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <FreeCoursePage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}