//componente de la primera pagina

import React from "react";
import { useState, useEffect } from "react";

const UseLabelInput = ({ kind, id, name, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input
        id={id}
        type={kind}
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      ></input>
    </div>
  );
};

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(url);

      if (res.status !== 200) {
        console.warn("error", res);
      }
      const body = await res.json();
      setData(body);
    };
    fetcher();
  }, [url]);

  return [data, setData];
};

const FormChangeAccount = () => {
  const [value, setValue] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, contraseña);
  };
  return (
    <form onSubmit={handleSubmit}>
      <UseLabelInput
        kind={"email"}
        id={"email"}
        name={"email"}
        value={value}
        setValue={setValue}
      ></UseLabelInput>
      <UseLabelInput
        kind={"password"}
        id={"password"}
        name={"password"}
        value={contraseña}
        setValue={setContraseña}
      ></UseLabelInput>
      <input type="submit" value="Enviar"></input>
    </form>
  );
};

export default FormChangeAccount;
