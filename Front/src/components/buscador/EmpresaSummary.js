import PopUp from "../Modal";


function EmpresaSummary(props) {
  const { empresa } = props;
  return (
    <article>
      <h3>{empresa.nombre_empresa}</h3>
      <PopUp></PopUp>
    </article>
  );
}

export default EmpresaSummary;
