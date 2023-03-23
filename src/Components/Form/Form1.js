import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])$/;

const emailAndPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('required')
    .matches(emailRegex, 'Invalid email'),
  password: Yup.string()
    .min(8, 'Password must contain 8 character')
    // .matches(passwordRegex, 'Invalid email')
    .required('password required'),
});

const Form1 = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/form2');
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={emailAndPasswordSchema}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }

          return errors;
        }}
        onSubmit={() => {
          onSubmit();
        }}
      >
        {({ isValid }) => (
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <Persist name="emailAndPassword" />
            <button type="submit" className="btn btn-dark">
              Save
            </button>

            <button type="submit" className="m-5 btn btn-dark" disabled={!isValid}>
              Save & Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form1;
