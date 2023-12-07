import React, { createContext, useContext, useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useAccount, useNetwork, useSigner, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from 'wagmi/connectors/injected'

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const socketUrl = 'ws://127.0.0.1:8000/ws';
  const {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log(`Connected to WebSocket`),
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    // Additional setup or side effects when the WebSocket connection changes
    console.log('WebSocket connection changed:', readyState);
  }, [readyState]);

  async function sha256Hash(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
  
    return crypto.subtle.digest('SHA-256', data)
      .then(buffer => {
        const hashArray = Array.from(new Uint8Array(buffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      });
  }

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  // const [clientKey, setClientKey] = useState('')

  async function getClientKey() {
    if (!isConnected) {
      connect()
    } else {
      const clientKey = await sha256Hash(address)
      return clientKey;
    }
  }

  const value = {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
    getClientKey,
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  return useContext(WebSocketContext);
};
