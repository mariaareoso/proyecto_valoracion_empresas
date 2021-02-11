import { useState, useEffect } from 'react';
import { search } from '../http/apiSharpView';
import NavigationLogin from '../components/home/NavigationLogin';
import Footer from "../components/home/Footer";
import EmpresaList from '../components/buscador/EmpresaList';
import { useQuerySearch } from '../shared/hooks/useQuery';


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
                <NavigationLogin></NavigationLogin>
                <main className='context'>
                    <EmpresaList empresas={empresas} />
                </main>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default EmpresasList