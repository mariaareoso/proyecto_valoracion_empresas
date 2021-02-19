import useAuth from "../shared/hooks/useAuth";

export default function ShowEmployedNoValidate({ validacion, children }) {
  const { userInfo } = useAuth()

  const validado = validacion === 0

  return <>{validado ? children : null}</>;

}
