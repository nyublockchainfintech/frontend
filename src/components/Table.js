import React, { useState, useEffect } from 'react';
import Player from './Player';
import Card from './Card';

const Table = ({ players }) => {
  const [showFourthCard, setShowFourthCard] = useState(false);
  const [showFifthCard, setShowFifthCard] = useState(false);
  const [rounds, setRounds] = useState(0);

  const HiddenCardPlaceholder = () => {
    return <Image src="/images/Group 29.svg" alt="Hidden Card" width={100} height={150} />;
  };

  useEffect(() => {

    if (rounds >= 2) {
      setShowFourthCard(true);
    }

    if (rounds >= 3) {
      setShowFifthCard(true);
    }

  }, [rounds]);
  return (
    <div className="relative w-96 h-96 rounded-md flex ">
      {players.map((player, index) => (
        <Player key={player.id} {...player} index={index} totalPlayers={players.length} />
      ))}
      <div className="absolute inset-0 flex justify-center items-center">
        <Card show = {true}/>
        <Card show = {true} />
        <Card show = {true}/>
        {showFourthCard ? <Card show={true} /> : <Card show={false} />}
        {showFifthCard ? <Card show={true} /> : <Card show={false} />}
      </div>
    </div>
  );
};

export default Table;
