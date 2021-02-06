import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';

function LoginForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const { signIn } = useAuth();

  console.log('errors', errors);

  const onLogin = async (data) => {
    try {
      await signIn(data.email, data.password);
      if (errorMessage.length > 0) {
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage(error);
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" ref={register({ required: true })}></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" ref={register({ required: true })}></input>
      <input type="submit" />

      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
