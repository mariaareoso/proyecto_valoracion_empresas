import useAuth from '../shared/hooks/useAuth';

export default function ShowToLoggedInUsers({ children }) {
  const { isUserLogged } = useAuth();

  return <>{isUserLogged ? children : null}</>;
}
