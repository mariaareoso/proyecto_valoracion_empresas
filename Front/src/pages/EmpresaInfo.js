import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoEmpresaMenu } from '../components/InfoEmpresa/InfoEmpresaMenu';
import { getEmpresaInfo } from '../http/apiSharpView';

function EmpresaInfo() {
    const params = useParams();
    const [empresa, setEmpresa] = useState({});

    useEffect(() => {
        const infoEmpresa = async () => {
            setEmpresa(await getEmpresaInfo(params.idempresa))
        }
        infoEmpresa();
    }, [params.idempresa])

    console.log(empresa, 'punto 1');


    return (
        <section>
            <div>
                <h1>ID: {params.idempresa} </h1>
                <InfoEmpresaMenu empresa={empresa} ></InfoEmpresaMenu>
            </div>
        </section>
    );
}

export default EmpresaInfo;