import { ErrorMessage, Field, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <Field
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-valid'}`}
        autoComplete="off"
        {...props}
        {...field}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;
