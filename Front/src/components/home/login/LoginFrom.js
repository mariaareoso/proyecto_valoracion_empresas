import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../shared/hooks/useAuth';
import './LoginForm.css'

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
    <form className='login' onSubmit={handleSubmit(onLogin)}>
      <h2 className='tituloLogin'>Lorem ipsum</h2>
      <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
      <input className='emailLogin' id="email" name="email" placeholder='Email' ref={register({ required: true })}></input>
      <input className='passwordLogin' id="password" name="password" type="password" placeholder='Password' ref={register({ required: true })}></input>
      <input className='bottomLogin' type="submit" value='Iniciar sesión' />
      <Link className='linkRegister' to="/about">¿No tienes cuenta?<span> Registrate</span></Link>
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
