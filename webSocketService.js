class webSocketService {
    constructor(url) {
      this.connectionUrl = url;
      this.websocket = null;
    }
  
    connect(onMessage) {
      this.websocket = new WebSocket(this.connectionUrl);
  
      this.websocket.onopen = () => {
        // When connected, send a 'join' message to the server
        this.sendMessage({ command: 'join' });
      };
  
      this.websocket.onmessage = (event) => {
        // Handle incoming messages
        const response = JSON.parse(event.data);
        console.log('Response from server:', response);
        onMessage(response);
      };
  
      this.websocket.onclose = (event) => {
        console.log('WebSocket closed:', event);
      };
  
      this.websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }
  
    sendMessage(message) {
      if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
        this.websocket.send(JSON.stringify(message));
      }
    }
  
    disconnect() {
      if (this.websocket) {
        this.websocket.close();
      }
    }
  }
  
  export default webSocketService;