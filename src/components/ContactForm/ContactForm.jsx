import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Name is required"),
      number: Yup.string().trim().required("Number is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: Date.now().toString(),
        name: values.name.trim(),
        number: values.number.trim(),
      };
      if (!newContact.name || !newContact.number) return;
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
        </label>
        {formik.touched.name && formik.errors.name && (
          <div className={styles.error}>{formik.errors.name}</div>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="text"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
        </label>
        {formik.touched.number && formik.errors.number && (
          <div className={styles.error}>{formik.errors.number}</div>
        )}
      </div>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
