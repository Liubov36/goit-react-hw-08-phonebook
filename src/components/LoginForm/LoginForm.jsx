// import { Formik } from 'formik';
// import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
// import { selectLogInError } from '../../redux/auth/selectors';
// import { updateErrorLogIn } from '../../redux/auth/slice';
import {
  Wrapper,
  FormLogin,
  FormLabel,
  FormInput,
  ButtonSubmit,
//   Error,
//   InputError,
} from './LoginForm.styled';
// import { useEffect } from 'react';

// const schema = yup.object().shape({
//   email: yup.string().email('Not a proper email'),
//   password: yup.string().min(6).required('Password is required'),
// });

export const LoginForm = () => {
  const dispatch = useDispatch();
//   const error = useSelector(selectLogInError);

//   useEffect(() => {
//     dispatch(updateErrorLogIn(error));
//     return () => {
//       dispatch(updateErrorLogIn(null));
//     };
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(logIn(values));
//     if (error !== null) {
//       resetForm();
//     }
//   };

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };


  return (
    <Wrapper>
    {/* <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      > */}
      <FormLogin onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <FormInput type="email" name="email" placeholder="Enter email" />
          {/* <InputError name="email" component="div" /> */}
        </FormLabel>
        <FormLabel>
          Password
          <FormInput type="password" name="password"  placeholder="Enter password" />
          {/* <InputError name="password" component="div" /> */}
        </FormLabel>
        <ButtonSubmit type="submit">Log In</ButtonSubmit>
      </FormLogin>
      {/* </Formik>
      {error && (
        <Error>
          Are you registered? If yes, check the data you entered, if no,
          register
        </Error>
      )} */}
    </Wrapper>
  );
};