import React from "react";
import Table from "../components/Table";
import ActionButton from "../components/ActionButton";
const PokerTablePage = () =>  {
  
  const players = [ 
  {id: 1, name: "Shubhi", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 2, name: "Shriya", status: "In-Game",  avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 3, name: "Zak", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 4, name:"Harini", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 5, name: "Samay", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 6, name: "Lana", status: "In-Game", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, ];

  return (
    <div className="bg-background-color min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen bg-background-color">
        <header className = "bg-white bg-opacity-50">
        </header>
      <Table players={players} />
      </div>
      <div className="fixed bottom-0 right-0 p-4 justify-center space-x-4">
      <ActionButton text="Fold" />
      <ActionButton text="Call" />
      <ActionButton text="Raise" />
      </div>
  </div>
  
 
  );

}; 
export default PokerTablePage;