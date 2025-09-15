import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
        console.log(values)

        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      };
      return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />

            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" id={emailId} />

            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password" id={passwordId} autoComplete="true"/>

            <button type="submit">Register</button>
          </Form>
        </Formik>
      );
}
