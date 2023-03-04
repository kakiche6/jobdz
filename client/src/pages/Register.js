import { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = e => {
    console.log(e.target);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}

        {/* name field */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        {/* email field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
