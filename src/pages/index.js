import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Web3 from 'web3';

import { ethers } from "ethers";
import { useAccount, useNetwork, useSigner, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { getProvider } from "@wagmi/core";

import { useWebSocketContext } from '@/components/WebSocket';

const Connect = () => {

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()} className='text-blue-500 hover:text-blue-700 bg-white rounded-xl px-4 p-2'>Disconnect</button>
      </div>
    )
  return <button onClick={() => connect()} className='text-blue-500 hover:text-blue-700 bg-white rounded-xl px-4 p-2'>Connect Wallet</button>
}

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [currentAccount, setCurrentAccount] = useState(null);

  const { address, isConnected } = useAccount()

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocketContext();

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

    // sendJsonMessage(joinMessage);
    //   { 
    //   command: "JOIN",
    //   content: email,
    //   message: `${email} Joined the game`,
    // });

    console.log("Sent message");
  }, []);

  
  
    

  const handleLogin = async (event) => {
    event.preventDefault();

    try {

      // Send message to server
      onSubmitClick();

      router.push({
        pathname: '/tables',
      });

    } catch (error) {
      console.error("Error sending message:", error);
      // error handling
    }

  }; 

//   async function onClickConnect() {

//   if (window.ethereum) {
//     const web3 = new Web3(window.ethereum);
//     try {
//       await window.ethereum.enable(); // Request access
//       const accounts = await web3.eth.getAccounts(); // Get accounts
//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   } else {
//     console.log('MetaMask is not installed');
//   }

// }


  return (
    <div className="flex h-screen background-color text-white">
     
      <div className="flex-grow flex flex-col justify-center items-start pl-20 space-y-6 max-w-lg">
        <div className="text-left">
          <p className="text-sm uppercase tracking-widest">- Welcome to our Poker dApp -</p>
          <h1 className="text-4xl font-bold">NYU Blockchain & Fintech</h1>
          <p className="mt-2">NYU's community in blockchain & fintech</p>
        </div>
        <form className="w-full" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your NYU email"
            className="w-full px-4 py-2 text-black background-color"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-white text-black px-4 py-2 mt-4"
          >
            Log in
          </button>
        </form>
        <Connect />
        {/* <Link href="#" onClick={onClickConnect} className="text-blue-500 hover:text-blue-700">
          Connect to MetaMask
        </Link> */}
        <Link href="/signup">
          Don't have an account? Sign up
        </Link>
      </div>

     
      <div className="flex items-center max-w-md ml-52">
        <Image
          src="/images/Group 291.svg"
          alt="Cards"
          width={500}
          height={500}
        />
      </div>

      
      <div className="absolute top-0 w-full bg-white bg-opacity-30">
        <nav className="flex justify-between items-center p-4">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
          
        </nav>
      </div>
    </div>
  );
}
