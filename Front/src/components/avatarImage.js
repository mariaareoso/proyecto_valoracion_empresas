import pirata from '../image/pirate.png'

import '../css/style.css'


function AvatarImageUser({ image }) {

    const avatar = image ? `${process.env.REACT_APP_UPLOADS_URL}avatars/${image}` : pirata;

    return (
        <div className="profile">
            <img src={avatar} alt='foto avatar' />
        </div>
    )
}

function AvatarImageEmpresa({ image }) {

    const avatar = image ? `${process.env.REACT_APP_UPLOADS_URL}avatars/${image}` : pirata;

    return (
        <div className="profile">
            <img src={avatar} alt='foto avatar' />
        </div>
    )
}

export { AvatarImageUser, AvatarImageEmpresa }