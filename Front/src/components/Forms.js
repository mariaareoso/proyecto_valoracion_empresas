import { useForm } from 'react-hook-form';
import { addJob } from '../http/apiSharpView'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import StarRating from './StarRating';

import '../css/LoginForm.css'

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
            {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
            <Link className='linkRegister' to="/register">¿No tienes cuenta?<span> Registrate</span></Link>
        </form>

    );
}

function RegisterForm() {
    const { register, handleSubmit, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [isEmpleado, setIsEmpleado] = useState(false)
    const [isEmpresa, setIsEmpresa] = useState(false)
    const { signUp } = useAuth();

    const resgiterUser = async (data) => {
        console.log('data', data);
        try {
            const response = await signUp(data.email, data.password, data.repeatPassword, isEmpleado ? 1 : 0, isEmpresa ? 1 : 0);
            console.log('onLogin', { response });

        } catch (error) {
            console.log('onLogin error', { error });

            setErrorMessage(error.message);
        }

        reset();

    }
    console.log(isEmpleado);
    return (
        <form className='login' onSubmit={handleSubmit(resgiterUser)}>
            <h2 className='tituloLogin'>Registro de usuario</h2>
            <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            <input className='emailLogin' id="email" name="email" placeholder='Email' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="password" name="password" type="password" placeholder='Password' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="repeatPassword" name="repeatPassword" type="password" placeholder='Repetir password' ref={register({ required: true })}></input>
            <label htmlFor="empleado">Empleado</label>
            <input id='empleado' name='empleado' type='checkbox' value={isEmpleado} onChange={() => { setIsEmpleado(!isEmpleado) }} ref={register}></input>
            <label htmlFor="empresa">Empresa</label>
            <input id='empresa' name='empresa' type='checkbox' value={isEmpresa} onChange={() => { setIsEmpresa(!isEmpresa) }} ref={register}></input>

            <input className='bottomLogin' type="submit" value='Registrarse' />

            {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}

            <Link className='linkRegister' to="/">Volver a inicio de sesión</Link>

        </form>
    );
}

function AddJobForm(props) {
    const { register, handleSubmit, reset } = useForm();
    const { userData } = useAuth();

    console.log(props);

    const Job = async (data) => {
        await addJob(userData.id, data.puesto, data.fecI, data.fecF);
        reset();
    };



    return (
        <form className='login' onSubmit={handleSubmit(Job)}>
            <h2 className='tituloLogin'>Añadir puesto</h2>
            <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            <input className='emailLogin' id="puesto" name="puesto" placeholder='Puesto de trabajo' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="fecha_inicio" name="fecha_inicio" type="Data" placeholder="2018-07-22" ref={register({ required: true })}></input>
            <input className='passwordLogin' id="fecha_fin" name="fecha_fin" type="Data" placeholder="2018-07-22"></input>
            <input className='bottomLogin' type="submit" value='Añadir' />
        </form>

    );
}

function ValorarForm() {
    const { handleSubmit, reset } = useForm();
    const { userData } = useAuth();

    const Job = async (data) => {
        await addJob(userData.id, data.puesto, data.fecI, data.fecF);
        // Falta el idE que obtenemos de cada empresa
        reset();
    };
    return (
        <form className='login' onSubmit={handleSubmit(Job)}>
            <h2 className='tituloLogin'>Valorar</h2>
            <div>
                <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            </div>
            <di>
                <h3>Accesibilidad</h3>
                <StarRating></StarRating>
                <h3>Ambiente de trabajo</h3>
                <StarRating></StarRating>
                <h3>Conciliacion</h3>
                <StarRating></StarRating>
                <h3>Estabilidad</h3>
                <StarRating></StarRating>
                <h3>Posibilidad de ascenso</h3>
                <StarRating></StarRating>
                <h3>Sueldos</h3>
                <StarRating></StarRating>
            </di>
            <input className='bottomLogin' type="submit" value='Valorar' />
        </form>

    );
}

export { LoginForm, RegisterForm, AddJobForm, ValorarForm };