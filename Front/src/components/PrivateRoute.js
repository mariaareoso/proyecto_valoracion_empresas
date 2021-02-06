import { Redirect } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

function PrivateRoute({ children }) {
  const { userLogged } = useAuth();
  return (
    <>
      <h2>PrivateRoute</h2>
      {userLogged ? children : <Redirect to="/login"></Redirect>}
    </>
  );
}

export default PrivateRoute;
