import React, { useEffect, useState } from 'react'
// import { Progress } from 'antd';
import { AddJobPopUP, ValorarPopUP } from './Modal';
import StarValoracion from './StarValoracion'
import Aspects from './Aspects';
import { getAspectos } from '../http/apiSharpView';
import ShowToNoLoggedInUsers from './ShowToNoLoggedInUsers';
import ShowToEmpresa from './ShowToEmpresa';
import { EmpresaSummaryEmployed, EmpresaSummaryEmpresa } from './EmpresaSummary';
import ShowToEmployed from './ShowToEmployed';


import 'antd/dist/antd.css';
import '../css/style.css'

function InfoEmpresa({ empresa }) {

    return (
        <div>
            <section>
                <ShowToNoLoggedInUsers>
                    <EmpresaSummaryEmployed empresaData={empresa}></EmpresaSummaryEmployed>
                </ShowToNoLoggedInUsers>
                <ShowToEmpresa>
                    <EmpresaSummaryEmployed empresaData={empresa}></EmpresaSummaryEmployed>
                </ShowToEmpresa>
                <ShowToEmployed>
                    <EmpresaSummaryEmployed empresaData={empresa}></EmpresaSummaryEmployed>
                </ShowToEmployed>
                {/* <div className='graficosEmpresa'>
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Accesibilidad) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Ambiente_de_trabajo) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Conciliacion) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Estabilidad) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Posibilidad_de_ascenso) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresa.empresaData.valoraciones[0].Sueldo) * 10)} />
                </div> */}
            </section>

            <div className='valoraciones' >
                <section>
                    <h2>Opiniones</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <p>{opinion.opinion}</p>

                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>

                <section>
                    <h2>Accesibilidad</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.accesibilidad}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>

                <section>
                    <h2>Ambiente de trabajo</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.ambiente_de_trabajo}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>

                <section>
                    <h2>Conciliacion</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.conciliacion}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>
                <section>
                    <h2>Estabilidad</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.estabilidad}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>
                <section>
                    <h2>Posibilidad de ascenso</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.posibilidad_de_ascenso}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>
                <section>
                    <h2>Sueldos</h2>
                    <article className='contenidoValoraciones'>
                        {empresa.empresaData.opiniones.map((opinion) => {
                            return (
                                <React.Fragment key={opinion.idusuario}>
                                    <img className='userAvatarValoracion' src={`http://localhost:8000/uploads/avatars/avatar_${opinion.idusuario}.png`} alt='foto avatar' />
                                    <StarValoracion>{opinion.sueldos}</StarValoracion>
                                </React.Fragment>
                            )
                        })}
                    </article>
                </section>
            </div >

        </div>

    );
}

function InfoEditEmpresa({ empresaEdit }) {

    const empresaData = empresaEdit[0]

    const [aspectos, setAspectos] = useState(null);

    const query = empresaData.idempresa;

    useEffect(() => {
        const infoEmpresa = async () => {
            setAspectos(await getAspectos(query))
        }
        infoEmpresa();
    }, [query])

    return (
        <div>
            <section>
                <ShowToEmpresa>
                    <EmpresaSummaryEmpresa empresaData={empresaData}></EmpresaSummaryEmpresa>
                </ShowToEmpresa>
                {/* <div className='graficosEmpresa'>
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Accesibilidad) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Ambiente_de_trabajo) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Conciliacion) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Estabilidad) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Posibilidad_de_ascenso) * 10)} />
                    <Progress className='grafico' type="circle" size='small' percent={((empresaData.valoraciones[0].Sueldo) * 10)} />
                </div> */}
            </section>

            <Aspects empresaData={empresaData} aspectos={aspectos}></Aspects>
        </div>
    );
}

export { InfoEmpresa, InfoEditEmpresa }