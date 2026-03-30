import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectPlayer }) => {
  return (
    <div className="flex items-center justify-between p-10 rounded-xl border">
      <div className="flex items-center gap-6">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-[75px] w-auto rounded-md"
        />

        <div>
          <h2 className="flex items-center justify-between gap-2 font-bold text-2xl">
            {" "}
            <FaUser /> {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500 bg-red-50"
        onClick={() => handleDeleteSelectPlayer(player)}
      >
        {" "}
        <MdDelete />{" "}
      </button>
    </div>
  );
};

export default SelectedCard;
