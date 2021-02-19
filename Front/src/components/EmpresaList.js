import { EmpresaSummary } from './EmpresaSummary';

function EmpresaList({ empresas }) {
  return (
    <section>
      {empresas.map((item) => {
        return <EmpresaSummary key={item.idusuario} empresa={item}></EmpresaSummary>;
      })}
    </section>
  );
}

export default EmpresaList;
