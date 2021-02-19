
export default function ShowToValidateUser({ children, validation }) {

  const validacion = validation === 1

  return <>{validacion ? children : null}</>;

}
