// import { useState } from 'react';
// import { search } from '../../http/apiSharpView';
// import EmpresaList from './EmpresaList';
import SearchHook from './SearchHook';
import '../../css/Home.css'

function SearchHookForm() {
  // const [empresas, setEmpresas] = useState([]);

  // const onSubmit = async (data) => {
  //   const empresaData = await search(data.query);
  //   setEmpresas(empresaData);
  // };

  return (
    <div >
      <SearchHook></SearchHook>
    </div>
  );
}

export default SearchHookForm;