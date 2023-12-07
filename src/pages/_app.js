import '@/styles/globals.css';
import { WebSocketProvider } from '@/components/WebSocket';

export default function App({ Component, pageProps }) {
  return (
    <WebSocketProvider>
      <Component {...pageProps} />
    </WebSocketProvider>
  )
}
