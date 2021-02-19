import Dropdown from 'antd/lib/dropdown';
import React from 'react';
import useAuth from '../shared/hooks/useAuth'
import { MenuEmpresa, MenuEmpleado } from './Menu';
import { AvatarImageUser } from './AvatarImage';

import 'antd/dist/antd.css';
import ShowToEmployed from './ShowToEmployed';
import ShowToEmpresa from './ShowToEmpresa';

function AvatarMenu() {
    const { userInfo } = useAuth()
    return (
        <div>
            <ShowToEmployed>
                < Dropdown className="action" overlay={<MenuEmpleado />}>
                    <div onClick={e => e.preventDefault()}>
                        <AvatarImageUser image={userInfo.photo} />
                    </div>
                </Dropdown>
            </ShowToEmployed>
            <ShowToEmpresa>
                < Dropdown className="action" overlay={<MenuEmpresa />}>
                    <div onClick={e => e.preventDefault()}>
                        <AvatarImageUser image={userInfo.photo} />
                    </div>
                </Dropdown>
            </ShowToEmpresa>
        </div>




    )
}

export default AvatarMenu