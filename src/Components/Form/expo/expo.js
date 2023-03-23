// /*eslint-disable*/
// import React, { useState } from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

// // Define validation schema for each page
// const validationSchema1 = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
// });

// const validationSchema2 = Yup.object().shape({
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const validationSchema3 = Yup.object().shape({
//   address: Yup.string().required('Address is required'),
// });

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
//   address: '',
// };

// const MultiStepForm = () => {
//   const [page, setPage] = useState(1);

//   const nextPage = () => setPage(page + 1);
//   const previousPage = () => setPage(page - 1);

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={values => console.log(values)}
//       validationSchema={
//         page === 1 ? validationSchema1 : page === 2 ? validationSchema2 : validationSchema3
//       }
//     >
//       {({ errors, touched }) => (
//         <Form>
//           {page === 1 && (
//             <>
//               <label htmlFor="name">Name</label>
//               <input type="text" name="name" />
//               {errors.name && touched.name && <div>{errors.name}</div>}

//               <label htmlFor="email">Email</label>
//               <input type="email" name="email" />
//               {errors.email && touched.email && <div>{errors.email}</div>}
//             </>
//           )}

//           {page === 2 && (
//             <>
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" />
//               {errors.password && touched.password && <div>{errors.password}</div>}

//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input type="password" name="confirmPassword" />
//               {errors.confirmPassword && touched.confirmPassword && (
//                 <div>{errors.confirmPassword}</div>
//               )}
//             </>
//           )}

//           {page === 3 && (
//             <>
//               <label htmlFor="address">Address</label>
//               <input type="text" name="address" />
//               {errors.address && touched.address && <div>{errors.address}</div>}
//             </>
//           )}

//           <button type="button" onClick={previousPage} disabled={page === 1}>
//             Previous
//           {/* </button> */}
//           <button type="submit" onClick={nextPage} disabled={page === 3}>
//             {page === 3 ? 'Submit' : 'Next'}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MultiStepForm;
