import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';

function RegisterForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [statusMessage, setStatusMessage] = useState('');
  const { signUp } = useAuth();

  console.log(errors);

  const onRegister = async (data) => {
    try {
      const query = await signUp(data.email, data.password);
      if (query.message) {
        setStatusMessage(query.message);
      }
    } catch (error) {
      setStatusMessage(error);
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" ref={register({ required: true })}></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" ref={register({ required: true })}></input>
      <input type="submit" />

      {statusMessage.length > 0 && <p className="error">{statusMessage}</p>}
    </form>
  );
}

export default RegisterForm;
