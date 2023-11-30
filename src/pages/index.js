import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const handleLogin = async (event) => {
    event.preventDefault();
   
    //login 
    router.push('/TablesPage');
  };

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
        <Link href="/signup">
          Don't have an account? Sign up
        </Link>
      </div>

     
      <div className="flex-grow flex justify-center items-center max-w-md">
      <div className="ml-auto">
        <Image
          src="/images/Group 291.svg"
          alt="Cards"
          width={500}
          height={500}
        />
        </div>
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
