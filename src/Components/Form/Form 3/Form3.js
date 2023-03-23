/*eslint-disable*/
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'America' },
];


const SignupSchema = Yup.object().shape({
    countryCode: Yup.string()
    .required('required'),
    phoneNumber: Yup.string()
    .required('required')
    .min(10, ''),
    acceptTermsAndCondition: Yup.string()
    .required('required'),
});

const MyForm = () => (
  <Formik
    initialValues={{
      countryCode: '',
      phoneNumber: '',
      acceptTermsAndCondition: false,
    }}
    validationSchema={SignupSchema}
  >
    <Form>
      <div>
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
      </div>

      <TextField label="phone" name="phone" type="number" />
      <PersistFormikValues name="countryAndPhone" />
      <label>
        <Field type="checkbox" name="Terms & Condition" value="false" />
        Terms & Condition
      </label>
    </Form>
  </Formik>
);

export default MyForm;
