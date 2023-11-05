const TableListComponent = ({ tables }) => {

    return (
        <div className = "my-8">
            {tables.map((table, index) => (
                <div key = {index} className = "bg-white shadow-lg rounded-lg p-4 mb-4 text-black w-1/2"> 
                <h2 className = "font-semibold">{table.name}</h2>
                <p>Blinds: {table.blinds}</p>
                <p>Players: {table.players} / {table.maxPlayers}</p>
                <p>Duration: {table.duration}</p>
                </div>
            ))}
        </div>

    );


};

export default TableListComponent;