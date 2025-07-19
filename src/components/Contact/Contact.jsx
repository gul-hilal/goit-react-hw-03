import styles from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <p>👤 {contact.name}</p>
      <p>📞 {contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;
