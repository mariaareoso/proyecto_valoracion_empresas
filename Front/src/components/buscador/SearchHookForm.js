import { useState } from 'react';
import EmpresaList from './EmpresaList';
import SearchHook from './SearchHook';
import { search } from '../../http/apiSharpView';

function SearchHookForm() {
  const [empresas, setEmpresas] = useState([]);

  const onSubmit = async (data) => {
    const empresaData = await search(data.query);
    console.log({ empresaData }, 'SearchHookFrom');
    setEmpresas(empresaData);
  };

  return (
    <>
      <SearchHook onSubmit={onSubmit}></SearchHook>
      <EmpresaList empresas={empresas}></EmpresaList>
    </>
  );
}

export default SearchHookForm;
