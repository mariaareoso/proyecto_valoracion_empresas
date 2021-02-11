import RegisterForm from './RegisterFrom';
import useAuth from '../../../shared/hooks/useAuth';

function Register() {
  const { signIn } = useAuth;
  return <RegisterForm onSubmit={signIn}></RegisterForm>;
}

export default Register;
