import LoginForm from './LoginFrom';
import useAuth from '../../../shared/hooks/useAuth';

function Login() {
  const { signIn } = useAuth;
  return <LoginForm onSubmit={signIn}></LoginForm>;
}

export default Login;
