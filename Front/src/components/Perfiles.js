import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getEmpresa, getUserDataJob, updateInfoUser, updateSetEmpresa } from '../http/apiSharpView';
import { AddEmpresaPopUP } from './Modal';
import ShowToValidateUser from './ShowToValidation';
import EditableAvatar from './EditableAvatar'
import { useHistory } from 'react-router-dom';

import '../css/style.css'
import useAuth from '../shared/hooks/useAuth';

function PerfilEmpleo({ userDataJob }) {

    const empleo = userDataJob

    return (
        <>
            <form className='formPerfilEmpleo'>
                <label htmlFor="nombreEmpresa">Empresa</label>
                <input id="nombreEmpresa" name="nombreEmpresa" type='text' defaultValue={empleo.nombre_empresa}></input>
                <label htmlFor="paisEmpresa">Pais</label>
                <input id="paisEmpresa" name="paisEmpresa" type='text' defaultValue={empleo.paisEmpresa}></input>
                <label htmlFor="sede">Ciudad</label>
                <input id="sede" name="sede" type='text' defaultValue={empleo.sede}></input>
                <label htmlFor="puesto">Puesto</label>
                <input id="puesto" name="puesto" type='text' defaultValue={empleo.puesto}></input>
                <ShowToValidateUser validation={empleo.validacion}>
                    <p className='validacionColor'>Validado</p>
                </ShowToValidateUser>
            </form>
        </>
    )
}

function PerfilEmpleado({ userInfo }) {
    const usuario = userInfo

    const { researchTokenProfileUser } = useAuth()

    const { handleSubmit, reset } = useForm();
    const [infoEmpleos, setInfoEmpleos] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const empleoData = await getUserDataJob(usuario.idusuario);
            setInfoEmpleos(empleoData);
        }
        loadUsers()
    }, [usuario.idusuario]);

    const updateInfo = async () => {
        await researchTokenProfileUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword);
        reset();
    }

    /////////////////////////////////////

    const research = () => {
        window.location.reload(false);
        console.log('HOLA');
    }
    /////////////////////////////////////

    const [nombre, setNombre] = useState(usuario.nombre)
    const [primerApellido, setPrimerApellido] = useState(usuario.primerApellido)
    const [segundoApellido, setSegundoApellido] = useState(usuario.segundoApellido)
    const [pais, setPais] = useState(usuario.pais)
    const [ciudad, setCiudad] = useState(usuario.ciudad)
    const [email, setEmail] = useState(usuario.email)
    const [password, setPassword] = useState(usuario.password)
    const [repeatPassword, setRepeatPassword] = useState(usuario.repeatPassword)

    return (
        <>
            <EditableAvatar className='AvatarPeril' usuario={usuario} />
            {/* <button onClick={research}> <span>Recargar</span> </button> */}
            <form className='formPerfil' onSubmit={handleSubmit(updateInfo)}>
                <h2 className='titulo'>Perfil empleado</h2>
                <div className='formPersonalData'>
                    <h3>Datos personales</h3>
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" name="nombre" type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label htmlFor="primerApellido">1º Apellido</label>
                    <input id="primerApellido" name="primerApellido" type='text' value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} ></input>
                    <label htmlFor="segundoApellido">2º Apellido</label>
                    <input id="segundoApellido" name="segundoApellido" type='text' value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)}></input>
                    <label htmlFor="pais">Pais</label>
                    <input id="pais" name="pais" type='text' value={pais} onChange={(e) => setPais(e.target.value)}></input>
                    <label htmlFor="nombre">Ciudad</label>
                    <input id="ciudad" name="ciudad" type='text' value={ciudad} onChange={(e) => setCiudad(e.target.value)}></input>
                </div>

                <div className='formPerfilEmpleo' >
                    <h3>Datos Profesionales</h3>

                    {infoEmpleos.map((infoEmpleo) => {
                        return < PerfilEmpleo className='formPerfilEmpleoUnidad' key={infoEmpleo.idempresa} userDataJob={infoEmpleo} />
                    })}

                </div>

                <div className='formPersonalData'>
                    <h3>Datos cuenta de usuario</h3>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="clave">Antigua Contraseña</label>
                    <input id="clave" name="clave" type='text' readOnly value='******'></input>
                    <p> Para modificar el perfil confirma contraseña </p>
                    <label htmlFor="password">Nueva Contraseña</label>
                    <input id="password" name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label htmlFor="repeatPassword">Repita Contraseña</label>
                    <input id="repeatPassword" name="repeatPassword" type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input>
                </div>
                <input className='botonGuardarPerfil' type="submit" value='Guardar' />
            </form>
        </>

    )
}

function PerfilEmpresa({ userInfo }) {
    const history = useHistory();
    const usuario = userInfo
    const { handleSubmit, reset } = useForm();
    const [empresaEdit, setEmpresaEdit] = useState(null);

    useEffect(() => {
        const infoEmpresa = async () => {
            setEmpresaEdit(await getEmpresa(userInfo.idsuario))
        }
        infoEmpresa();
    }, [userInfo.idsuario])

    const updateInfo = async () => {
        await updateSetEmpresa(email, password, repeatPassword);
        reset();
    }

    const [email, setEmail] = useState(usuario.email)
    const [password, setPassword] = useState(usuario.password)
    const [repeatPassword, setRepeatPassword] = useState(usuario.repeatPassword)

    console.log();

    const goEmpleadosList = () => {
        history.push(`/empleados/${empresaEdit[0].idempresa}`);
    }

    return (
        <div>

            <EditableAvatar className='AvatarPeril' usuario={usuario} />

            <form className='formPerfil' onSubmit={handleSubmit(updateInfo)}>
                <h2 className='titulo'>Ajustes de cuenta</h2>
                <div>
                    <h3>Datos cuenta de usuario</h3>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="clave">Antigua Contraseña</label>
                    <input id="clave" name="clave" type='text' readOnly value='******'></input>
                    <label htmlFor="password">Nueva Contraseña</label>
                    <input id="password" name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label htmlFor="repeatPassword">Repita Contraseña</label>
                    <input id="repeatPassword" name="repeatPassword" type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input>
                </div>
                <input className='EmpresaInfoPopUpbutton' type="submit" value='Guardar' />
            </form>
            <AddEmpresaPopUP empresa={usuario}></AddEmpresaPopUP>
            <button className='EmpresaInfoPopUpbutton' onClick={goEmpleadosList} >Lista de empleados</button>
        </div>
    )
}

export {
    PerfilEmpleado,
    PerfilEmpresa
}