import React from 'react';
import Image from 'next/image';

{/* calculates position of the player based on the index and the amount of players */}
const Player = ({ name, avatar, money, index, totalPlayers }) => {
  const radiusX = 100;
  const radiusY = 70;
  const angle = (2 * Math.PI / totalPlayers) * index;
  const leftPosition = 50 + radiusX * Math.cos(angle);
  const topPosition = 50 + radiusY * Math.sin(angle);
{/* defines the basic structure of how the player will appear */}
  const playerStyle = {
    position: 'absolute',
    left: `${leftPosition}%`,
    top: `${topPosition}%`,
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };
{/* returns the appearance of the player */}
  return (
    <div style={playerStyle}>
        <div style={{ position: 'relative' }}>
      <Image src = {avatar} alt = "Player Avatar" width = {60} height = {60} />
      <div className = "bg-white bg-opacity-40 rounded-full text-center w-24 h-12 text-white">
        <p>{name}</p>
      <p>{money}</p>
      </div>
      </div>
      </div>
  );
};

export default Player;
