const ActionButton = ({ text, handle }) => {
    return (
      <button onClick={handle} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
        {text}
      </button>
    );
  };
  
  export default ActionButton;
  