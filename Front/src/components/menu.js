import React from 'react';
import logOut from '../image/log-out.png'
import user from '../image/user.png'
import '../css/Avatar.css'
import 'antd/dist/antd.css';

function Menu(props) {

    const DropdownItem = (props) => {
        return (
            <li className='item'>
                <img className='icon' src={props.icon} alt='' />
                <a className='enlace' href={props.direction}>{props.children}</a>
            </li>
        )
    };

    return (
        <ul className='menu'>
            <h3 className='userName'>Nombre usuario</h3>
            <h5 className='userJob'>Puesto usuario</h5>
            <DropdownItem icon={user} direction={"/users/iduser"}>Perfil</DropdownItem>
            <DropdownItem icon={logOut}>Salir</DropdownItem>
        </ul>)

}


export default Menu


