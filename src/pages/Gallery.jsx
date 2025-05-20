import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h2>Our Work</h2>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`https://picsum.photos/400/300?random=${n}`}
            alt={`Photo ${n}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
