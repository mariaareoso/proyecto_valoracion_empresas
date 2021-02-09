import React from 'react';
import 'antd/dist/antd.css';
import edit from './image/edit.png'
import logOut from './image/log-out.png'
import user from './image/user.png'
import './Avatar.css'

function menu(props) {
    const DropdownItem = (props) => {
        return (
            <li className='item'>
                <img className='icon' src={props.icon} alt='' />
                <a className='enlace' href="/">{props.children}</a>
            </li>
        )
    };
    return (
        <ul className='menu'>
            <h3 className='userName'>Nombre usuario</h3>
            <h5 className='userJob'>Puesto usuario</h5>
            <DropdownItem icon={user}>Perfil</DropdownItem>
            <DropdownItem icon={edit}>Editar</DropdownItem>
            <DropdownItem icon={logOut}>Salir</DropdownItem>
        </ul>)

}


export default menu