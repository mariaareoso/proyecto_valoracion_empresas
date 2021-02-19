import { updateInfoUser } from "../http/apiSharpView";
import useAuth from "../shared/hooks/useAuth";
import Navigation from "../components/Navigation"
import Footer from '../components/Footer'
import ShowToEmployed from "../components/ShowToEmployed";
import ShowToEmpresa from "../components/ShowToEmpresa";
import { PerfilEmpresa, PerfilEmpleado } from "../components/Perfiles";
import { useHistory } from "react-router-dom";

import '../css/style.css'

function Perfil() {
    const { userInfo } = useAuth();

    return (
        <div>
            <div className='pagina'>
                <Navigation></Navigation>
                <main>

                    <ShowToEmployed>
                        <PerfilEmpleado userInfo={userInfo} onSubmit={updateInfoUser}></PerfilEmpleado>
                    </ShowToEmployed>
                    <ShowToEmpresa>
                        <PerfilEmpresa userInfo={userInfo} onSubmit={updateInfoUser}></PerfilEmpresa>
                    </ShowToEmpresa>
                </main>
            </div>
            <Footer></Footer>
        </div >
    )

}

export default Perfil