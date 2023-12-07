import React, { createContext, useContext, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

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

  const value = {
    sendJsonMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
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
