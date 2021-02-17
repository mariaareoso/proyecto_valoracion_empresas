import VentanaTablaEmpleados from "../components/listaEmpleados/WorkerList";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VoteList from "../components/valoracionesEmpleados/voteList";
import { getReviewsEmpleados } from "../http/apiSharpView";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ValoracionTablaEmpleados = () => {
  const { id } = useParams();
  const [votes, setVotes] = useState();
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      await getReviewsEmpleados(id);
      setVotes(votes);
    };
    getData();
  }, [id]);

  const voteList = votes.map((vote, index) => {
    return (
      <tr key={`vote_${index}`}>
        <td>{vote.nombre}</td>
        <td>{vote.Comentario}</td>
        <td>{vote.valoracion}</td>
      </tr>
    );
  });
  return (
    <section>
      <p className="valoracion">valoraciones Empleados</p>

      <VoteList votes={voteList}></VoteList>
    </section>
  );
};

export default ValoracionTablaEmpleados;
