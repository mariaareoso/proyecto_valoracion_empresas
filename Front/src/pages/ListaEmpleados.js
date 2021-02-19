import { useState, useEffect } from 'react';
import { ListEmpleados } from '../http/apiSharpView';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import EmployedsList from '../components/EmpleadosList';

import '../css/style.css'


function EmpresasList() {
    const params = useParams();
    const [empleados, setEmpleados] = useState(null);


    useEffect(() => {
        const loadEmpleados = async () => {
            const empleadoData = await ListEmpleados(params.idempresa);
            setEmpleados(empleadoData);
        }
        loadEmpleados();
    }, [params])

    if (!empleados) return <div>Cargando...</div>;

    return (
        <div>
            <div className='pagina'>
                <Navigation></Navigation>
                <main className='context'>
                    <EmployedsList empleados={empleados} />
                </main>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default EmpresasList