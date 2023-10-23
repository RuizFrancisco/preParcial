import React, { useRef, useState } from "react";
import ButtonsSubtractAdd from "../buttonsSubtractAdd/ButtonsSubtractAdd";

const DashBoard = () => {
  const [maxPoints, setMaxPoints] = useState(0);
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);
  const [maxPointsFinish, setMaxPointsFinish] = useState(null);
  const [teamWinner, setTeamWinner] = useState(null);

  const maxPointsRef = useRef(null);

  const maxPointsChangeHandler = (event) => {
    setMaxPoints(event.target.value);
  };

  const validButtonHandler = (maxPoints) => {
    if (maxPointsRef.current.value < 18 || maxPointsRef.current.value > 30) {
      alert("Ingrese un valor correcto");
    } else {
      setMaxPointsFinish(parseInt(maxPoints));
    }
  };
  return (
    <div>
      <label>
        Ingrese la cantidad de puntos a la que finalizara la partida
      </label>
      <input
        placeholder="Ingrese un valor"
        type="number"
        value={maxPoints}
        onChange={maxPointsChangeHandler}
        ref={maxPointsRef}
      />
      <button onClick={() => validButtonHandler(maxPoints)}>Asignar</button>
      {maxPointsFinish !== null && (
        <div>
          <h1>
            La partida finalizara cuando algun equipo consiga {maxPointsFinish}{" "}
            puntos
          </h1>
          <div>
            <h2>MARCADOR</h2>
            <h3>Equipo uno puntaje: {pointsTeamOne}</h3>
            <h3>Equipo dos puntaje: {pointsTeamTwo}</h3>
          </div>
          <h1>
            ------------------------------------------------------------------
          </h1>
          <ButtonsSubtractAdd
            pointsTeamOne={pointsTeamOne}
            setPointsTeamOne={setPointsTeamOne}
            pointsTeamTwo={pointsTeamTwo}
            setPointsTeamTwo={setPointsTeamTwo}
            maxPointsFinish={maxPointsFinish}
            setTeamWinner={setTeamWinner}
          />
        </div>
      )}
      {teamWinner !== null && (
        <h1>El equipo ganador es el equipo {teamWinner}</h1>
      )}
    </div>
  );
};

export default DashBoard;
