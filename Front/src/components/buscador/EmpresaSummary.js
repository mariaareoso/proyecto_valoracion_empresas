

function EmpresaSummary(props) {
  const { empresa } = props;
  return (
    <article>
      <h3>{empresa.nombre_empresa}</h3>
    </article>
  );
}

export default EmpresaSummary;
