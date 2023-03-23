import { render, fireEvent } from '@testing-library/react';
import { Formik, Form, Field } from 'formik';
import Form1 from '../Components/Form/Form1';

describe('Formik form', () => {
  it('submits form with proper values', () => {
    const onSubmit = jest.fn();
    render(<Form1 />);

    // const element = screen.getByLabelText('email');
    fireEvent.change(getByLabelText('email'), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      { name: 'John', email: 'john@example.com' },
      expect.anything(),
    );
  });

  it('displays form errors', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText, findByText } = render(
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={onSubmit}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }

          if (!values.email) {
            errors.email = 'Required';
          }

          return errors;
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>,
    );

    fireEvent.click(getByText('Submit'));

    expect(await screen.findByText('Required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.click(getByText('Submit'));

    expect(await findByText('Required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.click(getByText('Submit'));

    expect(await findByText('Required')).not.toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      { name: 'John', email: 'john@example.com' },
      expect.anything(),
    );
  });
});
