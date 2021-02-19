import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { InfoEmpresa } from '../components/InfoEmpresaMenu';
import { getEmpresaInfo } from '../http/apiSharpView';
import useAuth from '../shared/hooks/useAuth';

function EmpresaInfo() {
    const params = useParams();
    const [empresa, setEmpresa] = useState(null);

    useEffect(() => {
        const infoEmpresa = async () => {
            setEmpresa(await getEmpresaInfo(params.idempresa))
        }
        infoEmpresa();
    }, [params.idempresa])

    if (!empresa) return <div>Cargando...</div>;

    return (
        <section>
            <div className='pagina'>
                <Navigation></Navigation>
                <InfoEmpresa empresa={empresa} ></InfoEmpresa>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </section>
    );
}

export default EmpresaInfo;