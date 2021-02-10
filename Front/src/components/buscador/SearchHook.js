import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './Buscador.css'

function SearchHook() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push(`/empresaslist?query=${data.query}`);
  }

  return (
    <div>
      <div className='searchGroup'>
        <form className='search' onSubmit={handleSubmit(onSubmit)}>
          <div className='extraSearch' />
          <input className='inputSearch' type="search" name="query" ref={register} placeholder='Buscar....' />
          <input className='botonimagen' type="submit" value="" />
        </form>
      </div>
    </div>
  );
}

export default SearchHook;