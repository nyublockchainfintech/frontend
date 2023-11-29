import Image from 'next/image';
import Link from 'next/link';
import Table from './Table';

const TableListComponent = ({ tables }) => {

    return (
        <div className = "my-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tables.map((table, index) => (
                <div key = {index} className = "bg-tablegreen shadow-lg rounded-lg p-4 mb-4 text-black w-1/2 flex justify-between items-center text-xs sm:text-sm"> 
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
                <Image src="/images/arrow_back.svg" alt="Back" width={20} height={20} className="w-4 h-4 mr-1" />
                </div>
               
            ))}
        </div>

    );


};

export default TableListComponent;