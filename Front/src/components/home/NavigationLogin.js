import Modal from '../Modal/Rodal'
import { useHistory } from 'react-router'
import './Navigation.css'

function NavigationLogin() {
    const history = useHistory();
    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/') }}>Sharp View</p>
            <div className='PopUp' >
                <Modal />
            </div>
        </section>
    )
}

export default NavigationLogin
