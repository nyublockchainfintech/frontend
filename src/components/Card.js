import React, { useState, useEffect } from "react";

const Card = ({show}) => {
  const [chosenCard, setChosenCard] = useState(null);

  const cardNames = [
    "Group 65.svg",
    "Group 66.svg",
    "Group 67.svg",
    "Group 68.svg",
    "Group 69.svg",
    "Group 70.svg",
    "Group 71.svg",
    "Group 72.svg",
    "Group 73.svg",
    "Group 74.svg",
    "Group 75.svg",
    "Group 76.svg",
    "Group 77.svg",
    "Group 78.svg",
    "Group 79.svg",
    "Group 80.svg",
    "Group 81.svg",
    "Group 82.svg",
    "Group 83.svg",
    "Group 84.svg",
    "Group 85.svg",
    "Group 86.svg",
    "Group 87.svg",
    "Group 88.svg",
    "Group 89.svg",
    "Group 90.svg",
    "Group 91.svg",
    "Group 92.svg",
    "Group 93.svg",
    "Group 94.svg",
    "Group 95.svg",
    "Group 96.svg",
  ];

  const chooseRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardNames.length);
    const randomCard = cardNames[randomIndex];
    console.log(randomCard);
    setChosenCard(randomCard);
  };

  useEffect(() => {
    if(show)
    {
    chooseRandomCard();
    }
    else {
      setChosenCard("Group 29.svg");
    }
  }, [show]);

  return (
    <div className = "m-2">
      {chosenCard ? (
        <img src={`/images/card_images/${chosenCard}`} alt="Card" />
      ) : (
        <span>No card chosen</span>
      )}
    </div>
  );
};

export default Card;
