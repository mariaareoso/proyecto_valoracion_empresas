import { useHistory } from 'react-router';
import StarValoracion from '../StarRating/StarValoracion';
import '../../css/EmpresasList.css'

function EmpresaSummary(props) {
  const history = useHistory();
  const { empresa } = props;

  const onClick = (data) => {
    history.push(`/empresainfo/${empresa.idempresa}`);
  }

  return (
    <article className='empresa'>
      <div className='empresaImagen' />
      <section className='empresaCuerpo'>
        <h3 className='nombreEmpresa'>{empresa.nombre_empresa}</h3>
        <StarValoracion>{empresa.valoracion_total}</StarValoracion>
        <p className='empresaBio'>{empresa.bio}</p>
      </section>
      <input className='boton' onClick={onClick} value='Más info' />
    </article>
  );
}

export default EmpresaSummary;
