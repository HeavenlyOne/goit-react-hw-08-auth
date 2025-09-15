import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useId } from 'react';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values)
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={emailId} className={css.label}>Email</label>
        <Field className={css.field} type="email" name="email" id={emailId} />

        <label htmlFor={passwordId} className={css.label}>Password</label>
        <Field className={css.field} 
          type="password"
          name="password"
          autoComplete="true"
          id={passwordId}
        />
        <button className={css.loginBtn} type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
