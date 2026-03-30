import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  // console.log(playerPromise)
  const players = use(playerPromise);
  // console.log(players)
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="my-6">
      <div className="flex justify-between gap-4 items-center">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Player ({selectedPlayers.length}/{players.length})
          </h2>
        )}

        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit">
          <button
            onClick={() => setSelectedType("available")}
            className={`px-4 py-2  ${selectedType === "available" ? "bg-[#E7FE29]" : ""} text-black font-semibold`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`px-4 py-2  ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  font-semibold`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
