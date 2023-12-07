import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWebSocketContext } from '../components/WebSocket';


const Modal = ({ isOpen, onClose }) => {
  const router = useRouter();

  // State for form fields (example: buy-in amount)
  const [name, setName] = useState('');
  const [blinds, setBlinds] = useState([.50, 1]);
  const [buyIn, setBuyIn] = useState(100)
  const [maxPlayers, setMaxPlayers] = useState(2)
  const [duration, setDuration] = useState(1)
  
  const handleBlindsChange = (e) => {
    const selectedValue = e.target.value;

    // Mapping between option values and numerical values
    const blindsMap = {
      '.50/1': [0.50, 1],
      '1/2': [1, 2],
      '2/5': [2, 5],
      '5/10': [5, 10],
      '10/20': [10, 20],
      '25/50': [25, 50]
    };

    // Update state with the corresponding numerical value
    setBlinds(blindsMap[selectedValue]);
  };

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocketContext();

  function convertToSlug(inputString) {
    // Replace spaces with underscores
    const stringWithoutSpaces = inputString.replace(/\s+/g, '_');
    
    // Remove non-alphanumeric characters (except underscores)
    const slug = stringWithoutSpaces.replace(/[^\w\s]/gi, '');
    
    // Convert to lowercase
    return slug.toLowerCase();
  }

  const onSubmitClick = useCallback(() => {
    sendJsonMessage({
      "MESSAGE TYPE": "CREATE",
      "MESSAGE": {
          "PLAYER_NAME": "John Doe",
          "BALANCE": 1000,
          "BUY_IN": buyIn,
          "BLINDS": blinds
        }
    })
    
    console.log("Sent message");
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      // Send message to server
      onSubmitClick();
  
      router.push({
        pathname: '/room',
        query: { table: convertToSlug(name) },
      });

    } catch (error) {
      console.error("Error sending message:", error);
      // error handling
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-green-800 rounded-lg p-6 w-full max-w-lg z-40">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-semibold">Create New Table</h2>
          <button onClick={onClose} className="text-white text-2xl">x</button>
        </div>
        <form className="bg-background-color p-4 rounded z-40" onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="B&F Poker Table"
            className="w-full p-2 mb-4 rounded text-black bg-background-color"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-between items-center mb-4">
            <label className="text-white">Set Buy-In: ${buyIn}</label>
            <div className="flex items-center">
              <button className="text-white mx-2">-</button>
              <input
                type="number"
                value={buyIn}
                onChange={(e) => setBuyIn(e.target.value)}
                className="w-20 p-2 rounded text-black"
              />
              <button className="text-white mx-2">+</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <select className="p-2 rounded text-black" value={blinds} onChange={(e) => handleBlindsChange(e)} >
              <option>.50/1</option>
                <option>1/2</option>
                <option>2/5</option>
                <option>5/10</option>
                <option>10/20</option>
                <option>25/50</option>
            </select>
            <select className="p-2 rounded text-black" value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value.split(' ')[0])}>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People </option>
              <option>5 People</option>
                <option>6 People</option>
                <option>7 People</option>
                <option>8 People</option>
                <option>9 People</option>
                <option>10 People</option>
              
            </select>
            <select className="p-2 rounded text-black" value={duration} onChange={(e) => setDuration(e.target.value.split(' ')[0])}>
              <option>1 hr</option>
                <option>2 hr</option>
                <option>3 hr</option>
                <option>4 hr</option>
                <option>5 hr</option>
                <option>6 hr</option>
                <option>7 hr</option>
                <option>8 hr</option>
                <option>9 hr</option>
                <option>10 hr</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Invite Friends"
              className="w-full p-2 rounded text-white bg-background-color"
            />
            {/* Render list of invited friends here */}
          </div>
          <button type='submit' className="w-full bg-white bg-opacity-40 p-2 rounded text-white">Start Game</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
