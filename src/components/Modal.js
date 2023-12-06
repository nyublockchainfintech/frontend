import { useState } from 'react';
import Link from 'next/link';

const Modal = ({ isOpen, onClose }) => {
  // State for form fields (example: buy-in amount)
  const [buyIn, setBuyIn] = useState(50);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-green-800 rounded-lg p-6 w-full max-w-lg z-40">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-semibold">Create New Table</h2>
          <button onClick={onClose} className="text-white text-2xl">×</button>
        </div>
        <div className="bg-background-color p-4 rounded z-40">
          <input
            type="text"
            placeholder="B&F Poker Table"
            className="w-full p-2 mb-4 rounded text-white bg-background-color"
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
                <option>1/2</option>
                <option>2/5</option>
                <option>5/10</option>
                <option>10/20</option>
                <option>25/50</option>
            </select>
            <select className="p-2 rounded text-black">
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
            <select className="p-2 rounded text-black">
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
          <Link href = "/PokerTablePage">
          <button className="w-full bg-white bg-opacity-40 p-2 rounded text-white">Start Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
