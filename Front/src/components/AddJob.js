import { AddJobForm } from './Forms';
import '../css/LoginForm.css'
import { addJob } from '../http/apiSharpView'

function AddJob() {

  return (
    <div>
      <AddJobForm onSubmit={addJob}></AddJobForm>
    </div>
  )
}

export default AddJob;