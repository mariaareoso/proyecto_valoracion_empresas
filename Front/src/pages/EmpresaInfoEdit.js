import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { InfoEditEmpresa } from '../components/InfoEmpresaMenu';
import { getAspectos, getEmpresa } from '../http/apiSharpView';
import useAuth from '../shared/hooks/useAuth';

import '../css/style.css'

function EmpresaInfoEdit() {
    const [empresaEdit, setEmpresaEdit] = useState(null);

    const { userInfo } = useAuth()

    useEffect(() => {
        const infoEmpresa = async () => {
            setEmpresaEdit(await getEmpresa(userInfo.idsuario))
        }
        infoEmpresa();
    }, [userInfo.idsuario])

    if (!empresaEdit) return <div>Cargando...</div>;

    return (
        <section>
            <div className='pagina'>
                <Navigation></Navigation>
                <InfoEditEmpresa empresaEdit={empresaEdit} ></InfoEditEmpresa>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </section>
    );
}

export default EmpresaInfoEdit