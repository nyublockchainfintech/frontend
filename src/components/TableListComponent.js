import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWebSocketContext } from './WebSocket';
import toast from "react-hot-toast";
import { ethers } from "ethers";
import { useAccount, useNetwork, useSignMessage, useConnect, useDisconnect, useContract, useWalletClient } from "wagmi";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { getProvider } from "@wagmi/core"
import myAbi from "../contracts/abi.json";


const TableListComponent = ({ tables }) => {
    
    const router = useRouter();
    const { sendJsonMessage, lastJsonMessage, readyState, getClientKey } = useWebSocketContext();
    const { data: walletClient, isError, isLoading } = useWalletClient()
    const { chain } = useNetwork();
    const { address, isConnected } = useAccount();
    const { signMessage } = useSignMessage();

    function convertToSlug(inputString) {
      // Replace spaces with underscores
      const stringWithoutSpaces = inputString.replace(/\s+/g, '_');
      
      // Remove non-alphanumeric characters (except underscores)
      const slug = stringWithoutSpaces.replace(/[^\w\s]/gi, '');
      
      // Convert to lowercase
      return slug.toLowerCase();
    }
    
    const allTables = [...tables, ...tables]

    // const contract = useContract({
    //     address: '0x69d7d375cdC5037c182a1eCEB5AC4C6EdE3CAD58', // goerli address
    //     abi: myAbi, // change
    //     walletClient,
    //   })

    // const [clientKey, setClientKey] = useState('')

    // useEffect(async () => {
    //     setClientKey(await getClientKey());
    // }, [])

    // const dummyWallet = new ethers.Wallet(clientKey, chain?.provider);

    // Smart Contract Logic
    /**
    * @description The following code defines an async function `getMsgHash` that sends a client-side generated key and signs the transaction with the user's wallet.
    */
    const getMsgHash = async () => {
        if (!signer) {
        return toast.error("Please connect your wallet");
        } else if (!chain) {
        return toast.error("You are connected to an unsupported network");
        } 
        else {
            try {
                // const contract = ContractInstance(signer, chain.id);
                const result = await contract.getMsgHash(address, clientKey);
                dummyWallet.signMessage(result);
            } catch (e) {
                throw(e);
            } 
        }
    };

    // /**
    // * @description The following code defines an async function `joinTable` that sends a client-side generated key and signs the transaction with the user's wallet.
    // */
    // const joinTable = async () => {
    //     if (!signer) {
    //     return toast.error("Please connect your wallet");
    //     } else if (!chain) {
    //     return toast.error("You are connected to an unsupported network");
    //     } 
    //     else {
    //         const proofPublic = [ethers.utils.formatBytes32String("0")];
    //         try {
    //             const contract = ContractInstance(signer, chain.id);

    //             const clientKey = await getClientKey();
    //             const msgHash = await contract.joinTable(address, clientKey);
                
    //             const receipt  = await signer?.provider?.getTransactionReceipt(msg);

    //             signMessage({ msgHash })

    //             if (receipt?.status === 1) {
    //                 return msgHash;
    //             }

    //         } catch (e) {
    //             throw(e);
    //         } 
    //     }
    // };
   

    const onSubmitClick = useCallback(() => {
        sendJsonMessage({ 
            "MESSAGE TYPE": "JOIN",
            "MESSAGE": {
                "GAME_ID": 1,
                "PLAYER_NAME": "John Doe",
                "PLAYER_BALANCE": 100
            }
        })
        
        console.log("Sent message");
      }, []);
    
      const handleJoin = async (event, name) => {
        event.preventDefault();
    
        try {
          // Send message to server
          onSubmitClick();
      
    
        } catch (error) {
          console.error("Error sending message:", error);
          // error handling
        }
      };

    return (
        <div className = "my-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {allTables.map((table, index) => (
                <div key = {index} className = "bg-tablegreen shadow-lg rounded-lg p-6 mb-1 flex justify-between items-center text-xs sm:text-sm"> 
                <div className = "flex flex-row">
                    <Image src = "/images/Group 31.png" alt="Chip" width={20} height={20} className="w-16 h-16 mr-4"/>
                 <div className="flex flex-col">
                <h2 className = "font-semibold text-white mb-1">{table.name}</h2>
                <div className = "text-gray-300 mt-1 flex flex-row text-xxs sm:text-base">
                <div className="flex items-center mr-2"> 
                <Image src="/images/Ellipse 3.svg" alt="Blinds" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span>{table.blinds}</span>
                </div>
                <div className="flex items-center mr-2"> 
                <Image src="/images/groups.svg" alt="Players" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span className = "pr-2">{table.players}/{table.maxPlayers}</span>
                </div>
                <div className="flex items-center mr-2"> 
                <Image src="/images/alarm.svg" alt="Duration" width={20} height={20} className="w-4 h-4 mr-1" /> 
                <span className = "pr-2">{table.duration}</span>
                </div>
                </div>
                </div>
              
                </div>
                <Link
                    onClick={handleJoin}
                    href={{
                        pathname: '/room',
                        query: { table: convertToSlug(table.name) },
                    }}
                >
                    <Image src="/images/arrow_back.svg" alt="Back" width={20} height={20} className="w-4 h-4 mr-1" />
                </Link>
                </div>
               
            ))}
        </div>

    );


};

export default TableListComponent;