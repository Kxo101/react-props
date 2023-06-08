// PlayersList.js
import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
