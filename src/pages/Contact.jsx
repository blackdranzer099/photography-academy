import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
