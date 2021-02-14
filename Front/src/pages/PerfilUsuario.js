import { useEffect, useState } from "react";
import { getUserInfo, updateInfoUser } from "../http/apiSharpView";
import useAuth from "../shared/hooks/useAuth";
import Navigation from "../components/Navigation"
import PerfilEmpleado from "../components/PerfilEmpleado";
import Footer from '../components/Footer'

function PerfilUser() {
    const { userData } = useAuth();
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const empleadoData = await getUserInfo(userData.id);
            setUsuario(empleadoData);
        }
        loadUsers()
    }, [userData.id]);

    return (
        <div>
            <Navigation></Navigation>
            <main>
                {usuario.map((item) => {
                    return < PerfilEmpleado key={item.nombre} usuario={item} onSubmit={updateInfoUser} />
                })
                }
            </main>
            <Footer></Footer>
        </div >
    )

}

export default PerfilUser