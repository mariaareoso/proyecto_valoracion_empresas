import { LoginForm } from './Forms';
import useAuth from '../shared/hooks/useAuth';
import '../css/LoginForm.css'


function Login() {
  const { signIn } = useAuth;

  return (
    <div>
      <LoginForm onSubmit={signIn}></LoginForm>

    </div>
  )
}

export default Login;

