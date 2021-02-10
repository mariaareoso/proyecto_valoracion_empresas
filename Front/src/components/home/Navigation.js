import Login from "./login/Login";
import PopUp from "../Modal/Modal"
import './Navigation.css'
import { useHistory } from 'react-router'

function Navigation() {
    const history = useHistory();
    return (
        <section className='navegation'>
            <p className='logo' onClick={() => { history.push('/') }}>Sharp View</p>
            <div className='PopUp' >
                <PopUp><Login /></PopUp>
            </div>
        </section>
    )
}

export default Navigation
