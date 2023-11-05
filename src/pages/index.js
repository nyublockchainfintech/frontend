import Layout from "../components/Layout";
import TableListComponent from "../components/TableListComponent";



export default function Home() {
  const tables = [ 
    {name: "Varun's Bobst Group Study Room", blinds: '10K/20K', players: 9, maxPlayers: 10, duration: '1.2H/2.5H'},
    {name: "Samay's Founders Hall Lounge", blinds: '25/50', players: 4, maxPlayers: 6, duration: '0.9H/2H'},
    {name: "Vishakh's 3N Computer Lab", blinds: '50/100', players: 4, maxPlayers: 10, duration: '.6H/1.5H'},
    {name: "Vaikunthan's 370 Jay Street", blinds: '500/1K', players: 7, maxPlayers: 8, duration: '1.9H/2.5H'},
    {name: "Akhil's Stern UC-15", blinds: '1K/2K', players: 6, maxPlayers: 6, duration: '1.8H/2.5H'},
    {name: "Sean's Off-Campus Apartment", blinds: '5/10', players: 3, maxPlayers: 10, duration: '.4H/3.5H'},
    {name: "Babu's Basement", blinds: '25K/50K', players: 2, maxPlayers: 10, duration: '.2H/4.5H'}
  ];
  return (

    <Layout>
      <h1 className="text-3xl font-bold mb-4">Active Tables</h1>
      <TableListComponent tables={tables} />
    </Layout>
    
    
  );
}
