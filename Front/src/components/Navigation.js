import { LoginPopUP } from './Modal'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import ShowToLoggedInUsers from './ShowToLoggedInUsers'
import ShowToNoLoggedInUsers from './ShowToNoLoggedInUsers'
import AvatarMenu from './avatar';
import useAuth from '../shared/hooks/useAuth';

import '../css/style.css'

function NavigationLogin() {
    const history = useHistory();
    const { signOut } = useAuth();
    const logUserOut = () => {
        signOut();
    }

    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/') }}>Sharp View</p>
            <div className='PopUp' >
                <ShowToNoLoggedInUsers>
                    <LoginPopUP />
                </ShowToNoLoggedInUsers>
                <ShowToLoggedInUsers>
                    <div className='navLogerUser'>
                        <Link to='/users/iduser'>Perfil de usuario</Link>
                        <Link onClick={logUserOut}> Cerrar sesión</Link>
                    </div>
                </ShowToLoggedInUsers>
                <div className='avatarLogin'>
                    <ShowToLoggedInUsers>
                        <AvatarMenu />
                    </ShowToLoggedInUsers>
                </div>
            </div>
        </section>
    )
}

export default NavigationLogin
