import useAuth from '../shared/hooks/useAuth';

function ShowToLoggedInUsers({ children }) {
  const { userLogged } = useAuth();

  return <>{userLogged ? children : null}</>;
}

export default ShowToLoggedInUsers;
