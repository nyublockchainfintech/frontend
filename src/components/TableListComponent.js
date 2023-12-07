import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWebSocketContext } from './WebSocket';

const TableListComponent = ({ tables }) => {
    
    const router = useRouter();
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocketContext();

    function convertToSlug(inputString) {
      // Replace spaces with underscores
      const stringWithoutSpaces = inputString.replace(/\s+/g, '_');
      
      // Remove non-alphanumeric characters (except underscores)
      const slug = stringWithoutSpaces.replace(/[^\w\s]/gi, '');
      
      // Convert to lowercase
      return slug.toLowerCase();
    }
    
    const allTables = [...tables, ...tables]


    const onSubmitClick = useCallback(() => {
        sendJsonMessage({ 
            "MESSAGE TYPE": "JOIN",
            "MESSAGE": {
                "GAME_ID": "1",
                "PLAYER_NAME": "John Doe",
                "BALANCE": "100"
            }
        })
        
        console.log("Sent message");
      }, []);
    
      const handleJoin = async (event, name) => {
        event.preventDefault();
    
        try {
          // Send message to server
          onSubmitClick();
      
    
        } catch (error) {
          console.error("Error sending message:", error);
          // error handling
        }
      };

    return (
        <div className = "my-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {allTables.map((table, index) => (
                <div key = {index} className = "bg-tablegreen shadow-lg rounded-lg p-6 mb-1 flex justify-between items-center text-xs sm:text-sm"> 
                <div className = "flex flex-row">
                    <Image src = "/images/Group 31.png" alt="Chip" width={20} height={20} className="w-16 h-16 mr-4"/>
                 <div className="flex flex-col">
                <h2 className = "font-semibold text-white mb-1">{table.name}</h2>
                <div className = "text-gray-300 mt-1 flex flex-row text-xxs sm:text-base">
                <div className="flex items-center mr-2"> 
                <Image src="/images/Ellipse 3.svg" alt="Blinds" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span>{table.blinds} </span>
                </div>
                <div className="flex items-center mr-2"> 
                <Image src="/images/groups.svg" alt="Players" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span className = "pr-2">{table.players}/{table.maxPlayers}</span>
                </div>
                <div className="flex items-center mr-2"> 
                <Image src="/images/alarm.svg" alt="Duration" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span className = "pr-2">{table.duration}</span>
                </div>
                </div>
                </div>
              
                </div>
                <Link
                    href={{
                        pathname: '/room',
                        query: { table: convertToSlug(table.name) },
                    }}
                >
                    <Image src="/images/arrow_back.svg" alt="Back" width={20} height={20} className="w-4 h-4 mr-1" />
                </Link>
                </div>
               
            ))}
        </div>

    );


};

export default TableListComponent;