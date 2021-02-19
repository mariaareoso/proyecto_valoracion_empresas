import useAuth from '../shared/hooks/useAuth';

export default function ShowToEmployed({ children }) {
  const { userInfo } = useAuth();

  const empleado = userInfo.empleado === 1

  return <>{empleado ? children : null}</>;

}
