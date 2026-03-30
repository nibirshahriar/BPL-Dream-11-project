import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {

const handleDeleteSelectPlayer=(player)=>{
const filteredPlayers=selectedPlayers.filter(p=>p.playerName!==player.playerName);
setSelectedPlayers(filteredPlayers);
setCoin(coin+player.price);
}    

return (
      <div className="mt-8">
        <div className='space-y-5'>
          {selectedPlayers.map((player, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between p-10 rounded-xl border"
              >
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
          })}
        </div>
      </div>
    );
};

export default SelectedPlayers;