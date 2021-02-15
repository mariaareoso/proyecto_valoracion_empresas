import pirata from '../image/pirate.png'
import empresa from '../image/bag-on-head.png'

import '../css/style.css'

function AvatarImageUser(props) {

    return (
        <div className="profile">
            <img src={pirata} alt='foto avatar' />
        </div>
    )
}

function AvatarImageEmpresa(props) {

    return (
        <div className="profile">
            <img src={empresa} alt='foto avatar' />
        </div>
    )
}

export { AvatarImageUser, AvatarImageEmpresa }