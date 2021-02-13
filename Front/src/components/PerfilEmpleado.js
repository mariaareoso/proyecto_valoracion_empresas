import { useForm } from 'react-hook-form';
import { updateInfoUser } from '../http/apiSharpView';

function PerfilEmpleado({ usuario }) {
    const { handleSubmit, reset } = useForm();

    const updateInfo = async (data) => {
        await updateInfoUser(data.nombre, data.password, data.email, data.pais, data.ciudad, data.link);
        console.log(data);
        reset();
    }

    console.log(usuario);

    return (
        <form className='Form' onSubmit={handleSubmit(updateInfo)}>
            <h2 className='titulo'>Perfil empleado</h2>
            <div>
                <h3>Datos personales</h3>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type='text' placeholder={usuario.nombre}></input>
                {/* <label htmlFor="primerApellido">1º Apellido</label>
                <input id="primerApellido" name="primerApellido" type='text' placeholder={usuario.primerApellido}></input>
                <label htmlFor="segundoApellido">2º Apellido</label>
                <input id="segundoApellido" name="segundoApellido" type='text' placeholder={usuario.segundoApellido}></input> */}
                <label htmlFor="pais">Pais</label>
                <input id="pais" name="pais" type='text' placeholder={usuario.pais}></input>
                <label htmlFor="nombre">Ciudad</label>
                <input id="ciudad" name="ciudad" type='text' placeholder={usuario.ciudad}></input>
                <label htmlFor="link">Foto de perfil</label>
                <input id="link" name="link" type='link' placeholder={usuario.link}></input>
            </div>
            <div>
                <h3>Datos Profesionales</h3>
                <label htmlFor="nombreEmpresa">Empresa</label>
                <input id="nombreEmpresa" name="nombreEmpresa" type='text' value={usuario.nombre_empresa}></input>
                {/* <label htmlFor="nombre">Pais</label>
                <input id="nombre" name="nombre" type='text' value={usuario.nombre_paisEmpresa}></input> */}
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
                <input id="email" name="email" type='email' placeholder={usuario.email}></input>
                <label htmlFor="clave">Antigua Contraseña</label>
                <input id="clave" name="clave" type='text' readOnly placeholder='******'></input>
                <label htmlFor="password">Nueva Contraseña</label>
                <input id="password" name="password" type='password'></input>
                <label htmlFor="repeatPassword">Repita Contraseña</label>
                <input id="repeatPassword" name="repeatPassword" type='password'></input>
            </div>
            <input type="submit" value='Guardar' />
        </form>
    )
}

export default PerfilEmpleado
