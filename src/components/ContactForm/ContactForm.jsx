// components/ContactForm/ContactForm.js
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react"; // Используем useId для генерации уникальных ID, если нужно для элементов формы
import {
  selectContactsLoading,
  selectContactsError,
} from "../../redux/selectors";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  // Валидация формы
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  // Генерируем уникальные ID для каждого поля (не для данных, а для элементов формы)
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, { resetForm }) => {
    // Отправляем только name и number, id будет сгенерирован на сервере
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameId} // Используем уникальные id для элементов формы
          placeholder="Enter contact name"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label htmlFor={phoneId}>Number</label>
        <Field
          type="text"
          name="number"
          id={phoneId} // Используем уникальные id для элементов формы
          placeholder="Enter phone number"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.button} type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add contact"}
        </button>
        {error && <div className={css.errorMessage}>{error}</div>}
      </Form>
    </Formik>
  );
};

export default ContactForm;
