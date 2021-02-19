export default function ShowEmployedNoValidate({ validacion, children }) {

  const validado = validacion === 0

  return <>{validado ? children : null}</>;

}
