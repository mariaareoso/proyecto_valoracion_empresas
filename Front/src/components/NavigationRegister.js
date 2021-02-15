import { useHistory } from 'react-router'
import RegisterRodal from "./RegisterRodal";

function NavigationRegister() {
    const history = useHistory();
    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/') }}>Sharp View</p>
            <div className='PopUp' >
                <RegisterRodal />
            </div>
        </section>
    )
}

export default NavigationRegister
