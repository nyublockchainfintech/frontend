import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white bg-opacity-30 text-white">
        <nav className="container mx-auto py-3 flex justify-between items-center">
          <Image src = "/images/logo.svg" alt="Logo" width={50} height={50}/>
          <div className="flex justify-center flex-grow space-x-20 py-2">
            <a href="/play" className="hover:text-gray-300 font-semibold text-2xl">PLAY</a>
            <a href="/friends" className="hover:text-gray-300 font-semibold text-2xl">FRIENDS</a>
            <a href="/profile" className="hover:text-gray-300 font-semibold text-2xl">PROFILE</a>
            <a href="/settings" className="hover:text-gray-300 font-semibold text-2xl">SETTINGS</a>
          </div>
        </nav>
      </header>
    );
}