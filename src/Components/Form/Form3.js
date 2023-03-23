import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Persist } from 'formik-persist';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'America' },
];

const SignupSchema = Yup.object().shape({
  countryCode: Yup.string().required('required'),
  phoneNumber: Yup.string().required('required').min(10, ''),
  acceptTermsAndCondition: Yup.boolean().oneOf([true], 'Checkbox must be checked'),
});

const Form3 = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/posts');
  };

  const goback = () => {
    navigate('/form2');
  };

  const saveDataUrl = 'https://codebuddy.review/submit';
  const saveData = async () => {
    const data1 = JSON.parse(localStorage.getItem('emailAndPassword')) || '';
    const data2 = JSON.parse(localStorage.getItem('nameAndAddress')) || '';
    const data3 = JSON.parse(localStorage.getItem('countryAndPhone')) || '';

    const data = {
      'emailId': data1.values.email,
      'password': data1.values.password,
      'firstName': data2.values.firstName,
      'lastName': data2.values.lastName,
      'address': data2.values.address,
      'countryCode': data3.values.countryCode,
      'phoneNumber': data3.values.phoneNumber,
    };

    await fetch(saveDataUrl, { method: 'post', body: JSON.stringify(data) })
      .then(response => response.json())
      .then(() => {
        onSubmit();
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="m-5">
      <Formik
        initialValues={{
          countryCode: '',
          phoneNumber: '',
          acceptTermsAndCondition: false,
        }}
        validationSchema={SignupSchema}
        validate={values => {
          const errors = {};
          if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
          }

          return errors;
        }}
        onSubmit={() => {
          saveData();
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <label htmlFor="countryCode">Country Code</label>
            <Field name="countryCode" as="select">
              <option value="">Select a country code</option>
              {countryCodes.map(country => (
                <option key={country.code} value={country.code}>
                  {`${country.name} (${country.code})`}
                </option>
              ))}
            </Field>
            <ErrorMessage name="countryCode" component="div" className="error" />

            <TextField label="phoneNumber" name="phoneNumber" type="number" />
            <label htmlFor="acceptTermsAndCondition">
              <Field
                type="checkbox"
                label="acceptTermsAndCondition"
                name="acceptTermsAndCondition"
              />
              Terms & Condition
            </label>
            <Persist disable="checkbox" name="countryAndPhone" />
            <button type="button" className="m-5 btn btn-dark" onClick={goback}>
              Back
            </button>
            <button type="submit" disabled={!isValid || isSubmitting} className="btn btn-dark">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form3;
