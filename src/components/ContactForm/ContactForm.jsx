import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.phone,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <div className={css.inputWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="username" id={nameId}></Field>
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={phoneId}>Phone</label>
            <Field type="text" name="phone" id={phoneId}></Field>
            <ErrorMessage className={css.error} name="phone" component="span" />
          </div>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
