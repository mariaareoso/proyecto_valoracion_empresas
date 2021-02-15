import Footer from "../components/Footer";
import TextLeft from "../components/TextLeft";
import TextRight from "../components/TextRight";
import SearchHook from "../components/SearchHook";
import Navigation from "../components/Navigation";
import usuario from '../image/usuario.png'
import empresa from '../image/empresa.png'
import sitioweb from '../image/sitioweb.png'
import empleado from '../image/empleado.png'
import '../css/style.css'

function Home() {
    return (
        <div>
            <div className='pagina'>
                <Navigation></Navigation>
                <SearchHook></SearchHook>
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