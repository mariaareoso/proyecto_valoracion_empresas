import EmpresaSummary from './EmpresaSummary';

function EmpresaList({ empresas }) {
  return (
    <section>
      {empresas.map((item) => {
        return <EmpresaSummary key={`Empresa:${item.idempresa}`} empresa={item}></EmpresaSummary>;
      })}
    </section>
  );
}

export default EmpresaList;
