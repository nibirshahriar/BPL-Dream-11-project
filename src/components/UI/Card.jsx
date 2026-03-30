import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
      <figure>
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-full h-40 sm:h-44 md:h-48 object-cover"
        />
      </figure>

      <div className="card-body space-y-3">
        {/* Name */}
        <h2 className="card-title flex items-center gap-2 text-lg">
          <FaUser className="text-gray-500" />
          {player.playerName}
        </h2>

        {/* Country + Type */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-gray-500 text-sm">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>

          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
            {player.playerType}
          </span>
        </div>

        <div className="divider my-1"></div>

        {/* Rating */}
        <p className="font-semibold text-sm">
          Rating: <span className="text-yellow-500">{player.rating}</span>
        </p>

        {/* Styles */}
        <div className="flex justify-between text-xs text-gray-500">
          <p>{player.battingStyle}</p>
          <p>{player.bowlingStyle}</p>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center pt-2">
          <p className="font-bold text-sm">Price: ${player.price}</p>

          <button className="px-3 py-1 text-sm border border-yellow-400 text-yellow-500 rounded-md hover:bg-yellow-400 hover:text-black transition">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
