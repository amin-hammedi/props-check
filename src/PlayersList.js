import React from "react";
import Player from "./Playerr";
import players from "./players";
import "./App.css";

const PlayersList = () => {
  return (
    <div className="card-container">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
