const TableListComponent = ({ tables }) => {

    return (
        <div className = "my-8">
            {tables.map((table, index) => (
                <div key = {index} className = "bg-tablegreen shadow-lg rounded-lg p-4 mb-4 text-black w-1/2"> 
                <h2 className = "font-semibold text-white">{table.name}</h2>
                <p className = "text-white">Blinds: {table.blinds}</p>
                <p className = "text-white">Players: {table.players} / {table.maxPlayers}</p>
                <p className = "text-white">Duration: {table.duration}</p>
                </div>
            ))}
        </div>

    );


};

export default TableListComponent;