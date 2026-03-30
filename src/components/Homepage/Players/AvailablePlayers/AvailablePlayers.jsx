import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import Card from "../../../UI/card";
 

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {players.map((player) => (
          <Card key={player.playerName} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
