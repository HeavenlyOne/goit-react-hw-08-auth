import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps';
import { selectContacts } from '../../redux/contacts/contactsSlice';
const initialValue = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(50, 'Too long!').required(),
  number: yup.string().min(6, 'Too short!').max(16, 'Too long!').required(),
});

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const dealWithSubmit = (values, { resetForm }) => {
    if (contacts.some(({ name }) => name === values.name)) {
      alert(`${values.name} already is in your list of contacts`);
    } else {
      dispatch(addContact(values));
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={dealWithSubmit}
      validationSchema={schema}
    >
      <Form className={css.formContainer}>
        <label htmlFor="name">
          Name
          <Field className={css.fieldInput} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.errors} />
        </label>
        <label htmlFor="number">
          Number
          <Field className={css.fieldInput} type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.errors} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
