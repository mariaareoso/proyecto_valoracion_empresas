import EmpresaSummary from './EmpresaSummary';

function EmpresaList(props) {
  console.log(props);
  return (
    <section>
      {props.empresas.map((item) => {
        console.log(item);
        return <EmpresaSummary key={item.idempresa} empresa={item}></EmpresaSummary>;
      })}
    </section>
  );
}

export default EmpresaList;
