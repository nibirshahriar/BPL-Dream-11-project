import React from "react";

import SelectedCard from "../../../UI/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (p) => p.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div className="mt-8">
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
            <h2 className="text-xl font-semibold">No Players Selected Yet</h2>
            <p>Do to available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard key={index}
                player={player}
                handleDeleteSelectPlayer={handleDeleteSelectPlayer}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
