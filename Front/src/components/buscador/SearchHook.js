import { useForm } from 'react-hook-form';

function SearchHook(props) {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input name="query" ref={register} />
        <input type="submit" />
      </form>
    </>
  );
}

export default SearchHook;
