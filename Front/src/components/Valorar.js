import { addJob } from '../http/apiSharpView'
import { ValorarForm } from './Forms';


function Valorar(props) {

    const { empresa } = props


    return (
        <div>
            <ValorarForm empresa={empresa}></ValorarForm>
        </div>
    )
}

export default Valorar