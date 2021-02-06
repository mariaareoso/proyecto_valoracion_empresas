import useAuth from '../shared/hooks/useAuth';
import RegisterFrom from './RegisterFrom';

function Register() {
  const { signUp } = useAuth;
  return (
    <>
      <RegisterFrom onSubmit={signUp}></RegisterFrom>
    </>
  );
}

export default Register;
