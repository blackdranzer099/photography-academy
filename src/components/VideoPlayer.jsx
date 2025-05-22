// components/VideoPlayer.jsx
import React from 'react';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer() {
  const [showVideo, setShowVideo] = React.useState(false);

  // Replace this with your actual YouTube or Vimeo URL
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ "; // Rickroll for demo

  return (
    <section className="video-player">
      {!showVideo ? (
        <div className={styles.videoContainer} onClick={() => setShowVideo(true)} role="button" tabIndex="0" aria-label="Play video">
          <div className={styles.overlay}>
            <div className={styles.playButton} aria-hidden="true">
              {/* Simple SVG play icon */}
              <svg viewBox="0 0 64 64">
                <path d="M44.9,30.7L23.1,16.2c-1.9-1.2-4.2-0.3-4.8,1.8c-0.6,2.1,0.6,4.4,2.7,5.2l17.4,6.9l-17.4,6.9
                  c-2.1,0.8-3.3,3.1-2.7,5.2c0.6,2.1,2.9,3,4.8,1.8l21.8-14.5C45.6,34.5,45.6,31.9,44.9,30.7z"/>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoIframe}
            src={`${videoUrl}?autoplay=1&rel=0`}
            title="Promo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}