import React from 'react';
const ListSection = ({ title, items, isActive }) => {
    return (
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div>
          {items.map((item) => (
            <div 
              key={item.id}
              className="relative my-2"
            >
              <img 
                className="absolute w-10 h-10 rounded-full left-0 transform -translate-x-1/2" 
                src={item.avatar} 
                alt={item.name} 
              />
  
              {/* background and content */}
              <div 
                className={`flex items-center justify-between pl-12 pr-2 py-2 bg-white bg-opacity-10 rounded-xl ${
                  isActive ? 'bg-green-500' : 'bg-gray-500'
                }w-full`}
              >
                {/* name + status */}
                <div>
                  <span className="text-white">{item.name}</span>
                </div>
                
                {/* last seen or status */}
                <div className="text-white">
                  {isActive ? item.status : `Last Seen ${item.lastSeen}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ListSection;
  