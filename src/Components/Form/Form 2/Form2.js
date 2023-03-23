/*eslint-disable*/
import { Formik, Form } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const firstNameRegex = /^[a-zA-Z]{2,50}$/
const addressRegex = /.{10,}/


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    .trim()
    .required('required')
    .matches(firstNameRegex, 'Only alphabets are allowed for this field '),
    lastName: Yup.string()
    .min(0, ''),
    // .required('required'),
    // .matches(emailRegex, 'Invalid email')
    address: Yup.string()
    .min(10, 'Address must be atleast 6 character')
    .required('required')
    .matches(addressRegex, 'Invalid email'),
});

const NameInput = () => (
  <div className="custom-form-top">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <TextField label="firstName" name="firstName" type="text" />
        <TextField label="lastName" name="lastName" type="text" />
        <TextField label="address" name="address" type="text" />
        <PersistFormikValues name="nameAndAddress" />
      </Form>
    </Formik>
  </div>
);

export default NameInput;
