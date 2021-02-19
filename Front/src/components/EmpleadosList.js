import React, { useState, useEffect } from "react";
import { format } from 'date-fns'
import { validEmpleado } from "../http/apiSharpView";
import { useParams } from "react-router-dom";
import ShowEmployedNoValidate from "./ShowEmployedNoValidate";

function EmployedsList({ empleados }) {
    const params = useParams();
    const groupEmpleados = empleados.listEmpleados

    const formatDate = (date => {
        if (!date) return ''
        return format(new Date(date), 'dd-MM-yyyy')
    })

    const validate = async (id, aspecto) => {
        await validEmpleado(aspecto, params.idempresa, id);
    }

    console.log(empleados);
    return (
        <section>
            <table>
                <tr>
                    <th>Nombre empleado</th>
                    <th>Puesto empleado</th>
                    <th>Fecha inicio</th>
                    <th>Fecha final</th>
                    <th>Validacion</th>
                </tr>
                {groupEmpleados.map((empleado) => {
                    return (
                        <>
                            <tr key={empleado}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.puesto}</td>
                                <td>{formatDate(empleado.fecha_inicio)}</td>
                                <td>{formatDate(empleado.fecha_fin)}</td>
                                <td>
                                    <ShowEmployedNoValidate validacion={empleado.validacion}>
                                        <button onClick={() => validate(empleado.idusuario, empleado.idaspecto)} > Validar</button>
                                    </ShowEmployedNoValidate>
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </section>
    )
}

export default EmployedsList;
