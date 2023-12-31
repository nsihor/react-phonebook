import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Label, StyledForm, StyledInput } from 'form.styled';
import { Container, MainBtn } from 'main.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <Container>
      <h2>Please Log In</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label htmlFor="email">
            Email:
            <StyledInput type="text" name="email" required />
          </Label>
          <ErrorMessage name="email" component="div" />

          <Label htmlFor="password">
            Password:
            <StyledInput type="text" name="password" required />
          </Label>
          <ErrorMessage name="password" component="div" />

          <MainBtn type="submit">Log In</MainBtn>
        </StyledForm>
      </Formik>
      <p>
        If you don`t have an account click <Link to={'/signUp'}>here</Link>
      </p>
    </Container>
  );
};
