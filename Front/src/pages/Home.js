import Navigation from "../components/home/Navigation";
import TextLeft from "../components/home/TextLeft";
import TextRight from "../components/home/TextRight";
import Footer from "../components/home/Footer";
import usuario from '../image/usuario.png'
import empresa from '../image/empresa.png'
import sitioweb from '../image/sitioweb.png'
import empleado from '../image/empleado.png'
import SearchHookForm from "../components/buscador/SearchHookForm";

function Home() {
    return (
        <div>
            <div className='pagina'>
                <Navigation></Navigation>
                <SearchHookForm></SearchHookForm>
                <main className='context'>
                    <TextRight img={sitioweb} titulo='Sitio web'></TextRight>
                    <TextLeft img={usuario} titulo='Usuario'></TextLeft>
                    <TextRight img={empleado} titulo='Empleado'></TextRight>
                    <TextLeft img={empresa} titulo='Empresa'></TextLeft>
                </main>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default Home