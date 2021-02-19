import useAuth from '../shared/hooks/useAuth';

export default function ShowToEmpresa({ children }) {
  const { userInfo } = useAuth();

  const empresa = userInfo.empresa === 1

  return <>{empresa ? children : null}</>;

}
