import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Find contacts by name:</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
