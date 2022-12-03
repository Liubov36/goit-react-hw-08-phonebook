import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { register } from '../../redux/auth/operation';
import { selectRegisterError } from '../../redux/auth/selectors';
import { updateErrorRegister } from '../../redux/auth/slice';
import { useEffect } from 'react';
import {
  Wrapper,
  Form,
  Label,
  Span,
  Input,
  Button,
  Error,
  InputError,
} from './RegisterForm.styled';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Not a proper email'),
    password: yup.string().min(6).required('Password is required'),
  });

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectRegisterError);

  useEffect(() => {
    dispatch(updateErrorRegister(error));
    return () => {
      dispatch(updateErrorRegister(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    if (error !== null) {
      resetForm();
    }
  };

  return (
    <Wrapper>
    <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Span>Username</Span>
          <Input
            type="text"
            name="name"
            placeholder="Enter name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputError name="name" component="div" />
        </Label>

        <Label>
          <Span>Email</Span>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
           <InputError name="email" component="div" />
        </Label>

        <Label>
          <Span>Password</Span>
          <Input type="password" name="password"  placeholder="Enter password" />
          <InputError name="password" component="div" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
      </Formik>
      {error && (
        <Error>
          Your data isn`t valid. Please, check correctness and try again
        </Error>
      )}
    </Wrapper>
  );
};