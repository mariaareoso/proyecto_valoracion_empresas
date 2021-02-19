import React, { useEffect, useState } from "react";
import { getAspectos } from "../http/apiSharpView";
import StarValoracion from './StarValoracion'

function Aspects({ aspectos }) {

    if (!aspectos) return <div>Cargando...</div>;
    if (!aspectos[0]) return <div>No hay puntuaciones</div>;

    return (
        <div className='valoraciones'>
            <section >
                <h2>Opiniones</h2>
                <article className='contenidoValoraciones'>
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
                    {aspectos.map((opinion) => {
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
    )
}



export default Aspects