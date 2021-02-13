import useAuth from '../shared/hooks/useAuth';

export default function ShowToNoLoggedInUsers({ children }) {
  const { isUserLogged } = useAuth();

  return <>{!isUserLogged ? children : null}</>;
}
