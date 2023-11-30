const CommunityCard = ({ community }) => {
    return (
      <div className="p-4 bg-white bg-opacity-20 mb-4 rounded-xl">
        <div className="flex items-center space-x-2">
          {/* community avatar */}
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <div>
            <h3 className="text-white font-bold">{community.name}</h3>
            <p className="text-gray-300">{community.members}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CommunityCard;