import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import Card from "../../../UI/card";
 

const AvailablePlayers = ({ players, setCoin,coin }) => {
  console.log(players);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {players.map((player) => (
          <Card
            key={player.playerName}
            player={player}
            setCoin={setCoin}
            coin={coin}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
