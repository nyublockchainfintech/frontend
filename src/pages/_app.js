import '@/styles/globals.css';
import { WebSocketProvider } from '@/components/WebSocket';
import { WagmiConfig, createConfig } from 'wagmi'
import { goerli, mainnet } from '@wagmi/core/chains'
import { createPublicClient, http } from 'viem'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: goerli,
    transport: http()
  }),
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <WebSocketProvider>
        <Component {...pageProps} />
      </WebSocketProvider>
    </WagmiConfig>
  )
}
