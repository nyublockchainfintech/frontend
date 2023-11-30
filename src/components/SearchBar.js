const SearchBar = ({ onSearch }) => {
    return (
      <form className="my-4" onSubmit={onSearch}>
        <input
          className="w-full p-2 text-black background-transparent border-b border-gray-500 focus:outline-none focus:border-green-500"
          type="search"
          placeholder="Search for NYU players and communities"
        />
      </form>
    );
  };
  
  export default SearchBar;