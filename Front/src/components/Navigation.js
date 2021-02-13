import { LoginPopUP } from './Modal'
import { useHistory } from 'react-router'
import ShowToLoggedInUsers from './ShowToLoggedInUsers'
import ShowToNoLoggedInUsers from './ShowToNoLoggedInUsers'
import '../css/Navigation.css'
import AvatarMenu from './avatar';

function NavigationLogin() {
    const history = useHistory();
    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/') }}>Sharp View</p>
            <div className='PopUp' >
                <ShowToNoLoggedInUsers>
                    <LoginPopUP />
                </ShowToNoLoggedInUsers>
                <ShowToLoggedInUsers>
                    <AvatarMenu />
                </ShowToLoggedInUsers>
            </div>
        </section>
    )
}

export default NavigationLogin
