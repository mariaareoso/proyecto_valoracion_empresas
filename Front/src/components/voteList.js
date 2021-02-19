import React, { useState, useEffect } from "react";
import "./voteList.css";

const useFetchAuth = (url, auth) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json", Authorization: auth },
      });
      const body = await res.json();
      if (res.status !== 200) {
        console.warn("error", res);
      }

      setData(body);
    };
    getData();
  }, [url, auth]);
  return [data, setData];
};

function VoteList() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [dataUser] = useFetchAuth(
    `http://localhost:3005/users/listvaloraciones/:idempresa`,
    token
  );

  const votes = [
    { Empleado: "nombre", Comentario: "opinion", valoracion: "bb" },
  ];

  const listItems = votes.map((vote) => {
    return (
      <tr key={vote}>
        <td>{vote.nombre}</td>
        <td>{vote.Comentario}</td>
        <td>{vote.valoracion}</td>
      </tr>
    );
  });

  return (
    <table className="valoraciones">
      <tr>
        <th>Empleado</th>
        <th>Comentario</th>
        <th>Valoracion</th>
      </tr>
      {listItems}
    </table>
  );
}
const ValoracionTablaEmpleados = () => {
  return (
    <section>
      <p className="valoracion">Valoraciones Empleados</p>

      <VoteList></VoteList>
    </section>
  );
};

export default ValoracionTablaEmpleados;
