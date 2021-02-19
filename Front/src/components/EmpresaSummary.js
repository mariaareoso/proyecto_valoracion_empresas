import { useHistory } from 'react-router';
import StarValoracion from './StarValoracion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateEmpresa } from '../http/apiSharpView';
import empresaImagen from '../image/gris.png'
import EditableLogo from '../components/EditableLogo'

import '../css/style.css'
import ShowToEmployed from './ShowToEmployed';
import { AddJobPopUP, ValorarPopUP } from './Modal';

function EmpresaSummary(props) {
  const history = useHistory();
  const { empresa } = props;

  const onClick = (data) => {
    history.push(`/empresainfo/${empresa.idempresa}`);
  }

  const logo = empresa.photo_empresa ? `${process.env.REACT_APP_UPLOADS_URL}logos/${empresa.photo_empresa}` : empresaImagen;

  return (
    <article className='empresa'>
      <div className='empresaImagen'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <section className='empresaCuerpo'>
        <h3 className='nombreEmpresa'>{empresa.nombre_empresa}</h3>
        {/* <StarValoracion>{empresa.valoracion_total}</StarValoracion> */}
        <p className='empresaBio'>{empresa.bio}</p>
      </section>
      <input className='botonSummary' onClick={onClick} readOnly value='Más info' />
    </article>
  );
}

function EmpresaSummaryEmployed(props) {
  const { empresaData } = props

  const logo = empresaData.empresaData.datos.photo_empresa ? `${process.env.REACT_APP_UPLOADS_URL}logos/${empresaData.empresaData.datos.photo_empresa}` : empresaImagen;

  return (
    <div className='resumenEmpresa'>
      <img className='logo' src={logo} alt='logo' />
      {/* <StarValoracion>{empresaData.empresaData.datos.valoracion_total}</StarValoracion> */}
      <div className='contenidoResumenEmpresa'>
        <h2 className='resumenEmpresaNombre'>{empresaData.empresaData.datos.nombre_empresa}</h2>
        <p className='resumenEmpresaWeb'>{empresaData.empresaData.datos.web}</p>
        <p className='resumenResumen'>Resumen</p>
        <p className='resumenBio'>{empresaData.empresaData.datos.bio}</p>
      </div>
      <section>
        <ShowToEmployed>
          <AddJobPopUP className='botomPerfilEmpresa' empresa={empresaData.empresaData.datos} />
          <ShowToEmployed>
            <ValorarPopUP className='botomPerfilEmpresa' empresa={empresaData.empresaData.datos} />
          </ShowToEmployed>
        </ShowToEmployed>
      </section>
    </div>
  )
}

function EmpresaSummaryEmpresa({ empresaData }) {

  const { handleSubmit, reset } = useForm();

  const updateInfo = async () => {
    await updateEmpresa(sitioWeb, sede, bio, empresaData.idempresa, empresaData.idusuario);
    reset();
  }
  const [sitioWeb, setSitioWeb] = useState(empresaData.web)
  const [sede, setSede] = useState(empresaData.sede)
  const [bio, setBio] = useState(empresaData.bio)

  const logo = empresaData.photo_empresa ? `${process.env.REACT_APP_UPLOADS_URL}logos/${empresaData.photo_empresa}` : empresaImagen;

  return (

    <section className='formPerfil'>
      <EditableLogo className='formPhoto' empresa={empresaData} />
      <h2>{empresaData.nombre_empresa}</h2>
      <form className='formPerfil' onSubmit={handleSubmit(updateInfo)}>
        <label htmlFor="sitioWeb">Sitio Web</label>
        <input id="sitioWeb" name="sitioWeb" type='text' value={sitioWeb} onChange={(e) => setSitioWeb(e.target.value)}></input>
        <label htmlFor="sede">Sede</label>
        <input id="sede" name="sede" type='text' value={sede} onChange={(e) => setSede(e.target.value)}></input>
        <label htmlFor="bio">Resumen</label>
        <input id="bio" name="bio" type='text' value={bio} onChange={(e) => setBio(e.target.value)}></input>
        <input className='botomPerfilEmpresa' type="submit" value='Guardar' />
      </form>
    </section>
  )
}

export { EmpresaSummary, EmpresaSummaryEmployed, EmpresaSummaryEmpresa };
