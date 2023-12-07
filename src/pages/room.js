import React, { useEffect, useCallback } from "react";
import Table from "../components/Table";
import ActionButton from "../components/ActionButton";
import { useWebSocketContext } from "@/components/WebSocket";

const PokerTablePage = () =>  {
  
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocketContext();

  const sitAtTable = useCallback(() => {
    sendJsonMessage({ 
        "MESSAGE TYPE": "JOIN",
        "MESSAGE": {
            "GAME_ID": "1",
            "PLAYER_NAME": "John Doe",
            "BALANCE": "100"
        }
    })
    
    console.log("Sat Down");
  }, []);

  useEffect(() => {
    sitAtTable();
  }, []);

  const players = [ 
  {id: 1, name: "Shubhi", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 2, name: "Shriya", status: "In-Game",  avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 3, name: "Zak", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 4, name:"Harini", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 5, name: "Samay", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 6, name: "Lana", status: "In-Game", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
  {id: 7, name: "Sonali", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 8, name: "Mizuki", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 9, name: "Paulina", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
  {id: 10, name: "Courtney", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
];

  return (
    <div className="bg-background-color min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen bg-background-color z-0">
        <header className = "bg-white bg-opacity-50 fixed top-0 w-screen h-fit">
        <div class="flex justify-end items-center p-4 bg-white bg-opacity-50">
    <div class="flex items-center space-x-4">
      <div class="rounded-full bg-green-500 py-2 px-4 z-40">
        {/* figure out what blinds mean */}
        <p class="text-white text-lg font-bold">1K/2K Blinds</p>
      </div>
      <div class="rounded-full bg-green-500 py-2 px-4 z-40">
        {/* figure out what balance means */}
        <p class="text-white text-lg font-bold">Balance: 83.9K</p>
      </div>
    </div>
  </div>
        </header>
      <Table players={players} />
      </div>
      <div className="fixed bottom-0 right-0 p-4 justify-center space-x-4">
      <ActionButton text="Fold" />
      <ActionButton text="Call" />
      <ActionButton text="Raise" />
      </div>
      <div className = "fixed bottom-0 left-0 p-4 justify-center space-x-4">
        <ActionButton text="Sit Out" />
        </div>
  </div>
  
 
  );

}; 
export default PokerTablePage;