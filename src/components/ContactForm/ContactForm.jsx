import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const fieldNameId = useId();
  const fieldNumberId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To short!")
      .max(50, "To long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX-XX-XX")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    const newContact = { ...values, id: nanoid() };

    onAddContact(newContact);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formAddContact}>
        <label htmlFor={fieldNameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={fieldNameId}
          autocomplete="off"
        ></Field>
        <ErrorMessage className={css.errorText} name="name" component="p" />

        <label htmlFor={fieldNumberId}>Number</label>
        <Field
          type="text"
          name="number"
          id={fieldNumberId}
          placeholder="XXX-XX-XX"
          autocomplete="off"
        ></Field>
        <ErrorMessage className={css.errorText} name="number" component="p" />

        <button className={css.formaBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}