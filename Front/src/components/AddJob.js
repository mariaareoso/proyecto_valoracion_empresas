import { AddJobForm } from './Forms';
import { addJob } from '../http/apiSharpView'

function AddJob(props) {
  const { empresa } = props
  return (
    <div>
      <AddJobForm empresa={empresa} onSubmit={addJob}></AddJobForm>
    </div>
  )
}

export default AddJob;