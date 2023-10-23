import React from "react";

const ButtonsSubtractAdd = ({
  maxPointsFinish,
  pointsTeamOne,
  setPointsTeamOne,
  pointsTeamTwo,
  setPointsTeamTwo,
  setTeamWinner,
}) => {
  const subtractButtonHandler = (event) => {
    const points = pointsTeamOne + parseInt(event.target.value);
    if (pointsTeamOne > 0) {
      setPointsTeamOne(points);
    } else {
      alert("No puede restarle al 0");
    }
  };

  const addButtonHandler = (event) => {
    const points = pointsTeamOne + parseInt(event.target.value);
    if (pointsTeamOne !== maxPointsFinish - 1) {
      setPointsTeamOne(points);
    } else {
      setTeamWinner(1);
      setPointsTeamOne(0);
      setPointsTeamTwo(0);
    }
  };

  const subtractButtonHandler2 = (event) => {
    const points = pointsTeamTwo + parseInt(event.target.value);
    if (pointsTeamTwo > 0) {
      setPointsTeamTwo(points);
    } else {
      alert("No puede restarle al 0");
    }
  };

  const addButtonHandler2 = (event) => {
    const points = pointsTeamTwo + parseInt(event.target.value);
    if (pointsTeamTwo !== maxPointsFinish - 1) {
      setPointsTeamTwo(points);
    } else {
      setTeamWinner(2);
      setPointsTeamOne(0);
      setPointsTeamTwo(0);
    }
  };

  return (
    <div>
      <div>
        <h3>Equipo 1</h3>
        <button value={1} onClick={addButtonHandler}>
          +
        </button>
        <button value={-1} onClick={subtractButtonHandler}>
          -
        </button>
      </div>
      <div>
        <h3>Equipo 2</h3>
        <button value={1} onClick={addButtonHandler2}>
          +
        </button>
        <button value={-1} onClick={subtractButtonHandler2}>
          -
        </button>
      </div>
    </div>
  );
};

export default ButtonsSubtractAdd;
