import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

function SearchHook(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push(`/empresaslist?query=${data.query}`);
  }


  return (
    <div className='searchGroup'>
      <form className='search' onSubmit={handleSubmit(onSubmit)
      }>
        <div className='extraSearch' />
        <input className='inputSearch' type="search" name="query" ref={register} placeholder='Buscar....' />
        <input className='botonimagen' type="submit" value="" />
      </form>
    </div>
  );
}

export default SearchHook;

// onClick={() => { history.push('/empresaslist') }}