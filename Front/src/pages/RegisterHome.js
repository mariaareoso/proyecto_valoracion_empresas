import NavigationRegister from "../components/NavigationRegister";
import TextLeft from "../components/TextLeft";
import TextRight from "../components/TextRight";
import Footer from "../components/Footer";
import usuario from '../image/usuario.png'
import empresa from '../image/empresa.png'
import sitioweb from '../image/sitioweb.png'
import empleado from '../image/empleado.png'
import SearchHook from "../components/SearchHook";
import '../css/Home.css'

function Home() {
    return (
        <div>
            <div className='pagina'>
                <NavigationRegister></NavigationRegister>
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