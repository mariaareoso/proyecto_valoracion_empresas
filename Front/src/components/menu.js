import React from 'react';
import { useHistory } from 'react-router'
import useAuth from '../shared/hooks/useAuth';
// import { getRol } from '../http/apiSharpView';

import 'antd/dist/antd.css';
import '../css/Avatar.css'

import user from '../image/user.png'
import logOut from '../image/log-out.png'


const DropdownItem = (props) => {
    const handleClick = (e) => {
        props.onAction(e);
    }
    return (
        <li className='item'>
            <img className='icon' src={props.icon} alt='' />
            <button className='enlace' onClick={handleClick}>{props.children}</button>
        </li>
    )
};

function Menu(props) {

    const history = useHistory();
    const { signOut } = useAuth();
    // const { signOut, userData } = useAuth();

    const openPerfil = () => {
        history.push("/users/iduser");
    }

    const logUserOut = () => {
        signOut();
    }

    // console.log(userData, 'userData');

    // const [userRol, setUserRoll] = useState('');

    // useEffect(() => {
    //     const infoEmpresa = async () => {
    //         setUserRoll(await getRol(userData.id))
    //     }
    //     infoEmpresa();
    // }, [userData.id])

    // const empresa = userRol[0].empresa
    // const empleado = userRol[0].empleado

    // console.log(userRol, 'userRol');
    // console.log(empresa, 'userRolEmpresa');
    // console.log(empleado, 'userRolEmpleado');


    // // return ('Hola')

    // if (empresa === 1) {
    //     return (
    //         <ul className='menu'>
    //             <h3 className='userName'>Nombre usuario</h3>
    //             <h5 className='userJob'>Puesto usuario</h5>
    //             <DropdownItem icon={user} onAction={openPerfil}>Perfil Empresa</DropdownItem>
    //             <DropdownItem icon={logOut} onAction={logUserOut}>Salir</DropdownItem>
    //         </ul>)
    // }

    // if (empleado === 1) {

    return (
        <ul className='menu'>
            <h3 className='userName'>Nombre usuario</h3>
            <h5 className='userJob'>Puesto usuario</h5>
            <DropdownItem icon={user} onAction={openPerfil}>Perfil</DropdownItem>
            <DropdownItem icon={logOut} onAction={logUserOut}>Salir</DropdownItem>
        </ul>)
    //}
}

export default Menu