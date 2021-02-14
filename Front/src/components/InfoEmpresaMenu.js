import React from 'react'
import { Progress } from 'antd';
import { AddJobPopUP, ValorarPopUP } from './Modal';
import StarValoracion from './StarValoracion'
import ShowToLoggedInUsers from './ShowToLoggedInUsers';

import 'antd/dist/antd.css';

function InfoEmpresa({ empresa }) {
    const { empresaData } = empresa
    // console.log(empresaData, 'Datos de empresa');
    return (
        <div>
            <section>
                <p>{empresaData.datos.link}</p>
                <h2>{empresaData.datos.nombre_empresa}</h2>
                <ShowToLoggedInUsers>
                    <AddJobPopUP empresa={empresaData.datos} />
                    <ValorarPopUP />
                </ShowToLoggedInUsers>
            </section>

            <section>
                <h2>{empresaData.datos.nombre_empresa}</h2>
                <p>{empresaData.datos.web}</p>
                <p>Resumen</p>
                <p>{empresaData.datos.bio}</p>
                <Progress type="circle" percent={((empresaData.valoraciones[0].Accesibilidad) * 10)} />
                <Progress type="circle" percent={((empresaData.valoraciones[0].Ambiente_de_trabajo) * 10)} />
                <Progress type="circle" percent={((empresaData.valoraciones[0].Conciliacion) * 10)} />
                <Progress type="circle" percent={((empresaData.valoraciones[0].Estabilidad) * 10)} />
                <Progress type="circle" percent={((empresaData.valoraciones[0].Posibilidad_de_ascenso) * 10)} />
                <Progress type="circle" percent={((empresaData.valoraciones[0].Sueldo) * 10)} />
            </section>
            <section>
                <h2>Opiniones</h2>
                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <p>{opinion.opinion}</p>
                        </React.Fragment>
                    )
                })}


            </section>
            <section>
                <h2>Accesibilidad</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.accesibilidad}</StarValoracion>
                        </React.Fragment>
                    )
                })}

            </section>
            <section>
                <h2>Ambiente de trabajo</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.ambiente_de_trabajo}</StarValoracion>
                        </React.Fragment>
                    )
                })}

            </section>
            <section>
                <h2>Conciliacion</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.conciliacion}</StarValoracion>
                        </React.Fragment>
                    )
                })}

            </section>
            <section>
                <h2>Estabilidad</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.estabilidad}</StarValoracion>
                        </React.Fragment>
                    )
                })}

            </section>
            <section>
                <h2>Posibilidad de ascenso</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.posibilidad_de_ascenso}</StarValoracion>
                        </React.Fragment>
                    )
                })}

            </section>
            <section>
                <h2>Sueldos</h2>

                {empresaData.opiniones.map((opinion) => {
                    return (
                        <React.Fragment key={opinion.idusuario}>
                            <div>{opinion.idusuario}</div>
                            <StarValoracion>{opinion.sueldos}</StarValoracion>
                        </React.Fragment>
                    )
                })}
            </section>
        </div>

    );
}

export { InfoEmpresa }