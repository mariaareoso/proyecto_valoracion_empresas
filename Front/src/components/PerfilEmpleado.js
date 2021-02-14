import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateInfoUser } from '../http/apiSharpView';

function PerfilEmpleado({ usuario }) {
    const { handleSubmit, reset } = useForm();

    const updateInfo = async () => {
        await updateInfoUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, password);
        reset();
    }

    const [nombre, setNombre] = useState(usuario.nombre)
    const [primerApellido, setPrimerApellido] = useState(usuario.primerApellido)
    const [segundoApellido, setSegundoApellido] = useState(usuario.segundoApellido)
    const [pais, setPais] = useState(usuario.pais)
    const [ciudad, setCiudad] = useState(usuario.ciudad)
    const [email, setEmail] = useState(usuario.email)
    const [password, setPassword] = useState(usuario.password)

    console.log('usuario.nombre', nombre);

    return (
        <form className='Form' onSubmit={handleSubmit(updateInfo)}>
            <h2 className='titulo'>Perfil empleado</h2>
            <div>
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
                <label htmlFor="link">Foto de perfil</label>
                <input id="link" name="link" type='link' onchange value={usuario.link}></input>
            </div>
            <div>
                <h3>Datos Profesionales</h3>
                <label htmlFor="nombreEmpresa">Empresa</label>
                <input id="nombreEmpresa" name="nombreEmpresa" type='text' value={usuario.nombre_empresa}></input>
                <label htmlFor="paisEmpresa">Pais</label>
                <input id="paisEmpresa" name="paisEmpresa" type='text' value={usuario.paisEmpresa}></input>
                <label htmlFor="sede">Ciudad</label>
                <input id="sede" name="sede" type='text' value={usuario.sede}></input>
                {/* <label htmlFor="validacion">Validado</label>
                <input id="validacion" name="validacion" type='color' value={usuario.validacion}></input> */}
                <label htmlFor="puesto">Puesto</label>
                <input id="puesto" name="puesto" type='text' value={usuario.puesto}></input>
            </div>
            <div>
                <h3>Datos cuenta de usuario</h3>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="clave">Antigua Contraseña</label>
                <input id="clave" name="clave" type='text' readOnly value='******'></input>
                <label htmlFor="password">Nueva Contraseña</label>
                <input id="password" name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label htmlFor="repeatPassword">Repita Contraseña</label>
                <input id="repeatPassword" name="repeatPassword" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <input type="submit" value='Guardar' />
        </form>
    )
}

export default PerfilEmpleado


