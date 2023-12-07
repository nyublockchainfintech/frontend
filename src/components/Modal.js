import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useWebSocketContext } from '../components/WebSocket';


const Modal = ({ isOpen, onClose }) => {
  const router = useRouter();

  // State for form fields (example: buy-in amount)
  const [buyIn, setBuyIn] = useState(50);
  const [name, setName] = useState('');

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
          "BALANCE": 100,
          "BUY_IN": 20,
          "BLINDS": [10, 20]
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
      <div className="bg-background-color rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-semibold">Create New Table</h2>
          <button onClick={onClose} className="text-white text-2xl">×</button>
        </div>
        <form className="bg-background-color p-4 rounded z-40" onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="B&F Poker Table"
            className="w-full p-2 mb-4 rounded text-black bg-background-color"
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
            <select className="p-2 rounded text-black">
              <option>.50/1</option>
              {/* other options */}
            </select>
            <select className="p-2 rounded text-black">
              <option>5 People</option>
              {/* other options */}
            </select>
            <select className="p-2 rounded text-black">
              <option>1 hr</option>
              {/* other options */}
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
