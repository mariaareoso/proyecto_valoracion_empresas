import { AddEmpresaForm, AddJobForm } from './Forms';
import { addJob } from '../http/apiSharpView'

function AddEmpresa(props) {
  const { empresa } = props

  return (
    <div>
      <AddEmpresaForm empresa={empresa} onSubmit={addJob}></AddEmpresaForm>
    </div>
  )
}

export default AddEmpresa;