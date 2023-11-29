import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const handleLogin = async (event) => {
    event.preventDefault();

    router.push('/TablesPage');

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-900 text-white p-4">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest">- Welcome to our Poker dApp -</p>
        <h1 className="text-4xl font-bold mt-2">NYU Blockchain & Fintech</h1>
        <p className="mt-2">NYU's community in blockchain & fintech</p>
      </div>
      <form className="flex flex-col items-center w-full max-w-xs" onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter your NYU email" 
          className="w-full px-4 py-2 text-black"
        />
        <button 
          type="submit" 
          className="w-full bg-white text-black px-4 py-2 mt-4"
        >
          Log in
        </button>
      </form>
      <Link href="/signup" className="text-white mt-4">
        Don't have an account? Sign up
      </Link>
      <div className="absolute right-0 top-0 mt-10 mr-10">
        <Image 
          src="/images/playing_cards.svg" 
          alt="Playing Cards" 
          width={150} 
          height={200} 
          className="drop-shadow-2xl"
        />
      </div>
    </div>
  )
}
