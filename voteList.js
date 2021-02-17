import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsEmpleados } from "../../http/apiSharpView";

function VoteList({ votes }) {
  return (
    <table className="valoraciones">
      <thead>
        <tr>
          <th>Empleado</th>
          <th>Comentario</th>
          <th>Valoracion</th>
        </tr>
      </thead>
      <tbody>{votes}</tbody>
    </table>
  );
}

export default VoteList;
