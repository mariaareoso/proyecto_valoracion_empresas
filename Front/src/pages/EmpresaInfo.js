import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/home/Footer';
import NavigationLogin from '../components/home/NavigationLogin';
import { InfoEmpresa } from '../components/InfoEmpresa/InfoEmpresaMenu';
import { getEmpresaInfo } from '../http/apiSharpView';

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

    console.log(empresa, 'punto 1');

    return (
        <section>
            <div>
                <NavigationLogin></NavigationLogin>
                <InfoEmpresa empresa={empresa} ></InfoEmpresa>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </section>
    );
}

export default EmpresaInfo;