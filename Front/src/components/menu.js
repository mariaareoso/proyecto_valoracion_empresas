import React, { useEffect } from 'react';
import { useHistory } from 'react-router'
import useAuth from '../shared/hooks/useAuth';

import 'antd/dist/antd.css';
import '../css/Avatar.css'

import user from '../image/user.png'
import logOut from '../image/log-out.png'
import perfilempresa from '../image/perfilEmpresa.png'
import home from '../image/home.png'
import settings from '../image/settings.png'



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


function MenuEmpleado(props) {

    const history = useHistory();
    const { signOut, userInfo } = useAuth();

    const openPerfil = () => {
        history.push("/users/iduser");
    }
    const toHome = () => {
        history.push("/");
    }

    const logUserOut = () => {
        signOut();
    }

    return (
        <ul className='menu'>
            <h3 className='userName'>{userInfo.nombre}</h3>
            <DropdownItem icon={home} onAction={toHome}>Inicio</DropdownItem>
            <DropdownItem icon={user} onAction={openPerfil}>Perfil</DropdownItem>
            <DropdownItem icon={logOut} onAction={logUserOut}>Salir</DropdownItem>
        </ul>)
}


function MenuEmpresa(props) {

    const history = useHistory();
    const { signOut, userInfo } = useAuth();

    const openPerfil = () => {
        history.push(`/empresaeditinfo/`);
    }

    const setting = () => {
        history.push("/users/iduser");
    }

    const logUserOut = () => {
        signOut();
    }

    const toHome = () => {
        history.push("/");
    }

    return (
        <ul className='menu'>
            <h3 className='userName'>{userInfo.nombre}</h3>
            <DropdownItem icon={home} onAction={toHome}>Inicio</DropdownItem>
            <DropdownItem icon={perfilempresa} onAction={openPerfil}>Empresa</DropdownItem>
            <DropdownItem icon={settings} onAction={setting}>Ajustes</DropdownItem>
            <DropdownItem icon={logOut} onAction={logUserOut}>Salir</DropdownItem>
        </ul>)
}



export { MenuEmpleado, MenuEmpresa }