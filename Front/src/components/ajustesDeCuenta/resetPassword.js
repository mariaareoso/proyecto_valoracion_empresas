//componente de reseteo de contraseña

import React from "react";

import { useState } from "react";

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

const ResetPassword = () => {
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
        kind={"NewPassword"}
        id={"NewPassword"}
        name={"NewPassword"}
        value={contraseña}
        setValue={setContraseña}
      ></UseLabelInput>
      <input type="submit" value="Guardar"></input>
    </form>
  );
};

export default ResetPassword;
