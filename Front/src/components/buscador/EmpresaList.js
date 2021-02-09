
import EmpresaSummary from './EmpresaSummary';


function EmpresaList({ empresas }) {

  console.log(empresas);

  return (
    <section>
      {empresas.map((item) => {
        return <EmpresaSummary key={`empresa_${item.idempresa}`} empresa={item}></EmpresaSummary>;
      })}
    </section>
  );
}

export default EmpresaList;
