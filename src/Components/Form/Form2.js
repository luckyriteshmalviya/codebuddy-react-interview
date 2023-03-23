import { Formik, Form } from 'formik';
import { Persist } from 'formik-persist';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const firstNameRegex = /^[a-zA-Z]{2,50}$/;
const addressRegex = /.{10,}/;

const NameAndAddressSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required('required')
    .matches(firstNameRegex, 'Only alphabets are allowed for this field '),
  lastName: Yup.string().min(0, ''),
  address: Yup.string()
    .min(10, 'Address must be atleast 10 character')
    .required('required')
    .matches(addressRegex, 'Invalid email'),
});

const Form2 = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/form3');
  };

  const goback = () => {
    navigate('/');
  };

  return (
    <div className="m-5">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
        }}
        validationSchema={NameAndAddressSchema}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }

          return errors;
        }}
        onSubmit={() => onSubmit()}
      >
        {({ isValid }) => (
          <Form>
            <TextField label="firstName" name="firstName" type="text" />
            <TextField label="lastName" name="lastName" type="text" />
            <TextField label="address" name="address" type="text" />
            <Persist name="nameAndAddress" />
            <button type="button" className="m-5 btn btn-dark" onClick={goback}>
              Back
            </button>
            <button type="submit" disabled={!isValid} className="btn btn-dark">
              Save
            </button>
            <button type="submit" className="m-5 btn btn-dark">
              Save & Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
