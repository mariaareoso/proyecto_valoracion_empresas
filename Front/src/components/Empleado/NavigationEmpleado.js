import { useHistory } from 'react-router'
import Avatar from '../Avatar/avatar'
import './Navigation.css'

function NavigationEmpleado() {
    const history = useHistory();
    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/homeEmpleado') }}>Sharp View</p>
            <div className='PopUp' >
                <Avatar></Avatar>
            </div>
        </section>
    )
}

export default NavigationEmpleado
