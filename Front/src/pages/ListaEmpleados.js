import VentanaTablaEmpleados from "../components/listaEmpleados/WorkerList";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import "../css/ListaEmpleados.css";

export default function ListaEmpleados() {
  const history = useHistory();
  const ToListworkers = () => {
    const id = 1;
    history.push(`/empresa/${id}/workers`);
  };
  const ToListvaloracion = () => {
    const id = 1;
    history.push(`/empresa/${id}/votes`);
  };
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
      <section>
        <button className="tablaEmpleados" onClick={ToListworkers}>
          Empleados
        </button>
        <button className="tablaValoraciones" onClick={ToListvaloracion}>
          Valoracion
        </button>
      </section>
      <main className="body">
        <div className="principal">
          <VentanaTablaEmpleados></VentanaTablaEmpleados>
        </div>
      </main>
      <Footer className="footer"></Footer>
    </div>
  );
}
