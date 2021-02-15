import { addJob } from '../http/apiSharpView'
import { ValorarForm } from './Forms';


function Valorar(params) {
    return (
        <div>
            <ValorarForm onSubmit={addJob}></ValorarForm>
        </div>
    )
}

export default Valorar