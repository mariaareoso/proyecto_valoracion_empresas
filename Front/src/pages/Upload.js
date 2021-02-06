import { useForm } from 'react-hook-form';

function Upload() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="image"></label>
      <input type="file" name="image" ref={register} />
      <input type="submit" />
    </form>
  );
}

export default Upload;
