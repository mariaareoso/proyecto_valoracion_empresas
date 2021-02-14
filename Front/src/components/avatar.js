import Dropdown from 'antd/lib/dropdown';
import React from 'react';

import Menu from './menu';
import AvatarImage from './avatarImage';

import 'antd/dist/antd.css';
import '../css/Avatar.css';

function AvatarMenu() {
    return (
        < Dropdown className="action" overlay={<Menu />}>
            <div onClick={e => e.preventDefault()}>
                <AvatarImage />
            </div>
        </Dropdown>

    )
}

export default AvatarMenu