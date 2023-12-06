import Layout from "../components/Layout";
import { useState } from "react";
import TableListComponent from "../components/TableListComponent";
import Image from 'next/image';
import Modal from "../components/Modal";
import useWebSocket from 'react-use-websocket';


export default function TablesPage() {

  const WS_URL = 'ws://127.0.0.1:8000/ws/';

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL);


  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className = "flex flex-row">
      <h1 className="text-3xl font-bold mb-4 text-white">ACTIVE TABLES</h1>
      <button className="flex items-center justify-center bg-background-color text-white bg-white bg-opacity-10 rounded-md ml-6 px-4 h-10 w-24">
      Filter
      <span className="ml-2 flex items-center justify-center">
    <Image src="/images/filter_list.svg" width={24} height={24} alt="Filter Icon"/>
      </span>
  </button>
  <button className="flex items-center justify-center bg-background-color text-white bg-white bg-opacity-10 rounded-md ml-6 px-4 h-10 "  onClick={() => setIsModalOpen(true)}>
      Create Table
      <span className="ml-2 flex items-center justify-center">
    <Image src="/images/add.svg" width={15} height={15} alt="Filter Icon"/>
      </span>
  </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <TableListComponent tables={tables} />
    </Layout>
    
    
  );
}
