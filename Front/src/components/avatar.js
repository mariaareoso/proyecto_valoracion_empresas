import Dropdown from 'antd/lib/dropdown';
import React from 'react';

import Menu from './menu';
import { AvatarImageUser } from './avatarImage';

import 'antd/dist/antd.css';

function AvatarMenu() {
    return (
        < Dropdown className="action" overlay={<Menu />}>
            <div onClick={e => e.preventDefault()}>
                <AvatarImageUser />
            </div>
        </Dropdown>

    )
}

export default AvatarMenu