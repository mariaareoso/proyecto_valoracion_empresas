import LoginForm from './LoginFrom';
import useAuth from '../../../shared/hooks/useAuth';
import './LoginForm.css'


function Login() {
  const { signIn } = useAuth;

  return (
    <div>
      <LoginForm onSubmit={signIn}></LoginForm>

    </div>
  )
}

export default Login;