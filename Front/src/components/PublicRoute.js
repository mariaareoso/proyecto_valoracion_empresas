import { Redirect } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

export default function PublicRoute({ children }) {
  const { isUserLogged } = useAuth();
  return <>{!isUserLogged ? children : <Redirect to="/"></Redirect>}</>;
}
