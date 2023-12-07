import React, { useEffect, useCallback, useState } from "react";
import Table from "../components/Table";
import ActionButton from "../components/ActionButton";
import { useWebSocketContext } from "@/components/WebSocket";

const PokerTablePage = () =>  {
  
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocketContext();


  const [bet, setBet] = useState(0);

  const action = useCallback((fold, call, raise) => {
    if (fold) {
      sendJsonMessage({ 
        "MESSAGE TYPE": "ACTION",
        "MESSAGE": {
            "GAME_ID": "1",
            "PLAYER_NAME": "John Doe",
            "ACTION": "FOLD",
            "AMOUNT": "0"
        }
    })
    return;
   } else if (call) {
    sendJsonMessage({ 
      "MESSAGE TYPE": "ACTION",
      "MESSAGE": {
          "GAME_ID": "1",
          "PLAYER_NAME": "John Doe",
          "ACTION": "CALL",
          "AMOUNT": "0"
      }
   })
    return;
  } else if (raise) {
    sendJsonMessage({ 
      "MESSAGE TYPE": "ACTION",
      "MESSAGE": {
          "GAME_ID": "1",
          "PLAYER_NAME": "John Doe",
          "ACTION": "RAISE",
          "AMOUNT": bet
      }
    })
    setBet(0);
  }})

  const handleFold = async (event) => {
    event.preventDefault();

    try {
      action(true, false, false)
    } catch(err) {
      // error handle
    }
  };

  const handleCall = async (event) => {
    event.preventDefault();

    try {
      action(false, true, false)
    } catch(err) {
      // error handle
    }
  };

  const handleRaise = async (event) => {
    event.preventDefault();

    try {
      action(false, false, true)
    } catch(err) {
      // error handle
    }
  };

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


  const [gameData, setGameData] = useState({
    players: [],
    communityCards: [],
    smallBlind: null,
    bigBlind: null,
    currentDealerIndex: null,
    currentSmallIndex: null,
    currentBigIndex: null,
    activePlayerIndex: null,
    currentRound: null,
    currentPot: null
  });

  useEffect(() => {
    if (lastJsonMessage) {
      const parsedMessage = JSON.parse(lastJsonMessage);
      const updatedPlayers = parsedMessage.players.map(player => JSON.parse(player));

      setGameData({
        ...gameData,
        players: updatedPlayers,
        communityCards: parsedMessage.community_cards,
        smallBlind: parsedMessage.small_blind,
        bigBlind: parsedMessage.big_blind,
        currentDealerIndex: parsedMessage.current_dealer_index,
        currentSmallIndex: parsedMessage.current_small_index,
        currentBigIndex: parsedMessage.current_big_index,
        activePlayerIndex: parsedMessage.active_player_index,
        currentRound: parsedMessage.current_round,
        currentPot: parsedMessage.current_pot
      });
    }
  }, [lastJsonMessage]);








//   const players = [ 
//   {id: 1, name: "Shubhi", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
//   {id: 2, name: "Shriya", status: "In-Game",  avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
//   {id: 3, name: "Zak", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
//   {id: 4, name:"Harini", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
//   {id: 5, name: "Samay", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
//   {id: 6, name: "Lana", status: "In-Game", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"}, 
//   {id: 7, name: "Sonali", status: "In-Lobby", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
//   {id: 8, name: "Mizuki", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
//   {id: 9, name: "Paulina", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
//   {id: 10, name: "Courtney", status: "Offline", avatar: "/images/Ellipse 10pfp.svg", money: "17.4K"},
// ];

//   return (
//     <div className="bg-background-color min-h-screen">
//       <div className="flex flex-col items-center justify-center h-screen bg-background-color z-0">
//         <header className = "bg-white bg-opacity-50 fixed top-0 mb-5 w-screen h-fit">
//         <div class="flex justify-end items-center p-4 bg-white bg-opacity-50">
//     <div class="flex items-center space-x-4">
//       <div class="rounded-full bg-green-500 py-2 px-4 z-40">
//         {/* figure out what blinds mean */}
//         <p class="text-white text-lg font-bold">1K/2K Blinds</p>
//       </div>
//       <div class="rounded-full bg-green-500 py-2 px-4 z-40">
//         {/* figure out what balance means */}
//         <p class="text-white text-lg font-bold">Balance: 83.9K</p>
//       </div>
//     </div>
//   </div>
//         </header>
//       <Table players={players} />
//       </div>
//       <div className="fixed bottom-0 right-0 p-4 justify-center space-x-4">
//       <ActionButton text="Fold" handle={handleFold}/>
//       <ActionButton text="Call" handle={handleCall}/>
//       <input type="number" placeholder="Bet" className="w-20 p-2 rounded text-black" onChange={(e) => setBet(e.target.value)}/>
//       <ActionButton text="Raise" handleRaise/>
//       </div>
//       <div className = "fixed bottom-0 left-0 p-4 justify-center space-x-4">
//         <ActionButton text="Sit Out" />
//         </div>
//   </div>
  
 
//   );

return (
  <div className="bg-background-color min-h-screen">
    <div className="flex flex-col items-center justify-center h-screen bg-background-color z-0">
      <header className="bg-white bg-opacity-50 fixed top-0 mb-5 w-screen h-fit">
        <div className="flex justify-end items-center p-4 bg-white bg-opacity-50">
          <div className="flex items-center space-x-4">
            {/* Displaying blinds dynamically */}
            <div className="rounded-full bg-green-500 py-2 px-4 z-40">
              <p className="text-white text-lg font-bold">{gameData.smallBlind}/{gameData.bigBlind} Blinds</p>
            </div>
            {/* Displaying balance dynamically */}
            <div className="rounded-full bg-green-500 py-2 px-4 z-40">
              <p className="text-white text-lg font-bold">Balance: {gameData.currentPot}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Table component with dynamic players data */}
      <Table players={gameData.players} />

      {/* Other dynamic elements as needed */}
    </div>

    <div className="fixed bottom-0 right-0 p-4 justify-center space-x-4">
      <ActionButton text="Fold" handle={handleFold} />
      <ActionButton text="Call" handle={handleCall} />
      <input type="number" placeholder="Bet" className="w-20 p-2 rounded text-black" onChange={(e) => setBet(e.target.value)} />
      <ActionButton text="Raise" handleRaise />
    </div>

    <div className="fixed bottom-0 left-0 p-4 justify-center space-x-4">
      <ActionButton text="Sit Out" />
    </div>
  </div>
);

}; 
export default PokerTablePage;