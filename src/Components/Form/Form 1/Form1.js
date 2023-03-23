/*eslint-disable*/
import { Formik, Form, Field } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =
  /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*\W.*\W)[A-Za-z\d@$!%*?&]{8,}$/;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('required')
    .matches(emailRegex, 'Invalid email'),
  password: Yup.string()
    .min(8, 'Password must contain 8 character')
    .required('password required')
    .matches(passwordRegex, 'Invalid Password'),
});

const EmailInput = () => {

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
      >
        <Form>        <Field label="Email" name="email"  type="email" />
          <Field label="Password" name="password" type="password" />
          <button type="submit">next</button>
          <PersistFormikValues name="email" />
          </Form>
  
      </Formik>
    </div>
  );
};
export default EmailInput;
