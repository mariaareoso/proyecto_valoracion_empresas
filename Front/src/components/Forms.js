import { useForm } from 'react-hook-form';
import { addJob, addEmpresa, valorEmpresa } from '../http/apiSharpView'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import StarRating from './StarRating';

import '../css/style.css'

function LoginForm() {
    const { register, handleSubmit, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const { signIn } = useAuth();

    const onLogin = async (data) => {


        try {
            await signIn(data.email, data.password);
            if (errorMessage.length > 0) {
                setErrorMessage('');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
        reset();
    };
    return (
        <form className='login' onSubmit={handleSubmit(onLogin)}>
            <h2 className='tituloLogin'>Login</h2>
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
            await signUp(data.email, data.password, data.repeatPassword, isEmpleado ? 1 : 0, isEmpresa ? 1 : 0);
        } catch (error) {
            console.log('onLogin error', { error });

            setErrorMessage(error.message);
        }

        reset();

    }

    return (
        <form className='login' onSubmit={handleSubmit(resgiterUser)}>
            <h2 className='tituloLogin'>Registro de usuario</h2>
            <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            <input className='emailLogin' id="email" name="email" placeholder='Email' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="password" name="password" type="password" placeholder='Password' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="repeatPassword" name="repeatPassword" type="password" placeholder='Repetir password' ref={register({ required: true })}></input>

            <div className='check'>
                <div className='checkForm'>
                    <label className='checklabel' htmlFor="empleado">Empleado</label>
                    <input className='checkinput' id='empleado' name='empleado' type='checkbox' value={isEmpleado} onChange={() => { setIsEmpleado(!isEmpleado) }} ref={register}></input>
                </div>

                <div className='checkForm'>
                    <label className='checklabel' htmlFor="empresa">Empresa</label>
                    <input className='checkinput' id='empresa' name='empresa' type='checkbox' value={isEmpresa} onChange={() => { setIsEmpresa(!isEmpresa) }} ref={register}></input>
                </div>
            </div>

            <input className='bottomLogin' type="submit" value='Registrarse' />

            {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}

            <Link className='linkRegister' to="/">Volver a inicio de sesión</Link>

        </form>
    );
}

function AddJobForm(props) {
    const { register, handleSubmit, reset } = useForm();
    const { userData } = useAuth();
    const { empresa } = props;
    const history = useHistory();

    const Job = async (data) => {
        await addJob(empresa.idempresa, userData.id, data.puesto, data.fecI, data.fecF);
        reset();
    };

    const redirec = () => {
        history.push(`/empresainfo/${userData.id}`);
    }


    return (
        <form className='login' onSubmit={handleSubmit(Job)} onChange={redirec}>
            <h2 className='tituloLogin'>Añadir puesto</h2>
            <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            <input className='emailLogin' id="puesto" name="puesto" placeholder='Puesto de trabajo' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="fecI" name="fecI" type="date" placeholder="2018-07-22" ref={register({ required: true })}></input>
            <input className='passwordLogin' id="fecF" name="fecF" type="date" placeholder="2018-07-22" ref={register({ required: false })}></input>
            <input className='bottomLogin' type="submit" value='Añadir' />
        </form>

    );
}

function AddEmpresaForm(props) {
    const { register, handleSubmit, reset } = useForm();
    const { userData } = useAuth();
    const { empresa } = props

    console.log(empresa, 'PROPS');
    console.log(userData, 'useAuth');

    const Empresa = async (data) => {
        await addEmpresa(data.nombre, data.sede, data.web, data.bio, userData.id,)
        reset();
    };

    return (
        <form className='login' onSubmit={handleSubmit(Empresa)}>
            <h2 className='tituloLogin'>Registro empresa</h2>
            <p className='textoLogin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tellus neque. Aenean eget finibus felis.</p>
            <input className='passwordLogin' id="nombre" name="nombre" type="text" placeholder='Nombre empresa' ref={register({ required: true })}></input>
            <input className='passwordLogin' id="sede" name="sede" type="text" placeholder="Sede empresa" ref={register({ required: false })}></input>
            <input className='passwordLogin' id="web" name="web" type="text" placeholder="Sitio web" ref={register({ required: false })}></input>
            <input className='passwordLogin' id="bio" name="bio" type="text" placeholder="Resumen empresa" ref={register({ required: true })}></input>
            <input className='bottomLogin' type="submit" value='Añadir' />
        </form>

    );
}

function ValorarForm(props) {
    const { handleSubmit, reset } = useForm();
    const { userData } = useAuth();
    const { empresa } = props;

    const Valoracion = async (data) => {
        await valorEmpresa(opinion, accesibilidad, ambiente_de_trabajo, sueldos, posibilidad_de_ascenso, conciliacion, estabilidad, empresa.idempresa, userData.id);
        reset();
    };

    const [opinion, setOpinion] = useState()
    const [accesibilidad, setAccesibilidad] = useState()
    const [ambiente_de_trabajo, setAmbiente_de_trabajo] = useState()
    const [sueldos, setSueldos] = useState()
    const [posibilidad_de_ascenso, setPosibilidad_de_ascenso] = useState()
    const [conciliacion, setConciliacion] = useState()
    const [estabilidad, setEstabilidad] = useState();

    const updateRatingValue = (fn, value) => {
        fn(value);
    }

    return (
        <form className='login' onSubmit={handleSubmit(Valoracion)}>
            <h2 className='tituloLogin'>Valorar</h2>
            <div>
                <textarea className='textoInputLogin' id='opinion' name='opinion' type='text' placeholder="Escribe tu opinión de la empresa" onChange={(e) => setOpinion(e.target.value)}></textarea>
            </div>
            <div>
                <h3>Accesibilidad</h3>
                <StarRating update={(rating) => updateRatingValue(setAccesibilidad, rating)}></StarRating>
                <h3>Ambiente de trabajo</h3>
                <StarRating update={(rating) => updateRatingValue(setAmbiente_de_trabajo, rating)}></StarRating>
                <h3>Conciliacion</h3>
                <StarRating update={(rating) => updateRatingValue(setConciliacion, rating)}></StarRating>
                <h3>Estabilidad</h3>
                <StarRating update={(rating) => updateRatingValue(setEstabilidad, rating)}></StarRating>
                <h3>Posibilidad de ascenso</h3>
                <StarRating update={(rating) => updateRatingValue(setPosibilidad_de_ascenso, rating)}></StarRating>
                <h3>Sueldos</h3>
                <StarRating update={(rating) => updateRatingValue(setSueldos, rating)}></StarRating>
            </div>
            <input className='bottomLogin' type="submit" value='Valorar' />
        </form>

    );
}

export { LoginForm, RegisterForm, AddJobForm, AddEmpresaForm, ValorarForm };