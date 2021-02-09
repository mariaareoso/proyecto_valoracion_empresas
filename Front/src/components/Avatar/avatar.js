import React from 'react';
import AvatarImage from './avatarImage';
import './Avatar.css'
import 'antd/dist/antd.css';
import { Dropdown } from 'antd';
import menu from './menu'

function AvatarMenu() {
    return (
        < Dropdown className="action" overlay={menu} >
            <div onClick={e => e.preventDefault()}>
                <AvatarImage />
            </div>
        </Dropdown>

    )
}

export default AvatarMenu