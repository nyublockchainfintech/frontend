import React from 'react';
import Image from 'next/image';

const Player = ({ name, avatar, money, index, totalPlayers }) => {
  const radiusX = 100;
  const radiusY = 70;
  const angle = (2 * Math.PI / totalPlayers) * index;
  const leftPosition = 50 + radiusX * Math.cos(angle);
  const topPosition = 50 + radiusY * Math.sin(angle);
  const chips = ['Group 265.svg', 'Group 266.svg', 'Group 269.svg']

 

  const playerStyle = {
    position: 'absolute',
    left: `${leftPosition}%`,
    top: `${topPosition}%`,
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  return (
    <div style={playerStyle}>
        <div style={{ position: 'relative' }}>
      <Image src = {avatar} alt = "Player Avatar" width = {60} height = {60} />
      <div className = "bg-white bg-opacity-40 rounded-full text-center w-24 h-12 text-white">
        <p>{name}</p>
      <p>{money}</p>
      <Image src = "/images/Group 265.svg" alt = "Chips" width = {30} height = {30} />
      </div>
      </div>
      </div>
  );
};

export default Player;
