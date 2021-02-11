import { Progress } from 'antd';
import 'antd/dist/antd.css';
import StarValoracion from '../StarRating/StarValoracion'
function InfoEmpresa({ empresa }) {
    const { empresaData } = empresa

    return (
        <div>
            <section>
                <p>{empresaData.datos.link}</p>
                <h2>{empresaData.datos.nombre_empresa}</h2>
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
                <div>{empresaData.opiniones[0].idusuario}</div>
                <p>{empresaData.opiniones[0].opinion}</p>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <p>{empresaData.opiniones[1].opinion}</p>
            </section>
            <section>
                <h2>Accesibilidad</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].accesibilidad}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].accesibilidad}</StarValoracion>
            </section>
            <section>
                <h2>Ambiente de trabajo</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].ambiente_de_trabajo}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].ambiente_de_trabajo}</StarValoracion>
            </section>
            <section>
                <h2>Conciliacion</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].conciliacion}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].conciliacion}</StarValoracion>
            </section>
            <section>
                <h2>Estabilidad</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].estabilidad}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].estabilidad}</StarValoracion>
            </section>
            <section>
                <h2>Posibilidad de ascenso</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].posibilidad_de_ascenso}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].posibilidad_de_ascenso}</StarValoracion>
            </section>
            <section>
                <h2>Sueldos</h2>
                <div>{empresaData.opiniones[0].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[0].sueldos}</StarValoracion>
                <div>{empresaData.opiniones[1].idusuario}</div>
                <StarValoracion>{empresaData.opiniones[1].sueldos}</StarValoracion>
            </section>
        </div>

    );
}

export { InfoEmpresa }