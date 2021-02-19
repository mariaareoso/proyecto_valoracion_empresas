import { LoginPopUP } from './Modal'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import ShowToLoggedInUsers from './ShowToLoggedInUsers'
import ShowToNoLoggedInUsers from './ShowToNoLoggedInUsers'
import AvatarMenu from './Avatar';
import useAuth from '../shared/hooks/useAuth';

import '../css/style.css'
import ShowToEmployed from './ShowToEmployed';
import ShowToEmpresa from './ShowToEmpresa';

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
                    <ShowToEmployed>
                        <div className='navLogerUser'>
                            <Link to='/'>Inicio</Link>
                            <Link to='/users/iduser'>Perfil de usuario</Link>
                            <button onClick={logUserOut}> Cerrar sesión</button>
                        </div>
                    </ShowToEmployed>
                    <ShowToEmpresa>
                        <div className='navLogerUser'>
                            <Link to='/'>Inicio</Link>
                            <Link to='/empresaeditinfo'>Perfil de empresa</Link>
                            <Link to='/users/iduser'>Ajustes</Link>
                            <button onClick={logUserOut}> Cerrar sesión</button>
                        </div>
                    </ShowToEmpresa>
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
