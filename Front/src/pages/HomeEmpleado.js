import NavigationEmpleado from '../components/Empleado/NavigationEmpleado'
import Footer from '../components/Empleado/Footer'
import SearchHook from '../components/buscador/SearchHook'
import TextRight from '../components/Empleado/TextRight'
import TextLeft from '../components/Empleado/TextLeft'
import usuario from '../image/usuario.png'
import empresa from '../image/empresa.png'
import sitioweb from '../image/sitioweb.png'
import empleado from '../image/empleado.png'

function HomeEmpleado() {
    return (
        <div>
            <NavigationEmpleado></NavigationEmpleado>
            <SearchHook></SearchHook>
            <main className='context'>
                <TextRight img={sitioweb} titulo='Sitio web'></TextRight>
                <TextLeft img={usuario} titulo='Usuario'></TextLeft>
                <TextRight img={empleado} titulo='Empleado'></TextRight>
                <TextLeft img={empresa} titulo='Empresa'></TextLeft>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default HomeEmpleado