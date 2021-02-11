import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../shared/hooks/useAuth';
import './LoginForm.css'

function RegisterForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const { signUp } = useAuth();

  console.log('errors', errors);

  const onLogin = async (data) => {
    console.log(data);
    try {
      await signUp(data.email, data.password, data.repeatPassword, data.empleado, data.empresa);
      if (errorMessage.length > 0) {
        setErrorMessage('');
      }

    } catch (error) {
      setErrorMessage(error);
    }

    // reset();

  }



  return (
    <form className='login' onSubmit={handleSubmit(onLogin)}>
      <h2 className='tituloLogin'>Registro de usuario</h2>
      <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
      <input className='emailLogin' id="email" name="email" placeholder='Email' ref={register({ required: true })}></input>
      <input className='passwordLogin' id="password" name="password" type="password" placeholder='Password' ref={register({ required: true })}></input>
      <input className='passwordLogin' id="repeatPassword" name="repeatPassword" type="password" placeholder='Repetir password' ref={register({ required: true })}></input>
      <label htmlFor="empleado">Empleado</label>
      <input id='empleado' name='empleado' type='checkbox' value={1} ref={register}></input>
      <label htmlFor="empresa">Empresa</label>
      <input id='empresa' name='empresa' type='checkbox' value={1} ref={register}></input>

      <input className='bottomLogin' type="submit" value='Registrarse' />

      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}

      <Link className='linkRegister' to="/">Volver a inicio de sesión</Link>

    </form>
  );
}

export default RegisterForm;
