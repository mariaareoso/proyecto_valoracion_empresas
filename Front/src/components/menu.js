import React from 'react';
import { useHistory } from 'react-router'
import logOut from '../image/log-out.png'
import user from '../image/user.png'
import '../css/Avatar.css'
import 'antd/dist/antd.css';
import useAuth from '../shared/hooks/useAuth';


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
    console.log({ signOut });

    const openPerfil = () => {
        history.push("/users/iduser");
    }

    const logUserOut = () => {
        signOut();
    }


    return (
        <ul className='menu'>
            <h3 className='userName'>Nombre usuario</h3>
            <h5 className='userJob'>Puesto usuario</h5>
            <DropdownItem icon={user} onAction={openPerfil}>Perfil</DropdownItem>
            <DropdownItem icon={logOut} onAction={logUserOut}>Salir</DropdownItem>
        </ul>)

}


export default Menu


