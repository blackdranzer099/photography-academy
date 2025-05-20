import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      <ul>
        <li>📷 Personal Coaching</li>
        <li>🎓 Online Photography Courses</li>
        <li>💍 Wedding & Event Photography</li>
        <li>🏢 Studio Sessions</li>
      </ul>
    </div>
  );
}

