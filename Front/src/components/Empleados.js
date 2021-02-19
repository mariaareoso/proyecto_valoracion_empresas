import React, { useState, useEffect } from "react";

function EmployedsList({ empleados }) {

    console.log(empleados.listaEmpleados);

    const listaEmpleados = empleados.listaEmpleados.map((empleado) => {
        return (
            <tr key={empleado}>
                <td>{empleado.idusuario}</td>
                <td>{empleado.puesto}</td>
                <td>{empleado.fecha_inicio}</td>
                <td>{empleado.fecha_fin}</td>
                <td>{empleado.validacion}</td>
            </tr>
        );
    });

    return (
        <table className="empleados">
            <tr className='tablaCabecera' >
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

export default EmployedsList;