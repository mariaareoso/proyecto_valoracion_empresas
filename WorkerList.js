import React, { useState, useEffect } from "react";
import "./workerList.css";
import useAuth from '../../shared/hooks/useAuth'

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

function WorkerList() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [dataUser] = useFetchAuth(
    `http://localhost:3012/users/listempleados/:idempresa`,
    token
  );

  const workers = [
    {idusuario=("Empleado"),
    puesto=("Puesto"),
    fecha_inicio=("Año Inicio"),
    fecha_fin=("Año Fin"),
    validacion=("Validar"),}
  ];

  const listaEmpleados = workers.map((worker) => {
    return (
      <tr key={worker}>
        <td>{worker.idusuario}</td>
        <td>{worker.puesto}</td>
        <td>{worker.fecha_inicio}</td>
        <td>{worker.fecha_fin}</td>
        <td>{worker.validacion}</td>
      </tr>
    );
  });

  return (
    <table className="empleados">
      <tr>
        <th>Empleado</th>
        <th>Puesto</th>
        <th>Año inicio</th>
        <th>Año fin</th>
        <th>Validar</th>
      </tr>
      {listaEmpleados}
    </table>
  );
}
const VentanaTablaEmpleados = () => {
  return (
    <section>
      <p className="encabezado">Empleados Registrados</p>

      <WorkerList></WorkerList>
    </section>
  );
};

export default VentanaTablaEmpleados;
