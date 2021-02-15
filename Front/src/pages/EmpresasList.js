import { useState, useEffect } from 'react';
import { useQuerySearch } from '../shared/hooks/useQuery';
import { search } from '../http/apiSharpView';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import EmpresaList from '../components/EmpresaList';
// import SearchHook from '../components/SearchHook';
// import StarRating from '../components/StarRating';

import '../css/style.css'

function EmpresasList() {
    const params = useQuerySearch();
    const query = params.get('query');
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const loadEmpresas = async () => {
            const empresaData = await search(query);
            setEmpresas(empresaData);
        }
        loadEmpresas();
    }, [query])

    console.log(empresas, 'empresasListas');


    return (
        <div>
            <div className='pagina'>
                <Navigation></Navigation>
                <main className='context'>
                    <EmpresaList empresas={empresas} />
                </main>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default EmpresasList
