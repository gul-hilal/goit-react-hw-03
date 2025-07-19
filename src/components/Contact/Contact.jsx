import styles from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <p className={styles.name}>👤 {contact.name}</p>
      <p className={styles.number}>📞 {contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;